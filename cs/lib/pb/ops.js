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
exports.FileAction = exports.FileOp = exports.Definition_MetadataEntry = exports.Definition = exports.WorkerConstraints = exports.ProxyEnv = exports.ProgressGroup = exports.ExportCache = exports.Position = exports.Range = exports.Location = exports.SourceInfo = exports.Locations = exports.Source_LocationsEntry = exports.Source = exports.OpMetadata_CapsEntry = exports.OpMetadata_DescriptionEntry = exports.OpMetadata = exports.BuildInput = exports.BuildOp_AttrsEntry = exports.BuildOp_InputsEntry = exports.BuildOp = exports.SourceOp_AttrsEntry = exports.SourceOp = exports.SSHOpt = exports.SecretOpt = exports.CacheOpt = exports.TmpfsOpt = exports.Mount = exports.SecretEnv = exports.Ulimit = exports.HostIP = exports.Meta = exports.ExecOp = exports.Input = exports.Platform = exports.Op = exports.cacheSharingOptToJSON = exports.cacheSharingOptFromJSON = exports.CacheSharingOpt = exports.mountTypeToJSON = exports.mountTypeFromJSON = exports.MountType = exports.securityModeToJSON = exports.securityModeFromJSON = exports.SecurityMode = exports.netModeToJSON = exports.netModeFromJSON = exports.NetMode = exports.protobufPackage = void 0;
exports.DiffOp = exports.UpperDiffInput = exports.LowerDiffInput = exports.MergeOp = exports.MergeInput = exports.NamedUserOpt = exports.UserOpt = exports.ChownOpt = exports.FileActionRm = exports.FileActionMkDir = exports.FileActionMkFile = exports.FileActionCopy = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "pb";
var NetMode;
(function (NetMode) {
    /** UNSET - sandbox */
    NetMode[NetMode["UNSET"] = 0] = "UNSET";
    NetMode[NetMode["HOST"] = 1] = "HOST";
    NetMode[NetMode["NONE"] = 2] = "NONE";
    NetMode[NetMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NetMode = exports.NetMode || (exports.NetMode = {}));
function netModeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSET":
            return NetMode.UNSET;
        case 1:
        case "HOST":
            return NetMode.HOST;
        case 2:
        case "NONE":
            return NetMode.NONE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NetMode.UNRECOGNIZED;
    }
}
exports.netModeFromJSON = netModeFromJSON;
function netModeToJSON(object) {
    switch (object) {
        case NetMode.UNSET:
            return "UNSET";
        case NetMode.HOST:
            return "HOST";
        case NetMode.NONE:
            return "NONE";
        default:
            return "UNKNOWN";
    }
}
exports.netModeToJSON = netModeToJSON;
var SecurityMode;
(function (SecurityMode) {
    SecurityMode[SecurityMode["SANDBOX"] = 0] = "SANDBOX";
    /** INSECURE - privileged mode */
    SecurityMode[SecurityMode["INSECURE"] = 1] = "INSECURE";
    SecurityMode[SecurityMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityMode = exports.SecurityMode || (exports.SecurityMode = {}));
function securityModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SANDBOX":
            return SecurityMode.SANDBOX;
        case 1:
        case "INSECURE":
            return SecurityMode.INSECURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityMode.UNRECOGNIZED;
    }
}
exports.securityModeFromJSON = securityModeFromJSON;
function securityModeToJSON(object) {
    switch (object) {
        case SecurityMode.SANDBOX:
            return "SANDBOX";
        case SecurityMode.INSECURE:
            return "INSECURE";
        default:
            return "UNKNOWN";
    }
}
exports.securityModeToJSON = securityModeToJSON;
/** MountType defines a type of a mount from a supported set */
var MountType;
(function (MountType) {
    MountType[MountType["BIND"] = 0] = "BIND";
    MountType[MountType["SECRET"] = 1] = "SECRET";
    MountType[MountType["SSH"] = 2] = "SSH";
    MountType[MountType["CACHE"] = 3] = "CACHE";
    MountType[MountType["TMPFS"] = 4] = "TMPFS";
    MountType[MountType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MountType = exports.MountType || (exports.MountType = {}));
function mountTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "BIND":
            return MountType.BIND;
        case 1:
        case "SECRET":
            return MountType.SECRET;
        case 2:
        case "SSH":
            return MountType.SSH;
        case 3:
        case "CACHE":
            return MountType.CACHE;
        case 4:
        case "TMPFS":
            return MountType.TMPFS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MountType.UNRECOGNIZED;
    }
}
exports.mountTypeFromJSON = mountTypeFromJSON;
function mountTypeToJSON(object) {
    switch (object) {
        case MountType.BIND:
            return "BIND";
        case MountType.SECRET:
            return "SECRET";
        case MountType.SSH:
            return "SSH";
        case MountType.CACHE:
            return "CACHE";
        case MountType.TMPFS:
            return "TMPFS";
        default:
            return "UNKNOWN";
    }
}
exports.mountTypeToJSON = mountTypeToJSON;
/** CacheSharingOpt defines different sharing modes for cache mount */
var CacheSharingOpt;
(function (CacheSharingOpt) {
    /** SHARED - SHARED cache mount can be used concurrently by multiple writers */
    CacheSharingOpt[CacheSharingOpt["SHARED"] = 0] = "SHARED";
    /** PRIVATE - PRIVATE creates a new mount if there are multiple writers */
    CacheSharingOpt[CacheSharingOpt["PRIVATE"] = 1] = "PRIVATE";
    /** LOCKED - LOCKED pauses second writer until first one releases the mount */
    CacheSharingOpt[CacheSharingOpt["LOCKED"] = 2] = "LOCKED";
    CacheSharingOpt[CacheSharingOpt["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CacheSharingOpt = exports.CacheSharingOpt || (exports.CacheSharingOpt = {}));
function cacheSharingOptFromJSON(object) {
    switch (object) {
        case 0:
        case "SHARED":
            return CacheSharingOpt.SHARED;
        case 1:
        case "PRIVATE":
            return CacheSharingOpt.PRIVATE;
        case 2:
        case "LOCKED":
            return CacheSharingOpt.LOCKED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CacheSharingOpt.UNRECOGNIZED;
    }
}
exports.cacheSharingOptFromJSON = cacheSharingOptFromJSON;
function cacheSharingOptToJSON(object) {
    switch (object) {
        case CacheSharingOpt.SHARED:
            return "SHARED";
        case CacheSharingOpt.PRIVATE:
            return "PRIVATE";
        case CacheSharingOpt.LOCKED:
            return "LOCKED";
        default:
            return "UNKNOWN";
    }
}
exports.cacheSharingOptToJSON = cacheSharingOptToJSON;
function createBaseOp() {
    return {
        inputs: [],
        exec: undefined,
        source: undefined,
        file: undefined,
        build: undefined,
        merge: undefined,
        diff: undefined,
        platform: undefined,
        constraints: undefined
    };
}
exports.Op = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.exec !== undefined) {
            exports.ExecOp.encode(message.exec, writer.uint32(18).fork()).ldelim();
        }
        if (message.source !== undefined) {
            exports.SourceOp.encode(message.source, writer.uint32(26).fork()).ldelim();
        }
        if (message.file !== undefined) {
            exports.FileOp.encode(message.file, writer.uint32(34).fork()).ldelim();
        }
        if (message.build !== undefined) {
            exports.BuildOp.encode(message.build, writer.uint32(42).fork()).ldelim();
        }
        if (message.merge !== undefined) {
            exports.MergeOp.encode(message.merge, writer.uint32(50).fork()).ldelim();
        }
        if (message.diff !== undefined) {
            exports.DiffOp.encode(message.diff, writer.uint32(58).fork()).ldelim();
        }
        if (message.platform !== undefined) {
            exports.Platform.encode(message.platform, writer.uint32(82).fork()).ldelim();
        }
        if (message.constraints !== undefined) {
            exports.WorkerConstraints.encode(message.constraints, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(exports.Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.exec = exports.ExecOp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.source = exports.SourceOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.file = exports.FileOp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.build = exports.BuildOp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.merge = exports.MergeOp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.diff = exports.DiffOp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.platform = exports.Platform.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.constraints = exports.WorkerConstraints.decode(reader, reader.uint32());
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
            inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs)
                ? object.inputs.map(function (e) { return exports.Input.fromJSON(e); })
                : [],
            exec: isSet(object.exec) ? exports.ExecOp.fromJSON(object.exec) : undefined,
            source: isSet(object.source)
                ? exports.SourceOp.fromJSON(object.source)
                : undefined,
            file: isSet(object.file) ? exports.FileOp.fromJSON(object.file) : undefined,
            build: isSet(object.build) ? exports.BuildOp.fromJSON(object.build) : undefined,
            merge: isSet(object.merge) ? exports.MergeOp.fromJSON(object.merge) : undefined,
            diff: isSet(object.diff) ? exports.DiffOp.fromJSON(object.diff) : undefined,
            platform: isSet(object.platform)
                ? exports.Platform.fromJSON(object.platform)
                : undefined,
            constraints: isSet(object.constraints)
                ? exports.WorkerConstraints.fromJSON(object.constraints)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(function (e) { return (e ? exports.Input.toJSON(e) : undefined); });
        }
        else {
            obj.inputs = [];
        }
        message.exec !== undefined &&
            (obj.exec = message.exec ? exports.ExecOp.toJSON(message.exec) : undefined);
        message.source !== undefined &&
            (obj.source = message.source
                ? exports.SourceOp.toJSON(message.source)
                : undefined);
        message.file !== undefined &&
            (obj.file = message.file ? exports.FileOp.toJSON(message.file) : undefined);
        message.build !== undefined &&
            (obj.build = message.build ? exports.BuildOp.toJSON(message.build) : undefined);
        message.merge !== undefined &&
            (obj.merge = message.merge ? exports.MergeOp.toJSON(message.merge) : undefined);
        message.diff !== undefined &&
            (obj.diff = message.diff ? exports.DiffOp.toJSON(message.diff) : undefined);
        message.platform !== undefined &&
            (obj.platform = message.platform
                ? exports.Platform.toJSON(message.platform)
                : undefined);
        message.constraints !== undefined &&
            (obj.constraints = message.constraints
                ? exports.WorkerConstraints.toJSON(message.constraints)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOp();
        message.inputs = ((_a = object.inputs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Input.fromPartial(e); })) || [];
        message.exec =
            object.exec !== undefined && object.exec !== null
                ? exports.ExecOp.fromPartial(object.exec)
                : undefined;
        message.source =
            object.source !== undefined && object.source !== null
                ? exports.SourceOp.fromPartial(object.source)
                : undefined;
        message.file =
            object.file !== undefined && object.file !== null
                ? exports.FileOp.fromPartial(object.file)
                : undefined;
        message.build =
            object.build !== undefined && object.build !== null
                ? exports.BuildOp.fromPartial(object.build)
                : undefined;
        message.merge =
            object.merge !== undefined && object.merge !== null
                ? exports.MergeOp.fromPartial(object.merge)
                : undefined;
        message.diff =
            object.diff !== undefined && object.diff !== null
                ? exports.DiffOp.fromPartial(object.diff)
                : undefined;
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? exports.Platform.fromPartial(object.platform)
                : undefined;
        message.constraints =
            object.constraints !== undefined && object.constraints !== null
                ? exports.WorkerConstraints.fromPartial(object.constraints)
                : undefined;
        return message;
    }
};
function createBasePlatform() {
    return {
        Architecture: "",
        OS: "",
        Variant: "",
        OSVersion: "",
        OSFeatures: []
    };
}
exports.Platform = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Architecture !== "") {
            writer.uint32(10).string(message.Architecture);
        }
        if (message.OS !== "") {
            writer.uint32(18).string(message.OS);
        }
        if (message.Variant !== "") {
            writer.uint32(26).string(message.Variant);
        }
        if (message.OSVersion !== "") {
            writer.uint32(34).string(message.OSVersion);
        }
        for (var _i = 0, _a = message.OSFeatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePlatform();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Architecture = reader.string();
                    break;
                case 2:
                    message.OS = reader.string();
                    break;
                case 3:
                    message.Variant = reader.string();
                    break;
                case 4:
                    message.OSVersion = reader.string();
                    break;
                case 5:
                    message.OSFeatures.push(reader.string());
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
            Architecture: isSet(object.Architecture)
                ? String(object.Architecture)
                : "",
            OS: isSet(object.OS) ? String(object.OS) : "",
            Variant: isSet(object.Variant) ? String(object.Variant) : "",
            OSVersion: isSet(object.OSVersion) ? String(object.OSVersion) : "",
            OSFeatures: Array.isArray(object === null || object === void 0 ? void 0 : object.OSFeatures)
                ? object.OSFeatures.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Architecture !== undefined &&
            (obj.Architecture = message.Architecture);
        message.OS !== undefined && (obj.OS = message.OS);
        message.Variant !== undefined && (obj.Variant = message.Variant);
        message.OSVersion !== undefined && (obj.OSVersion = message.OSVersion);
        if (message.OSFeatures) {
            obj.OSFeatures = message.OSFeatures.map(function (e) { return e; });
        }
        else {
            obj.OSFeatures = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBasePlatform();
        message.Architecture = (_a = object.Architecture) !== null && _a !== void 0 ? _a : "";
        message.OS = (_b = object.OS) !== null && _b !== void 0 ? _b : "";
        message.Variant = (_c = object.Variant) !== null && _c !== void 0 ? _c : "";
        message.OSVersion = (_d = object.OSVersion) !== null && _d !== void 0 ? _d : "";
        message.OSFeatures = ((_e = object.OSFeatures) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseInput() {
    return { digest: "", index: 0 };
}
exports.Input = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.digest !== "") {
            writer.uint32(10).string(message.digest);
        }
        if (message.index !== 0) {
            writer.uint32(16).int64(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.digest = reader.string();
                    break;
                case 2:
                    message.index = longToNumber(reader.int64());
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
            index: isSet(object.index) ? Number(object.index) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.digest !== undefined && (obj.digest = message.digest);
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInput();
        message.digest = (_a = object.digest) !== null && _a !== void 0 ? _a : "";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseExecOp() {
    return {
        meta: undefined,
        mounts: [],
        network: 0,
        security: 0,
        secretenv: []
    };
}
exports.ExecOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.meta !== undefined) {
            exports.Meta.encode(message.meta, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.mounts; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Mount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.network !== 0) {
            writer.uint32(24).int32(message.network);
        }
        if (message.security !== 0) {
            writer.uint32(32).int32(message.security);
        }
        for (var _b = 0, _c = message.secretenv; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.SecretEnv.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.meta = exports.Meta.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mounts.push(exports.Mount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.network = reader.int32();
                    break;
                case 4:
                    message.security = reader.int32();
                    break;
                case 5:
                    message.secretenv.push(exports.SecretEnv.decode(reader, reader.uint32()));
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
            meta: isSet(object.meta) ? exports.Meta.fromJSON(object.meta) : undefined,
            mounts: Array.isArray(object === null || object === void 0 ? void 0 : object.mounts)
                ? object.mounts.map(function (e) { return exports.Mount.fromJSON(e); })
                : [],
            network: isSet(object.network) ? netModeFromJSON(object.network) : 0,
            security: isSet(object.security)
                ? securityModeFromJSON(object.security)
                : 0,
            secretenv: Array.isArray(object === null || object === void 0 ? void 0 : object.secretenv)
                ? object.secretenv.map(function (e) { return exports.SecretEnv.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.meta !== undefined &&
            (obj.meta = message.meta ? exports.Meta.toJSON(message.meta) : undefined);
        if (message.mounts) {
            obj.mounts = message.mounts.map(function (e) { return (e ? exports.Mount.toJSON(e) : undefined); });
        }
        else {
            obj.mounts = [];
        }
        message.network !== undefined &&
            (obj.network = netModeToJSON(message.network));
        message.security !== undefined &&
            (obj.security = securityModeToJSON(message.security));
        if (message.secretenv) {
            obj.secretenv = message.secretenv.map(function (e) {
                return e ? exports.SecretEnv.toJSON(e) : undefined;
            });
        }
        else {
            obj.secretenv = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseExecOp();
        message.meta =
            object.meta !== undefined && object.meta !== null
                ? exports.Meta.fromPartial(object.meta)
                : undefined;
        message.mounts = ((_a = object.mounts) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Mount.fromPartial(e); })) || [];
        message.network = (_b = object.network) !== null && _b !== void 0 ? _b : 0;
        message.security = (_c = object.security) !== null && _c !== void 0 ? _c : 0;
        message.secretenv =
            ((_d = object.secretenv) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.SecretEnv.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMeta() {
    return {
        args: [],
        env: [],
        cwd: "",
        user: "",
        proxyEnv: undefined,
        extraHosts: [],
        hostname: "",
        ulimit: [],
        cgroupParent: ""
    };
}
exports.Meta = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.args; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        for (var _b = 0, _c = message.env; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(18).string(v);
        }
        if (message.cwd !== "") {
            writer.uint32(26).string(message.cwd);
        }
        if (message.user !== "") {
            writer.uint32(34).string(message.user);
        }
        if (message.proxyEnv !== undefined) {
            exports.ProxyEnv.encode(message.proxyEnv, writer.uint32(42).fork()).ldelim();
        }
        for (var _d = 0, _e = message.extraHosts; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.HostIP.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.hostname !== "") {
            writer.uint32(58).string(message.hostname);
        }
        for (var _f = 0, _g = message.ulimit; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.Ulimit.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.cgroupParent !== "") {
            writer.uint32(82).string(message.cgroupParent);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMeta();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args.push(reader.string());
                    break;
                case 2:
                    message.env.push(reader.string());
                    break;
                case 3:
                    message.cwd = reader.string();
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.proxyEnv = exports.ProxyEnv.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.extraHosts.push(exports.HostIP.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.hostname = reader.string();
                    break;
                case 9:
                    message.ulimit.push(exports.Ulimit.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.cgroupParent = reader.string();
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
            args: Array.isArray(object === null || object === void 0 ? void 0 : object.args)
                ? object.args.map(function (e) { return String(e); })
                : [],
            env: Array.isArray(object === null || object === void 0 ? void 0 : object.env)
                ? object.env.map(function (e) { return String(e); })
                : [],
            cwd: isSet(object.cwd) ? String(object.cwd) : "",
            user: isSet(object.user) ? String(object.user) : "",
            proxyEnv: isSet(object.proxyEnv)
                ? exports.ProxyEnv.fromJSON(object.proxyEnv)
                : undefined,
            extraHosts: Array.isArray(object === null || object === void 0 ? void 0 : object.extraHosts)
                ? object.extraHosts.map(function (e) { return exports.HostIP.fromJSON(e); })
                : [],
            hostname: isSet(object.hostname) ? String(object.hostname) : "",
            ulimit: Array.isArray(object === null || object === void 0 ? void 0 : object.ulimit)
                ? object.ulimit.map(function (e) { return exports.Ulimit.fromJSON(e); })
                : [],
            cgroupParent: isSet(object.cgroupParent)
                ? String(object.cgroupParent)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.args) {
            obj.args = message.args.map(function (e) { return e; });
        }
        else {
            obj.args = [];
        }
        if (message.env) {
            obj.env = message.env.map(function (e) { return e; });
        }
        else {
            obj.env = [];
        }
        message.cwd !== undefined && (obj.cwd = message.cwd);
        message.user !== undefined && (obj.user = message.user);
        message.proxyEnv !== undefined &&
            (obj.proxyEnv = message.proxyEnv
                ? exports.ProxyEnv.toJSON(message.proxyEnv)
                : undefined);
        if (message.extraHosts) {
            obj.extraHosts = message.extraHosts.map(function (e) {
                return e ? exports.HostIP.toJSON(e) : undefined;
            });
        }
        else {
            obj.extraHosts = [];
        }
        message.hostname !== undefined && (obj.hostname = message.hostname);
        if (message.ulimit) {
            obj.ulimit = message.ulimit.map(function (e) {
                return e ? exports.Ulimit.toJSON(e) : undefined;
            });
        }
        else {
            obj.ulimit = [];
        }
        message.cgroupParent !== undefined &&
            (obj.cgroupParent = message.cgroupParent);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseMeta();
        message.args = ((_a = object.args) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.env = ((_b = object.env) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.cwd = (_c = object.cwd) !== null && _c !== void 0 ? _c : "";
        message.user = (_d = object.user) !== null && _d !== void 0 ? _d : "";
        message.proxyEnv =
            object.proxyEnv !== undefined && object.proxyEnv !== null
                ? exports.ProxyEnv.fromPartial(object.proxyEnv)
                : undefined;
        message.extraHosts =
            ((_e = object.extraHosts) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.HostIP.fromPartial(e); })) || [];
        message.hostname = (_f = object.hostname) !== null && _f !== void 0 ? _f : "";
        message.ulimit = ((_g = object.ulimit) === null || _g === void 0 ? void 0 : _g.map(function (e) { return exports.Ulimit.fromPartial(e); })) || [];
        message.cgroupParent = (_h = object.cgroupParent) !== null && _h !== void 0 ? _h : "";
        return message;
    }
};
function createBaseHostIP() {
    return { Host: "", IP: "" };
}
exports.HostIP = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Host !== "") {
            writer.uint32(10).string(message.Host);
        }
        if (message.IP !== "") {
            writer.uint32(18).string(message.IP);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHostIP();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Host = reader.string();
                    break;
                case 2:
                    message.IP = reader.string();
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
            Host: isSet(object.Host) ? String(object.Host) : "",
            IP: isSet(object.IP) ? String(object.IP) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Host !== undefined && (obj.Host = message.Host);
        message.IP !== undefined && (obj.IP = message.IP);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseHostIP();
        message.Host = (_a = object.Host) !== null && _a !== void 0 ? _a : "";
        message.IP = (_b = object.IP) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseUlimit() {
    return { Name: "", Soft: 0, Hard: 0 };
}
exports.Ulimit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Name !== "") {
            writer.uint32(10).string(message.Name);
        }
        if (message.Soft !== 0) {
            writer.uint32(16).int64(message.Soft);
        }
        if (message.Hard !== 0) {
            writer.uint32(24).int64(message.Hard);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUlimit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Soft = longToNumber(reader.int64());
                    break;
                case 3:
                    message.Hard = longToNumber(reader.int64());
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
            Name: isSet(object.Name) ? String(object.Name) : "",
            Soft: isSet(object.Soft) ? Number(object.Soft) : 0,
            Hard: isSet(object.Hard) ? Number(object.Hard) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Name !== undefined && (obj.Name = message.Name);
        message.Soft !== undefined && (obj.Soft = Math.round(message.Soft));
        message.Hard !== undefined && (obj.Hard = Math.round(message.Hard));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUlimit();
        message.Name = (_a = object.Name) !== null && _a !== void 0 ? _a : "";
        message.Soft = (_b = object.Soft) !== null && _b !== void 0 ? _b : 0;
        message.Hard = (_c = object.Hard) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseSecretEnv() {
    return { ID: "", name: "", optional: false };
}
exports.SecretEnv = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.optional === true) {
            writer.uint32(24).bool(message.optional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSecretEnv();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.optional = reader.bool();
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
            name: isSet(object.name) ? String(object.name) : "",
            optional: isSet(object.optional) ? Boolean(object.optional) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.name !== undefined && (obj.name = message.name);
        message.optional !== undefined && (obj.optional = message.optional);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSecretEnv();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.optional = (_c = object.optional) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseMount() {
    return {
        input: 0,
        selector: "",
        dest: "",
        output: 0,
        readonly: false,
        mountType: 0,
        TmpfsOpt: undefined,
        cacheOpt: undefined,
        secretOpt: undefined,
        SSHOpt: undefined,
        resultID: ""
    };
}
exports.Mount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        if (message.selector !== "") {
            writer.uint32(18).string(message.selector);
        }
        if (message.dest !== "") {
            writer.uint32(26).string(message.dest);
        }
        if (message.output !== 0) {
            writer.uint32(32).int64(message.output);
        }
        if (message.readonly === true) {
            writer.uint32(40).bool(message.readonly);
        }
        if (message.mountType !== 0) {
            writer.uint32(48).int32(message.mountType);
        }
        if (message.TmpfsOpt !== undefined) {
            exports.TmpfsOpt.encode(message.TmpfsOpt, writer.uint32(154).fork()).ldelim();
        }
        if (message.cacheOpt !== undefined) {
            exports.CacheOpt.encode(message.cacheOpt, writer.uint32(162).fork()).ldelim();
        }
        if (message.secretOpt !== undefined) {
            exports.SecretOpt.encode(message.secretOpt, writer.uint32(170).fork()).ldelim();
        }
        if (message.SSHOpt !== undefined) {
            exports.SSHOpt.encode(message.SSHOpt, writer.uint32(178).fork()).ldelim();
        }
        if (message.resultID !== "") {
            writer.uint32(186).string(message.resultID);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
                    break;
                case 2:
                    message.selector = reader.string();
                    break;
                case 3:
                    message.dest = reader.string();
                    break;
                case 4:
                    message.output = longToNumber(reader.int64());
                    break;
                case 5:
                    message.readonly = reader.bool();
                    break;
                case 6:
                    message.mountType = reader.int32();
                    break;
                case 19:
                    message.TmpfsOpt = exports.TmpfsOpt.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.cacheOpt = exports.CacheOpt.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.secretOpt = exports.SecretOpt.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.SSHOpt = exports.SSHOpt.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.resultID = reader.string();
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
            input: isSet(object.input) ? Number(object.input) : 0,
            selector: isSet(object.selector) ? String(object.selector) : "",
            dest: isSet(object.dest) ? String(object.dest) : "",
            output: isSet(object.output) ? Number(object.output) : 0,
            readonly: isSet(object.readonly) ? Boolean(object.readonly) : false,
            mountType: isSet(object.mountType)
                ? mountTypeFromJSON(object.mountType)
                : 0,
            TmpfsOpt: isSet(object.TmpfsOpt)
                ? exports.TmpfsOpt.fromJSON(object.TmpfsOpt)
                : undefined,
            cacheOpt: isSet(object.cacheOpt)
                ? exports.CacheOpt.fromJSON(object.cacheOpt)
                : undefined,
            secretOpt: isSet(object.secretOpt)
                ? exports.SecretOpt.fromJSON(object.secretOpt)
                : undefined,
            SSHOpt: isSet(object.SSHOpt) ? exports.SSHOpt.fromJSON(object.SSHOpt) : undefined,
            resultID: isSet(object.resultID) ? String(object.resultID) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        message.selector !== undefined && (obj.selector = message.selector);
        message.dest !== undefined && (obj.dest = message.dest);
        message.output !== undefined && (obj.output = Math.round(message.output));
        message.readonly !== undefined && (obj.readonly = message.readonly);
        message.mountType !== undefined &&
            (obj.mountType = mountTypeToJSON(message.mountType));
        message.TmpfsOpt !== undefined &&
            (obj.TmpfsOpt = message.TmpfsOpt
                ? exports.TmpfsOpt.toJSON(message.TmpfsOpt)
                : undefined);
        message.cacheOpt !== undefined &&
            (obj.cacheOpt = message.cacheOpt
                ? exports.CacheOpt.toJSON(message.cacheOpt)
                : undefined);
        message.secretOpt !== undefined &&
            (obj.secretOpt = message.secretOpt
                ? exports.SecretOpt.toJSON(message.secretOpt)
                : undefined);
        message.SSHOpt !== undefined &&
            (obj.SSHOpt = message.SSHOpt ? exports.SSHOpt.toJSON(message.SSHOpt) : undefined);
        message.resultID !== undefined && (obj.resultID = message.resultID);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseMount();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        message.selector = (_b = object.selector) !== null && _b !== void 0 ? _b : "";
        message.dest = (_c = object.dest) !== null && _c !== void 0 ? _c : "";
        message.output = (_d = object.output) !== null && _d !== void 0 ? _d : 0;
        message.readonly = (_e = object.readonly) !== null && _e !== void 0 ? _e : false;
        message.mountType = (_f = object.mountType) !== null && _f !== void 0 ? _f : 0;
        message.TmpfsOpt =
            object.TmpfsOpt !== undefined && object.TmpfsOpt !== null
                ? exports.TmpfsOpt.fromPartial(object.TmpfsOpt)
                : undefined;
        message.cacheOpt =
            object.cacheOpt !== undefined && object.cacheOpt !== null
                ? exports.CacheOpt.fromPartial(object.cacheOpt)
                : undefined;
        message.secretOpt =
            object.secretOpt !== undefined && object.secretOpt !== null
                ? exports.SecretOpt.fromPartial(object.secretOpt)
                : undefined;
        message.SSHOpt =
            object.SSHOpt !== undefined && object.SSHOpt !== null
                ? exports.SSHOpt.fromPartial(object.SSHOpt)
                : undefined;
        message.resultID = (_g = object.resultID) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseTmpfsOpt() {
    return { size: 0 };
}
exports.TmpfsOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.size !== 0) {
            writer.uint32(8).int64(message.size);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTmpfsOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.size = longToNumber(reader.int64());
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
            size: isSet(object.size) ? Number(object.size) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTmpfsOpt();
        message.size = (_a = object.size) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseCacheOpt() {
    return { ID: "", sharing: 0 };
}
exports.CacheOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.sharing !== 0) {
            writer.uint32(16).int32(message.sharing);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCacheOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.sharing = reader.int32();
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
            sharing: isSet(object.sharing)
                ? cacheSharingOptFromJSON(object.sharing)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.sharing !== undefined &&
            (obj.sharing = cacheSharingOptToJSON(message.sharing));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCacheOpt();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.sharing = (_b = object.sharing) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseSecretOpt() {
    return { ID: "", uid: 0, gid: 0, mode: 0, optional: false };
}
exports.SecretOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.uid !== 0) {
            writer.uint32(16).uint32(message.uid);
        }
        if (message.gid !== 0) {
            writer.uint32(24).uint32(message.gid);
        }
        if (message.mode !== 0) {
            writer.uint32(32).uint32(message.mode);
        }
        if (message.optional === true) {
            writer.uint32(40).bool(message.optional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSecretOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.gid = reader.uint32();
                    break;
                case 4:
                    message.mode = reader.uint32();
                    break;
                case 5:
                    message.optional = reader.bool();
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
            uid: isSet(object.uid) ? Number(object.uid) : 0,
            gid: isSet(object.gid) ? Number(object.gid) : 0,
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            optional: isSet(object.optional) ? Boolean(object.optional) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        message.gid !== undefined && (obj.gid = Math.round(message.gid));
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.optional !== undefined && (obj.optional = message.optional);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSecretOpt();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.uid = (_b = object.uid) !== null && _b !== void 0 ? _b : 0;
        message.gid = (_c = object.gid) !== null && _c !== void 0 ? _c : 0;
        message.mode = (_d = object.mode) !== null && _d !== void 0 ? _d : 0;
        message.optional = (_e = object.optional) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseSSHOpt() {
    return { ID: "", uid: 0, gid: 0, mode: 0, optional: false };
}
exports.SSHOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ID !== "") {
            writer.uint32(10).string(message.ID);
        }
        if (message.uid !== 0) {
            writer.uint32(16).uint32(message.uid);
        }
        if (message.gid !== 0) {
            writer.uint32(24).uint32(message.gid);
        }
        if (message.mode !== 0) {
            writer.uint32(32).uint32(message.mode);
        }
        if (message.optional === true) {
            writer.uint32(40).bool(message.optional);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSSHOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.string();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    message.gid = reader.uint32();
                    break;
                case 4:
                    message.mode = reader.uint32();
                    break;
                case 5:
                    message.optional = reader.bool();
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
            uid: isSet(object.uid) ? Number(object.uid) : 0,
            gid: isSet(object.gid) ? Number(object.gid) : 0,
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            optional: isSet(object.optional) ? Boolean(object.optional) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.uid !== undefined && (obj.uid = Math.round(message.uid));
        message.gid !== undefined && (obj.gid = Math.round(message.gid));
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.optional !== undefined && (obj.optional = message.optional);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSSHOpt();
        message.ID = (_a = object.ID) !== null && _a !== void 0 ? _a : "";
        message.uid = (_b = object.uid) !== null && _b !== void 0 ? _b : 0;
        message.gid = (_c = object.gid) !== null && _c !== void 0 ? _c : 0;
        message.mode = (_d = object.mode) !== null && _d !== void 0 ? _d : 0;
        message.optional = (_e = object.optional) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBaseSourceOp() {
    return { identifier: "", attrs: {} };
}
exports.SourceOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        Object.entries(message.attrs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.SourceOp_AttrsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    var entry2 = exports.SourceOp_AttrsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.attrs[entry2.key] = entry2.value;
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
            identifier: isSet(object.identifier) ? String(object.identifier) : "",
            attrs: isObject(object.attrs)
                ? Object.entries(object.attrs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        obj.attrs = {};
        if (message.attrs) {
            Object.entries(message.attrs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.attrs[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSourceOp();
        message.identifier = (_a = object.identifier) !== null && _a !== void 0 ? _a : "";
        message.attrs = Object.entries((_b = object.attrs) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseSourceOp_AttrsEntry() {
    return { key: "", value: "" };
}
exports.SourceOp_AttrsEntry = {
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
        var message = createBaseSourceOp_AttrsEntry();
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
        var message = createBaseSourceOp_AttrsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseBuildOp() {
    return { builder: 0, inputs: {}, def: undefined, attrs: {} };
}
exports.BuildOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.builder !== 0) {
            writer.uint32(8).int64(message.builder);
        }
        Object.entries(message.inputs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.BuildOp_InputsEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.def !== undefined) {
            exports.Definition.encode(message.def, writer.uint32(26).fork()).ldelim();
        }
        Object.entries(message.attrs).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.BuildOp_AttrsEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuildOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.builder = longToNumber(reader.int64());
                    break;
                case 2:
                    var entry2 = exports.BuildOp_InputsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.inputs[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.def = exports.Definition.decode(reader, reader.uint32());
                    break;
                case 4:
                    var entry4 = exports.BuildOp_AttrsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.attrs[entry4.key] = entry4.value;
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
            builder: isSet(object.builder) ? Number(object.builder) : 0,
            inputs: isObject(object.inputs)
                ? Object.entries(object.inputs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.BuildInput.fromJSON(value);
                    return acc;
                }, {})
                : {},
            def: isSet(object.def) ? exports.Definition.fromJSON(object.def) : undefined,
            attrs: isObject(object.attrs)
                ? Object.entries(object.attrs).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.builder !== undefined &&
            (obj.builder = Math.round(message.builder));
        obj.inputs = {};
        if (message.inputs) {
            Object.entries(message.inputs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.inputs[k] = exports.BuildInput.toJSON(v);
            });
        }
        message.def !== undefined &&
            (obj.def = message.def ? exports.Definition.toJSON(message.def) : undefined);
        obj.attrs = {};
        if (message.attrs) {
            Object.entries(message.attrs).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.attrs[k] = v;
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBuildOp();
        message.builder = (_a = object.builder) !== null && _a !== void 0 ? _a : 0;
        message.inputs = Object.entries((_b = object.inputs) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.BuildInput.fromPartial(value);
            }
            return acc;
        }, {});
        message.def =
            object.def !== undefined && object.def !== null
                ? exports.Definition.fromPartial(object.def)
                : undefined;
        message.attrs = Object.entries((_c = object.attrs) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseBuildOp_InputsEntry() {
    return { key: "", value: undefined };
}
exports.BuildOp_InputsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.BuildInput.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuildOp_InputsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.BuildInput.decode(reader, reader.uint32());
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
                ? exports.BuildInput.fromJSON(object.value)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.BuildInput.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBuildOp_InputsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.BuildInput.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseBuildOp_AttrsEntry() {
    return { key: "", value: "" };
}
exports.BuildOp_AttrsEntry = {
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
        var message = createBaseBuildOp_AttrsEntry();
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
        var message = createBaseBuildOp_AttrsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseBuildInput() {
    return { input: 0 };
}
exports.BuildInput = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuildInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
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
            input: isSet(object.input) ? Number(object.input) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBuildInput();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseOpMetadata() {
    return {
        ignoreCache: false,
        description: {},
        exportCache: undefined,
        caps: {},
        progressGroup: undefined
    };
}
exports.OpMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ignoreCache === true) {
            writer.uint32(8).bool(message.ignoreCache);
        }
        Object.entries(message.description).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.OpMetadata_DescriptionEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.exportCache !== undefined) {
            exports.ExportCache.encode(message.exportCache, writer.uint32(34).fork()).ldelim();
        }
        Object.entries(message.caps).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.OpMetadata_CapsEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.progressGroup !== undefined) {
            exports.ProgressGroup.encode(message.progressGroup, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOpMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ignoreCache = reader.bool();
                    break;
                case 2:
                    var entry2 = exports.OpMetadata_DescriptionEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.description[entry2.key] = entry2.value;
                    }
                    break;
                case 4:
                    message.exportCache = exports.ExportCache.decode(reader, reader.uint32());
                    break;
                case 5:
                    var entry5 = exports.OpMetadata_CapsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.caps[entry5.key] = entry5.value;
                    }
                    break;
                case 6:
                    message.progressGroup = exports.ProgressGroup.decode(reader, reader.uint32());
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
            ignoreCache: isSet(object.ignoreCache)
                ? Boolean(object.ignoreCache)
                : false,
            description: isObject(object.description)
                ? Object.entries(object.description).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            exportCache: isSet(object.exportCache)
                ? exports.ExportCache.fromJSON(object.exportCache)
                : undefined,
            caps: isObject(object.caps)
                ? Object.entries(object.caps).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = Boolean(value);
                    return acc;
                }, {})
                : {},
            progressGroup: isSet(object.progressGroup)
                ? exports.ProgressGroup.fromJSON(object.progressGroup)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ignoreCache !== undefined &&
            (obj.ignoreCache = message.ignoreCache);
        obj.description = {};
        if (message.description) {
            Object.entries(message.description).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.description[k] = v;
            });
        }
        message.exportCache !== undefined &&
            (obj.exportCache = message.exportCache
                ? exports.ExportCache.toJSON(message.exportCache)
                : undefined);
        obj.caps = {};
        if (message.caps) {
            Object.entries(message.caps).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.caps[k] = v;
            });
        }
        message.progressGroup !== undefined &&
            (obj.progressGroup = message.progressGroup
                ? exports.ProgressGroup.toJSON(message.progressGroup)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseOpMetadata();
        message.ignoreCache = (_a = object.ignoreCache) !== null && _a !== void 0 ? _a : false;
        message.description = Object.entries((_b = object.description) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.exportCache =
            object.exportCache !== undefined && object.exportCache !== null
                ? exports.ExportCache.fromPartial(object.exportCache)
                : undefined;
        message.caps = Object.entries((_c = object.caps) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = Boolean(value);
            }
            return acc;
        }, {});
        message.progressGroup =
            object.progressGroup !== undefined && object.progressGroup !== null
                ? exports.ProgressGroup.fromPartial(object.progressGroup)
                : undefined;
        return message;
    }
};
function createBaseOpMetadata_DescriptionEntry() {
    return { key: "", value: "" };
}
exports.OpMetadata_DescriptionEntry = {
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
        var message = createBaseOpMetadata_DescriptionEntry();
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
        var message = createBaseOpMetadata_DescriptionEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseOpMetadata_CapsEntry() {
    return { key: "", value: false };
}
exports.OpMetadata_CapsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value === true) {
            writer.uint32(16).bool(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOpMetadata_CapsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.bool();
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
            value: isSet(object.value) ? Boolean(object.value) : false
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
        var message = createBaseOpMetadata_CapsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseSource() {
    return { locations: {}, infos: [] };
}
exports.Source = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        Object.entries(message.locations).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Source_LocationsEntry.encode({ key: key, value: value }, writer.uint32(10).fork()).ldelim();
        });
        for (var _i = 0, _a = message.infos; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SourceInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSource();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    var entry1 = exports.Source_LocationsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.locations[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.infos.push(exports.SourceInfo.decode(reader, reader.uint32()));
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
            locations: isObject(object.locations)
                ? Object.entries(object.locations).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.Locations.fromJSON(value);
                    return acc;
                }, {})
                : {},
            infos: Array.isArray(object === null || object === void 0 ? void 0 : object.infos)
                ? object.infos.map(function (e) { return exports.SourceInfo.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        obj.locations = {};
        if (message.locations) {
            Object.entries(message.locations).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.locations[k] = exports.Locations.toJSON(v);
            });
        }
        if (message.infos) {
            obj.infos = message.infos.map(function (e) {
                return e ? exports.SourceInfo.toJSON(e) : undefined;
            });
        }
        else {
            obj.infos = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSource();
        message.locations = Object.entries((_a = object.locations) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.Locations.fromPartial(value);
            }
            return acc;
        }, {});
        message.infos = ((_b = object.infos) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.SourceInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSource_LocationsEntry() {
    return { key: "", value: undefined };
}
exports.Source_LocationsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Locations.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSource_LocationsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Locations.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.Locations.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Locations.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSource_LocationsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.Locations.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseLocations() {
    return { locations: [] };
}
exports.Locations = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.locations; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLocations();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locations.push(exports.Location.decode(reader, reader.uint32()));
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
            locations: Array.isArray(object === null || object === void 0 ? void 0 : object.locations)
                ? object.locations.map(function (e) { return exports.Location.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.locations) {
            obj.locations = message.locations.map(function (e) {
                return e ? exports.Location.toJSON(e) : undefined;
            });
        }
        else {
            obj.locations = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLocations();
        message.locations =
            ((_a = object.locations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Location.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSourceInfo() {
    return { filename: "", data: Buffer.alloc(0), definition: undefined };
}
exports.SourceInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.filename !== "") {
            writer.uint32(10).string(message.filename);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.definition !== undefined) {
            exports.Definition.encode(message.definition, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSourceInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filename = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.definition = exports.Definition.decode(reader, reader.uint32());
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
            filename: isSet(object.filename) ? String(object.filename) : "",
            data: isSet(object.data)
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0),
            definition: isSet(object.definition)
                ? exports.Definition.fromJSON(object.definition)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.filename !== undefined && (obj.filename = message.filename);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.definition !== undefined &&
            (obj.definition = message.definition
                ? exports.Definition.toJSON(message.definition)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSourceInfo();
        message.filename = (_a = object.filename) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : Buffer.alloc(0);
        message.definition =
            object.definition !== undefined && object.definition !== null
                ? exports.Definition.fromPartial(object.definition)
                : undefined;
        return message;
    }
};
function createBaseLocation() {
    return { sourceIndex: 0, ranges: [] };
}
exports.Location = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.sourceIndex !== 0) {
            writer.uint32(8).int32(message.sourceIndex);
        }
        for (var _i = 0, _a = message.ranges; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Range.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLocation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceIndex = reader.int32();
                    break;
                case 2:
                    message.ranges.push(exports.Range.decode(reader, reader.uint32()));
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
            sourceIndex: isSet(object.sourceIndex) ? Number(object.sourceIndex) : 0,
            ranges: Array.isArray(object === null || object === void 0 ? void 0 : object.ranges)
                ? object.ranges.map(function (e) { return exports.Range.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.sourceIndex !== undefined &&
            (obj.sourceIndex = Math.round(message.sourceIndex));
        if (message.ranges) {
            obj.ranges = message.ranges.map(function (e) { return (e ? exports.Range.toJSON(e) : undefined); });
        }
        else {
            obj.ranges = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLocation();
        message.sourceIndex = (_a = object.sourceIndex) !== null && _a !== void 0 ? _a : 0;
        message.ranges = ((_b = object.ranges) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Range.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseRange() {
    return { start: undefined, end: undefined };
}
exports.Range = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.start !== undefined) {
            exports.Position.encode(message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.end !== undefined) {
            exports.Position.encode(message.end, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = exports.Position.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.end = exports.Position.decode(reader, reader.uint32());
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
            start: isSet(object.start) ? exports.Position.fromJSON(object.start) : undefined,
            end: isSet(object.end) ? exports.Position.fromJSON(object.end) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.start !== undefined &&
            (obj.start = message.start ? exports.Position.toJSON(message.start) : undefined);
        message.end !== undefined &&
            (obj.end = message.end ? exports.Position.toJSON(message.end) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseRange();
        message.start =
            object.start !== undefined && object.start !== null
                ? exports.Position.fromPartial(object.start)
                : undefined;
        message.end =
            object.end !== undefined && object.end !== null
                ? exports.Position.fromPartial(object.end)
                : undefined;
        return message;
    }
};
function createBasePosition() {
    return { Line: 0, Character: 0 };
}
exports.Position = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Line !== 0) {
            writer.uint32(8).int32(message.Line);
        }
        if (message.Character !== 0) {
            writer.uint32(16).int32(message.Character);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Line = reader.int32();
                    break;
                case 2:
                    message.Character = reader.int32();
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
            Line: isSet(object.Line) ? Number(object.Line) : 0,
            Character: isSet(object.Character) ? Number(object.Character) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Line !== undefined && (obj.Line = Math.round(message.Line));
        message.Character !== undefined &&
            (obj.Character = Math.round(message.Character));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePosition();
        message.Line = (_a = object.Line) !== null && _a !== void 0 ? _a : 0;
        message.Character = (_b = object.Character) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseExportCache() {
    return { Value: false };
}
exports.ExportCache = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.Value === true) {
            writer.uint32(8).bool(message.Value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExportCache();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Value = reader.bool();
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
            Value: isSet(object.Value) ? Boolean(object.Value) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.Value !== undefined && (obj.Value = message.Value);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseExportCache();
        message.Value = (_a = object.Value) !== null && _a !== void 0 ? _a : false;
        return message;
    }
};
function createBaseProgressGroup() {
    return { id: "", name: "", weak: false };
}
exports.ProgressGroup = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.weak === true) {
            writer.uint32(24).bool(message.weak);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProgressGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.weak = reader.bool();
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            weak: isSet(object.weak) ? Boolean(object.weak) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.weak !== undefined && (obj.weak = message.weak);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProgressGroup();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.weak = (_c = object.weak) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseProxyEnv() {
    return {
        httpProxy: "",
        httpsProxy: "",
        ftpProxy: "",
        noProxy: "",
        allProxy: ""
    };
}
exports.ProxyEnv = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.httpProxy !== "") {
            writer.uint32(10).string(message.httpProxy);
        }
        if (message.httpsProxy !== "") {
            writer.uint32(18).string(message.httpsProxy);
        }
        if (message.ftpProxy !== "") {
            writer.uint32(26).string(message.ftpProxy);
        }
        if (message.noProxy !== "") {
            writer.uint32(34).string(message.noProxy);
        }
        if (message.allProxy !== "") {
            writer.uint32(42).string(message.allProxy);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProxyEnv();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpProxy = reader.string();
                    break;
                case 2:
                    message.httpsProxy = reader.string();
                    break;
                case 3:
                    message.ftpProxy = reader.string();
                    break;
                case 4:
                    message.noProxy = reader.string();
                    break;
                case 5:
                    message.allProxy = reader.string();
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
            httpProxy: isSet(object.httpProxy) ? String(object.httpProxy) : "",
            httpsProxy: isSet(object.httpsProxy) ? String(object.httpsProxy) : "",
            ftpProxy: isSet(object.ftpProxy) ? String(object.ftpProxy) : "",
            noProxy: isSet(object.noProxy) ? String(object.noProxy) : "",
            allProxy: isSet(object.allProxy) ? String(object.allProxy) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.httpProxy !== undefined && (obj.httpProxy = message.httpProxy);
        message.httpsProxy !== undefined && (obj.httpsProxy = message.httpsProxy);
        message.ftpProxy !== undefined && (obj.ftpProxy = message.ftpProxy);
        message.noProxy !== undefined && (obj.noProxy = message.noProxy);
        message.allProxy !== undefined && (obj.allProxy = message.allProxy);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseProxyEnv();
        message.httpProxy = (_a = object.httpProxy) !== null && _a !== void 0 ? _a : "";
        message.httpsProxy = (_b = object.httpsProxy) !== null && _b !== void 0 ? _b : "";
        message.ftpProxy = (_c = object.ftpProxy) !== null && _c !== void 0 ? _c : "";
        message.noProxy = (_d = object.noProxy) !== null && _d !== void 0 ? _d : "";
        message.allProxy = (_e = object.allProxy) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseWorkerConstraints() {
    return { filter: [] };
}
exports.WorkerConstraints = {
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
        var message = createBaseWorkerConstraints();
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
        var message = createBaseWorkerConstraints();
        message.filter = ((_a = object.filter) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseDefinition() {
    return { def: [], metadata: {}, Source: undefined };
}
exports.Definition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.def; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        Object.entries(message.metadata).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            exports.Definition_MetadataEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.Source !== undefined) {
            exports.Source.encode(message.Source, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDefinition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.def.push(reader.bytes());
                    break;
                case 2:
                    var entry2 = exports.Definition_MetadataEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.metadata[entry2.key] = entry2.value;
                    }
                    break;
                case 3:
                    message.Source = exports.Source.decode(reader, reader.uint32());
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
            def: Array.isArray(object === null || object === void 0 ? void 0 : object.def)
                ? object.def.map(function (e) { return Buffer.from(bytesFromBase64(e)); })
                : [],
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce(function (acc, _a) {
                    var key = _a[0], value = _a[1];
                    acc[key] = exports.OpMetadata.fromJSON(value);
                    return acc;
                }, {})
                : {},
            Source: isSet(object.Source) ? exports.Source.fromJSON(object.Source) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.def) {
            obj.def = message.def.map(function (e) {
                return base64FromBytes(e !== undefined ? e : Buffer.alloc(0));
            });
        }
        else {
            obj.def = [];
        }
        obj.metadata = {};
        if (message.metadata) {
            Object.entries(message.metadata).forEach(function (_a) {
                var k = _a[0], v = _a[1];
                obj.metadata[k] = exports.OpMetadata.toJSON(v);
            });
        }
        message.Source !== undefined &&
            (obj.Source = message.Source ? exports.Source.toJSON(message.Source) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDefinition();
        message.def = ((_a = object.def) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.metadata = Object.entries((_b = object.metadata) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                acc[key] = exports.OpMetadata.fromPartial(value);
            }
            return acc;
        }, {});
        message.Source =
            object.Source !== undefined && object.Source !== null
                ? exports.Source.fromPartial(object.Source)
                : undefined;
        return message;
    }
};
function createBaseDefinition_MetadataEntry() {
    return { key: "", value: undefined };
}
exports.Definition_MetadataEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.OpMetadata.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDefinition_MetadataEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.OpMetadata.decode(reader, reader.uint32());
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
                ? exports.OpMetadata.fromJSON(object.value)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.OpMetadata.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDefinition_MetadataEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.OpMetadata.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseFileOp() {
    return { actions: [] };
}
exports.FileOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.actions; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.FileAction.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.actions.push(exports.FileAction.decode(reader, reader.uint32()));
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
            actions: Array.isArray(object === null || object === void 0 ? void 0 : object.actions)
                ? object.actions.map(function (e) { return exports.FileAction.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.actions) {
            obj.actions = message.actions.map(function (e) {
                return e ? exports.FileAction.toJSON(e) : undefined;
            });
        }
        else {
            obj.actions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFileOp();
        message.actions =
            ((_a = object.actions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.FileAction.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseFileAction() {
    return {
        input: 0,
        secondaryInput: 0,
        output: 0,
        copy: undefined,
        mkfile: undefined,
        mkdir: undefined,
        rm: undefined
    };
}
exports.FileAction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        if (message.secondaryInput !== 0) {
            writer.uint32(16).int64(message.secondaryInput);
        }
        if (message.output !== 0) {
            writer.uint32(24).int64(message.output);
        }
        if (message.copy !== undefined) {
            exports.FileActionCopy.encode(message.copy, writer.uint32(34).fork()).ldelim();
        }
        if (message.mkfile !== undefined) {
            exports.FileActionMkFile.encode(message.mkfile, writer.uint32(42).fork()).ldelim();
        }
        if (message.mkdir !== undefined) {
            exports.FileActionMkDir.encode(message.mkdir, writer.uint32(50).fork()).ldelim();
        }
        if (message.rm !== undefined) {
            exports.FileActionRm.encode(message.rm, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
                    break;
                case 2:
                    message.secondaryInput = longToNumber(reader.int64());
                    break;
                case 3:
                    message.output = longToNumber(reader.int64());
                    break;
                case 4:
                    message.copy = exports.FileActionCopy.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.mkfile = exports.FileActionMkFile.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.mkdir = exports.FileActionMkDir.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.rm = exports.FileActionRm.decode(reader, reader.uint32());
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
            input: isSet(object.input) ? Number(object.input) : 0,
            secondaryInput: isSet(object.secondaryInput)
                ? Number(object.secondaryInput)
                : 0,
            output: isSet(object.output) ? Number(object.output) : 0,
            copy: isSet(object.copy)
                ? exports.FileActionCopy.fromJSON(object.copy)
                : undefined,
            mkfile: isSet(object.mkfile)
                ? exports.FileActionMkFile.fromJSON(object.mkfile)
                : undefined,
            mkdir: isSet(object.mkdir)
                ? exports.FileActionMkDir.fromJSON(object.mkdir)
                : undefined,
            rm: isSet(object.rm) ? exports.FileActionRm.fromJSON(object.rm) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        message.secondaryInput !== undefined &&
            (obj.secondaryInput = Math.round(message.secondaryInput));
        message.output !== undefined && (obj.output = Math.round(message.output));
        message.copy !== undefined &&
            (obj.copy = message.copy
                ? exports.FileActionCopy.toJSON(message.copy)
                : undefined);
        message.mkfile !== undefined &&
            (obj.mkfile = message.mkfile
                ? exports.FileActionMkFile.toJSON(message.mkfile)
                : undefined);
        message.mkdir !== undefined &&
            (obj.mkdir = message.mkdir
                ? exports.FileActionMkDir.toJSON(message.mkdir)
                : undefined);
        message.rm !== undefined &&
            (obj.rm = message.rm ? exports.FileActionRm.toJSON(message.rm) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFileAction();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        message.secondaryInput = (_b = object.secondaryInput) !== null && _b !== void 0 ? _b : 0;
        message.output = (_c = object.output) !== null && _c !== void 0 ? _c : 0;
        message.copy =
            object.copy !== undefined && object.copy !== null
                ? exports.FileActionCopy.fromPartial(object.copy)
                : undefined;
        message.mkfile =
            object.mkfile !== undefined && object.mkfile !== null
                ? exports.FileActionMkFile.fromPartial(object.mkfile)
                : undefined;
        message.mkdir =
            object.mkdir !== undefined && object.mkdir !== null
                ? exports.FileActionMkDir.fromPartial(object.mkdir)
                : undefined;
        message.rm =
            object.rm !== undefined && object.rm !== null
                ? exports.FileActionRm.fromPartial(object.rm)
                : undefined;
        return message;
    }
};
function createBaseFileActionCopy() {
    return {
        src: "",
        dest: "",
        owner: undefined,
        mode: 0,
        followSymlink: false,
        dirCopyContents: false,
        attemptUnpackDockerCompatibility: false,
        createDestPath: false,
        allowWildcard: false,
        allowEmptyWildcard: false,
        timestamp: 0,
        includePatterns: [],
        excludePatterns: []
    };
}
exports.FileActionCopy = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.src !== "") {
            writer.uint32(10).string(message.src);
        }
        if (message.dest !== "") {
            writer.uint32(18).string(message.dest);
        }
        if (message.owner !== undefined) {
            exports.ChownOpt.encode(message.owner, writer.uint32(26).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(32).int32(message.mode);
        }
        if (message.followSymlink === true) {
            writer.uint32(40).bool(message.followSymlink);
        }
        if (message.dirCopyContents === true) {
            writer.uint32(48).bool(message.dirCopyContents);
        }
        if (message.attemptUnpackDockerCompatibility === true) {
            writer.uint32(56).bool(message.attemptUnpackDockerCompatibility);
        }
        if (message.createDestPath === true) {
            writer.uint32(64).bool(message.createDestPath);
        }
        if (message.allowWildcard === true) {
            writer.uint32(72).bool(message.allowWildcard);
        }
        if (message.allowEmptyWildcard === true) {
            writer.uint32(80).bool(message.allowEmptyWildcard);
        }
        if (message.timestamp !== 0) {
            writer.uint32(88).int64(message.timestamp);
        }
        for (var _i = 0, _a = message.includePatterns; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(98).string(v);
        }
        for (var _b = 0, _c = message.excludePatterns; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(106).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileActionCopy();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.src = reader.string();
                    break;
                case 2:
                    message.dest = reader.string();
                    break;
                case 3:
                    message.owner = exports.ChownOpt.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.mode = reader.int32();
                    break;
                case 5:
                    message.followSymlink = reader.bool();
                    break;
                case 6:
                    message.dirCopyContents = reader.bool();
                    break;
                case 7:
                    message.attemptUnpackDockerCompatibility = reader.bool();
                    break;
                case 8:
                    message.createDestPath = reader.bool();
                    break;
                case 9:
                    message.allowWildcard = reader.bool();
                    break;
                case 10:
                    message.allowEmptyWildcard = reader.bool();
                    break;
                case 11:
                    message.timestamp = longToNumber(reader.int64());
                    break;
                case 12:
                    message.includePatterns.push(reader.string());
                    break;
                case 13:
                    message.excludePatterns.push(reader.string());
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
            src: isSet(object.src) ? String(object.src) : "",
            dest: isSet(object.dest) ? String(object.dest) : "",
            owner: isSet(object.owner) ? exports.ChownOpt.fromJSON(object.owner) : undefined,
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            followSymlink: isSet(object.followSymlink)
                ? Boolean(object.followSymlink)
                : false,
            dirCopyContents: isSet(object.dirCopyContents)
                ? Boolean(object.dirCopyContents)
                : false,
            attemptUnpackDockerCompatibility: isSet(object.attemptUnpackDockerCompatibility)
                ? Boolean(object.attemptUnpackDockerCompatibility)
                : false,
            createDestPath: isSet(object.createDestPath)
                ? Boolean(object.createDestPath)
                : false,
            allowWildcard: isSet(object.allowWildcard)
                ? Boolean(object.allowWildcard)
                : false,
            allowEmptyWildcard: isSet(object.allowEmptyWildcard)
                ? Boolean(object.allowEmptyWildcard)
                : false,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
            includePatterns: Array.isArray(object === null || object === void 0 ? void 0 : object.includePatterns)
                ? object.includePatterns.map(function (e) { return String(e); })
                : [],
            excludePatterns: Array.isArray(object === null || object === void 0 ? void 0 : object.excludePatterns)
                ? object.excludePatterns.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.src !== undefined && (obj.src = message.src);
        message.dest !== undefined && (obj.dest = message.dest);
        message.owner !== undefined &&
            (obj.owner = message.owner ? exports.ChownOpt.toJSON(message.owner) : undefined);
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.followSymlink !== undefined &&
            (obj.followSymlink = message.followSymlink);
        message.dirCopyContents !== undefined &&
            (obj.dirCopyContents = message.dirCopyContents);
        message.attemptUnpackDockerCompatibility !== undefined &&
            (obj.attemptUnpackDockerCompatibility =
                message.attemptUnpackDockerCompatibility);
        message.createDestPath !== undefined &&
            (obj.createDestPath = message.createDestPath);
        message.allowWildcard !== undefined &&
            (obj.allowWildcard = message.allowWildcard);
        message.allowEmptyWildcard !== undefined &&
            (obj.allowEmptyWildcard = message.allowEmptyWildcard);
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        if (message.includePatterns) {
            obj.includePatterns = message.includePatterns.map(function (e) { return e; });
        }
        else {
            obj.includePatterns = [];
        }
        if (message.excludePatterns) {
            obj.excludePatterns = message.excludePatterns.map(function (e) { return e; });
        }
        else {
            obj.excludePatterns = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseFileActionCopy();
        message.src = (_a = object.src) !== null && _a !== void 0 ? _a : "";
        message.dest = (_b = object.dest) !== null && _b !== void 0 ? _b : "";
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? exports.ChownOpt.fromPartial(object.owner)
                : undefined;
        message.mode = (_c = object.mode) !== null && _c !== void 0 ? _c : 0;
        message.followSymlink = (_d = object.followSymlink) !== null && _d !== void 0 ? _d : false;
        message.dirCopyContents = (_e = object.dirCopyContents) !== null && _e !== void 0 ? _e : false;
        message.attemptUnpackDockerCompatibility =
            (_f = object.attemptUnpackDockerCompatibility) !== null && _f !== void 0 ? _f : false;
        message.createDestPath = (_g = object.createDestPath) !== null && _g !== void 0 ? _g : false;
        message.allowWildcard = (_h = object.allowWildcard) !== null && _h !== void 0 ? _h : false;
        message.allowEmptyWildcard = (_j = object.allowEmptyWildcard) !== null && _j !== void 0 ? _j : false;
        message.timestamp = (_k = object.timestamp) !== null && _k !== void 0 ? _k : 0;
        message.includePatterns = ((_l = object.includePatterns) === null || _l === void 0 ? void 0 : _l.map(function (e) { return e; })) || [];
        message.excludePatterns = ((_m = object.excludePatterns) === null || _m === void 0 ? void 0 : _m.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseFileActionMkFile() {
    return {
        path: "",
        mode: 0,
        data: Buffer.alloc(0),
        owner: undefined,
        timestamp: 0
    };
}
exports.FileActionMkFile = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.owner !== undefined) {
            exports.ChownOpt.encode(message.owner, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileActionMkFile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.mode = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.owner = exports.ChownOpt.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = longToNumber(reader.int64());
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
            path: isSet(object.path) ? String(object.path) : "",
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            data: isSet(object.data)
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0),
            owner: isSet(object.owner) ? exports.ChownOpt.fromJSON(object.owner) : undefined,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        message.owner !== undefined &&
            (obj.owner = message.owner ? exports.ChownOpt.toJSON(message.owner) : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFileActionMkFile();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? exports.ChownOpt.fromPartial(object.owner)
                : undefined;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseFileActionMkDir() {
    return {
        path: "",
        mode: 0,
        makeParents: false,
        owner: undefined,
        timestamp: 0
    };
}
exports.FileActionMkDir = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        if (message.makeParents === true) {
            writer.uint32(24).bool(message.makeParents);
        }
        if (message.owner !== undefined) {
            exports.ChownOpt.encode(message.owner, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).int64(message.timestamp);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileActionMkDir();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.mode = reader.int32();
                    break;
                case 3:
                    message.makeParents = reader.bool();
                    break;
                case 4:
                    message.owner = exports.ChownOpt.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = longToNumber(reader.int64());
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
            path: isSet(object.path) ? String(object.path) : "",
            mode: isSet(object.mode) ? Number(object.mode) : 0,
            makeParents: isSet(object.makeParents)
                ? Boolean(object.makeParents)
                : false,
            owner: isSet(object.owner) ? exports.ChownOpt.fromJSON(object.owner) : undefined,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.mode !== undefined && (obj.mode = Math.round(message.mode));
        message.makeParents !== undefined &&
            (obj.makeParents = message.makeParents);
        message.owner !== undefined &&
            (obj.owner = message.owner ? exports.ChownOpt.toJSON(message.owner) : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = Math.round(message.timestamp));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseFileActionMkDir();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        message.makeParents = (_c = object.makeParents) !== null && _c !== void 0 ? _c : false;
        message.owner =
            object.owner !== undefined && object.owner !== null
                ? exports.ChownOpt.fromPartial(object.owner)
                : undefined;
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : 0;
        return message;
    }
};
function createBaseFileActionRm() {
    return { path: "", allowNotFound: false, allowWildcard: false };
}
exports.FileActionRm = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.allowNotFound === true) {
            writer.uint32(16).bool(message.allowNotFound);
        }
        if (message.allowWildcard === true) {
            writer.uint32(24).bool(message.allowWildcard);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileActionRm();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.allowNotFound = reader.bool();
                    break;
                case 3:
                    message.allowWildcard = reader.bool();
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
            path: isSet(object.path) ? String(object.path) : "",
            allowNotFound: isSet(object.allowNotFound)
                ? Boolean(object.allowNotFound)
                : false,
            allowWildcard: isSet(object.allowWildcard)
                ? Boolean(object.allowWildcard)
                : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.allowNotFound !== undefined &&
            (obj.allowNotFound = message.allowNotFound);
        message.allowWildcard !== undefined &&
            (obj.allowWildcard = message.allowWildcard);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFileActionRm();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.allowNotFound = (_b = object.allowNotFound) !== null && _b !== void 0 ? _b : false;
        message.allowWildcard = (_c = object.allowWildcard) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseChownOpt() {
    return { user: undefined, group: undefined };
}
exports.ChownOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.user !== undefined) {
            exports.UserOpt.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.group !== undefined) {
            exports.UserOpt.encode(message.group, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChownOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = exports.UserOpt.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.group = exports.UserOpt.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.UserOpt.fromJSON(object.user) : undefined,
            group: isSet(object.group) ? exports.UserOpt.fromJSON(object.group) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.user !== undefined &&
            (obj.user = message.user ? exports.UserOpt.toJSON(message.user) : undefined);
        message.group !== undefined &&
            (obj.group = message.group ? exports.UserOpt.toJSON(message.group) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseChownOpt();
        message.user =
            object.user !== undefined && object.user !== null
                ? exports.UserOpt.fromPartial(object.user)
                : undefined;
        message.group =
            object.group !== undefined && object.group !== null
                ? exports.UserOpt.fromPartial(object.group)
                : undefined;
        return message;
    }
};
function createBaseUserOpt() {
    return { byName: undefined, byID: undefined };
}
exports.UserOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.byName !== undefined) {
            exports.NamedUserOpt.encode(message.byName, writer.uint32(10).fork()).ldelim();
        }
        if (message.byID !== undefined) {
            writer.uint32(16).uint32(message.byID);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUserOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.byName = exports.NamedUserOpt.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.byID = reader.uint32();
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
            byName: isSet(object.byName)
                ? exports.NamedUserOpt.fromJSON(object.byName)
                : undefined,
            byID: isSet(object.byID) ? Number(object.byID) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.byName !== undefined &&
            (obj.byName = message.byName
                ? exports.NamedUserOpt.toJSON(message.byName)
                : undefined);
        message.byID !== undefined && (obj.byID = Math.round(message.byID));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUserOpt();
        message.byName =
            object.byName !== undefined && object.byName !== null
                ? exports.NamedUserOpt.fromPartial(object.byName)
                : undefined;
        message.byID = (_a = object.byID) !== null && _a !== void 0 ? _a : undefined;
        return message;
    }
};
function createBaseNamedUserOpt() {
    return { name: "", input: 0 };
}
exports.NamedUserOpt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.input !== 0) {
            writer.uint32(16).int64(message.input);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNamedUserOpt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.input = longToNumber(reader.int64());
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
            name: isSet(object.name) ? String(object.name) : "",
            input: isSet(object.input) ? Number(object.input) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.input !== undefined && (obj.input = Math.round(message.input));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNamedUserOpt();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.input = (_b = object.input) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseMergeInput() {
    return { input: 0 };
}
exports.MergeInput = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMergeInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
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
            input: isSet(object.input) ? Number(object.input) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMergeInput();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseMergeOp() {
    return { inputs: [] };
}
exports.MergeOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.inputs; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.MergeInput.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMergeOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(exports.MergeInput.decode(reader, reader.uint32()));
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
            inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs)
                ? object.inputs.map(function (e) { return exports.MergeInput.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(function (e) {
                return e ? exports.MergeInput.toJSON(e) : undefined;
            });
        }
        else {
            obj.inputs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMergeOp();
        message.inputs = ((_a = object.inputs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.MergeInput.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseLowerDiffInput() {
    return { input: 0 };
}
exports.LowerDiffInput = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLowerDiffInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
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
            input: isSet(object.input) ? Number(object.input) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLowerDiffInput();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseUpperDiffInput() {
    return { input: 0 };
}
exports.UpperDiffInput = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.input !== 0) {
            writer.uint32(8).int64(message.input);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpperDiffInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.input = longToNumber(reader.int64());
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
            input: isSet(object.input) ? Number(object.input) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.input !== undefined && (obj.input = Math.round(message.input));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpperDiffInput();
        message.input = (_a = object.input) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseDiffOp() {
    return { lower: undefined, upper: undefined };
}
exports.DiffOp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.lower !== undefined) {
            exports.LowerDiffInput.encode(message.lower, writer.uint32(10).fork()).ldelim();
        }
        if (message.upper !== undefined) {
            exports.UpperDiffInput.encode(message.upper, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDiffOp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lower = exports.LowerDiffInput.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.upper = exports.UpperDiffInput.decode(reader, reader.uint32());
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
            lower: isSet(object.lower)
                ? exports.LowerDiffInput.fromJSON(object.lower)
                : undefined,
            upper: isSet(object.upper)
                ? exports.UpperDiffInput.fromJSON(object.upper)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.lower !== undefined &&
            (obj.lower = message.lower
                ? exports.LowerDiffInput.toJSON(message.lower)
                : undefined);
        message.upper !== undefined &&
            (obj.upper = message.upper
                ? exports.UpperDiffInput.toJSON(message.upper)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseDiffOp();
        message.lower =
            object.lower !== undefined && object.lower !== null
                ? exports.LowerDiffInput.fromPartial(object.lower)
                : undefined;
        message.upper =
            object.upper !== undefined && object.upper !== null
                ? exports.UpperDiffInput.fromPartial(object.upper)
                : undefined;
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
