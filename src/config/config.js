const STAGE = import.meta.env.VITE_ENV

const API_KEY_PROD = import.meta.env.VITE_APIKEY_PROD;
const API_URL_PROD = import.meta.env.VITE_APIURL_PROD;

const API_KEY_DEV = import.meta.env.VITE_APIKEY_DEV;
const API_URL_DEV = import.meta.env.VITE_APIURL_DEV;

const config = {
  STAGE:STAGE,
  BASE_URL: STAGE === "PROD" ? API_URL_PROD : API_URL_DEV,
  API_KEY: STAGE === "PROD" ? API_KEY_PROD : API_KEY_DEV,
};

export default config;