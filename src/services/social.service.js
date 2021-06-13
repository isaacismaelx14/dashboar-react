import axios from "axios";

const url = "https://social-app-api-im.herokuapp.com";

export async function conectToYoutube(user) {
  const req = await axios.get(`${url}/youtube/${user}`);
  return req.data;
}
export async function conectToInstagram(user) {
  const req = await axios.get(`${url}/instagram/${user}`);
  return req.data;
}
export async function conectToTwitter(user) {
  const req = await axios.get(`${url}/twitter/${user}`);
  return req.data;
}
