
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchBeerById } from "./api/InterfacePunkApi";

import Layout from "../components/layout/Layout";
import BottleItem from "../components/BootleItem";
import { Preloader } from "../components/ui/Preloader";

export default function Detail(props) {
  const router = useRouter();

  const [response, setResponse] = useState({
      data: null,
      loading: true
  })
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBeerById(router.query.bottle);
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
    return details.map( (bottleDetail, key) => <BottleItem key={bottleDetail.id} bottle={bottleDetail} />)
  }

  return (
    <Layout>
      <div className="container mx-auto relative flex justify-center items-center gap-3">
          { !response.loading ? showDetail(response.data) : Preloader }  
      </div>
    </Layout>
  )
}