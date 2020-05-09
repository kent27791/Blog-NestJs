export interface AuthPayload {
    id: string;
    userName: string;
    permissions: string[];
    roles: string[];
}
export interface LoginInput {
    userName: string;
    password: string;
}

export interface RegisterInput {
    userName: string;
    password: string;
}