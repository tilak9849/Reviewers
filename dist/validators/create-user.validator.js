"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDto = exports.createUserDtobody = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const zod_1 = require("zod");
// import { isAdmin } from '../middleware/authentication.middleware'
exports.createUserDtobody = zod_1.z.object({
    username: zod_1.z
        .string({
        required_error: "username is not give"
    }),
    email: zod_1.z
        .string({
        required_error: 'email is required',
    })
        .email('It is an email'),
    password: zod_1.z.string({
        required_error: 'password is required',
    }),
    is_admin: zod_1.z.boolean().optional().default(false)
});
exports.createUserDto = zod_1.z.object({
    body: exports.createUserDtobody
});
//# sourceMappingURL=create-user.validator.js.map