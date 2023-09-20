image
Demo: 

# Frontend Case: Beer Collection

## Presentation
This project is a collection of some exercices with react, nextjs and tailwind for learning purpose.
It is a web-app to track of the customers beer collection.

## Built with and Using
- [x] [Nextjs](https://nextjs.org/)
- [x] [React](https://react.dev/)
- [x] [Tailwind](https://tailwindcss.com/)
- [x] Localstorage - to save entries on the device
- [x] [PunkAPI](https://punkapi.com/documentation/v2)


## App features
- [x] Overview of bottles in the collection - grid layout
- [x] Listing of all bottles - grid layout
- [x] Sorting in list view (Sort by abv, ibu, srm, ph).
- [x] Filtering in list view (filter on type, year, etc.).
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
| `src/repositories/*`  | `@repositories/*`  | Repositor - folder that contain data access and storage logic. The repository pattern abstracts the data source (e.g., API, database) from the rest of your application, making it easier to switch data sources if needed. |


## Important package.json scripts
- `dev` starts the development server
- `build` compiles the application

## Next Steps
The concepts of Clean Architecture, SOLID and Functional Programming are reviewd. Next steps:

- [ ] Routes (Dynamic)
- [ ] Internationalization
- [ ] API with another methods (firebase ie.)
- [ ] State managment with Redux (only used contextApi)
