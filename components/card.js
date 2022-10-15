import { useRouter } from "next/router";
import { urlFor } from "../lib/client";

const Card = ({ product: { name, image, price, slug } }) => {
  const router = useRouter();

  return (
    <div
      className="max-w-xs text-center m-4 p-6 border border-brown-primary shadow-md shadow-brown-secondary rounded-md hover:scale-105 transition-all cursor-pointer"
      onClick={() => router.push(`/product/${slug.current}`)}
    >
      <div className="w-56">
        <img
          src={urlFor(image && image[0])}
          width={1080}
          height={1080}
          alt={name}
        />
      </div>
      <h1 className="font-semibold text-lg">{name}</h1>
      <h3 className="text-base">
        Rp. {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))+/g, "$1.")}
      </h3>
    </div>
  );
};

export default Card;
