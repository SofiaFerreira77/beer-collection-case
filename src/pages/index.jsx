import { useBeerContext } from '../data/context/BeerContext';
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import BeerList from "../components/BeerList";
import { IconRight } from "../components/ui/Icons"

export default function Collection() {
  const { collectionBeers } = useBeerContext();

  return (
    <Layout>
      <Heading title="Sip, Savor, and Collect:"
        subtitle="Your Beer Journey Begins Here!" />

      <Link href="/list"
        className={`w-fit mx-auto flex align-center justify-center bg-gray text-yellow rounded-xl p-3 text-center 
                mb-10 hover:bg-gray_2 hover:text-white gap-3`}>
        Add beer to Collection
        {IconRight}
      </Link>

      <BeerList beers={collectionBeers.data} loading={collectionBeers.loading} showCollectionOnly={true} />
    </Layout>
  )
}
