export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface CreateOrderRequest {
  userId: string;
  items: OrderItem[];
}

export function createOrder(request: CreateOrderRequest) {
  if (!request.userId) {
    throw new Error("User ID is required");
  }

  if (!request.items || request.items.length === 0) {
    throw new Error("Order must contain at least one item");
  }

  let totalAmount = 0;
  for (const item of request.items) {
    if (item.quantity <= 0) {
      throw new Error(`Invalid quantity for product ${item.productId}`);
    }
    totalAmount += item.quantity * item.price;
  }

  return {
    success: true,
    orderId: `ORD-${Date.now()}`,
    totalAmount,
    status: "CREATED"
  };
}