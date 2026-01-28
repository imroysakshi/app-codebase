/**
 * Feature: User Search
 * Description: Technical logic for searching users based on filters.
 *...
 */

export interface UserSearchParams {
    query: string;
    role?: 'ADMIN' | 'USER' | 'GUEST';
    isActive?: boolean;
    limit?: number;
}

export interface UserSearchResult {
    id: string;
    username: string;
    email: string;
    role: string;
    isActive: boolean;
}

export class UserSearchService {
    /**
     * Searches for users based on the provided parameters.
     * Throws an error if the query is too short.
     */
    async searchUsers(params: UserSearchParams): Promise<UserSearchResult[]> {
        console.log(`Searching for users with query: "${params.query}"...`);

        if (!params.query || params.query.trim().length < 3) {
            throw new Error("Search query must be at least 3 characters long");
        }

        const limit = params.limit || 10;

        // Mock result set
        const mockUsers: UserSearchResult[] = [
            { id: '1', username: 'admin_user', email: 'admin@example.com', role: 'ADMIN', isActive: true },
            { id: '2', username: 'john_doe', email: 'john@example.com', role: 'USER', isActive: true },
            { id: '3', username: 'jane_smith', email: 'jane@example.com', role: 'USER', isActive: false },
        ];

        // Simple mock filter logic
        return mockUsers
            .filter(user =>
                user.username.includes(params.query.toLowerCase()) ||
                user.email.includes(params.query.toLowerCase())
            )
            .slice(0, limit);
    }

    /**
     * Gets search suggestions as the user types.
     */
    async getSuggestions(partialQuery: string): Promise<string[]> {
        if (!partialQuery) return [];

        const suggestions = ['admin', 'john', 'jane', 'test_user'];
        return suggestions.filter(s => s.startsWith(partialQuery.toLowerCase()));
    }
}
