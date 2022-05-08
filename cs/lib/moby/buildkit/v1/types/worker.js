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
exports.__esModule = true;
exports.BuildkitVersion = exports.GCPolicy = exports.WorkerRecord_LabelsEntry = exports.WorkerRecord = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
var ops_1 = require("../../../../pb/ops");
exports.protobufPackage = "moby.buildkit.v1.types";
function createBaseWorkerRecord() {
    return {
        ID: "",
        Labels: {},
        platforms: [],
        GCPolicy: [],
        BuildkitVersion: undefined
    };
}
exports.WorkerRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        Object.entries(message.Labels).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.WorkerRecord_LabelsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        for (var _i = 0, _a = message.platforms; _i < _a.length; _i++) {
            var v = _a[_i];
            ops_1.Platform.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.GCPolicy; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.GCPolicy.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.BuildkitVersion !== undefined) {
            exports.BuildkitVersion.encode(message.BuildkitVersion, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWorkerRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    var entry2 = exports.WorkerRecord_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.Labels[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.platforms.push(ops_1.Platform.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.GCPolicy.push(exports.GCPolicy.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.BuildkitVersion = exports.BuildkitVersion.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            ID: isSet(object.ID) ? String(object.ID) : "",
            Labels: isObject(object.Labels)
                ? Object.entries(object.Labels).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            platforms: Array.isArray(object === null || object === void 0 ? void 0 : object.platforms)
                ? object.platforms.map(function (e) { return ops_1.Platform.fromJSON(e); })
                : [],
            GCPolicy: Array.isArray(object === null || object === void 0 ? void 0 : object.GCPolicy)
                ? object.GCPolicy.map(function (e) { return exports.GCPolicy.fromJSON(e); })
                : [],
            BuildkitVersion: isSet(object.BuildkitVersion)
                ? exports.BuildkitVersion.fromJSON(object.BuildkitVersion)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        obj.Labels = {};
        if (message.Labels) {
            Object.entries(message.Labels).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.Labels[k] = v;
            });
        }
        if (message.platforms) {
            obj.platforms = message.platforms.map(function (e) {
                return e ? ops_1.Platform.toJSON(e) : undefined;
            });
        }
        else {
            obj.platforms = [];
        }
        if (message.GCPolicy) {
            obj.GCPolicy = message.GCPolicy.map(function (e) {
                return e ? exports.GCPolicy.toJSON(e) : undefined;
            });
        }
        else {
            obj.GCPolicy = [];
        }
        message.BuildkitVersion !== undefined &&
            (obj.BuildkitVersion = message.BuildkitVersion
                ? exports.BuildkitVersion.toJSON(message.BuildkitVersion)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseWorkerRecord();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.Labels = Object.entries((_b = object.Labels) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.platforms =
            ((_c = object.platforms) === null || _c === void 0 ? void 0 : _c.map(function (e) { return ops_1.Platform.fromPartial(e); })) || [];
        message.GCPolicy =
            ((_d = object.GCPolicy) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.GCPolicy.fromPartial(e); })) || [];
        message.BuildkitVersion =
            object.BuildkitVersion !== undefined && object.BuildkitVersion !== null
                ? exports.BuildkitVersion.fromPartial(object.BuildkitVersion)
                : undefined;
        return message;
    }
};
function createBaseWorkerRecord_LabelsEntry() {
    return { key: "", value: "" };
}
exports.WorkerRecord_LabelsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWorkerRecord_LabelsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWorkerRecord_LabelsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseGCPolicy() {
    return { all: false, keepDuration: 0, keepBytes: 0, filters: [] };
}
exports.GCPolicy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.all === true) {
            writer.uint32(8).bool(message.all);
        }
        if (message.keepDuration !== 0) {
            writer.uint32(16).int64(message.keepDuration);
        }
        if (message.keepBytes !== 0) {
            writer.uint32(24).int64(message.keepBytes);
        }
        for (var _i = 0, _a = message.filters; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGCPolicy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.all = reader.bool();
                    break;
                case 2:
                    message.keepDuration = longToNumber(reader.int64());
                    break;
                case 3:
                    message.keepBytes = longToNumber(reader.int64());
                    break;
                case 4:
                    message.filters.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            all: isSet(object.all) ? Boolean(object.all) : false,
            keepDuration: isSet(object.keepDuration)
                ? Number(object.keepDuration)
                : 0,
            keepBytes: isSet(object.keepBytes) ? Number(object.keepBytes) : 0,
            filters: Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.all !== undefined && (obj.all = message.all);
        message.keepDuration !== undefined &&
            (obj.keepDuration = Math.round(message.keepDuration));
        message.keepBytes !== undefined &&
            (obj.keepBytes = Math.round(message.keepBytes));
        if (message.filters) {
            obj.filters = message.filters.map(function (e) { return e; });
        }
        else {
            obj.filters = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGCPolicy();
        message.all = (_a = object.all) !== null && _a !== void 0 ? _a : false;
        message.keepDuration = (_b = object.keepDuration) !== null && _b !== void 0 ? _b : 0;
        message.keepBytes = (_c = object.keepBytes) !== null && _c !== void 0 ? _c : 0;
        message.filters = ((_d = object.filters) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseBuildkitVersion() {
    return { package: "", version: "", revision: "" };
}
exports.BuildkitVersion = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.package !== "") {
            writer.uint32(10).string(message.package);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.revision !== "") {
            writer.uint32(26).string(message.revision);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuildkitVersion();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.package = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.revision = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            package: isSet(object.package) ? String(object.package) : "",
            version: isSet(object.version) ? String(object.version) : "",
            revision: isSet(object.revision) ? String(object.revision) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.package !== undefined && (obj.package = message.package);
        message.version !== undefined && (obj.version = message.version);
        message.revision !== undefined && (obj.revision = message.revision);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBuildkitVersion();
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.revision = (_c = object.revision) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== long_1["default"]) {
    _m0.util.Long = long_1["default"];
    _m0.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
