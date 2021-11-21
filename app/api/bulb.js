import client from "./client";

const endpoint = "/bulb";

const bulbServer = "http://192.168.2.111/bulb";

const getBulbState = () => {
  client.get(endpoint);
};

const loadBulbState = async () => {
  return fetch(bulbServer, { mode: "no-cors" })
    .then((response) => response.json())
    .then((json) => {
      json.bulb;
    })
    .catch((error) => {
      console.error(error);
    });
};

const setBulbStateOnServer = async (bulbState) => {
  console.log("setBulbStateOnServer:", bulbState);
  fetch(bulbServer, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bulb: bulbState,
    }),
  });
};

export default {
  getBulbState,
  loadBulbState,
  setBulbStateOnServer,
};

// getBulbStateFromServer = () => {
//     const response = fetch("http://localhost:9010/bulb");
//     console.log(response);
// try {
// } catch (error) {
//   console.error(error);
// }
//   };

//   setBulbStateOnServer = () => {
// fetch("https://mywebsite.com/endpoint/", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     bulb: false,
//   }),
// });
//   };

// getMovies();

// const [isLoading, setLoading] = useState(true);
// const [data, setData] = useState([]);

// const getMovies = async () => {
//   try {
//     const response = await fetch("https://reactnative.dev/movies.json");
//     const json = await response.json();
//     setData(json.movies);
//     console.log(json.movies);
//     console.log(json.movies[0].title);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     setLoading(false);
//   }
// };
