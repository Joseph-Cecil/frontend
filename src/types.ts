export type User = {
    _id: string;
    email: string;
    name: string;
    phoneNumber: string;
    areaName: string;
    streetName: string;
    houseNumber: string
}

export type MenuItem = {
    _id:string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    areaName: string;
    location: string;
    estimateDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
}

export type OrderStatus = "placed" | "inProgress" | "outForDelivery" | "paid" | "delivered"

export type Order = {
    _id: string;
    restaurant: Restaurant;
    user: User;
    cartItems: {
        menuItemId: string;
        name: string;
        quantity: string;
    }[];
    deliveryDetails: {
        name: string;
        phoneNumber: string;
        areaName: string;
        streetName: string;
        houseNumber: string;
    };
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
    restaurantId: string;
}

export type AdminOrder = {
    _id: string;
    restaurant: Restaurant;
    user: User;
    cartItems: {
        menuItemId: string;
        name: string;
        quantity: string;
    }[];
    deliveryDetails: {
        name: string;
        phoneNumber: string;
        areaName: string;
        streetName: string;
        houseNumber: string;
    };
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
    restaurantId: string;
}

export type RestaurantSearchResponse = {
    data: Restaurant[];
    pagination: {
        total: number;
        page:number;
        pages: number;
    }
}

