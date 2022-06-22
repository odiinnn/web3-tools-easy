"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signData = exports.getChainId = exports.getAccount = exports.connect = void 0;
var connectMetamask_1 = require("./connectMetamask");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return connectMetamask_1.connect; } });
var getAccount_1 = require("./getAccount");
Object.defineProperty(exports, "getAccount", { enumerable: true, get: function () { return getAccount_1.getAccount; } });
var getChainId_1 = require("./getChainId");
Object.defineProperty(exports, "getChainId", { enumerable: true, get: function () { return getChainId_1.getChainId; } });
var signData_1 = require("./signData");
Object.defineProperty(exports, "signData", { enumerable: true, get: function () { return signData_1.signData; } });
