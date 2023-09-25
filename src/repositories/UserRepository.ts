export default class UserRepository { 
  async getBeerCollection() {
    return JSON.parse(localStorage.getItem('collection'));
  }

  async addToCollection(beerId) {
    let collection = JSON.parse(localStorage.getItem('collection'));
    collection.push(beerId);
    localStorage.setItem('collection', JSON.stringify(collection));
  }

  async removeFromCollection(beerId) {
    let collection = Object.values(JSON.parse(localStorage.getItem('collection')));
    let filter = collection.filter((item) => item !== beerId);
    localStorage.setItem('collection', JSON.stringify(filter));
  }
}