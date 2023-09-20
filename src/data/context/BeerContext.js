import { createContext, useContext, useEffect, useState } from 'react';
import BeerUseCase from "../../usecases/BeerUseCase";
import BeerRepository from "../../repositories/BeerRepository"
import UserRepository from "../../repositories/UserRepository"

const BeerContext = createContext();

export function useBeerContext() {
  return useContext(BeerContext);
}

export function BeerProvider({ children }) {

  const [allBeers, setAllBeers] = useState([]);
  const [collectionBeers, setCollectionBeers] = useState([]);
  const [filters, setFilters] = useState('collection');
  const [orderBy, setOrderBy] = useState('name');

  const value = {
    allBeers,
    setAllBeers,
    collectionBeers,
    setCollectionBeers,
    filters,
    setFilters,
    orderBy,
    setOrderBy
  };

  useEffect(function(){
    async function fetchData() {
      const userRepository = new UserRepository();
      const beerRepository = new BeerRepository();
      const useCase = new BeerUseCase(beerRepository, userRepository);
      const allBeersData = await useCase.getAllBeers();
      const collectionData = await useCase.getBeerCollection();

      try {
        setAllBeers({
          data: allBeersData,
          loading: false
        })
      } catch (error) {
        console.error('All Beers - Error fetching beers:', error);
        setAllBeers({
          ...allBeersData,
          loading: false
        })
      }

      try {
        setCollectionBeers({
          data: collectionData,
          loading: false
        })
      } catch (error) {
        console.error('All Beers - Error fetching beers:', error);
        setCollectionBeers({
          ...collectionData,
          loading: false
        })
      }
    }
  
    fetchData();
  }, []);

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
}