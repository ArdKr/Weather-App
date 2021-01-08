import React from "react";

import Input from "../Input";
import Button from "../Button";

const SearchBar = ({ switchSearchBar }) => {
  return (
    <div className="w-full h-full bg-blue text-gray-dark absolute top-0 left-0 z-50 p-8 px-12 md:px-20">
      <div className="text-white text-lg w-full text-right">
        <i
          className="fas fa-times cursor-pointer"
          onClick={switchSearchBar}
        ></i>
      </div>

      <div className="search-input flex w-full justify-between mt-16 gap-5">
        <div className="flex-grow">
          <Input
            placeholder="search location"
            icon="search"
            fullHeight={true}
          />
        </div>
        <div className="flex">
          <Button>Search</Button>
        </div>
      </div>

      <div className="search-results flex flex-col mt-20 group">
        <div className="result-item transition-all text-gray text-normal px-5 py-9 cursor-pointer w-full border-light border-transparent hover:border-gray flex justify-between items-center">
          London
          <div className="icon transform scale-0 group-hover:scale-100 transition-all">
            <i className="fas fa-chevron-right "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
