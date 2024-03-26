import React from "react";

const NewsCard = ({ article, i }) => {
  return (
    <div
      key={i}
      className={`max-w-60 md:w-1/3 lg:w-${Math.floor(
        100 / 3
      )}% bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 my-2 mx-2`}
    >
      <img
        className="w-full h-48 object-cover"
        src={article.image}
        alt={article.image}
      />
      <div className="p-4 flex flex-col justify-between">
        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm font-medium">
            {article.date}
          </span>
          <span className="ml-2 text-gray-700 text-sm font-medium"  dangerouslySetInnerHTML={{__html:article.source}}>
          </span>
        </div>
        <h3 className="text-lg font-medium mb-2 hover:text-blue-500 transition-all duration-300" dangerouslySetInnerHTML={{__html:article.title}}></h3>
        <p className="text-gray-700 mb-2 leading-loose" dangerouslySetInnerHTML={{__html: article.description}}></p>
        <a
          href={article.url}
          target="_blank"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium underline"
        >
          Read More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
