import Link from "next/link";

export default function Blog ({url, title, desc}) {
    return (
        
        <Link href={url} className="block p-6 max-w-sm bg-brown-secondary rounded-lg border border-white-200 shadow-md hover:bg-brown-secondary dark:bg-white-800 dark:border-white-700 dark:hover:bg-brown-secondary">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-white">{title}</h5>
            <p className="font-normal text-black-700 dark:text-white-400">{desc}</p>
        </Link>

    )
}
  

  