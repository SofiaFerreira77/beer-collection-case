import Link from "next/link";

export default function BootleListItem(props) {
  return (
    <Link key={props.bottle.id} href={`/${props.bottle.id}`}
        className="group w-[90%] md:w-[40%] lg:w-[30%] h-[465px]
        bg-brown_4 drop-shadow-lg rounded-xl
        relative z-0 
        transition-all top-0 hover:drop-shadow-2xl">
            
        <div className="relative z-10 bg-white h-full group-hover:h-[340px] transition-all p-3 drop-shadow-lg rounded-xl overflow-hidden flex justify-center">
            <img src={props.bottle.image_url} alt={props.bottle.tagline} className="max-h-[100%]"/>
        </div>

        <div className={`
                absolute bottom-0 left-0 right-0 z-0 h-36 p-4 flex justify-center items-center gap-3 flex-1`}>
            <h3 className={`font-semibold text-xl text-center`}>{props.bottle.name}</h3>
            <p className={`text-sm text-center`}>{props.bottle.tagline}</p>
        </div>
    </Link>
  )
}
