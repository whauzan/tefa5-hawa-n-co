import Image from "next/image";
import react from "react";

export default function CardBio ({image, name, desc})  {
    <div class=" flex w-[35rem] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md bg-brown-secondary">
        <div className="my-8 mx-10  ">
              <img className=" rounded-full w-80" src={image}/>
              <div><h5 className="mt-2 text-xl font-medium dark:text-white">{name}</h5></div>
        </div>
        
        <div className="mt-6">
        
          <p className="dark:text-white m-4">
            {desc}
          </p>
        </div>
        
      </div>


}
