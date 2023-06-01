# README

## Ruby Dolphins Frontend

This repository contains the frontend code for the Ruby Dolphins project. The Ruby Dolphins project is a full-stack web application built using HTML, CSS, and JavaScript. It aims to provide a platform for retrieving RESTful APIs related to products and users.

### Getting Started

To get started with the Ruby Dolphins frontend, follow the instructions below:

1.  Clone the repository to your local machine using the following command:
    
    shellCopy code
    
    `git clone https://github.com/MalinJ123/Ruby_Dolphins.git` 
    
2.  Navigate to the `frontend` directory:
    
    shellCopy code
    
    `cd Ruby_Dolphins/frontend` 
    
3.  Open the `index.html` file in your preferred web browser to access the application.
    

### Features

The Ruby Dolphins frontend offers the following features:

1.  Product Information: Retrieve and display information about various products available through the RESTful API.
2.  User Details: Fetch and show details of users registered on the platform.
3.  Interactive UI: Enjoy a user-friendly interface with intuitive navigation and visually appealing design.

### Endpoints and HTTP Methods

The Ruby Dolphins frontend interacts with the following endpoints using various HTTP methods:

#### `/search` Endpoint

-   HTTP Method: `GET`
-   Usage: This endpoint is used to search for specific products or users based on certain criteria.

Example usage in JavaScript:

javascriptCopy code

`// Endpoint: /search
// Method: GET
// Usage: Search for specific products or users based on criteria

async function searchQuery(req, res) {
  let query = req.query.q;
  let sort = req.query.sort;
  let order = req.query.order;

  let searchValue;

  if (!query) {
    return res.status(400).send("No query string provided");
  } else if (query) {
    await db.read();

    searchValue = db.data.products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    if (!searchValue) {
      return res.status(404).send("Product not found!");
    }

    if (query && sort && order) {
      searchQueryWithSortOptions(searchValue, sort, order, res);
    } else {
      console.log("Showing unsorted results: ", searchValue);
      res.status(200).send(searchValue);
    }
  }
}` 

#### `/products` Endpoint

-   HTTP Method: `GET`
-   Usage: This endpoint is used to retrieve a list of all products available.

Example usage in JavaScript:

javascriptCopy code

`// Endpoint: /products
// Method: GET
// Usage: Retrieve a list of all products

const router = express.Router();
const db = getDb();

router.get("/", async (req, res) => {
  await db.read();
  res.status(200).send(db.data.products);
});` 

#### `/users` Endpoint

-   HTTP Method: `GET`
-   Usage: This endpoint is used to fetch the details of all registered users.

Example usage in JavaScript:

javascriptCopy code

`// Endpoint: /users
// Method: GET
// Usage: Fetch details of all registered users

router.get("/", async (req, res) => {
  try {
    await db.read();
    const users = db.data.users;
    console.log("Showing user list: ", users);
    res.send(users);
  } catch (error) {
    console.log("Error fetching user list: ", error);
    res.status(500).send("An error occurred while retrieving users.");
  }
});` 

The Ruby Dolphins frontend also utilizes the following HTTP methods:

-   `POST`: Used to create a new resource, such as adding a new product or user.
-   `PUT`: Used to update an existing resource, such as modifying a product or user.
-   `DELETE`: Used to delete an existing resource, such as removing a product or user.

Please refer to the code examples provided earlier in this README for how to use these HTTP methods with the corresponding endpoints.

### Development

To run the frontend in development mode, simply open the `index.html` file in your preferred web browser. Any changes you make to the code can be tested and previewed directly in the browser.

### Production Deployment

To deploy the Ruby Dolphins frontend to a production environment, follow these steps:

1.  Ensure that you have set up a web server capable of serving static files.
2.  Copy the contents of the `frontend` directory to your web server's document root or appropriate location.
3.  Configure the web server to serve the `index.html` file as the default entry point for the application.

### Contributing

Contributions to the Ruby Dolphins frontend are welcome.
