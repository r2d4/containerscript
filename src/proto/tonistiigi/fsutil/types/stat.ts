/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "fsutil.types";

export interface Stat {
  path: string;
  mode: number;
  uid: number;
  gid: number;
  size: number;
  modTime: number;
  /** int32 typeflag = 7; */
  linkname: string;
  devmajor: number;
  devminor: number;
  xattrs: { [key: string]: Buffer };
}

export interface Stat_XattrsEntry {
  key: string;
  value: Buffer;
}

function createBaseStat(): Stat {
  return {
    path: "",
    mode: 0,
    uid: 0,
    gid: 0,
    size: 0,
    modTime: 0,
    linkname: "",
    devmajor: 0,
    devminor: 0,
    xattrs: {},
  };
}

export const Stat = {
  encode(message: Stat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.mode !== 0) {
      writer.uint32(16).uint32(message.mode);
    }
    if (message.uid !== 0) {
      writer.uint32(24).uint32(message.uid);
    }
    if (message.gid !== 0) {
      writer.uint32(32).uint32(message.gid);
    }
    if (message.size !== 0) {
      writer.uint32(40).int64(message.size);
    }
    if (message.modTime !== 0) {
      writer.uint32(48).int64(message.modTime);
    }
    if (message.linkname !== "") {
      writer.uint32(58).string(message.linkname);
    }
    if (message.devmajor !== 0) {
      writer.uint32(64).int64(message.devmajor);
    }
    if (message.devminor !== 0) {
      writer.uint32(72).int64(message.devminor);
    }
    Object.entries(message.xattrs).forEach(([key, value]) => {
      Stat_XattrsEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.mode = reader.uint32();
          break;
        case 3:
          message.uid = reader.uint32();
          break;
        case 4:
          message.gid = reader.uint32();
          break;
        case 5:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.modTime = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.linkname = reader.string();
          break;
        case 8:
          message.devmajor = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.devminor = longToNumber(reader.int64() as Long);
          break;
        case 10:
          const entry10 = Stat_XattrsEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.xattrs[entry10.key] = entry10.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Stat {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      mode: isSet(object.mode) ? Number(object.mode) : 0,
      uid: isSet(object.uid) ? Number(object.uid) : 0,
      gid: isSet(object.gid) ? Number(object.gid) : 0,
      size: isSet(object.size) ? Number(object.size) : 0,
      modTime: isSet(object.modTime) ? Number(object.modTime) : 0,
      linkname: isSet(object.linkname) ? String(object.linkname) : "",
      devmajor: isSet(object.devmajor) ? Number(object.devmajor) : 0,
      devminor: isSet(object.devminor) ? Number(object.devminor) : 0,
      xattrs: isObject(object.xattrs)
        ? Object.entries(object.xattrs).reduce<{ [key: string]: Buffer }>(
            (acc, [key, value]) => {
              acc[key] = Buffer.from(bytesFromBase64(value as string));
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Stat): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.mode !== undefined && (obj.mode = Math.round(message.mode));
    message.uid !== undefined && (obj.uid = Math.round(message.uid));
    message.gid !== undefined && (obj.gid = Math.round(message.gid));
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.modTime !== undefined &&
      (obj.modTime = Math.round(message.modTime));
    message.linkname !== undefined && (obj.linkname = message.linkname);
    message.devmajor !== undefined &&
      (obj.devmajor = Math.round(message.devmajor));
    message.devminor !== undefined &&
      (obj.devminor = Math.round(message.devminor));
    obj.xattrs = {};
    if (message.xattrs) {
      Object.entries(message.xattrs).forEach(([k, v]) => {
        obj.xattrs[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stat>, I>>(object: I): Stat {
    const message = createBaseStat();
    message.path = object.path ?? "";
    message.mode = object.mode ?? 0;
    message.uid = object.uid ?? 0;
    message.gid = object.gid ?? 0;
    message.size = object.size ?? 0;
    message.modTime = object.modTime ?? 0;
    message.linkname = object.linkname ?? "";
    message.devmajor = object.devmajor ?? 0;
    message.devminor = object.devminor ?? 0;
    message.xattrs = Object.entries(object.xattrs ?? {}).reduce<{
      [key: string]: Buffer;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseStat_XattrsEntry(): Stat_XattrsEntry {
  return { key: "", value: Buffer.alloc(0) };
}

export const Stat_XattrsEntry = {
  encode(
    message: Stat_XattrsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stat_XattrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStat_XattrsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Stat_XattrsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? Buffer.from(bytesFromBase64(object.value))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: Stat_XattrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stat_XattrsEntry>, I>>(
    object: I
  ): Stat_XattrsEntry {
    const message = createBaseStat_XattrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? Buffer.alloc(0);
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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
