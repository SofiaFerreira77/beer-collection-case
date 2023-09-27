import { useBeerContext } from '../data/context/BeerContext';
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import Pagination from "../components/ui/Pagination";
import BeerRefinements from "../components/BeerRefinements";
import BeerList from "../components/BeerList";
import { IconLeft } from "../components/ui/Icons"

export default function List() {

  const { allBeers } = useBeerContext();

  return (
    <Layout>
      <Heading title="All Beers"
        subtitle="Your Beer Journey Begins Here!" />

      <Link href="/"
        className={`w-fit mx-auto flex align-center justify-center bg-gray text-yellow rounded-xl p-3 text-center 
                mb-10 hover:bg-gray_2 hover:text-white gap-3`}>
        {IconLeft}
        Back to Collection
      </Link>

      <BeerRefinements />

      <BeerList beers={allBeers.data} loading={allBeers.loading} showCollectionOnly={false} />

      <Pagination />
    </Layout>
  )
}
