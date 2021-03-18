import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&seed=foobar&exc=login,registered";


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
