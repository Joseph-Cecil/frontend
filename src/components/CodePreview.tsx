import React from "react";
import StaticDeliveryForm from "@/forms/static-delivery-form/StaticDeliveryForm";
import { useCreateStaticOrder } from "@/api/StaticOrderApi";
import { z } from "zod";

const formSchema = z.object({
  order: z.string().min(1, "Order is required"),
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  location: z.string().optional(),
  deliveryLocation: z.string().min(1, "Delivery Location is required"),
  additionalInfo: z.string().optional(),
});

const CodePreview = () => {
  const { createStaticOrder, isLoading, isError, isSuccess, error } = useCreateStaticOrder();

  const handleSave = async (data: z.infer<typeof formSchema>) => {
    try {
      await createStaticOrder({
        staticOrder: data.order,
        name: data.name,
        phoneNumber: Number(data.phoneNumber), // Ensure this is a number
        location: data.location || "",
        deliveryLocation: data.deliveryLocation,
        additionalInfo: data.additionalInfo || "",
      });
      // Handle success (e.g., show a success message)
    } catch (err) {
      console.error("Error creating static order:", err);
    }
  };

  return (
    <>
      <StaticDeliveryForm onSave={handleSave} />
      {isLoading && <div>Loading...</div>}
      {isError && <div className="text-red-500">Error: {error instanceof Error ? error.message : "Unknown error"}</div>}
      {isSuccess && <div className="text-green-500">Order created successfully!</div>}
    </>
  );
};

export default CodePreview;
