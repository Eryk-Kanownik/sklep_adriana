import createCategory from "@/lib/actions/create-category";
import React from "react";

const page = () => {
  return (
    <div className="px-4 lg:px-[20%] py-[90px] lg:py-32">
      <form action={createCategory}>
        <input type="text" name="category-name" />
        <button>Utwórz kategorie</button>
      </form>
    </div>
  );
};

export default page;
