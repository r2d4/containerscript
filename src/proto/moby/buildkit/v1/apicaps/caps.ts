/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "moby.buildkit.v1.apicaps";

/** APICap defines a capability supported by the service */
export interface APICap {
  ID: string;
  Enabled: boolean;
  /** Unused. May be used for warnings in the future */
  Deprecated: boolean;
  /** Reason key for detection code */
  DisabledReason: string;
  /** Message to the user */
  DisabledReasonMsg: string;
  /** Identifier that updated client could catch. */
  DisabledAlternative: string;
}

function createBaseAPICap(): APICap {
  return {
    ID: "",
    Enabled: false,
    Deprecated: false,
    DisabledReason: "",
    DisabledReasonMsg: "",
    DisabledAlternative: "",
  };
}

export const APICap = {
  encode(
    message: APICap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Enabled === true) {
      writer.uint32(16).bool(message.Enabled);
    }
    if (message.Deprecated === true) {
      writer.uint32(24).bool(message.Deprecated);
    }
    if (message.DisabledReason !== "") {
      writer.uint32(34).string(message.DisabledReason);
    }
    if (message.DisabledReasonMsg !== "") {
      writer.uint32(42).string(message.DisabledReasonMsg);
    }
    if (message.DisabledAlternative !== "") {
      writer.uint32(50).string(message.DisabledAlternative);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APICap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPICap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;
        case 2:
          message.Enabled = reader.bool();
          break;
        case 3:
          message.Deprecated = reader.bool();
          break;
        case 4:
          message.DisabledReason = reader.string();
          break;
        case 5:
          message.DisabledReasonMsg = reader.string();
          break;
        case 6:
          message.DisabledAlternative = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): APICap {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      Enabled: isSet(object.Enabled) ? Boolean(object.Enabled) : false,
      Deprecated: isSet(object.Deprecated) ? Boolean(object.Deprecated) : false,
      DisabledReason: isSet(object.DisabledReason)
        ? String(object.DisabledReason)
        : "",
      DisabledReasonMsg: isSet(object.DisabledReasonMsg)
        ? String(object.DisabledReasonMsg)
        : "",
      DisabledAlternative: isSet(object.DisabledAlternative)
        ? String(object.DisabledAlternative)
        : "",
    };
  },

  toJSON(message: APICap): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.Enabled !== undefined && (obj.Enabled = message.Enabled);
    message.Deprecated !== undefined && (obj.Deprecated = message.Deprecated);
    message.DisabledReason !== undefined &&
      (obj.DisabledReason = message.DisabledReason);
    message.DisabledReasonMsg !== undefined &&
      (obj.DisabledReasonMsg = message.DisabledReasonMsg);
    message.DisabledAlternative !== undefined &&
      (obj.DisabledAlternative = message.DisabledAlternative);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<APICap>, I>>(object: I): APICap {
    const message = createBaseAPICap();
    message.ID = object.ID ?? "";
    message.Enabled = object.Enabled ?? false;
    message.Deprecated = object.Deprecated ?? false;
    message.DisabledReason = object.DisabledReason ?? "";
    message.DisabledReasonMsg = object.DisabledReasonMsg ?? "";
    message.DisabledAlternative = object.DisabledAlternative ?? "";
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
