import { useRouter } from "next/router";
import BeerUseCase from "../usecases/BeerUseCase";
import BeerRepository from "../repositories/BeerRepository"
import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BeerDetail from "../components/BeerDetail";
import { Preloader } from "../components/ui/Preloader";
import BeerList from "../components/BeerList";
import { useBeerContext } from "../data/context/BeerContext";
import Heading from "../components/ui/Heading";

export default function Detail() {
  const { allBeers } = useBeerContext();
  const router = useRouter();
  const bottle = router.query.bottle;

  const [response, setResponse] = useState({
    data: null,
    loading: true
  })

  useEffect(() => {
    async function fetchData() {
      const beerRepository = new BeerRepository();
      const useCase = new BeerUseCase(beerRepository);
      const data = await useCase.getBeerById(bottle);

      try {
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('Error fetching beers:', error);
        setResponse({ loading: false })
      }
    }

    fetchData();
  }, [bottle]);

  return (
    <Layout>
      <div className="container mx-auto relative flex justify-start items-start gap-3 text-xs my-5">
        {!response.loading ?
          response.data.map((bottleDetail, index) => <BeerDetail key={index} bottle={bottleDetail} />)
          :
          <Preloader />
        }
      </div>

      <div className="container mx-auto flex justify-between gap-5 py-10 px-6 mb-14">
        <Link href="/"
          className={`bg-gray_2 text-gray rounded-xl p-3 text-center hover:bg-gray hover:text-white`}>Back to Collection</Link>

        <Link href="/list"
          className={`bg-gray text-yellow rounded-xl p-3 text-center hover:bg-gray_2 hover:text-white`}>Show All</Link>
      </div>

      <Heading title="Other beers" />
      <BeerList beers={allBeers.data} loading={allBeers.loading} showCollectionOnly={false} />
    </Layout>
  )
}