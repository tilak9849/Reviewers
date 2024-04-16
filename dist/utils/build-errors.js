"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const zod_1 = require("zod");
function buildError(err) {
    // Validation errors
    if (err instanceof zod_1.ZodError) {
        return {
            code: http_status_codes_1.default.BAD_REQUEST,
            message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.BAD_REQUEST),
            details: err.issues.map((issue) => issue.message),
        };
    }
    // console.log(err,"Lau na k vayo")
    // HTTP errors
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.message || err.output.payload.error,
        };
    }
    console.log('here?');
    console.log(err);
    // Return INTERNAL_SERVER_ERROR for all other cases
    return {
        code: http_status_codes_1.default.INTERNAL_SERVER_ERROR,
        message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.INTERNAL_SERVER_ERROR),
    };
}
exports.default = buildError;
//# sourceMappingURL=build-errors.js.map