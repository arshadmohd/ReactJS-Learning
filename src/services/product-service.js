import { getData } from "./data-service";
import { CONFIG } from "../config";

export const getProducts = () => {
     return getData(CONFIG.PRODUCT_API)
}