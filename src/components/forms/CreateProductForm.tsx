"use client";
import React, { useEffect, useState } from "react";
import CreateSizeCard from "../general/cards/CreateSizeCard";
import ImageCardForForm from "../general/cards/ImageCardForForm";
import sortSizes from "@/lib/sort-sizes/sort-sizes";
import createProduct from "@/lib/actions/create-product";

const CreateProductForm = () => {
  const [data, setData] = useState<IData>({
    name: "",
    description: "",
  });
  const [category, setCategory] = useState<string>("pants");
  const [sizes, setSizes] = useState<Array<object>>([]);
  const [price, setPrice] = useState(0);
  const [availibleSizes, setAvailibleSizes] = useState<null | React.ReactNode>(
    null
  );

  //size form
  const [sizeData, setSizeData] = useState<ISizeData>({
    size: null,
    amount: null,
  });

  useEffect(() => {
    setSizes([]);
    switch (category) {
      case "pants": {
        setSizeData((prev) => ({ ...prev, size: "28" }));
        setAvailibleSizes(
          <>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
          </>
        );
        break;
      }
      case "t-shirt": {
        setSizeData((prev) => ({ ...prev, size: "XS" }));
        setAvailibleSizes(
          <>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">XXL</option>
            <option value="3XL">3XL</option>
          </>
        );
        break;
      }
      default: {
        setAvailibleSizes(null);
        break;
      }
    }
  }, [category]);

  const addSize = () => {
    //if size already exist?
    let isInArray = sizes.map((s: any) => s.size).includes(sizeData.size);
    if (isInArray) {
      let index = sizes.map((s: any) => s.size).indexOf(sizeData.size);
      let newArr = sizes;
      newArr[index] = sizeData;
      //setData((prev) => ({ ...prev, sizes: [...newArr] }));
      setSizes([...newArr]);
    } else {
      let full = [...sizes, sizeData];
      //with sort
      let toSave = sortSizes(category, full);
      setSizes(toSave!);
    }
  };

  const deleteSize = (size: string) => {
    setSizes((prev) => prev.filter((s: any) => s.size !== size));
  };

  const updateSizes = (size: string, amount: number) => {
    let index = sizes.map((s: any) => s.size).indexOf(size);
    let newArr = sizes;
    newArr[index] = { ...newArr[index], amount };
    setSizes([...newArr]);
  };

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let isDisabled =
    data.name === "" ||
    data.description === "" ||
    sizes.length === 0 ||
    category === null ||
    price === 0
      ? true
      : false;

  return (
    <form
      className="flex flex-col gap-2"
      action={(formData: FormData) =>
        createProduct({ ...data, sizes, category, price })
      }>
      <div className="flex flex-col">
        <h2 className="my-4 font-bold text-xl">Dane</h2>
        <label className="mb-1">Nazwa produktu</label>
        <input
          type="text"
          className="p-2 rounded-sm bg-black  border-2"
          placeholder="Nazwa produktu..."
          name="name"
          onChange={onChangeText}
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Kategoria</label>
        <select
          className="p-2 rounded-sm bg-black border-2 w-[200px]"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="pants">
          <option value="pants">Spodnie</option>
          <option value="t-shirt">Koszulka</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1">Opis produktu</label>
        <textarea
          className="p-2 rounded-sm bg-black  border-2"
          placeholder="Opis produktu..."
          rows={5}
          onChange={onChangeText}
          name="description"
        />
      </div>
      <div className="flex flex-col">
        <div>
          <h2 className="my-4 font-bold text-xl">Rozmiary</h2>
          <div className="grid grid-cols-[100px,100px] border-y-2 p-2">
            <p className="text-center">Rozmiar</p>
            <p className="text-center">Ilość</p>
          </div>
          <div>
            {sizes.map((s: any, key: React.Key) => (
              <CreateSizeCard
                key={key}
                size={s.size}
                amount={s.amount}
                deleteSize={deleteSize}
                updateSizes={updateSizes}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-4 justify-end">
            <select
              name="size"
              className="p-2 rounded-sm bg-black  border-2 w-16 text-center"
              onChange={(e) =>
                setSizeData((prev) => ({ ...prev, size: e.target.value }))
              }>
              {availibleSizes}
            </select>
            <input
              name="amount"
              type="text"
              className="p-2 rounded-sm bg-black  border-2 w-16 text-center"
              placeholder="Ilość"
              onChange={(e) =>
                setSizeData((prev) => ({
                  ...prev,
                  amount: parseInt(e.target.value),
                }))
              }
            />
            <button
              onClick={addSize}
              type="button"
              className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200">
              Dodaj rozmiar
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-4 font-bold text-xl">Cena</h2>
        <input
          onChange={(e) => setPrice(parseInt(e.target.value))}
          type="number"
          placeholder="Cena (w groszach)..."
          defaultValue={price}
          className="p-2 rounded-sm bg-black  border-2  "
        />
      </div>
      <div>
        <h2 className="my-4 font-bold text-xl">Zdjęcia</h2>
        <label
          htmlFor="upload"
          className="border-2 px-4 py-2 rounded-sm cursor-pointer font-bold hover:border-red-700  duration-200">
          Prześlij zdjęcia
        </label>
        <input id="upload" type="file" className="hidden" />
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-4">
          <ImageCardForForm order={1} />
          <ImageCardForForm order={2} />
          <ImageCardForForm order={3} />
          <ImageCardForForm order={4} />
          <ImageCardForForm order={5} />
        </div>
      </div>
      <button
        disabled={isDisabled}
        type="submit"
        className="mt-4 border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200 disabled:border-gray-700 disabled:text-gray-700">
        Utwórz
      </button>
    </form>
  );
};

interface ISizeData {
  size: null | string;
  amount: null | number;
}

interface IData {
  name: string;
  description: string;
}

export default CreateProductForm;
