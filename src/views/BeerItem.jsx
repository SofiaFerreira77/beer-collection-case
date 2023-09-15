import { useState } from "react";
import Link from "next/link";
import {IconLeft, IconStared} from "./ui/Icons"

export default function BeerItem(props) {

  const [isFavorite, setFavorite] = useState(false)

  // Function to add a beer to the wishlist
  function addToCollection(beerId) {
    const collection = JSON.parse(localStorage.getItem('collection')) || [];
    collection.push(beerId);
    localStorage.setItem('collection', JSON.stringify(collection));
    setFavorite(true);
  };

  return (
    <div className="relative" key={props.bottle.id}>

        { !props.isOnCollection ?
            <button id={props.bottle.id} onClick={() => addToCollection(props.bottle.id)} 
                    className={`absolute z-20 right-2 top-2 p-2 text-2xl bg-white_2 text-gray_2 rounded-full
                          transition-all hover:text-brown hover:bg-white`}>
                    {isFavorite ? IconStared : IconLeft}
            </button>
          :
          ''
        }

        <Link href={`/${props.bottle.id}`}
            className="block group h-[460px] w-100
              bg-brown_4 drop-shadow-lg rounded-xl
              relative z-0 top-0 mb-4
              transition-all hover:drop-shadow-2xl">
                
            <div className={`flex justify-center 
                            relative z-10
                            h-[340px] sm:h-[465px] p-3
                          bg-white rounded-xl overflow-hidden drop-shadow-lg
                          sm:transition-all sm:group-hover:h-[340px]`}>
                <img src={props.bottle.image_url} alt={props.bottle.tagline} className="max-h-[100%]"/>
            </div>

            <div className={`relative sm:absolute bottom-0 left-0 right-0 z-0 
                            flex justify-center items-center gap-2
                            p-2 h-28`}>
                <h3 className={`w-1/2 font-semibold text-md text-center text-white_2`}>{props.bottle.name}</h3>
                <p className={`w-1/2 text-sm text-center`}>{props.bottle.tagline}</p>
            </div>
        </Link>
    </div>
  )
}
