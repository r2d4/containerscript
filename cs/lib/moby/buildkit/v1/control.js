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
exports.ControlClient = exports.ControlService = exports.InfoResponse = exports.InfoRequest = exports.ListWorkersResponse = exports.ListWorkersRequest = exports.BytesMessage = exports.VertexWarning = exports.VertexLog = exports.VertexStatus = exports.Vertex = exports.StatusResponse = exports.StatusRequest = exports.SolveResponse_ExporterResponseEntry = exports.SolveResponse = exports.CacheOptionsEntry_AttrsEntry = exports.CacheOptionsEntry = exports.CacheOptions_ExportAttrsDeprecatedEntry = exports.CacheOptions = exports.SolveRequest_FrontendInputsEntry = exports.SolveRequest_FrontendAttrsEntry = exports.SolveRequest_ExporterAttrsEntry = exports.SolveRequest = exports.UsageRecord = exports.DiskUsageResponse = exports.DiskUsageRequest = exports.PruneRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
var timestamp_1 = require("../../../google/protobuf/timestamp");
var worker_1 = require("../../../moby/buildkit/v1/types/worker");
var ops_1 = require("../../../pb/ops");
exports.protobufPackage = "moby.buildkit.v1";
function createBasePruneRequest() {
    return { filter: [], all: false, keepDuration: 0, keepBytes: 0 };
}
exports.PruneRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.filter; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.all === true) {
            writer.uint32(16).bool(message.all);
        }
        if (message.keepDuration !== 0) {
            writer.uint32(24).int64(message.keepDuration);
        }
        if (message.keepBytes !== 0) {
            writer.uint32(32).int64(message.keepBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePruneRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter.push(reader.string());
                    break;
                case 2:
                    message.all = reader.bool();
                    break;
                case 3:
                    message.keepDuration = longToNumber(reader.int64());
                    break;
                case 4:
                    message.keepBytes = longToNumber(reader.int64());
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
            filter: Array.isArray(object === null || object === void 0 ? void 0 : object.filter)
                ? object.filter.map(function (e) { return String(e); })
                : [],
            all: isSet(object.all) ? Boolean(object.all) : false,
            keepDuration: isSet(object.keepDuration)
                ? Number(object.keepDuration)
                : 0,
            keepBytes: isSet(object.keepBytes) ? Number(object.keepBytes) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.filter) {
            obj.filter = message.filter.map(function (e) { return e; });
        }
        else {
            obj.filter = [];
        }
        message.all !== undefined && (obj.all = message.all);
        message.keepDuration !== undefined &&
            (obj.keepDuration = Math.round(message.keepDuration));
        message.keepBytes !== undefined &&
            (obj.keepBytes = Math.round(message.keepBytes));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBasePruneRequest();
        message.filter = ((_a = object.filter) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.all = (_b = object.all) !== null && _b !== void 0 ? _b : false;
        message.keepDuration = (_c = object.keepDuration) !== null && _c !== void 0 ? _c : 0;
        message.keepBytes = (_d = object.keepBytes) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseDiskUsageRequest() {
    return { filter: [] };
}
exports.DiskUsageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.filter; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDiskUsageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter.push(reader.string());
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
            filter: Array.isArray(object === null || object === void 0 ? void 0 : object.filter)
                ? object.filter.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.filter) {
            obj.filter = message.filter.map(function (e) { return e; });
        }
        else {
            obj.filter = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDiskUsageRequest();
        message.filter = ((_a = object.filter) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseDiskUsageResponse() {
    return { record: [] };
}
exports.DiskUsageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.record; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.UsageRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDiskUsageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record.push(exports.UsageRecord.decode(reader, reader.uint32()));
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
            record: Array.isArray(object === null || object === void 0 ? void 0 : object.record)
                ? object.record.map(function (e) { return exports.UsageRecord.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.record) {
            obj.record = message.record.map(function (e) {
                return e ? exports.UsageRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.record = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDiskUsageResponse();
        message.record =
            ((_a = object.record) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.UsageRecord.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseUsageRecord() {
    return {
        ID: "",
        Mutable: false,
        InUse: false,
        Size: 0,
        Parent: "",
        CreatedAt: undefined,
        LastUsedAt: undefined,
        UsageCount: 0,
        Description: "",
        RecordType: "",
        Shared: false,
        Parents: []
    };
}
exports.UsageRecord = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.Mutable === true) {
            writer.uint32(16).bool(message.Mutable);
        }
        if (message.InUse === true) {
            writer.uint32(24).bool(message.InUse);
        }
        if (message.Size !== 0) {
            writer.uint32(32).int64(message.Size);
        }
        if (message.Parent !== "") {
            writer.uint32(42).string(message.Parent);
        }
        if (message.CreatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.CreatedAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.LastUsedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.LastUsedAt), writer.uint32(58).fork()).ldelim();
        }
        if (message.UsageCount !== 0) {
            writer.uint32(64).int64(message.UsageCount);
        }
        if (message.Description !== "") {
            writer.uint32(74).string(message.Description);
        }
        if (message.RecordType !== "") {
            writer.uint32(82).string(message.RecordType);
        }
        if (message.Shared === true) {
            writer.uint32(88).bool(message.Shared);
        }
        for (var _i = 0, _a = message.Parents; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(98).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUsageRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.Mutable = reader.bool();
                    break;
                case 3:
                    message.InUse = reader.bool();
                    break;
                case 4:
                    message.Size = longToNumber(reader.int64());
                    break;
                case 5:
                    message.Parent = reader.string();
                    break;
                case 6:
                    message.CreatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.LastUsedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.UsageCount = longToNumber(reader.int64());
                    break;
                case 9:
                    message.Description = reader.string();
                    break;
                case 10:
                    message.RecordType = reader.string();
                    break;
                case 11:
                    message.Shared = reader.bool();
                    break;
                case 12:
                    message.Parents.push(reader.string());
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
            Mutable: isSet(object.Mutable) ? Boolean(object.Mutable) : false,
            InUse: isSet(object.InUse) ? Boolean(object.InUse) : false,
            Size: isSet(object.Size) ? Number(object.Size) : 0,
            Parent: isSet(object.Parent) ? String(object.Parent) : "",
            CreatedAt: isSet(object.CreatedAt)
                ? fromJsonTimestamp(object.CreatedAt)
                : undefined,
            LastUsedAt: isSet(object.LastUsedAt)
                ? fromJsonTimestamp(object.LastUsedAt)
                : undefined,
            UsageCount: isSet(object.UsageCount) ? Number(object.UsageCount) : 0,
            Description: isSet(object.Description) ? String(object.Description) : "",
            RecordType: isSet(object.RecordType) ? String(object.RecordType) : "",
            Shared: isSet(object.Shared) ? Boolean(object.Shared) : false,
            Parents: Array.isArray(object === null || object === void 0 ? void 0 : object.Parents)
                ? object.Parents.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.Mutable !== undefined && (obj.Mutable = message.Mutable);
        message.InUse !== undefined && (obj.InUse = message.InUse);
        message.Size !== undefined && (obj.Size = Math.round(message.Size));
        message.Parent !== undefined && (obj.Parent = message.Parent);
        message.CreatedAt !== undefined &&
            (obj.CreatedAt = message.CreatedAt.toISOString());
        message.LastUsedAt !== undefined &&
            (obj.LastUsedAt = message.LastUsedAt.toISOString());
        message.UsageCount !== undefined &&
            (obj.UsageCount = Math.round(message.UsageCount));
        message.Description !== undefined &&
            (obj.Description = message.Description);
        message.RecordType !== undefined && (obj.RecordType = message.RecordType);
        message.Shared !== undefined && (obj.Shared = message.Shared);
        if (message.Parents) {
            obj.Parents = message.Parents.map(function (e) { return e; });
        }
        else {
            obj.Parents = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseUsageRecord();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.Mutable = (_b = object.Mutable) !== null && _b !== void 0 ? _b : false;
        message.InUse = (_c = object.InUse) !== null && _c !== void 0 ? _c : false;
        message.Size = (_d = object.Size) !== null && _d !== void 0 ? _d : 0;
        message.Parent = (_e = object.Parent) !== null && _e !== void 0 ? _e : "";
        message.CreatedAt = (_f = object.CreatedAt) !== null && _f !== void 0 ? _f : undefined;
        message.LastUsedAt = (_g = object.LastUsedAt) !== null && _g !== void 0 ? _g : undefined;
        message.UsageCount = (_h = object.UsageCount) !== null && _h !== void 0 ? _h : 0;
        message.Description = (_j = object.Description) !== null && _j !== void 0 ? _j : "";
        message.RecordType = (_k = object.RecordType) !== null && _k !== void 0 ? _k : "";
        message.Shared = (_l = object.Shared) !== null && _l !== void 0 ? _l : false;
        message.Parents = ((_m = object.Parents) === null || _m === void 0 ? void 0 : _m.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseSolveRequest() {
    return {
        Ref: "",
        Definition: undefined,
        Exporter: "",
        ExporterAttrs: {},
        Session: "",
        Frontend: "",
        FrontendAttrs: {},
        Cache: undefined,
        Entitlements: [],
        FrontendInputs: {}
    };
}
exports.SolveRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Ref !== "") {
            writer.uint32(10).string(message.Ref);
        }
        if (message.Definition !== undefined) {
            ops_1.Definition.encode(message.Definition, writer.uint32(18).fork()).ldelim();
        }
        if (message.Exporter !== "") {
            writer.uint32(26).string(message.Exporter);
        }
        Object.entries(message.ExporterAttrs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SolveRequest_ExporterAttrsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.Session !== "") {
            writer.uint32(42).string(message.Session);
        }
        if (message.Frontend !== "") {
            writer.uint32(50).string(message.Frontend);
        }
        Object.entries(message.FrontendAttrs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SolveRequest_FrontendAttrsEntry.encode({ key: key, value: value }, writer.uint32(58).fork()).ldelim();
        });
        if (message.Cache !== undefined) {
            exports.CacheOptions.encode(message.Cache, writer.uint32(66).fork()).ldelim();
        }
        for (var _i = 0, _a = message.Entitlements; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(74).string(v);
        }
        Object.entries(message.FrontendInputs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SolveRequest_FrontendInputsEntry.encode({ key: key, value: value }, writer.uint32(82).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSolveRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ref = reader.string();
                    break;
                case 2:
                    message.Definition = ops_1.Definition.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Exporter = reader.string();
                    break;
                case 4:
                    var entry4 = exports.SolveRequest_ExporterAttrsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.ExporterAttrs[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    message.Session = reader.string();
                    break;
                case 6:
                    message.Frontend = reader.string();
                    break;
                case 7:
                    var entry7 = exports.SolveRequest_FrontendAttrsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.FrontendAttrs[entry7.key] = entry7.value;
                    }
                    break;
                case 8:
                    message.Cache = exports.CacheOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Entitlements.push(reader.string());
                    break;
                case 10:
                    var entry10 = exports.SolveRequest_FrontendInputsEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.FrontendInputs[entry10.key] = entry10.value;
                    }
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
            Ref: isSet(object.Ref) ? String(object.Ref) : "",
            Definition: isSet(object.Definition)
                ? ops_1.Definition.fromJSON(object.Definition)
                : undefined,
            Exporter: isSet(object.Exporter) ? String(object.Exporter) : "",
            ExporterAttrs: isObject(object.ExporterAttrs)
                ? Object.entries(object.ExporterAttrs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            Session: isSet(object.Session) ? String(object.Session) : "",
            Frontend: isSet(object.Frontend) ? String(object.Frontend) : "",
            FrontendAttrs: isObject(object.FrontendAttrs)
                ? Object.entries(object.FrontendAttrs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            Cache: isSet(object.Cache)
                ? exports.CacheOptions.fromJSON(object.Cache)
                : undefined,
            Entitlements: Array.isArray(object === null || object === void 0 ? void 0 : object.Entitlements)
                ? object.Entitlements.map(function (e) { return String(e); })
                : [],
            FrontendInputs: isObject(object.FrontendInputs)
                ? Object.entries(object.FrontendInputs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = ops_1.Definition.fromJSON(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Ref !== undefined && (obj.Ref = message.Ref);
        message.Definition !== undefined &&
            (obj.Definition = message.Definition
                ? ops_1.Definition.toJSON(message.Definition)
                : undefined);
        message.Exporter !== undefined && (obj.Exporter = message.Exporter);
        obj.ExporterAttrs = {};
        if (message.ExporterAttrs) {
            Object.entries(message.ExporterAttrs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.ExporterAttrs[k] = v;
            });
        }
        message.Session !== undefined && (obj.Session = message.Session);
        message.Frontend !== undefined && (obj.Frontend = message.Frontend);
        obj.FrontendAttrs = {};
        if (message.FrontendAttrs) {
            Object.entries(message.FrontendAttrs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.FrontendAttrs[k] = v;
            });
        }
        message.Cache !== undefined &&
            (obj.Cache = message.Cache
                ? exports.CacheOptions.toJSON(message.Cache)
                : undefined);
        if (message.Entitlements) {
            obj.Entitlements = message.Entitlements.map(function (e) { return e; });
        }
        else {
            obj.Entitlements = [];
        }
        obj.FrontendInputs = {};
        if (message.FrontendInputs) {
            Object.entries(message.FrontendInputs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.FrontendInputs[k] = ops_1.Definition.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSolveRequest();
        message.Ref = (_a = object.Ref) !== null && _a !== void 0 ? _a : "";
        message.Definition =
            object.Definition !== undefined && object.Definition !== null
                ? ops_1.Definition.fromPartial(object.Definition)
                : undefined;
        message.Exporter = (_b = object.Exporter) !== null && _b !== void 0 ? _b : "";
        message.ExporterAttrs = Object.entries((_c = object.ExporterAttrs) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.Session = (_d = object.Session) !== null && _d !== void 0 ? _d : "";
        message.Frontend = (_e = object.Frontend) !== null && _e !== void 0 ? _e : "";
        message.FrontendAttrs = Object.entries((_f = object.FrontendAttrs) !== null && _f !== void 0 ? _f : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.Cache =
            object.Cache !== undefined && object.Cache !== null
                ? exports.CacheOptions.fromPartial(object.Cache)
                : undefined;
        message.Entitlements = ((_g = object.Entitlements) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        message.FrontendInputs = Object.entries((_h = object.FrontendInputs) !== null && _h !== void 0 ? _h : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = ops_1.Definition.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseSolveRequest_ExporterAttrsEntry() {
    return { key: "", value: "" };
}
exports.SolveRequest_ExporterAttrsEntry = {
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
        var message = createBaseSolveRequest_ExporterAttrsEntry();
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
        var message = createBaseSolveRequest_ExporterAttrsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseSolveRequest_FrontendAttrsEntry() {
    return { key: "", value: "" };
}
exports.SolveRequest_FrontendAttrsEntry = {
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
        var message = createBaseSolveRequest_FrontendAttrsEntry();
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
        var message = createBaseSolveRequest_FrontendAttrsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseSolveRequest_FrontendInputsEntry() {
    return { key: "", value: undefined };
}
exports.SolveRequest_FrontendInputsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            ops_1.Definition.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSolveRequest_FrontendInputsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = ops_1.Definition.decode(reader, reader.uint32());
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
            value: isSet(object.value)
                ? ops_1.Definition.fromJSON(object.value)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? ops_1.Definition.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSolveRequest_FrontendInputsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? ops_1.Definition.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseCacheOptions() {
    return {
        ExportRefDeprecated: "",
        ImportRefsDeprecated: [],
        ExportAttrsDeprecated: {},
        Exports: [],
        Imports: []
    };
}
exports.CacheOptions = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ExportRefDeprecated !== "") {
            writer.uint32(10).string(message.ExportRefDeprecated);
        }
        for (var _i = 0, _a = message.ImportRefsDeprecated; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        Object.entries(message.ExportAttrsDeprecated).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.CacheOptions_ExportAttrsDeprecatedEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        for (var _b = 0, _c = message.Exports; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.CacheOptionsEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.Imports; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.CacheOptionsEntry.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCacheOptions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ExportRefDeprecated = reader.string();
                    break;
                case 2:
                    message.ImportRefsDeprecated.push(reader.string());
                    break;
                case 3:
                    var entry3 = exports.CacheOptions_ExportAttrsDeprecatedEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.ExportAttrsDeprecated[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.Exports.push(exports.CacheOptionsEntry.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.Imports.push(exports.CacheOptionsEntry.decode(reader, reader.uint32()));
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
            ExportRefDeprecated: isSet(object.ExportRefDeprecated)
                ? String(object.ExportRefDeprecated)
                : "",
            ImportRefsDeprecated: Array.isArray(object === null || object === void 0 ? void 0 : object.ImportRefsDeprecated)
                ? object.ImportRefsDeprecated.map(function (e) { return String(e); })
                : [],
            ExportAttrsDeprecated: isObject(object.ExportAttrsDeprecated)
                ? Object.entries(object.ExportAttrsDeprecated).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            Exports: Array.isArray(object === null || object === void 0 ? void 0 : object.Exports)
                ? object.Exports.map(function (e) { return exports.CacheOptionsEntry.fromJSON(e); })
                : [],
            Imports: Array.isArray(object === null || object === void 0 ? void 0 : object.Imports)
                ? object.Imports.map(function (e) { return exports.CacheOptionsEntry.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ExportRefDeprecated !== undefined &&
            (obj.ExportRefDeprecated = message.ExportRefDeprecated);
        if (message.ImportRefsDeprecated) {
            obj.ImportRefsDeprecated = message.ImportRefsDeprecated.map(function (e) { return e; });
        }
        else {
            obj.ImportRefsDeprecated = [];
        }
        obj.ExportAttrsDeprecated = {};
        if (message.ExportAttrsDeprecated) {
            Object.entries(message.ExportAttrsDeprecated).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.ExportAttrsDeprecated[k] = v;
            });
        }
        if (message.Exports) {
            obj.Exports = message.Exports.map(function (e) {
                return e ? exports.CacheOptionsEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.Exports = [];
        }
        if (message.Imports) {
            obj.Imports = message.Imports.map(function (e) {
                return e ? exports.CacheOptionsEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.Imports = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseCacheOptions();
        message.ExportRefDeprecated = (_a = object.ExportRefDeprecated) !== null && _a !== void 0 ? _a : "";
        message.ImportRefsDeprecated =
            ((_b = object.ImportRefsDeprecated) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.ExportAttrsDeprecated = Object.entries((_c = object.ExportAttrsDeprecated) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.Exports =
            ((_d = object.Exports) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.CacheOptionsEntry.fromPartial(e); })) || [];
        message.Imports =
            ((_e = object.Imports) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.CacheOptionsEntry.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseCacheOptions_ExportAttrsDeprecatedEntry() {
    return { key: "", value: "" };
}
exports.CacheOptions_ExportAttrsDeprecatedEntry = {
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
        var message = createBaseCacheOptions_ExportAttrsDeprecatedEntry();
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
        var message = createBaseCacheOptions_ExportAttrsDeprecatedEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCacheOptionsEntry() {
    return { Type: "", Attrs: {} };
}
exports.CacheOptionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Type !== "") {
            writer.uint32(10).string(message.Type);
        }
        Object.entries(message.Attrs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.CacheOptionsEntry_AttrsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCacheOptionsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Type = reader.string();
                    break;
                case 2:
                    var entry2 = exports.CacheOptionsEntry_AttrsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.Attrs[entry2.key] = entry2.value;
                    }
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
            Type: isSet(object.Type) ? String(object.Type) : "",
            Attrs: isObject(object.Attrs)
                ? Object.entries(object.Attrs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Type !== undefined && (obj.Type = message.Type);
        obj.Attrs = {};
        if (message.Attrs) {
            Object.entries(message.Attrs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.Attrs[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCacheOptionsEntry();
        message.Type = (_a = object.Type) !== null && _a !== void 0 ? _a : "";
        message.Attrs = Object.entries((_b = object.Attrs) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseCacheOptionsEntry_AttrsEntry() {
    return { key: "", value: "" };
}
exports.CacheOptionsEntry_AttrsEntry = {
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
        var message = createBaseCacheOptionsEntry_AttrsEntry();
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
        var message = createBaseCacheOptionsEntry_AttrsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseSolveResponse() {
    return { ExporterResponse: {} };
}
exports.SolveResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.ExporterResponse).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SolveResponse_ExporterResponseEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSolveResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.SolveResponse_ExporterResponseEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.ExporterResponse[entry1.key] = entry1.value;
                    }
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
            ExporterResponse: isObject(object.ExporterResponse)
                ? Object.entries(object.ExporterResponse).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.ExporterResponse = {};
        if (message.ExporterResponse) {
            Object.entries(message.ExporterResponse).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.ExporterResponse[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSolveResponse();
        message.ExporterResponse = Object.entries((_a = object.ExporterResponse) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseSolveResponse_ExporterResponseEntry() {
    return { key: "", value: "" };
}
exports.SolveResponse_ExporterResponseEntry = {
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
        var message = createBaseSolveResponse_ExporterResponseEntry();
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
        var message = createBaseSolveResponse_ExporterResponseEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseStatusRequest() {
    return { Ref: "" };
}
exports.StatusRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Ref !== "") {
            writer.uint32(10).string(message.Ref);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ref = reader.string();
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
            Ref: isSet(object.Ref) ? String(object.Ref) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Ref !== undefined && (obj.Ref = message.Ref);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStatusRequest();
        message.Ref = (_a = object.Ref) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseStatusResponse() {
    return { vertexes: [], statuses: [], logs: [], warnings: [] };
}
exports.StatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.vertexes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Vertex.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.statuses; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.VertexStatus.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.logs; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.VertexLog.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _f = 0, _g = message.warnings; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.VertexWarning.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertexes.push(exports.Vertex.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.statuses.push(exports.VertexStatus.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.logs.push(exports.VertexLog.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.warnings.push(exports.VertexWarning.decode(reader, reader.uint32()));
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
            vertexes: Array.isArray(object === null || object === void 0 ? void 0 : object.vertexes)
                ? object.vertexes.map(function (e) { return exports.Vertex.fromJSON(e); })
                : [],
            statuses: Array.isArray(object === null || object === void 0 ? void 0 : object.statuses)
                ? object.statuses.map(function (e) { return exports.VertexStatus.fromJSON(e); })
                : [],
            logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs)
                ? object.logs.map(function (e) { return exports.VertexLog.fromJSON(e); })
                : [],
            warnings: Array.isArray(object === null || object === void 0 ? void 0 : object.warnings)
                ? object.warnings.map(function (e) { return exports.VertexWarning.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.vertexes) {
            obj.vertexes = message.vertexes.map(function (e) {
                return e ? exports.Vertex.toJSON(e) : undefined;
            });
        }
        else {
            obj.vertexes = [];
        }
        if (message.statuses) {
            obj.statuses = message.statuses.map(function (e) {
                return e ? exports.VertexStatus.toJSON(e) : undefined;
            });
        }
        else {
            obj.statuses = [];
        }
        if (message.logs) {
            obj.logs = message.logs.map(function (e) { return (e ? exports.VertexLog.toJSON(e) : undefined); });
        }
        else {
            obj.logs = [];
        }
        if (message.warnings) {
            obj.warnings = message.warnings.map(function (e) {
                return e ? exports.VertexWarning.toJSON(e) : undefined;
            });
        }
        else {
            obj.warnings = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStatusResponse();
        message.vertexes = ((_a = object.vertexes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Vertex.fromPartial(e); })) || [];
        message.statuses =
            ((_b = object.statuses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.VertexStatus.fromPartial(e); })) || [];
        message.logs = ((_c = object.logs) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.VertexLog.fromPartial(e); })) || [];
        message.warnings =
            ((_d = object.warnings) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.VertexWarning.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseVertex() {
    return {
        digest: "",
        inputs: [],
        name: "",
        cached: false,
        started: undefined,
        completed: undefined,
        error: "",
        progressGroup: undefined
    };
}
exports.Vertex = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.digest !== "") {
            writer.uint32(10).string(message.digest);
        }
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.cached === true) {
            writer.uint32(32).bool(message.cached);
        }
        if (message.started !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.started), writer.uint32(42).fork()).ldelim();
        }
        if (message.completed !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completed), writer.uint32(50).fork()).ldelim();
        }
        if (message.error !== "") {
            writer.uint32(58).string(message.error);
        }
        if (message.progressGroup !== undefined) {
            ops_1.ProgressGroup.encode(message.progressGroup, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVertex();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.digest = reader.string();
                    break;
                case 2:
                    message.inputs.push(reader.string());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.cached = reader.bool();
                    break;
                case 5:
                    message.started = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.completed = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.error = reader.string();
                    break;
                case 8:
                    message.progressGroup = ops_1.ProgressGroup.decode(reader, reader.uint32());
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
            digest: isSet(object.digest) ? String(object.digest) : "",
            inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs)
                ? object.inputs.map(function (e) { return String(e); })
                : [],
            name: isSet(object.name) ? String(object.name) : "",
            cached: isSet(object.cached) ? Boolean(object.cached) : false,
            started: isSet(object.started)
                ? fromJsonTimestamp(object.started)
                : undefined,
            completed: isSet(object.completed)
                ? fromJsonTimestamp(object.completed)
                : undefined,
            error: isSet(object.error) ? String(object.error) : "",
            progressGroup: isSet(object.progressGroup)
                ? ops_1.ProgressGroup.fromJSON(object.progressGroup)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.digest !== undefined && (obj.digest = message.digest);
        if (message.inputs) {
            obj.inputs = message.inputs.map(function (e) { return e; });
        }
        else {
            obj.inputs = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.cached !== undefined && (obj.cached = message.cached);
        message.started !== undefined &&
            (obj.started = message.started.toISOString());
        message.completed !== undefined &&
            (obj.completed = message.completed.toISOString());
        message.error !== undefined && (obj.error = message.error);
        message.progressGroup !== undefined &&
            (obj.progressGroup = message.progressGroup
                ? ops_1.ProgressGroup.toJSON(message.progressGroup)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseVertex();
        message.digest = (_a = object.digest) !== null && _a !== void 0 ? _a : "";
        message.inputs = ((_b = object.inputs) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.cached = (_d = object.cached) !== null && _d !== void 0 ? _d : false;
        message.started = (_e = object.started) !== null && _e !== void 0 ? _e : undefined;
        message.completed = (_f = object.completed) !== null && _f !== void 0 ? _f : undefined;
        message.error = (_g = object.error) !== null && _g !== void 0 ? _g : "";
        message.progressGroup =
            object.progressGroup !== undefined && object.progressGroup !== null
                ? ops_1.ProgressGroup.fromPartial(object.progressGroup)
                : undefined;
        return message;
    }
};
function createBaseVertexStatus() {
    return {
        ID: "",
        vertex: "",
        name: "",
        current: 0,
        total: 0,
        timestamp: undefined,
        started: undefined,
        completed: undefined
    };
}
exports.VertexStatus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.vertex !== "") {
            writer.uint32(18).string(message.vertex);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.current !== 0) {
            writer.uint32(32).int64(message.current);
        }
        if (message.total !== 0) {
            writer.uint32(40).int64(message.total);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.started !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.started), writer.uint32(58).fork()).ldelim();
        }
        if (message.completed !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.completed), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVertexStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.vertex = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.current = longToNumber(reader.int64());
                    break;
                case 5:
                    message.total = longToNumber(reader.int64());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.started = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.completed = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            vertex: isSet(object.vertex) ? String(object.vertex) : "",
            name: isSet(object.name) ? String(object.name) : "",
            current: isSet(object.current) ? Number(object.current) : 0,
            total: isSet(object.total) ? Number(object.total) : 0,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            started: isSet(object.started)
                ? fromJsonTimestamp(object.started)
                : undefined,
            completed: isSet(object.completed)
                ? fromJsonTimestamp(object.completed)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.vertex !== undefined && (obj.vertex = message.vertex);
        message.name !== undefined && (obj.name = message.name);
        message.current !== undefined &&
            (obj.current = Math.round(message.current));
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.started !== undefined &&
            (obj.started = message.started.toISOString());
        message.completed !== undefined &&
            (obj.completed = message.completed.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseVertexStatus();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.vertex = (_b = object.vertex) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.current = (_d = object.current) !== null && _d !== void 0 ? _d : 0;
        message.total = (_e = object.total) !== null && _e !== void 0 ? _e : 0;
        message.timestamp = (_f = object.timestamp) !== null && _f !== void 0 ? _f : undefined;
        message.started = (_g = object.started) !== null && _g !== void 0 ? _g : undefined;
        message.completed = (_h = object.completed) !== null && _h !== void 0 ? _h : undefined;
        return message;
    }
};
function createBaseVertexLog() {
    return { vertex: "", timestamp: undefined, stream: 0, msg: Buffer.alloc(0) };
}
exports.VertexLog = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vertex !== "") {
            writer.uint32(10).string(message.vertex);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.stream !== 0) {
            writer.uint32(24).int64(message.stream);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVertexLog();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertex = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.stream = longToNumber(reader.int64());
                    break;
                case 4:
                    message.msg = reader.bytes();
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
            vertex: isSet(object.vertex) ? String(object.vertex) : "",
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            stream: isSet(object.stream) ? Number(object.stream) : 0,
            msg: isSet(object.msg)
                ? Buffer.from(bytesFromBase64(object.msg))
                : Buffer.alloc(0)
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vertex !== undefined && (obj.vertex = message.vertex);
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp.toISOString());
        message.stream !== undefined && (obj.stream = Math.round(message.stream));
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseVertexLog();
        message.vertex = (_a = object.vertex) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : undefined;
        message.stream = (_c = object.stream) !== null && _c !== void 0 ? _c : 0;
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : Buffer.alloc(0);
        return message;
    }
};
function createBaseVertexWarning() {
    return {
        vertex: "",
        level: 0,
        short: Buffer.alloc(0),
        detail: [],
        url: "",
        info: undefined,
        ranges: []
    };
}
exports.VertexWarning = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vertex !== "") {
            writer.uint32(10).string(message.vertex);
        }
        if (message.level !== 0) {
            writer.uint32(16).int64(message.level);
        }
        if (message.short.length !== 0) {
            writer.uint32(26).bytes(message.short);
        }
        for (var _i = 0, _a = message.detail; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).bytes(v);
        }
        if (message.url !== "") {
            writer.uint32(42).string(message.url);
        }
        if (message.info !== undefined) {
            ops_1.SourceInfo.encode(message.info, writer.uint32(50).fork()).ldelim();
        }
        for (var _b = 0, _c = message.ranges; _b < _c.length; _b++) {
            var v = _c[_b];
            ops_1.Range.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVertexWarning();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vertex = reader.string();
                    break;
                case 2:
                    message.level = longToNumber(reader.int64());
                    break;
                case 3:
                    message.short = reader.bytes();
                    break;
                case 4:
                    message.detail.push(reader.bytes());
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                case 6:
                    message.info = ops_1.SourceInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.ranges.push(ops_1.Range.decode(reader, reader.uint32()));
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
            vertex: isSet(object.vertex) ? String(object.vertex) : "",
            level: isSet(object.level) ? Number(object.level) : 0,
            short: isSet(object.short)
                ? Buffer.from(bytesFromBase64(object.short))
                : Buffer.alloc(0),
            detail: Array.isArray(object === null || object === void 0 ? void 0 : object.detail)
                ? object.detail.map(function (e) { return Buffer.from(bytesFromBase64(e)); })
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            info: isSet(object.info) ? ops_1.SourceInfo.fromJSON(object.info) : undefined,
            ranges: Array.isArray(object === null || object === void 0 ? void 0 : object.ranges)
                ? object.ranges.map(function (e) { return ops_1.Range.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vertex !== undefined && (obj.vertex = message.vertex);
        message.level !== undefined && (obj.level = Math.round(message.level));
        message.short !== undefined &&
            (obj.short = base64FromBytes(message.short !== undefined ? message.short : Buffer.alloc(0)));
        if (message.detail) {
            obj.detail = message.detail.map(function (e) {
                return base64FromBytes(e !== undefined ? e : Buffer.alloc(0));
            });
        }
        else {
            obj.detail = [];
        }
        message.url !== undefined && (obj.url = message.url);
        message.info !== undefined &&
            (obj.info = message.info ? ops_1.SourceInfo.toJSON(message.info) : undefined);
        if (message.ranges) {
            obj.ranges = message.ranges.map(function (e) { return (e ? ops_1.Range.toJSON(e) : undefined); });
        }
        else {
            obj.ranges = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseVertexWarning();
        message.vertex = (_a = object.vertex) !== null && _a !== void 0 ? _a : "";
        message.level = (_b = object.level) !== null && _b !== void 0 ? _b : 0;
        message.short = (_c = object.short) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.detail = ((_d = object.detail) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.url = (_e = object.url) !== null && _e !== void 0 ? _e : "";
        message.info =
            object.info !== undefined && object.info !== null
                ? ops_1.SourceInfo.fromPartial(object.info)
                : undefined;
        message.ranges = ((_f = object.ranges) === null || _f === void 0 ? void 0 : _f.map(function (e) { return ops_1.Range.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseBytesMessage() {
    return { data: Buffer.alloc(0) };
}
exports.BytesMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBytesMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
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
            data: isSet(object.data)
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0)
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBytesMessage();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        return message;
    }
};
function createBaseListWorkersRequest() {
    return { filter: [] };
}
exports.ListWorkersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.filter; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListWorkersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter.push(reader.string());
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
            filter: Array.isArray(object === null || object === void 0 ? void 0 : object.filter)
                ? object.filter.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.filter) {
            obj.filter = message.filter.map(function (e) { return e; });
        }
        else {
            obj.filter = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListWorkersRequest();
        message.filter = ((_a = object.filter) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseListWorkersResponse() {
    return { record: [] };
}
exports.ListWorkersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.record; _i < _a.length; _i++) {
            var v = _a[_i];
            worker_1.WorkerRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListWorkersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record.push(worker_1.WorkerRecord.decode(reader, reader.uint32()));
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
            record: Array.isArray(object === null || object === void 0 ? void 0 : object.record)
                ? object.record.map(function (e) { return worker_1.WorkerRecord.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.record) {
            obj.record = message.record.map(function (e) {
                return e ? worker_1.WorkerRecord.toJSON(e) : undefined;
            });
        }
        else {
            obj.record = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListWorkersResponse();
        message.record =
            ((_a = object.record) === null || _a === void 0 ? void 0 : _a.map(function (e) { return worker_1.WorkerRecord.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseInfoRequest() {
    return {};
}
exports.InfoRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseInfoRequest();
        return message;
    }
};
function createBaseInfoResponse() {
    return { buildkitVersion: undefined };
}
exports.InfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.buildkitVersion !== undefined) {
            worker_1.BuildkitVersion.encode(message.buildkitVersion, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buildkitVersion = worker_1.BuildkitVersion.decode(reader, reader.uint32());
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
            buildkitVersion: isSet(object.buildkitVersion)
                ? worker_1.BuildkitVersion.fromJSON(object.buildkitVersion)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.buildkitVersion !== undefined &&
            (obj.buildkitVersion = message.buildkitVersion
                ? worker_1.BuildkitVersion.toJSON(message.buildkitVersion)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseInfoResponse();
        message.buildkitVersion =
            object.buildkitVersion !== undefined && object.buildkitVersion !== null
                ? worker_1.BuildkitVersion.fromPartial(object.buildkitVersion)
                : undefined;
        return message;
    }
};
exports.ControlService = {
    diskUsage: {
        path: "/moby.buildkit.v1.Control/DiskUsage",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.DiskUsageRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.DiskUsageRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.DiskUsageResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.DiskUsageResponse.decode(value); }
    },
    prune: {
        path: "/moby.buildkit.v1.Control/Prune",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) {
            return Buffer.from(exports.PruneRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.PruneRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.UsageRecord.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.UsageRecord.decode(value); }
    },
    solve: {
        path: "/moby.buildkit.v1.Control/Solve",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.SolveRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.SolveRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.SolveResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.SolveResponse.decode(value); }
    },
    status: {
        path: "/moby.buildkit.v1.Control/Status",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) {
            return Buffer.from(exports.StatusRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.StatusRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.StatusResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.StatusResponse.decode(value); }
    },
    session: {
        path: "/moby.buildkit.v1.Control/Session",
        requestStream: true,
        responseStream: true,
        requestSerialize: function (value) {
            return Buffer.from(exports.BytesMessage.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.BytesMessage.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.BytesMessage.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.BytesMessage.decode(value); }
    },
    listWorkers: {
        path: "/moby.buildkit.v1.Control/ListWorkers",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.ListWorkersRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.ListWorkersRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.ListWorkersResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.ListWorkersResponse.decode(value); }
    },
    info: {
        path: "/moby.buildkit.v1.Control/Info",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) {
            return Buffer.from(exports.InfoRequest.encode(value).finish());
        },
        requestDeserialize: function (value) { return exports.InfoRequest.decode(value); },
        responseSerialize: function (value) {
            return Buffer.from(exports.InfoResponse.encode(value).finish());
        },
        responseDeserialize: function (value) { return exports.InfoResponse.decode(value); }
    }
};
exports.ControlClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ControlService, "moby.buildkit.v1.Control");
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
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    arr.forEach(function (byte) {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
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
