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
exports.refresh = exports.remove = exports.login = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const boom_1 = __importDefault(require("@hapi/boom"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const createUser = async (user) => {
    const { username, email, password, is_admin } = user;
    try {
        return await prisma.user.create({
            data: {
                email,
                password: await bcrypt_1.default.hash(password, 10),
                is_admin,
                username
            }
        });
    }
    catch (err) {
        console.log(err);
        if (err.code === 'P2002') {
            throw boom_1.default.conflict('Email tei vayo change han na bhai');
        }
        else {
            throw (err);
        }
    }
};
exports.createUser = createUser;
async function login(email, password) {
    try {
        const user = await prisma.user.findFirstOrThrow({ where: { email } });
        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            // Password does not match
            // If you want to throw a http error, you can. This is throw internal server error
            throw boom_1.default.conflict('Password not correct');
        }
        // Generate a token
        const accessToken = jwt.sign({ user_id: user.id, is_admin: user.is_admin }, process.env.ACCESS_TOKEN_KEY = "random-secret-hey", {
            expiresIn: '1d',
        });
        // Generate a token
        const refressToken = jwt.sign({ userId: user.id, is_admin: user.is_admin }, process.env.REFRESH_TOKEN_KEY, {
            expiresIn: '7d',
        });
        // Return the token to the client
        return { success: true, accessToken, refressToken };
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
exports.login = login;
// return the access token 
const remove = async (userId) => {
    try {
        return await prisma.user.delete({ where: { id: userId } });
    }
    catch (err) {
        console.log(err);
        if (err.code === 'P2003') {
            throw boom_1.default.notFound("Todos delete garnu hola pahila ");
        }
        else {
            throw err;
        }
    }
};
exports.remove = remove;
async function refresh(userId) {
    const user = await prisma.user.findFirstOrThrow({ where: { id: userId } });
    // Generate a token
    const accessToken = jwt.sign({ userId: user.id, isAdmin: user.is_admin }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '5m',
    });
    // Return the accessToken to the client
    return { success: true, accessToken };
}
exports.refresh = refresh;
// Refresh token - long lived token
// Access token - short lived token expires in 5 minutes
//# sourceMappingURL=user.service.js.map