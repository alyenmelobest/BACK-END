const express = require("express");
const { response, request } = require("express");

const usersList = [
  {
    id: 1,
    first_name: "Nicola",
    last_name: "Sharples",
    email: "nsharples0@paypal.com",
    phone: "483-388-1139",
  },
  {
    id: 2,
    first_name: "Archibaldo",
    last_name: "Gambles",
    email: "agambles1@geocities.com",
    phone: "135-668-5427",
  },
  {
    id: 3,
    first_name: "Sal",
    last_name: "Cundey",
    email: "scundey2@sbwire.com",
    phone: "101-678-5286",
  },
  {
    id: 4,
    first_name: "Ade",
    last_name: "Dudleston",
    email: "adudleston3@hp.com",
    phone: "114-358-5477",
  },
  {
    id: 5,
    first_name: "Humbert",
    last_name: "Bradick",
    email: "hbradick4@google.com",
    phone: "613-131-7304",
  },
  {
    id: 6,
    first_name: "Wilhelm",
    last_name: "Tweedell",
    email: "wtweedell5@networkadvertising.org",
    phone: "766-623-5409",
  },
  {
    id: 7,
    first_name: "Cortney",
    last_name: "Rowter",
    email: "crowter6@wikipedia.org",
    phone: "185-596-8576",
  },
  {
    id: 8,
    first_name: "Halley",
    last_name: "Foskew",
    email: "hfoskew7@ucla.edu",
    phone: "754-652-6598",
  },
  {
    id: 9,
    first_name: "Willie",
    last_name: "Brede",
    email: "wbrede8@bbb.org",
    phone: "758-428-5022",
  },
  {
    id: 10,
    first_name: "Ursulina",
    last_name: "Verissimo",
    email: "uverissimo9@earthlink.net",
    phone: "563-425-3072",
  },
];

const port = 3001;

const app = express();
app.use(express.json());

app.get("/users", (request, response) => {
  return response.json(usersList);
});

app.post("/users", (request, response) => {
  const { id, first_name, last_name, email, phone } = request.body;

  const listUsers = { id, first_name, last_name, email, phone };

  usersList.push(listUsers);

  return response.status(201).json(listUsers);
});

app.patch("/users/:id", (request, response) => {
  const { id } = request.params
  const { first_name, last_name, email, phone } = request.body;

  const updatedUser = { id, first_name, last_name, email, phone };

  const index = usersList.findIndex(user => user.id === id);

  if(index < 0) {
    return response.status(404).json({ message: "User not found" });
  }
  usersList[index] = updatedUser;

  return response.json(updatedUser);
  
});


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});


