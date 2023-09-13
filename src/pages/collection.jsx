
import { useEffect, useState } from "react";
import { fetchBeers } from "../api/BeerService";
import Layout from "../components/layout/Layout";
import Heading from "../components/ui/Heading";
import { Preloader } from "../components/ui/Preloader";
import BootleListItem from "../components/BootleListItem";

export default function Home() {
  const [response, setResponse] = useState({
      data: null,
      loading: true
  })

  useEffect(function(){
    async function fetchData() {
     /*  try {
        const data = await fetchBeerCollection();
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('Error fetching beers:', error);
        setResponse({...data, loading: false})
      } */
    }
  
    fetchData();
  }, []);

  function showBottles(bottles){
    return bottles.map( (bottle, key) => <BootleListItem key={bottle.id} bottle={bottle} onCollection={true}/>)
  }

  return (
    <Layout>
        <Heading title="My Collection" />

        <div className={`container mx-auto gap-9 px-5 pb-10
            sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
            { !response.loading ? showBottles(response.data) : Preloader }
        </div>
    </Layout>
  )
}
