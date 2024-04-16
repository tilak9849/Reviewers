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
exports.Get = exports.remove = exports.update = exports.postRestro = exports.findAll = void 0;
const RestroService = __importStar(require("../services/restaurant.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const findAll = async (req, res, next) => {
    try {
        const data = await RestroService.findAll();
        res.json(data);
    }
    catch (err) {
        next(err);
    }
};
exports.findAll = findAll;
const postRestro = async (req, res, next) => {
    const restro = req.body;
    console.log(req.body, 'is request body');
    try {
        const restaurants = await RestroService.postRestro(req.body);
        res.status(http_status_codes_1.default.CREATED).send(restaurants);
    }
    catch (err) {
        next(err);
    }
};
exports.postRestro = postRestro;
const update = async (req, res, next) => {
    const restros = req.body;
    const id = Number(req.params.id);
    try {
        const restaurants = await RestroService.update(id, restros);
        res.status(http_status_codes_1.default.ACCEPTED).send(restaurants);
    }
    catch (err) {
        next(err);
    }
};
exports.update = update;
const remove = async (req, res, next) => {
    const id = Number(req.params.id);
    console.log(id, 'it is a request params id');
    try {
        const todos = await RestroService.remove(id);
        res.status(http_status_codes_1.default.NO_CONTENT).send();
    }
    catch (err) {
        next(err);
    }
};
exports.remove = remove;
const Get = async (req, res, next) => {
    const id = Number(req.params.id);
    console.log(id);
    try {
        const todos = await RestroService.Get(id);
        res.status(http_status_codes_1.default.OK).send(todos);
    }
    catch (err) {
        next(err);
    }
};
exports.Get = Get;
//# sourceMappingURL=retaurant.controller.js.map