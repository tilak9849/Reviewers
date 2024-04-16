import { z } from "zod";
import { createUserDtobody } from "../validators/create-user.validator";
export declare const createUser: (user: z.infer<typeof createUserDtobody>) => Promise<{
    id: number;
    username: string;
    email: string;
    password: string;
    is_admin: boolean;
}>;
export declare function login(email: string, password: string): Promise<{
    success: boolean;
    accessToken: string;
    refressToken: string;
}>;
export declare const remove: (userId: any) => Promise<{
    id: number;
    username: string;
    email: string;
    password: string;
    is_admin: boolean;
}>;
export declare function refresh(userId: number): Promise<{
    success: boolean;
    accessToken: string;
}>;
//# sourceMappingURL=user.service.d.ts.map