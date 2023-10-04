import { SelectOrder } from "./selectOrder";
import { IOrders } from "../models/ordersSchema";
import { qtyItems } from "../models/qtyItemSchema";
import { productsList } from "../models/products";

export const VerifyItem = (indexProduct: any) => {

   
    let result: number = 0

    qtyItems.map((element: any) => {
        if(element.product_id === productsList[indexProduct]['id']){
            result = result + 1
        }
    })

    return result
}