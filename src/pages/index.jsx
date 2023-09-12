import { useEffect, useState } from "react";
import { fetchBeers } from "./api/InterfacePunkApi";

import Layout from "../components/layout/Layout"
import BootleListItem from "../components/BootleListItem";
import BootleListRefinements from "../components/BootleListRefinements";
import { Preloader } from "../components/ui/Preloader";

export default function Home() {
  const [response, setResponse] = useState({
      data: null,
      loading: true
  })

  useEffect(function(){
    async function fetchData() {
      try {
        const data = await fetchBeers();
        setResponse({
          data: data,
          loading: false
        })
      } catch (error) {
        console.error('Error fetching beers:', error);
        setResponse({...data, loading: false})
      }
    }
  
    fetchData();
  }, []);

  function showBottles(bottles){
    return bottles.map((bottle, key) => <BootleListItem key={bottle.id} bottle={bottle}/>)
  }

  return (
    <Layout>
      <div className={`
          container mx-auto
          flex flex-col justify-center items-center gap-3`}
          >
          <BootleListRefinements />

          <div className={`flex flex-wrap justify-center items-center gap-9 pb-10`}>
              { !response.loading ? showBottles(response.data) : Preloader }
          </div>
      </div>
    </Layout>
  )
}
