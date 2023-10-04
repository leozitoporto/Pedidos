import { createOrder } from "../../services/index"

export const createOrderController = (data: any) => {

    // Não tendo regras de violações para a criação de pedidos 
    createOrder(data)

}

