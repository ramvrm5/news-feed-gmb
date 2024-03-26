import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  selectSource,
  selectInputDate,
  selectSearchInput,
} from "../reducer/filterSlice";

import NewsCard from "./NewsCard";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [articlesTemp, setArticlesTemp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let sourceFilter = useSelector(selectSource);
  let searchInput = useSelector(selectSearchInput);
  let selectInputDateFilter = useSelector(selectInputDate);

  const apiKeyN = process.env.REACT_APP_NEWSAPI;
  const apiKeyG = process.env.REACT_APP_THEGUARDIANS;
  const apiKeyNy = process.env.REACT_APP_NEWYORKTIMES;

  const apiUrls = [
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKeyN}`,
    `https://content.guardianapis.com/search?api-key=${apiKeyG}`,
    `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKeyNy}`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Reset error state on each fetch

      try {
        const responses = await Promise.all(
          apiUrls.map(async (url) => {
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error(
                `API request to ${url} failed with status ${response.status}`
              );
            }

            return await response.json();
          })
        );
        // console.log(responses);

        const mergedArr = [
          ...responses[0].articles.map((obj) => ({
            title: obj.title,
            date: moment(obj.publishedAt).format("YYYY MMMM Do"),
            description: obj.title,
            source: "OpenNews",
            url: obj.url,
            image: obj.urlToImage,
          })),
          ...responses[1].response.results.map((obj) => ({
            title: obj.webTitle,
            date: moment(obj.webPublicationDate).format("YYYY MMMM Do"),
            description: "",
            source: "The Guardian",
            url: obj.webUrl,
            image: "/The_Guardian.png",
          })),
          ...responses[2].results.map((obj) => ({
            title: obj.title,
            date: moment(obj.published_date).format("YYYY MMMM Do"),
            description: obj.abstract,
            source: "The New York Times",
            url: obj.url,
            image: obj.multimedia[0].url,
          })),
        ];

        setArticles(mergedArr);
        setArticlesTemp(mergedArr);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Create a single filtered array based on all filters
    const filteredArticles = articlesTemp.filter((article) => {
      return (
        // Source filter
        (sourceFilter === "all" || article.source === sourceFilter) &&
  
        // Search filter (case-insensitive)
        ((!searchInput ||
          (article.title.toLowerCase().includes(searchInput) ||
            article.description.toLowerCase().includes(searchInput) ||
            article.source.toLowerCase().includes(searchInput)))) &&
  
        // Date filter
        (!selectInputDateFilter ||
          selectInputDateFilter === "Invalid date" ||
          article.date === selectInputDateFilter)
      );
    });
  
    // Apply search term highlighting if needed
    const highlightedArticles = searchInput
      ? filteredArticles.map((article) => {
          const regex = new RegExp(searchInput, "gi");
          return {
            ...article,
            title: article.title.replace(
              regex,
              (match) => `<mark style="background:#ffaa0f; color:white;">${match}</mark>`
            ),
            description: article.description.replace(
              regex,
              (match) => `<mark style="background:#ffaa0f; color:white;">${match}</mark>`
            ),
            source: article.source.replace(
              regex,
              (match) => `<mark style="background:#ffaa0f; color:white;">${match}</mark>`
            ),
          };
        })
      : filteredArticles;
  
    // Update state with the final filtered and (potentially) highlighted articles
    setArticles(highlightedArticles);
  }, [sourceFilter, searchInput, selectInputDateFilter]);

  return (
    <div>
      {isLoading && <p>Loading news articles...</p>}
      {error && <p>Error: {error}</p>}

      {articles.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {articles.map((article, i) => (
            <NewsCard article={article} key={i} />
          ))}
        </div>
      ) : (
        <p>No news articles found.</p>
      )}
    </div>
  );
};

export default News;
