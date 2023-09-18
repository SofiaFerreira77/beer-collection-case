class BeerUseCase {
    constructor(beerRepository, userRepository) {
      this.beerRepository = beerRepository;
      this.userRepository = userRepository;
    }

    async getAllBeers() {
      return this.beerRepository.getAllBeers();
    }

    async getBeerById(beer) {
      return this.beerRepository.getBeerById(beer);
    }

    async getBeerCollection() {
      const allBeers = await this.beerRepository.getAllBeers();
      const savedCollection = await this.userRepository.getBeerCollection()
      const filteredCollection = allBeers.filter((value) => savedCollection.includes(value.id));

      return filteredCollection;
    }

    async addToCollection(beerId) {
      const savedCollection = await this.userRepository.getBeerCollection()
      console.log(savedCollection)

      if (savedCollection.length !== 0) {
        if (!savedCollection.includes(beerId)) {
          savedCollection.push(beerId);
          // isFavorite = true
        }
      } else {
        savedCollection.push(beerId)
        // isFavorite = true
      }

      const collectionToSave = JSON.stringify(savedCollection).sort((a, b) => a - b);
      this.userRepository.addToCollection(collectionToSave);


      /* try {
        await this.userRepository.addToCollection(beer);
      } catch (error) {
        console.error('Error adding beer to the collection:', error);
        throw error;
      } */
      
    }

    async removeFromCollection(beerId) {
      const savedCollection = await this.userRepository.getBeerCollection()
      savedCollection.filter((item) => item.id !== beerId);

      const collectionToSave = JSON.stringify(savedCollection).sort((a, b) => a - b);
      this.userRepository.removeFromCollection(collectionToSave);
    }

    async updateBeerInfo(beer) {
      return this.userRepository.updateBeerInfo(beer, rating, notes);
    }
}

export default BeerUseCase
