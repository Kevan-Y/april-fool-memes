// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  axios.get("https://meme-api.herokuapp.com/gimme").then((response) => {
    res.status(200).json(response.data);
  });
};
