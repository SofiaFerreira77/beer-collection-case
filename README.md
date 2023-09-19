image
Demo: 

## Frontend Case: Beer Collection

A customer has requested a web-app that can keep track of the customers beer collection.


## Built with
• [Nextjs](https://nextjs.org/)
• [React](https://react.dev/)
• [Tailwind](https://tailwindcss.com/)
• You can use a remote API (https://punkapi.com/documentation/v2 or similar) to fill in additional data


• Overview of bottles in the collection (flexbox or grid layout)
  • Sorting in list view (Sort by name, type, year, etc.).
  • Filtering in list view (filter on type, year, etc.).
• Detailed view of bottle
• Possibility to add/remove bottles from collection
• You can use a remote API (https://punkapi.com/documentation/v2 or similar) to fill in additional data
• Save entries on the device.

If have time:
• Add the user's comment / notes / rating.


## Architecture
Clean architecture

• **Repository** folder that contain data access and storage logic. The repository pattern abstracts the data source (e.g., API, database) from the rest of your application, making it easier to switch data sources if needed.
  
• **Use Cases** folder here the use case acts as an intermediary between views (components/pages) and the repositories.
  
• **Hooks** 
• **Pages** and **Components** view layer
