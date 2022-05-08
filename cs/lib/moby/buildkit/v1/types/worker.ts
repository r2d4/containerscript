/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Platform } from "../../../../pb/ops";

export const protobufPackage = "moby.buildkit.v1.types";

export interface WorkerRecord {
  ID: string;
  Labels: { [key: string]: string };
  platforms: Platform[];
  GCPolicy: GCPolicy[];
  BuildkitVersion?: BuildkitVersion;
}

export interface WorkerRecord_LabelsEntry {
  key: string;
  value: string;
}

export interface GCPolicy {
  all: boolean;
  keepDuration: number;
  keepBytes: number;
  filters: string[];
}

export interface BuildkitVersion {
  package: string;
  version: string;
  revision: string;
}

function createBaseWorkerRecord(): WorkerRecord {
  return {
    ID: "",
    Labels: {},
    platforms: [],
    GCPolicy: [],
    BuildkitVersion: undefined,
  };
}

export const WorkerRecord = {
  encode(
    message: WorkerRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      WorkerRecord_LabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    for (const v of message.platforms) {
      Platform.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.GCPolicy) {
      GCPolicy.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.BuildkitVersion !== undefined) {
      BuildkitVersion.encode(
        message.BuildkitVersion,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkerRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkerRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          const entry2 = WorkerRecord_LabelsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.Labels[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.platforms.push(Platform.decode(reader, reader.uint32()));
          break;
        case 4:
          message.GCPolicy.push(GCPolicy.decode(reader, reader.uint32()));
          break;
        case 5:
          message.BuildkitVersion = BuildkitVersion.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorkerRecord {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Labels: isObject(object.Labels)
        ? Object.entries(object.Labels).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      platforms: Array.isArray(object?.platforms)
        ? object.platforms.map((e: any) => Platform.fromJSON(e))
        : [],
      GCPolicy: Array.isArray(object?.GCPolicy)
        ? object.GCPolicy.map((e: any) => GCPolicy.fromJSON(e))
        : [],
      BuildkitVersion: isSet(object.BuildkitVersion)
        ? BuildkitVersion.fromJSON(object.BuildkitVersion)
        : undefined,
    };
  },

  toJSON(message: WorkerRecord): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    obj.Labels = {};
    if (message.Labels) {
      Object.entries(message.Labels).forEach(([k, v]) => {
        obj.Labels[k] = v;
      });
    }
    if (message.platforms) {
      obj.platforms = message.platforms.map((e) =>
        e ? Platform.toJSON(e) : undefined
      );
    } else {
      obj.platforms = [];
    }
    if (message.GCPolicy) {
      obj.GCPolicy = message.GCPolicy.map((e) =>
        e ? GCPolicy.toJSON(e) : undefined
      );
    } else {
      obj.GCPolicy = [];
    }
    message.BuildkitVersion !== undefined &&
      (obj.BuildkitVersion = message.BuildkitVersion
        ? BuildkitVersion.toJSON(message.BuildkitVersion)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkerRecord>, I>>(
    object: I
  ): WorkerRecord {
    const message = createBaseWorkerRecord();
    message.ID = object.ID ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.platforms =
      object.platforms?.map((e) => Platform.fromPartial(e)) || [];
    message.GCPolicy =
      object.GCPolicy?.map((e) => GCPolicy.fromPartial(e)) || [];
    message.BuildkitVersion =
      object.BuildkitVersion !== undefined && object.BuildkitVersion !== null
        ? BuildkitVersion.fromPartial(object.BuildkitVersion)
        : undefined;
    return message;
  },
};

function createBaseWorkerRecord_LabelsEntry(): WorkerRecord_LabelsEntry {
  return { key: "", value: "" };
}

export const WorkerRecord_LabelsEntry = {
  encode(
    message: WorkerRecord_LabelsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WorkerRecord_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkerRecord_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): WorkerRecord_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: WorkerRecord_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorkerRecord_LabelsEntry>, I>>(
    object: I
  ): WorkerRecord_LabelsEntry {
    const message = createBaseWorkerRecord_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGCPolicy(): GCPolicy {
  return { all: false, keepDuration: 0, keepBytes: 0, filters: [] };
}

export const GCPolicy = {
  encode(
    message: GCPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.all === true) {
      writer.uint32(8).bool(message.all);
    }
    if (message.keepDuration !== 0) {
      writer.uint32(16).int64(message.keepDuration);
    }
    if (message.keepBytes !== 0) {
      writer.uint32(24).int64(message.keepBytes);
    }
    for (const v of message.filters) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GCPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGCPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.all = reader.bool();
          break;
        case 2:
          message.keepDuration = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.keepBytes = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): GCPolicy {
    return {
      all: isSet(object.all) ? Boolean(object.all) : false,
      keepDuration: isSet(object.keepDuration)
        ? Number(object.keepDuration)
        : 0,
      keepBytes: isSet(object.keepBytes) ? Number(object.keepBytes) : 0,
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GCPolicy): unknown {
    const obj: any = {};
    message.all !== undefined && (obj.all = message.all);
    message.keepDuration !== undefined &&
      (obj.keepDuration = Math.round(message.keepDuration));
    message.keepBytes !== undefined &&
      (obj.keepBytes = Math.round(message.keepBytes));
    if (message.filters) {
      obj.filters = message.filters.map((e) => e);
    } else {
      obj.filters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GCPolicy>, I>>(object: I): GCPolicy {
    const message = createBaseGCPolicy();
    message.all = object.all ?? false;
    message.keepDuration = object.keepDuration ?? 0;
    message.keepBytes = object.keepBytes ?? 0;
    message.filters = object.filters?.map((e) => e) || [];
    return message;
  },
};

function createBaseBuildkitVersion(): BuildkitVersion {
  return { package: "", version: "", revision: "" };
}

export const BuildkitVersion = {
  encode(
    message: BuildkitVersion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildkitVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildkitVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): BuildkitVersion {
    return {
      package: isSet(object.package) ? String(object.package) : "",
      version: isSet(object.version) ? String(object.version) : "",
      revision: isSet(object.revision) ? String(object.revision) : "",
    };
  },

  toJSON(message: BuildkitVersion): unknown {
    const obj: any = {};
    message.package !== undefined && (obj.package = message.package);
    message.version !== undefined && (obj.version = message.version);
    message.revision !== undefined && (obj.revision = message.revision);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuildkitVersion>, I>>(
    object: I
  ): BuildkitVersion {
    const message = createBaseBuildkitVersion();
    message.package = object.package ?? "";
    message.version = object.version ?? "";
    message.revision = object.revision ?? "";
    return message;
  },
};

export interface DataLoaderOptions {
  cache?: boolean;
}

export interface DataLoaders {
  rpcDataLoaderOptions?: DataLoaderOptions;
  getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
