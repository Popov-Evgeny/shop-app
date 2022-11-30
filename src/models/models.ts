export interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export interface Comment {
    id: number,
    userId: number,
    title: string,
}