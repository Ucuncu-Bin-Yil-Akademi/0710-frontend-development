import axios from "axios";
import Cookies from "js-cookie";
const userCookie = Cookies.get("userToken");

const getUserProfile = async (callback, username) => {
  if (!username) window.location.href = "/";
  await axios
    .get(`http://localhost:3000/users/${username}`, {
      headers: {
        Authorization: `Bearer ${userCookie}`,
      },
    })
    .then((response) => callback(response))
    .catch((error) => callback(error.response));
};

const followProfile = async (callback, userId) => {
  if (!userId) window.location.href = "/";
  await axios
    .post(
      `http://localhost:3000/users/follow/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      }
    )
    .then((response) => callback(response))
    .catch((error) => callback(error.response));
};

export { getUserProfile, followProfile };
