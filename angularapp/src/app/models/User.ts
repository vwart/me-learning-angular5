export interface User {
    firstName: string,
    lastName: string,
    email: string,
    age?: number,
    gender?: "male" | "female",
    image?: string,
    isActive?: boolean,
    balance?: number,
    registered?: any,
    showExtended?: boolean
}