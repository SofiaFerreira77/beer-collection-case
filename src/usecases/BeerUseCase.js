class BeerUseCase {
  constructor(beerRepository, userRepository) {
    this.beerRepository = beerRepository;
    this.userRepository = userRepository;
  }

  async getAllBeers(filterBy, sortBy) {
    const allBeers = await this.beerRepository.getAllBeers();
    const savedCollection = await this.userRepository.getBeerCollection();
    let filteredBeers = [];

    allBeers.forEach(beer => {

      const isFavourite = savedCollection.includes(beer.id);
      beer.isFavourite = isFavourite;

      if (filterBy) {
        const condition = (filterBy.type && beer.type == filterBy.type) || (filterBy.year && beer.type == filterBy.year);
        if (condition) filteredBeers.push(beer);
      } else {
        filteredBeers.push(beer);
      }
    })

    if (!sortBy) return filteredBeers;

    switch (sortBy.type) {
      case "abv":
        return filteredBeers.sort((a, b) => a.abv - b.abv);

      case "ibu":
        return filteredBeers.sort((a, b) => a.ibu - b.ibu);

      case "srm":
        return filteredBeers.sort((a, b) => a.srm - b.srm);

      case "ph":
        return filteredBeers.sort((a, b) => a.ph - b.ph);

      default:
        break;
    }

    return filteredBeers;
  }

  async getBeerCollection() {
    const allBeers = await this.beerRepository.getAllBeers();
    const savedCollection = await this.userRepository.getBeerCollection();
    let filteredCollection;

    if (savedCollection) {
      filteredCollection = allBeers.filter((value) => savedCollection.includes(value.id));
    }

    return filteredCollection;
  }

  async getBeerById(beer) {
    return this.beerRepository.getBeerById(beer);
  }

  async addToCollection(beerId) {
    console.log('addToCollection: ' + beerId)
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
