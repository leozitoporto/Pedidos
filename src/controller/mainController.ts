import { readJsonFile } from "../utils/readFile"
import { createOrderController } from "./orders/createOrderController"
import { AddItemOrderController } from "./orders/addItemOrderController"
import { CheckouOrderController } from "./orders/checkouOrderController"
import { RemoveItemController } from "./orders/removeItemController"


export const mainController = async () => {

    const data = await readJsonFile()

    data.map(async (element: any) => {
        if (element.action === 'CREATE_ORDER') {
            await createOrderController(element)
        }
        if (element.action === "ADD_ORDER_ITEM") {
            await AddItemOrderController(element)
        }
        if (element.action === "CHECKOUT_ORDER") {
            await CheckouOrderController(element)
        }
        if(element.action === "REMOVE_ORDER_ITEM"){
            await RemoveItemController(element)
        }
    })

}