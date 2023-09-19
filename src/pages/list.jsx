import BeerUseCase from "../usecases/BeerUseCase";
import BeerRepository from "../repositories/BeerRepository"
import UserRepository from "../repositories/UserRepository"
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import Pagination from "../components/ui/Pagination";
import BeerRefinements from "../components/BeerRefinements";
import BeerList from "../components/BeerList";

export default function List() {
  const [response, setResponse] = useState({
    data: null,
    loading: true
  })

  useEffect(function(){
    async function fetchData() {
      const userRepository = new UserRepository();
      const beerRepository = new BeerRepository();
      const useCase = new BeerUseCase(beerRepository, userRepository);
      const data = await useCase.getAllBeers();

      try {
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('list.jsx - Error fetching beers:', error);
        setResponse({...data, loading: false})
      }
    }

    fetchData();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <Layout>
        <Heading title="Beer" />

        <div className="w-full flex justify-center">
          <Link href="/"
            className={`bg-gray text-yellow rounded-xl p-3 text-center hover:bg-gray_2 hover:text-white`}>Back to Collection</Link>
        </div>

        <BeerRefinements />

        <BeerList beers={response.data} loading={response.loading} />

        <Pagination />
    </Layout>
  )
}
