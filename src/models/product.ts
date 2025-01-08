export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductReview {
    createdBy: Date;
    content: string;
    author: string;
}

export class ProductModel {
    static async getProductByID(id: number): Promise<Product> {
        return {
            id: id,
            name: `Product no ${id}`,
            price: 5000,
        };
    }

    static async getProductReviews(id: number): Promise<ProductReview[]> {
        return [
            {
                createdBy: new Date(),
                author: "tachi",
                content: "hay day",
            },
        ];
    }

    static async addProduct(body: any): Promise<void> {
        if (
            typeof body.name !== "string" ||
            typeof body.price !== "number"
        ) {
            throw new Error("Invalid type");
        }

        const data: Omit<Product, "id"> = {
            name: body.name,
            price: body.price,
        };
    }
}
