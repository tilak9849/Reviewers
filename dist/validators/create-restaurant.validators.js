"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRestroDto = exports.updateRestroDtoBody = exports.createRestro = exports.createRestroDtobody = void 0;
const zod_1 = require("zod");
exports.createRestroDtobody = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is not given "
    }),
    description: zod_1.z.string({
        required_error: "Description is not given "
    }),
    address: zod_1.z.string({
        required_error: "Address is require "
    }),
}).strict();
exports.createRestro = zod_1.z.object({
    body: exports.createRestroDtobody
});
exports.updateRestroDtoBody = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is should be changed  given "
    }).optional(),
    description: zod_1.z.string({
        required_error: "Add some description "
    }).optional(),
    address: zod_1.z.string({
        required_error: "Enter your Address here "
    }).optional(),
}).strict();
exports.updateRestroDto = zod_1.z.object({
    body: exports.updateRestroDtoBody
});
//# sourceMappingURL=create-restaurant.validators.js.map