const BASE_URL = 'https://api.punkapi.com/v2';
export default class UserRepository { 
  async getBeerCollection() {
    return JSON.parse(localStorage.getItem('collection'));
  }

  async addToCollection(collection) {    
    localStorage.setItem('collection', collection);
  }

  async removeFromCollection(collection) {
    localStorage.setItem('collection', collection);
  }

  async updateBeerInfo(beerId: string, rating?: number, notes?: string) {
    //localStorage.setItem('beers', );
  }
}