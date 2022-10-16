import { Card, HeroBanner, Blog } from "../components";
import { IoDiamondOutline } from "react-icons/io5";
import { client } from "../lib/client";


export default function Home({ products, banners }) {
  return (
    <div>
      <HeroBanner banners={banners[0]} />
      <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
        <IoDiamondOutline className="w-7 h-7" />
        <h2 className="text-4xl font-Lora font-extrabold">Best Seller</h2>
        <p>Perhiasan terpopuler bulan ini</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-5 w-full">
        {products
          .filter((product) => product.bestseller)
          .map((product) => (
            <Card
              key={product._id}
              image={product.image}
              title={product.name}
              price={product.price}
            />
          ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
        <h2 className="text-4xl font-Lora font-extrabold">Jewelry Blog</h2>
        <p>Know more about Jewelry</p>
          
          
      </div>
      
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await client.fetch(`*[_type == "product"]`);
  const banners = await client.fetch(`*[_type == "banner"]`);
  return {
    props: {
      products,
      banners,
    },
  };
};
