import BeerUseCase from "../usecases/BeerUseCase";
import BeerRepository from "../repositories/BeerRepository"
import UserRepository from "../repositories/UserRepository"
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import BeerList from "../components/BeerList";

export default function Collection() {
  const [response, setResponse] = useState({
      data: null,
      loading: true
  })

  useEffect(function(){
    async function fetchData() {
      const userRepository = new UserRepository();
      const beerRepository = new BeerRepository();
      const useCase = new BeerUseCase(beerRepository, userRepository);
      const data = await useCase.getBeerCollection();

      try {
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('index.jsx - Error fetching beers:', error);
        setResponse({
          ...data, 
          loading: false
        })
      }
    }
  
    fetchData();
  }, []);

  return (
    <Layout>
        <Heading title="My Collection" />

        <div className="w-full flex justify-center">
          <Link href="/list"
            className={`bg-gray text-yellow rounded-xl p-3 text-center mb-6 hover:bg-gray_2 hover:text-white`}>Add beer to Collection</Link>
        </div>

        <BeerList beers={response.data} loading={response.loading} />
    </Layout>
  )
}
