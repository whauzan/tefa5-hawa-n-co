import { Card, HeroBanner } from "../components";
import { IoDiamondOutline } from "react-icons/io5";
import { client } from "../lib/client";
import Blog from "../components/Blog";

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
              product={product}
            />
          ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center mt-10">
        <h2 className="text-4xl font-Lora font-extrabold">Jewelry Blog</h2>
        <p className="mb-8">Know more about Jewelry</p>
        <div className="row-2 flex flex-wrap justify-center">
          <Blog
            img={"https://www.passionjewelry.co.id/uploads/cara-membersihkan-cincin-berlian-yang-aman-dan-benar-4690-2020-04-21-145403.peg"}
            url={"https://www.passionjewelry.co.id/news-detail/cara-membersihkan-cincin-berlian-yang-aman-dan-benar"}
            title={"Cara Membersihkan Cincin Berlian yang Aman dan Benar"}
            desc={"Tips merawat perhiasan anda agar awet tahan lama"}
          />
          <Blog
            img={"https://www.passionjewelry.co.id/uploads/langkah-tepat-memilih-berlian-524-2020-04-08-170713.jpg"}
            url={"https://www.passionjewelry.co.id/news-detail/langkah-tepat-memilih-berlian"}
            title={"Langkah Tepat Memilih Berlian"}
            desc={"Ketahui cara ini agar anda tidak menyesal dikemudian hari"}
          />
        </div>
          
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
