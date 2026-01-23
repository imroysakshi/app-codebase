export interface CancelOrderInput {
  orderId: string;
}

export function cancelOrder(input: CancelOrderInput) {
  if (!input.orderId) {
    throw new Error("Order ID is required");
  }
  return {
    success: true,
    message: "Order cancelled successfully"
  };
}
