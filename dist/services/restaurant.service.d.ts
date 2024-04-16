import { z } from "zod";
import { createRestroDtobody } from "../validators/create-restaurant.validators";
export declare const findAll: () => Promise<({
    reviews: {
        id: number;
        rating: string;
        comment: string;
        date: Date;
        user_id: number;
        restaurant_id: number;
    }[];
    contacts: {
        id: number;
        number: string;
        restaurant_id: number;
    }[];
} & {
    id: number;
    name: string;
    description: string | null;
    address: string;
})[]>;
export declare const update: (id: number, restro: any) => Promise<{
    id: number;
    name: string;
    description: string | null;
    address: string;
}>;
export declare const postRestro: (body: z.infer<typeof createRestroDtobody>) => Promise<any>;
export declare const remove: (id: any) => Promise<{
    id: number;
    name: string;
    description: string | null;
    address: string;
}>;
export declare const Get: (id: number) => Promise<{
    id: number;
    name: string;
    description: string | null;
    address: string;
} | "Naya Api banyo">;
export declare function postContact(body: any, restaurant_id: any): void;
export declare function postReview(body: any): void;
//# sourceMappingURL=restaurant.service.d.ts.map