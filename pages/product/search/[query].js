import React from "react";
import { Card } from "../../../components";
import { client } from "../../../lib/client";
import { IoDiamondOutline } from "react-icons/io5";
import { useRouter } from "next/router";

export default function Search({ products }) {
  const { query } = useRouter().query;
  return (
    <div className="flex flex-col gap-y-12 mt-14 items-center text-center">
      <div className="flex flex-col gap-y-2 items-center text-brown-dark">
        <IoDiamondOutline className="w-7 h-7" />
        <h2 className="text-2xl md:text-3xl font-Lora font-extrabold">"{query}" <span className="text-brown-primary">({products.length} produk ditemukan)</span></h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-5 w-full">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = await client.fetch(`*[_type == "product"] {
    slug {
      current
    }
  }`);

  const paths = products.map((product) => ({
    params: { query: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { query } }) => {
  const products = await client.fetch(
    `*[_type == "product" && slug.current match '*${query}*']`
  );

  return {
    props: {
      products,
    },
  };
};
