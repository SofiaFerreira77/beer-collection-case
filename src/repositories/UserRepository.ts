const BASE_URL = 'https://api.punkapi.com/v2';
export default class UserRepository { 
  async getBeerCollection() {
    return JSON.parse(localStorage.getItem('collection'));
  }

  async updateCollection(collection) {    
    localStorage.setItem('collection', collection);
    //setFavorite;
  }

  async updateBeerInfo(beerId: string, rating?: number, notes?: string) {
      /* let collection = localStorage.getItem('collection')
      collection.filter(function (element: string) {
          return element !== beerId;
      });
      localStorage.setItem("collection", collection) */
  }
}