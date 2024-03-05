import {apiService} from "./apiService";
import {urls} from "../constans";

const characterService = {
    getAll: (page) => apiService.get(urls.characters, {params: {page}})
}

export {characterService}