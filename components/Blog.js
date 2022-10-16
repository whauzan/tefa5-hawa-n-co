

export default function Blog ({img, url, title, desc}) {
    return (
       <div className="mb-8 mx-5 max-w-sm">
        <a href={url} className=" transition block p-6 rounded-lg bg-black-secondary border border-brown-secondary shadow-md hover:bg-brown-secondary ">
            <img src={img} className="rounded-lg mb-4 object-cover h-48 w-96"/>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-brown-200 hover:text-white-700">{title}</h5>
            <p className="font-normal text-black-700 ">{desc}</p>
        </a>
       </div>
        

    )
}
  

  