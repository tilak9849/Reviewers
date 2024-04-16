"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import todoRouter from './routes/todos.routes'
const user_route_1 = __importDefault(require("./routes/user.route"));
const restaurant_routes_1 = __importDefault(require("./routes/restaurant.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const review_routes_1 = __importDefault(require("./routes/review.routes"));
const error_middleware_1 = require("./middleware/error-middleware");
const cors_1 = __importDefault(require("cors"));
const PORT = 1111;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/restros', restaurant_routes_1.default);
app.use('/users', user_route_1.default);
app.use('/contacts', contact_routes_1.default);
app.use('/reviews', review_routes_1.default);
app.listen(PORT, () => {
    console.log('Runnig on port', PORT);
});
app.use(error_middleware_1.genericErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map