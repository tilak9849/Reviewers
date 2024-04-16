"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReviewDto = exports.updateReviewDtoBody = exports.createReviewDto = exports.createReviewDtoBody = void 0;
const zod_1 = require("zod");
exports.createReviewDtoBody = zod_1.z.object({
    rating: zod_1.z.enum(['1', '2', '3', '4', '5']),
    comment: zod_1.z.string({
        required_error: ' comment is required',
    }),
    // date: z.date({
    //     required_error: 'date is required',
    // }),
    // is_admin: z.boolean().optional().default(false)
}).strict();
exports.createReviewDto = zod_1.z.object({
    body: exports.createReviewDtoBody
});
exports.updateReviewDtoBody = zod_1.z.object({
    rating: zod_1.z.enum(['1', '2', '3', '4', '5']),
    comment: zod_1.z.string({
        required_error: 'comment is required',
    }),
}).strict();
exports.updateReviewDto = zod_1.z.object({
    body: exports.updateReviewDtoBody
});
//# sourceMappingURL=create-review.validator.js.map