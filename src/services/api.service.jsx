import { service, URLs } from "../config/service"

// *********************************************************
// For characters
// *********************************************************
export const getCharacters = async (page = 1) => {
  let data = [];
  try {
    const result = await service.get(`/character/?page=${ page }`);
    data = result.data;
  } catch (error) {
    console.log('error', error.message);
  }
  return data;
}

export const getCharactersById = async (characterId) => {
  let data = [];
  try {
    const result = await service.get(`/character/${ characterId }`);
    data = result.data;
  } catch (error) {
    console.log('error', error.message);
  }
  return data;
}

// *********************************************************
// For locations
// *********************************************************
export const getLocations = async (page = 1) => {
  let data = [];
  try {
    const result = await service.get(`/location/?page=${ page }`);
    data = result.data;
  } catch (error) {
    console.log('error', error.message);
  }
  return data;
}

// *********************************************************
// For episodies
// *********************************************************
export const getEpisodies = async (page = 1) => {
  let data = [];
  try {
    const result = await service.get(`/episode/?page=${ page }`);
    data = result.data;
  } catch (error) {
    console.log('error', error.message);
  }
  return data;
}

export const getCharacterEpisode = async (episode) => {
  let data = null;
  try {
    const result = await fetch(episode);
    data = await result.json();
  } catch (error) {
    console.log('error', error.message);
  }
  return data;
}