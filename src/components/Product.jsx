import Link from "next/link";

export default function Product(props) {
  return (
    <Link key={props.key} href="/{product.id}" 
        className="w-[300px] h-[490px] p-6
        bg-white_2 drop-shadow-lg rounded-xl
        relative z-0 transition-all top-0 hover:-top-3 hover:drop-shadow-2xl">
            
        <div className="bg-white h-[300px] rounded-xl overflow-hidden flex justify-center">
            <img src={props.product.image_url} alt="" className="max-h-[100%]"/>
        </div>

        <h4>{props.product.name}</h4>
        <p>{props.product.tagline}</p>
    </Link>
  )
}