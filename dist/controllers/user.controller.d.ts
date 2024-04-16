import { NextFunction, Request, Response } from "express";
export declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const remove: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const refresh: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare function postReview(arg0: string, postReview: any): void;
//# sourceMappingURL=user.controller.d.ts.map