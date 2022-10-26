import axios from "axios";

const clientId = 81668;
const clientSecret =
    "62sRrYEaiaGXMMYqldOXvmM3ApnYP6wVRmTSINwX3hYvNqTYgrwdQpeRdmlFR20z";
const redirectUrl = "http://localhost:3000/";
const scope = "global";

export const WPCOMSite = axios.create({
    baseURL: "https://public-api.wordpress.com/rest/v1.1/sites",
    params: {},
});

export const WPCOMAuth = axios.create({
    baseURL: `https://public-api.wordpress.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=${scope}`,
});
