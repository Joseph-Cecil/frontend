import { useEffect, useCallback } from "react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { CartItem } from "@/pages/DetailPage";

type Props = {
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  setTotalCost: (total: number) => void;
};

const OrderSummary = ({ cartItems, removeFromCart, setTotalCost }: Props) => {
  const getTotalCost = useCallback(() => {
    const totalInPesewas = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPesewas + 3;
    return totalWithDelivery;
  }, [cartItems]);

  useEffect(() => {
    setTotalCost(getTotalCost());
  }, [cartItems, getTotalCost, setTotalCost]);

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>Ghc{getTotalCost()}.00</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              Ghc{item.price}.00
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Ghc3.00</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
