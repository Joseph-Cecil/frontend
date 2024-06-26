import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateStaticOrderRequest = {
  staticOrder: string;
  name: string;
  phoneNumber: number;
  location: string;
  deliveryLocation: string;
  additionalInfo: string;
};

export const useCreateStaticOrder = () => {
  const createStaticOrderRequest = async (staticOrder: CreateStaticOrderRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/make-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(staticOrder),
    });

    if (!response.ok) {
      const text = await response.text(); // Read the response as text
      try {
        const data = JSON.parse(text); // Try to parse the response as JSON
        throw new Error(data.message || "Failed to make special order");
      } catch {
        // If parsing fails, throw the text response
        throw new Error(text || "Failed to make special order");
      }
    }

    return response.json();
  };

  const {
    mutateAsync: createStaticOrder,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useMutation(createStaticOrderRequest);

  return {
    createStaticOrder,
    isLoading,
    isError,
    isSuccess,
    error,
  };
};
