"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.createContact = void 0;
const client_1 = require("@prisma/client");
const boom_1 = __importDefault(require("@hapi/boom"));
const prisma = new client_1.PrismaClient();
const createContact = async (body, loggedInUser_id, restaurant_id) => {
    const { number } = body;
    let createdRestro;
    // ts-ignore
    await prisma.$transaction(async (tx) => {
        createdRestro = await tx.contact.create({
            data: {
                number,
                restaurant_id,
                id: loggedInUser_id,
            },
        });
    });
    return createdRestro;
};
exports.createContact = createContact;
const update = async (id, body) => {
    try {
        return await prisma.contact.update({
            data: {
                number: body.number
            },
            where: {
                id: id
            }
        });
    }
    catch (error) {
        console.log(error);
        if (error.code === 'P2025') {
            throw boom_1.default.notFound('Nothing to change my dear');
        }
        else {
            throw (error);
        }
    }
};
exports.update = update;
const remove = async (id) => {
    try {
        return await prisma.contact.delete({
            where: {
                id: Number(id),
            },
        });
    }
    catch (error) {
        if (error.code === 'P2025') {
            throw boom_1.default.notFound('Nothing to delete my dear');
        }
        else {
            throw (error);
        }
    }
};
exports.remove = remove;
//# sourceMappingURL=contact.service.js.map