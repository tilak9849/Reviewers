"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReview = exports.refresh = exports.remove = exports.login = exports.createUser = void 0;
const USerService = __importStar(require("../services/user.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createUser = async (req, res, next) => {
    const user = req.body;
    console.log(req.body, "is request body");
    try {
        const users = await USerService.createUser(user);
        res.status(http_status_codes_1.default.CREATED).send(users);
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { refressToken, accessToken } = await USerService.login(email, password);
        res.cookie('refressToken', refressToken, { httpOnly: true, path: '/refresh' });
        res.json(accessToken);
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const remove = async (req, res, next) => {
    const userId = Number(req.params.id);
    console.log(userId, ' request params ko id yo ho hai');
    try {
        const user = await USerService.remove(userId);
        res.status(http_status_codes_1.default.NO_CONTENT).send();
    }
    catch (err) {
        next(err);
    }
};
exports.remove = remove;
const refresh = async (req, res, next) => {
    try {
        const userId = req.user.userId;
        const { accessToken } = await USerService.refresh(userId);
        res.json(accessToken);
    }
    catch (error) {
        next(error);
    }
};
exports.refresh = refresh;
function postReview(arg0, postReview) {
    throw new Error("Function not implemented.");
}
exports.postReview = postReview;
//# sourceMappingURL=user.controller.js.map