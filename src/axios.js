// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });
// instance.get("/movie/top_rated");

// export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance
  .get("/movie/top_rated")
  .then((response) => {
    // Handle the response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });

export default instance;
