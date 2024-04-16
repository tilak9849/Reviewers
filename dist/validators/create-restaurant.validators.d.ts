import { z } from 'zod';
export declare const createRestroDtobody: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    address: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    description: string;
    address: string;
}, {
    name: string;
    description: string;
    address: string;
}>;
export declare const createRestro: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodString;
        address: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        description: string;
        address: string;
    }, {
        name: string;
        description: string;
        address: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}, {
    body: {
        name: string;
        description: string;
        address: string;
    };
}>;
export declare const updateRestroDtoBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    address?: string | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    address?: string | undefined;
}>;
export declare const updateRestroDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    }, {
        name?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    };
}, {
    body: {
        name?: string | undefined;
        description?: string | undefined;
        address?: string | undefined;
    };
}>;
//# sourceMappingURL=create-restaurant.validators.d.ts.map