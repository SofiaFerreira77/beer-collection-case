import { useRouter } from "next/router";
import BeerUseCase from "../usecases/BeerUseCase";
import BeerRepository from "../repositories/BeerRepository"

import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BeerDetail from "../components/BeerDetail";
import { Preloader } from "../components/ui/Preloader";

export default function Detail() {
  const router = useRouter();

  const [response, setResponse] = useState({
      data: null,
      loading: true
  })
  
  useEffect(() => {
    async function fetchData() {
      const beerRepository = new BeerRepository();
      const useCase = new BeerUseCase(beerRepository);
      const data = await useCase.getBeerById(router.query.bottle);

      try {
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('Error fetching beers:', error);
        setResponse({loading: false})
      }
    }
  
    fetchData();
  }, []);

  function showDetail(details){
    console.log('showDetail')
    return details.map( (bottleDetail, key) => <BeerDetail key={bottleDetail.id} bottle={bottleDetail} />)
  }

  return (
    <Layout>
      <div className="w-full flex justify-center">
          <Link href="/"
            className={`bg-gray text-yellow rounded-xl p-3 text-center`}>Back to Collection</Link>

          <Link href="/list"
            className={`bg-gray text-yellow rounded-xl p-3 text-center`}>Show All</Link>
      </div>

      <div className="container mx-auto relative flex justify-center items-center gap-3">
          { !response.loading ? showDetail(response.data) : Preloader }  
      </div>
    </Layout>
  )
}