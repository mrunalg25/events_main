"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var eventController_1 = require("../controllers/eventController");
var router = express_1["default"].Router();
router.route("/addEvent").post(eventController_1.addEvent);
router.route("/getAllEvents").get(eventController_1.getAllEvents);
router.route("/deleteEvent/:id")["delete"](eventController_1.deleteEvent);
exports["default"] = router;
//# sourceMappingURL=eventRoute.js.map