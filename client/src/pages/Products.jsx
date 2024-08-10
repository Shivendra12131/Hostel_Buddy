import React, { useState } from "react";
import Filter from "../components/Filter";
import ProductsContainer from "../components/ProductsContainer";
import Header from "../assets/Header.png";
import { Button } from "@material-tailwind/react";
import "../components/styles/bg-style.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search)

  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-96 bg-banner flex items-center">
        <div className="flex flex-col items-start ml-20">
          <h1 className="text-white text-5xl font-extrabold mb-12 w-96 text-center justify-center mx-12 flex">
            To Help Or To Be Helped
          </h1>
          <div className="flex w-[500px] max-w-lg h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-16 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-xl text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search by products, owner, hostels..."
              onChange={(e)=> setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <button
              className="mt-6 w-60 px-10 py-3 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-purple-400 focus:outline-none"
              onClick={() => navigate("/lend")}
            >
              Lend Your Stuff
            </button>
            <button className="mt-6 w-60 px-10 py-3 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-purple-400 focus:outline-none">
              Borrow Stuff
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-x-16 px-5 py-8 bg-gray-100">
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <ProductsContainer
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
		  search={search}
        />
      </div>
    </>
  );
};

export default Products;
