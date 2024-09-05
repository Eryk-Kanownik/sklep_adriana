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
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button className="border-[1px] px-4 py-1 rounded-sm text-sm font-medium hover:border-red-700  duration-200">
        Szukaj
      </button>
    </form>
  );
};

export default SearchForm;
