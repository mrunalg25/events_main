"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controllers/userController");
var router = express_1["default"].Router();
router.route("/registerUser").post(userController_1.registerUser);
router.route("/getAllUsers").get(userController_1.getAllUsers);
exports["default"] = router;
//# sourceMappingURL=userRoute.js.map