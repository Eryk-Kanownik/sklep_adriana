"use server";
import prisma from "../db/db";

async function createOrder(formData: FormData, cart: Array<object>) {
  let price = cart
    .map((item: any) => item.product.price * item.count)
    .reduce((total, value) => total + value);

  console.log(price);

  await prisma.order.create({
    data: {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      place: formData.get("place") as string,
      buildingNumber: formData.get("building-number") as string,
      postalCode: formData.get("postal-code") as string,
      phoneNumber: formData.get("phone-number") as string,
      price,
      isPayed: false,
      isDone: false,
      orderedProducts: {
        createMany: {
          data: cart.map((item: any) => {
            return {
              productObjectId: item.product.id,
              size: item.product.size,
              amount: item.count,
            };
          }),
        },
      },
    },
  });
}

export default createOrder;
