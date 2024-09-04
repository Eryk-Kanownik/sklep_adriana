"use server";

import prisma from "../db/db";

async function createProduct(data: any) {
  await prisma.productObject.create({
    data: {
      name: data.name,
      description: data.description,
      category: data.category,
      price: data.price,
      sizes: {
        createMany: {
          data: [...data.sizes],
        },
      },
    },
  });
}

export default createProduct;
