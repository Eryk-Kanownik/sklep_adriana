import React from "react";

const SearchForm = () => {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        className="p-2 rounded-sm bg-black text-red-700 border-2"
      />
      <button className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200">
        Szukaj
      </button>
    </form>
  );
};

export default SearchForm;
