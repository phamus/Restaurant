import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Z5I5Zi8dDESIP3J_LsrkAIMo9dm71yCW0vh6vlbddf0GGGZbm5qeZ92avCzOdNzq2354gVomrjCI0lDW2pJA7Tb4qT8ggcWQX2X_8NvfF3DiYCGpsmE_nwDgpJsDX3Yx",
  },
});
