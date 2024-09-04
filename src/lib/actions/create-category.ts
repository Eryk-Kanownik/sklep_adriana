"use server";

async function createCategory(formData: FormData) {
  let categoryName = formData.get("category-name");
  console.log(categoryName);
}

export default createCategory;
