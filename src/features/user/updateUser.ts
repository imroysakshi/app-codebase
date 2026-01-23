export interface UpdateUserInput {
  userId: string;
  name?: string;
  email?: string;
}

export function updateUser(input: UpdateUserInput) {
  if (!input.userId) {
    throw new Error("User ID is required");
  }

  if (input.email && !input.email.includes("@")) {
    throw new Error("Invalid email");
  }

  return {
    success: true,
    message: "User updated successfully"
  };
}
