import { IOrders } from '../../models/ordersSchema';
import { AddNewItemOrder } from "../../services/orders/addItem/addNewItem"
import { SelectOrder } from "../../utils/selectOrder"
import { productsList } from "../../models/products"
import { VerifyQtyProducts } from "../../utils/qtyProdOrder"
import { orders } from "../../models/ordersSchema"
import { OrderIndex } from "../../utils/OrderIndex"
import { FindProduct } from "../../utils/findProduct"
import { VerifyItem } from "../../utils/verifyItemArray"
import { qtyItems } from "../../models/qtyItemSchema"

export const AddItemOrderController = (command_row: any) => {

    let controllerQty: boolean = false

    // Módulo para selecionar Pedido
    const orderSelectec: any = SelectOrder(command_row)

    // Módulo para localizar a index do order
    const keyOrder: number = OrderIndex(command_row)

    // Localiza o produto pelo product_id
    const indexProduct: number = FindProduct(command_row)

    // Verifica a regra de negócio de qty máx de itens iguais no pedido
    orderSelectec.order_items.forEach((element: any) => {
        if (element.product_id === productsList[indexProduct]['id']) {
            if (element.quantity === 5) {
                controllerQty = true
            }
        }
    })

    // Valida quantidade e status
    if (!controllerQty && orderSelectec.status === "OPEN") {
        AddNewItemOrder(keyOrder, indexProduct)
    } else {
        if (controllerQty && orderSelectec.status === "OPEN") {
            console.log({
                "order_id": orderSelectec.order_id,
                "error": "MAX_PRODUCTS_REACHED"
            })
        } else {
            console.log({
                "order_id": orderSelectec.order_id,
                "error": "ORDER_ALREADY_IN_CHECKOUT"
            })
        }
    }

}