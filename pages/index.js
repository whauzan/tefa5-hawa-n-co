import { HeroBanner } from "../components";
import { IoDiamondOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="flex flex-col items-center justify-center gap-y-2 text-brown-dark text-center">
        <IoDiamondOutline className="w-7 h-7" />
        <h2 className="text-4xl font-Lora font-extrabold">Best Seller</h2>
        <p>Perhiasan terpopuler bulan ini</p>
      </div>
    </div>
  );
}
