export interface GetUserInput {
  userId: string;
}

export function getUser(input: GetUserInput) {
  if (!input.userId) {
    throw new Error("User ID is required");
  }

  return {
    success: true,
    data: {
      id: input.userId,
      name: "John Doe",
      email: "john@example.com"
    }
  };
}
