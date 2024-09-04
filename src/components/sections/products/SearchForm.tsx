"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== "") {
      router.push(`/products?search=${search}`);
    } else {
      router.push(`/products`);
    }
  };

  return (
    <form className="flex gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        className="p-2 rounded-sm bg-black text-white border-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200">
        Szukaj
      </button>
    </form>
  );
};

export default SearchForm;
