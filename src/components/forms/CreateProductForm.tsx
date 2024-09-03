"use client";
import React, { useEffect, useState } from "react";

const CreateProductForm = () => {
  const [category, setCategory] = useState<null | string>("pants");
  const [sizes, setSizes] = useState([]);

  const [availibleSizes, setAvailibleSizes] = useState<null | React.ReactNode>(
    null
  );

  useEffect(() => {
    switch (category) {
      case "pants": {
        setAvailibleSizes(
          <>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            <option>32</option>
            <option>33</option>
            <option>34</option>
            <option>35</option>
            <option>36</option>
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

  console.log(category);

  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label>Nazwa produktu</label>
        <input
          type="text"
          className="p-2 rounded-sm bg-black text-red-700 border-2"
          placeholder="Nazwa produktu..."
        />
      </div>
      <div className="flex flex-col">
        <label>Kategoria</label>
        <select
          className="p-2 rounded-sm bg-black  border-2 w-[200px]"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="pants">
          <option value="pants">Spodnie</option>
          <option value="t-shirt">Koszulka</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Opis produktu</label>
        <textarea
          className="p-2 rounded-sm bg-black text-red-700 border-2"
          placeholder="Opis produktu..."
          rows={5}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <select className="p-2 rounded-sm bg-black text-red-700 border-2 w-16 text-center">
            {availibleSizes}
          </select>
          <input
            type="text"
            className="p-2 rounded-sm bg-black text-red-700 border-2 w-16 text-center"
            placeholder="Ilość"
          />
          <button
            type="button"
            className="border-2 px-4 py-2 rounded-sm font-bold hover:border-red-700  duration-200">
            Dodaj rozmiar
          </button>
        </div>
        <div>
          <h2>Rozmiary</h2>
          <div>
            {sizes.map((s) => (
              <p>{s}</p>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProductForm;
