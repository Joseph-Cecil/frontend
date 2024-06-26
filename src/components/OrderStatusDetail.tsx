import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
    order: Order;
}


const OrderStatusDetail = ({order}: Props) => {
    {console.log(order)}
    return <div className="space-y-5">
        <div className="flex flex-col">
            <span className="font-bold">Your Order</span>
            <ul>
                {order.cartItems.map((item, key) => (
                    <li key={key}>
                        {item.name} x {item.quantity} 
                    </li>
                ))}
            </ul>
        </div>
        <Separator/>
        <div className="felx flex-col">
            <span className="font-bold">Total:</span>{" "}
            <span>Ghc{order.totalAmount}.00</span>
            
        </div>
    </div>
}

export default OrderStatusDetail;