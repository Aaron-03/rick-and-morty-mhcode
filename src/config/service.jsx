import axios from "axios";

export const baseURL = 'https://rickandmortyapi.com/api';

export const URLs = {
  characters: `/character`,
  locations: `/location`,
  episodes: `/episode`
}

export const service = axios.create({
  baseURL: baseURL
});