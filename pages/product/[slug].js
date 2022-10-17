import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Card, Counter } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Head from "next/head";

export default function ProductDetails({ product, products }) {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decrementQty, incrementQty, qty, addToCart, setShowCart } =
    useStateContext();

  const handleBuyNow = () => {
    addToCart(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <Head>
        <title>Product {name} - HaWa & co.</title>
      </Head>
      <div className="flex flex-wrap md:flex-nowrap gap-10 mt-14 text-brown-primary">
        <div className="flex flex-col mx-auto">
          <div className="bg-brown-light hover:bg-brown-primary transition-all rounded-2xl cursor-pointer w-[330px] h-[330px] md:w-[400px] md:h-[400px]">
            <img src={urlFor(image && image[index])} />
          </div>
          <div className="flex gap-3 mt-5">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={`bg-brown-light hover:bg-brown-primary transition-all rounded-lg w-16 h-16 cursor-pointer`}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold">{name}</h1>
          <div className="flex flex-row items-center text-brown-dark">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="ml-2">(20)</p>
          </div>
          <h4 className="mt-3 font-semibold text-lg">Detail:</h4>
          <p className="text-brown-primary fos mt-3">{details}</p>
          <p className="text-2xl font-semibold mt-7 text-brown-dark">
            Rp. {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))+/g, "$1.")}
          </p>
          <div className="flex items-center gap-5 mt-6">
            <h4 className="font-semibold text-lg">Jumlah:</h4>
            <Counter
              quantity={qty}
              increase={incrementQty}
              decrease={decrementQty}
            />
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <button
              className="border border-brown-dark text-brown-dark md:text-lg rounded-md px-4 py-2 md:px-6 hover:scale-110 transition-transform"
              onClick={() => addToCart(product, qty)}
            >
              Tambah ke Keranjang
            </button>
            <button
              className="rounded-md px-4 py-2 md:px-6 bg-brown-dark md:text-lg text-brown-light hover:scale-110 transition-transform"
              onClick={handleBuyNow}
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-center m-12 text-2xl font-semibold text-brown-dark">
          Anda juga mungkin suka
        </h2>
        <div className="marquee">
          <div className="flex justify-center gap-4 mt-5 track">
            {products
              .filter((item) => product.name !== item.name)
              .map((item) => (
                <Card key={item._id} product={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const products = await client.fetch(`*[_type == "product"] {
    slug {
      current
    }
  }`);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );

  const products = await client.fetch(
    `*[_type == "product" && category == '${product.category}']`
  );
  return {
    props: {
      product,
      products,
    },
  };
};
