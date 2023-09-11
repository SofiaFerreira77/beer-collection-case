import { useEffect, useState } from "react";
import Layout from "../components/Layout"
import Product from "../components/Product";

// import { useFetch } from "../hooks/useFetch"

export default function Home() {

  const url = 'https://api.punkapi.com/v2/beers'
  const options = {
    method: 'GET'
  };

  const [response, setResponse] = useState({
      data: null,
      loading: true
  })

  useEffect(function(){
      fetch(url, options)
          .then(resp => resp.json())
          .then(json => setResponse({
                  data: json,
                  loading: false
              }))
  }, [url, options])

  function showProducts(products){
    return products.map((product, key) => <Product key={key} product={product}/>)
  }

  return (
    <Layout>
      <div className={`
          flex flex-col justify-center items-center gap-3
          bg-brown_2`}
          >
          <div className="container mx-auto">
            <h3 className="text-xl mb-2"><b>Refinements:</b></h3>
          </div>

          <div className={`container mx-auto flex flex-wrap justify-center items-center gap-9`}>
              { !response.loading ? showProducts(response.data) : false }
          </div>
      </div>
    </Layout>
  )
}
