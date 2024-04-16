import { z } from 'zod';
export declare const createUserDtobody: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    is_admin: boolean;
}, {
    username: string;
    email: string;
    password: string;
    is_admin?: boolean | undefined;
}>;
export declare const createUserDto: z.ZodObject<{
    body: z.ZodObject<{
        username: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        is_admin: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        email: string;
        password: string;
        is_admin: boolean;
    }, {
        username: string;
        email: string;
        password: string;
        is_admin?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        username: string;
        email: string;
        password: string;
        is_admin: boolean;
    };
}, {
    body: {
        username: string;
        email: string;
        password: string;
        is_admin?: boolean | undefined;
    };
}>;
//# sourceMappingURL=create-user.validator.d.ts.map