const BASE_URL = 'https://api.punkapi.com/v2';

export default class UserRepository { 
  async getBeerCollection() {
    const savedCollection = localStorage.getItem('collection');
    if (!savedCollection) {
      return { data: null, loading: false}
    } else {
      const collectionData = JSON.parse(savedCollection);

      try {
        const response = await fetch(`${BASE_URL}/beers`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const filteredCollection = data.filter((value) => collectionData.includes(value.id));

        return filteredCollection;
      } catch (error) {
        console.error('UserRepo - Error fetching beers:', error);
        throw error;
      }
    }
  }

  async addToCollection(beerId) {
    const savedCollection = JSON.parse(localStorage.getItem('collection')) || [];
    // let isFavorite = false;
    
    if (savedCollection.length !== 0) {
      if (!savedCollection.includes(beerId)) {
        savedCollection.push(beerId);
        // isFavorite = true
      }
    } else {
      savedCollection.push(beerId)
      // isFavorite = true
    }
    
    localStorage.setItem('collection', JSON.stringify(savedCollection.sort((a, b) => a - b)));
    //return isFavorite;
  }

  async removeFromCollection(beerId) {
    const savedCollection = JSON.parse(localStorage.getItem('collection')) || [];
    let updateCollection = []
    console.log('remove')
    
    if (savedCollection.length !== 0) {
      /* console.log(savedCollection)
      savedCollection.filter((item) => item !== beerId);
      console.log(savedCollection) */
      if (!savedCollection.includes(beerId)) {
        updateCollection.push(beerId);
        // isFavorite = false
      }
    } 
    
    localStorage.setItem('collection', JSON.stringify(updateCollection));
    // return isFavorite;
  }

  async updateBeerInfo(beerId: string, rating?: number, notes?: string) {
      /* let collection = localStorage.getItem('collection')
      collection.filter(function (element: string) {
          return element !== beerId;
      });
      localStorage.setItem("collection", collection) */
  }
}