import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({order}: Props) => {
    const getExpextedDelivery = () => {
        const created = new Date(order.createdAt);

        created.setMinutes(created.getMinutes() + order.restaurant.estimateDeliveryTime);

        const hours = created.getHours();
        const minutes = created.getMinutes();

        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${paddedMinutes}`;
    };

    const getOrderStatusInfo = () => {
        return ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[20]
    }

  return (
    <>
      <h2 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md: justify-between">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>Expected by: {getExpextedDelivery()}</span>
      </h2>
      <Progress className="animate-pulse" value={getOrderStatusInfo().progressValue}/>
    </>
  );
};

export default OrderStatusHeader;
