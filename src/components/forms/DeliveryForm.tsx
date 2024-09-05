"use client";
import createOrder from "@/lib/actions/create-order";
import useCartStore, { IUseCartStore } from "@/state/cart";
import React from "react";

const DeliveryForm = () => {
  const { cart } = useCartStore<IUseCartStore>((state) => state);
  return (
    <form action={(formData: FormData) => createOrder(formData, cart)}>
      {" "}
      <h2 className="my-4 font-bold text-xl">Dane</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Imię</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Imię..."
            name="first-name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Nazwisko</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Nazwisko..."
            name="last-name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Email..."
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Miejscowość dostawy</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Miejscowość..."
            name="place"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Nr budynku</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Nr budynku..."
            name="building-number"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Kod pocztowy</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Kod pocztowy..."
            name="postal-code"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Numer telefonu</label>
          <input
            type="text"
            className="p-2 rounded-sm bg-black  border-2"
            placeholder="Numer telefonu..."
            name="phone-number"
          />
        </div>
        <div>
          <h2 className="my-4 font-bold text-xl">Sposób dostawy</h2>
          <div className="flex items-center gap-2">
            <input type="radio" name="delivery" value="Kurier Pobranie" />
            <label className="mb-1">Kurier pobranie</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="delivery" value="Paczkomat" />
            <label className="mb-1">Paczkomat</label>
          </div>
        </div>
      </div>
      <button className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200">
        Przejdź do płatności
      </button>
    </form>
  );
};

export default DeliveryForm;
