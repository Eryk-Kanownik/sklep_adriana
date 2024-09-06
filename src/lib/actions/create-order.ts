"use server";
import Stripe from "stripe";
import prisma from "../db/db";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function createOrder(formData: FormData, cart: Array<object>) {
  const price = cart
    .map((item: any) => item.product.price * item.count)
    .reduce((total, value) => total + value);
  let items = [
    ...cart.map((item: any) => ({
      price_data: {
        currency: "pln",
        product_data: {
          name: item.product.name,
        },
        unit_amount: item.product.price,
      },
      quantity: item.count,
    })),
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/canceled`,
  });

  //save order to database
  const order = await prisma.order.create({
    data: {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      place: formData.get("place") as string,
      buildingNumber: formData.get("building-number") as string,
      postalCode: formData.get("postal-code") as string,
      phoneNumber: formData.get("phone-number") as string,
      isPayed: false,
      stripeId: session.id,
      price,
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

  redirect(session.url!);
}

export default createOrder;
