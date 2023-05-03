import React, { useState } from "react";
import shopdata from "./shopdata";
import "../Componets/shopstyles.css";

const Shop = () => {
  const [products, setProducts] = useState(shopdata);
  const [filternames, setfilternames] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  console.log(products);

  const handleSearch = (e) => {
    e.preventDefault();

    const filterednames = shopdata.filter((products) =>
      products.title
        .toLowerCase()
        .trim()
        .includes(filternames.toLowerCase().trim())
    );
    setProducts(filterednames);
    console.log(filternames);
  };

  const handleSort = (e) => {
    e.preventDefault();

    const sortedProducts = shopdata.sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  return (
    <div className="flex flex-col items-center gap-12 mt-12">
      <form className="flex flex-row gap-5 items-center">
        <label>name: </label>
        <input
          className="shadow rounded w-[11rem] py-2 px-3  "
          type="text"
          name="search"
          id="search"
          value={filternames}
          onChange={(e) => setfilternames(e.target.value)}
          placeholder="search name"
        />
        <button
          className="bg-rosy px-12 py-2 text-white text-[1rem] tracking-widest "
          onClick={handleSearch}
          type="submit"
        >
          click
        </button>

        <button
          className="bg-[green] px-12 py-2 text-white text-[1rem] tracking-widest "
          onClick={handleSort}
        >
          Sort by Price (
          {sortDirection === "asc" ? "Low to High" : "High to Low"})
        </button>
      </form>
      <h1>shopping</h1>
      <div className="grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-24">
        {products.map(({ title, price, category, id, image }) => {
          return (
            <article
              key={id}
              className="bg-whitegray text-center p-[1.3rem] flex flex-col gap-5 items-center rounded-[1.3rem] max-w-22 max-h-full shadow-shadownero hover:shadow-inner"
            >
              <div className=" w-[10rem] h-[10rem] mix-blend-multiply text-center">
                <img src={image} alt="noimage" />
              </div>
              <h3>{title.split(" ").slice(0, 2).join(" ")}</h3>

              <div className="flex justify-around gap-[4.5rem] text-[0.9rem]">
                <div className="flex flex-col item-start">
                  <span>price:</span>
                  <span className="font-bold">{price}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span>category:</span>
                  <span className="font-bold">{category}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
