import React from "react";
import OrderedProduct from "./OrderedProduct";

interface IOrderCard {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  place: string;
  buildingNumber: string;
  postalCode: string;
  orderedProducts: Array<object>;
  isDone: boolean;
  isPayed: boolean;
  price: number;
  createdAt: Date;
}

const OrderCard: React.FC<IOrderCard> = ({
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
}) => {
  return (
    <div className="p-6 border-[1px]  flex flex-col rounded-sm">
      <div>
        <div className="mb-2 border-b-[1px] pb-2">
          <h2 className="text-xl sm:text-2xl font-bold ">
            Zamówienie nr: {id}
          </h2>
          <p className="text-gray-400 text-sm">
            Utworzone: {createdAt.toString()}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-gray-400 text-sm">Imię:</p>
            <p>{firstName}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Nazwisko:</p>
            <p>{lastName}</p>
          </div>{" "}
          <div>
            <p className="text-gray-400 text-sm">Email:</p>
            <p>{email}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Numer telefonu:</p>
            <p>{phoneNumber}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Miejscowość dostawy:</p>
            <p>{place}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Numer budynku:</p>
            <p>{buildingNumber}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Kod pocztowy:</p>
            <p>{postalCode}</p>
          </div>
        </div>
      </div>

      <h2 className="mt-2 font-bold">Zamówione produkty:</h2>
      <div className=" grid  sm:grid-cols-2 gap-2 mt-2 border-y-[1px] py-4">
        {orderedProducts.map(
          (
            { size, amount, product: { id, name, price } }: any,
            key: React.Key
          ) => (
            <OrderedProduct
              key={key}
              id={id}
              name={name}
              amount={amount}
              size={size}
            />
          )
        )}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h2 className="mt-2 font-bold text-lg ">Cena</h2>
          <p className="font-bold text-sm ">{price / 100} ZŁ</p>
        </div>
        <button className="border-2  px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 self-end">
          Wykonane
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
