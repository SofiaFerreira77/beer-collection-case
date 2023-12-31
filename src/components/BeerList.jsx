import BeerItem from "./BeerItem"
import {Preloader} from "./ui/Preloader"

export default function BeerList(props) {
    const { beers, loading } = props;
    return (
        <div className={`container mx-auto gap-9 px-5 pb-10
            sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            {!loading && beers?.length > 0 ? 
                beers.map((beer, index) => <BeerItem key={index} beer={beer} showCollectionOnly={props.showCollectionOnly} />)
                :
                <p className="w-full text-center">The Journey Awaits!</p>
            }

            {loading ? <Preloader/> : ''}
        </div>
    )
}