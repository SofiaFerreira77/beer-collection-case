import { useBeerContext } from '../data/context/BeerContext';
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import Pagination from "../components/ui/Pagination";
import BeerRefinements from "../components/BeerRefinements";
import BeerList from "../components/BeerList";

export default function List() {

  const { allBeers } = useBeerContext();

  return (
    <Layout>
      <Heading title="Beer" />

      <div className="w-full flex justify-center">
        <Link href="/"
          className={`bg-gray text-yellow rounded-xl p-3 text-center hover:bg-gray_2 hover:text-white`}>Back to Collection</Link>
      </div>

      <BeerRefinements />

      <BeerList beers={allBeers.data} loading={allBeers.loading} showCollectionOnly={false} />

      <Pagination />
    </Layout>
  )
}
