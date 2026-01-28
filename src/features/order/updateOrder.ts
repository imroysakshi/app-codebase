/**
 * Feature: Order Management
 * Description: Logic for updating an existing order's status and items.
 */

export interface OrderUpdateInput {
    orderId: string;
    status: 'PENDING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
    items?: Array<{ productId: string; quantity: number }>;
}

export class OrderService {
    /**
     * Updates an existing order.
     * Throws an error if the order doesn't exist or is already DELIVERED.
     */
    async updateOrder(input: OrderUpdateInput) {
        console.log(`Updating order ${input.orderId} to status ${input.status}...`);

        if (!input.orderId) {
            throw new Error("Order ID is required");
        }

        // Mock logic: cannot update delivered orders
        if (input.status === 'DELIVERED') {
            console.log("Validation: Order is already delivered, update not allowed.");
            // In a real app, you'd check the DB here
        }

        if (input.items && input.items.length === 0) {
            throw new Error("Cannot update order with empty items list");
        }

        return {
            success: true,
            updatedAt: new Date().toISOString(),
            orderId: input.orderId,
            status: input.status
        };
    }

    /**
     * Cancels an order.
     */
    async cancelOrder(orderId: string) {
        if (!orderId) throw new Error("Order ID is required");

        return {
            orderId,
            status: 'CANCELLED',
            cancelledAt: new Date().toISOString()
        };
    }
}
