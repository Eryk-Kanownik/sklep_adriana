import OrderCard from "@/components/general/cards/OrderCard";
import { diploma } from "@/fonts/font-init";
import prisma from "@/lib/db/db";
import React from "react";

async function getOrders() {
  let orders = await prisma.order.findMany({
    include: { orderedProducts: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });
  return orders;
}

const page = async () => {
  const orders = await getOrders();

  let done = orders.filter((order) => order.isDone === true);
  let notDone = orders.filter((order) => order.isDone === false);

  return (
    <div className="px-4 flex flex-col lg:px-[20%] py-[90px] lg:py-32">
      <h1
        className={`${diploma.className} text-4xl mb-2 font-semibold text-red-700`}>
        Zamówienia
      </h1>
      <h2 className="mb-2 font-bold text-lg text-red-700">
        Niewykonane: {notDone.length}
      </h2>
      <div className="flex flex-col gap-4">
        {notDone.map(
          (
            {
              id,
              firstName,
              lastName,
              email,
              phoneNumber,
              place,
              buildingNumber,
              postalCode,
              isDone,
              isPayed,
              price,
              orderedProducts,
              createdAt,
            }: any,
            key: React.Key
          ) => (
            <OrderCard
              key={key}
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              place={place}
              buildingNumber={buildingNumber}
              postalCode={postalCode}
              orderedProducts={orderedProducts}
              isDone={isDone}
              isPayed={isPayed}
              price={price}
              createdAt={createdAt}
            />
          )
        )}
      </div>
      <h2 className="my-2 font-bold text-lg text-green-700">
        Wykonane: {done.length}
      </h2>
      <div className="flex flex-col gap-4">
        {done.map(
          (
            {
              id,
              firstName,
              lastName,
              email,
              phoneNumber,
              place,
              buildingNumber,
              postalCode,
              isDone,
              isPayed,
              price,
              orderedProducts,
              createdAt,
            }: any,
            key: React.Key
          ) => (
            <OrderCard
              key={key}
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              place={place}
              buildingNumber={buildingNumber}
              postalCode={postalCode}
              orderedProducts={orderedProducts}
              isDone={isDone}
              isPayed={isPayed}
              price={price}
              createdAt={createdAt}
            />
          )
        )}
      </div>
    </div>
  );
};

export default page;
