import Api from "../services/index";
import { endPoints, requestType } from "../constants/Variables";

//Jobs apis

export const getAllProducts = () => {
    return Api(`${endPoints.getAllProductsByUser}`, null, requestType.GET) 
}

