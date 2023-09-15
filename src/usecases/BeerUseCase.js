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
      // const allBeers = this.beerRepository.getAllBeers();
      // const colection = this.userRepository.getBeerCollection() | []

      return this.userRepository.getBeerCollection();
    }

    async addToCollection(beer)  {
      try {
        await this.userRepository.addToCollection(beer);
      } catch (error) {
        console.error('Error adding beer to the collection:', error);
        throw error;
      }
      
    }

    async removeFromCollection(beer) {
      return this.userRepository.removeFromCollection(beer);
    }

    async updateBeerInfo(beer) {
      return this.userRepository.updateBeerInfo(beer, rating, notes);
    }
}

export default BeerUseCase
