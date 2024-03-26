import React, { useEffect, useState } from "react";

import SearchInputFilter from "./SearchInputFilter";
import InputDateFilter from "./InputDateFilter";
import SourceFilter from "./SourceFilter";

const Header = () => {


  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 py-2 bg-gray-200 rounded-md">
    
      <div className="mr-4 order-0 md:order-1">
        <SourceFilter />
      </div>

      <div className="flex-grow order-1 md:order-0">
        <SearchInputFilter />
      </div>

      <div className="ml-4 order-2">
        <InputDateFilter />
      </div>
    </div>
  );
};

export default Header;
