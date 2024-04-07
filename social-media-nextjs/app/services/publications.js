import axios from "axios";
import Cookies from "js-cookie";
const userCookie = Cookies.get("userToken");

const getAllContents = async (callback) => {
  await axios
    .get("http://localhost:3000/publications", {
      headers: {
        Authorization: `Bearer ${userCookie}`,
      },
    })
    .then((response) => callback(response))
    .catch((error) => callback(error.response));
};

const likeContent = async (callback, contentId) => {
  if (!userCookie) return;
  await axios
    .post(
      `http://localhost:3000/publications/action/${contentId}`,
      {
        action: "like",
      },
      {
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      }
    )
    .then((response) => callback(response))
    .catch((error) => callback(error.response));
};

const getPopularContents = async (callback) => {
  axios
    .get("http://localhost:3000/publications/popular", {
      headers: {
        Authorization: `Bearer ${userCookie}`,
      },
    })
    .then((response) => callback(response))
    .catch((error) => callback(error.response));
};

export { getAllContents, likeContent, getPopularContents };
