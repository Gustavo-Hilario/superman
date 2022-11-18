import axios from "axios";

export const wpcomConst = {
    clientId: 81668,
    clientSecret:
        "62sRrYEaiaGXMMYqldOXvmM3ApnYP6wVRmTSINwX3hYvNqTYgrwdQpeRdmlFR20z",
    redirectUrl: "http://localhost:3000/",
    scope: "global",
};

export const WPCOMSite = axios.create({
    baseURL: "https://public-api.wordpress.com/rest/v1.1/sites",
    params: {},
});

export const WPCOMAuth = axios.create({
    baseURL: `https://public-api.wordpress.com/oauth2/token`,
});
