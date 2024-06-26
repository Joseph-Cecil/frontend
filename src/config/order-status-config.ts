import { OrderStatus } from "@/types";

type OrderStatusInfo = {
    label: string;
    value: OrderStatus;
    progressValue: number;
}

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Placed", value: "placed", progressValue: 20 },
  {
    label: "Order is Being Processed By Shop",
    value: "inProgress",
    progressValue: 40,
  },
  { label: "Out for Delivery", value: "outForDelivery", progressValue: 60 },
  { label: "Paid", value: "paid", progressValue: 80 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];
