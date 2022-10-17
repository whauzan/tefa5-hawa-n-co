import Head from "next/head";
import React, { useEffect, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { Card } from "../components";
import { client } from "../lib/client";

export default function Collection({ products }) {
  const rawProducts = products;
  const [productsState, setProductsState] = useState(rawProducts);
  const [filterList, setFilterList] = useState([
    {
      name: "Ring",
      active: false,
    },
    {
      name: "Bracelet",
      active: false,
    },
    {
      name: "Necklace",
      active: false,
    },
  ]);

  useEffect(() => {
    if (filterList.filter((filter) => filter.active).length > 0) {
      setProductsState(
        rawProducts.filter((product) =>
          filterList
            .filter((filter) => filter.active)
            .map((filter) => filter.name.toLowerCase())
            .includes(product.category.toLowerCase())
        )
      );
      return;
    }
    setProductsState(rawProducts);
  }, [filterList]);

  return (
    <>
      <Head>
        <title>Collection - HaWa & co.</title>
      </Head>
      <div className="flex flex-col gap-y-12 mt-14 items-center">
        <div className="flex flex-col gap-y-2 items-center text-brown-dark">
          <IoDiamondOutline className="w-7 h-7" />
          <h2 className="text-4xl font-Lora font-extrabold">Collection</h2>
        </div>
        <div className="flex flex-row gap-x-5 md:gap-x-20 text-brown-dark text-lg">
          {filterList.map((filter, index) => (
            <button
              className={`border border-brown-dark px-5 py-1 rounded-lg ${
                filter.active
                  ? "bg-brown-dark text-white"
                  : "hover:bg-brown-dark hover:text-brown-light transition-all"
              }`}
              key={index}
              onClick={() =>
                setFilterList(
                  filterList.map((item) => {
                    if (item.name === filter.name) {
                      return {
                        ...item,
                        active: !item.active,
                      };
                    }
                    return item;
                  })
                )
              }
            >
              {filter.name}
            </button>
          ))}
        </div>
        {productsState.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 mb-5 w-full">
            {productsState.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mb-5">
            <h2 className="text-4xl font-Lora font-extrabold">No Product</h2>
            <p>There is no product in this category</p>
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await client.fetch(`*[_type == "product"]`);
  return {
    props: {
      products,
    },
  };
};
