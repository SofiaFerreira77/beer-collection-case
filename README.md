<br />
<p align="center">
  <a href="https://sofiaferreira77.github.io/beer-collection-case/list">
    <img src="https://ibb.co/nkcNjYn" alt="Beers List Page" >
  </a>
  <a href="https://sofiaferreira77.github.io/beer-collection-case/list">
    <img src="https://ibb.co/dmjvFXv" alt="Beer Detail Page" >
  </a>
</p>

# Frontend Case: Beer Collection

## Presentation
This project is a collection of some exercices with react, nextjs and tailwind for learning purpose.
It is a web-app to track of the customers beer collection.

## Built with and Using
- [x] [Nextjs](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [x] [React](https://react.dev/)
- [x] [Tailwind](https://tailwindcss.com/)
- [x] Localstorage - to save entries on the device
- [x] [PunkAPI](https://punkapi.com/documentation/v2)


## App features
- [x] Overview of bottles in the collection - grid layout
- [x] Listing of all bottles - grid layout
- [x] Sorting in list view (Sort by abv, ibu, srm, ph).
- [x] Possibility to add/remove bottles from collection
- [x] Detailed view of bottle

## Architecture
Clean architecture

| Path |  Alias | Description  |
|---|---|---|
| `src/pages`  | -  | Next.js pages |
| `src/components/layout`  | `@components/layout/*`  | Components used to organize the application's layout  |
| `src/components/common`  | `@components/common/*`  | Global shared components (header and footer)  |
| `src/components/ui`  | `@components/ui/*`  | More Complex ui related components (heading, icons, pagination, preloader)  |
| `src/components/*`  | `@components/*`  | Reusable components to fill pages (BeerDetail, BeerItem, BeerList, BeerRefinements) |
| `src/styles`  | `@styles/*`  | Global styles  |
| `src/data/context/*`  | `@data/context/*`  | Context api to share state through the component  |
| `src/data/hooks/*`  | `@data/hooks/*`  | Custom hooks  |
| `src/usecases/*`  | `@usecases/*`  | Use case acts as an intermediary between *views (components/pages) / context* and the *repositories*  |
| `src/repositories/*`  | `@repositories/*`  | Repositories - data access and storage logic. The repository pattern abstracts the data source (e.g., API, database) from the rest of your application, making it easier to switch data sources if needed. |


## Important package.json scripts

```bash
npm run dev
```


# Next Steps
The concepts of Clean Architecture, SOLID and Functional Programming are reviewd. Next steps:

- [ ] App Routes / Server Side Rendering / Static Site Generation
- [ ] Transition animations between pages and states (using [framer motion](https://www.framer.com/motion/use-in-view/))
- [ ] Internationalization
- [ ] API with another methods (firebase ie.)
- [ ] State managment with Redux (only used contextApi)
