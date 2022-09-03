/* eslint-disable */
import Long from "long";
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  handleBidiStreamingCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ClientDuplexStream,
  ServiceError,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";
import {
  Definition,
  Platform,
  SourceInfo,
  NetMode,
  WorkerConstraints,
  Meta,
  SecurityMode,
  Range,
  Mount,
  HostIP,
  netModeFromJSON,
  netModeToJSON,
  securityModeFromJSON,
  securityModeToJSON,
} from "../../../../pb/ops";
import { Status } from "../../../../google/rpc/status";
import { Stat } from "../../../../tonistiigi/fsutil/types/stat";
import { APICap } from "../../../../moby/buildkit/v1/apicaps/caps";
import { WorkerRecord } from "../../../../moby/buildkit/v1/types/worker";

export const protobufPackage = "moby.buildkit.v1.frontend";

export interface Result {
  /** Deprecated non-array refs. */
  refDeprecated: string | undefined;
  refsDeprecated?: RefMapDeprecated | undefined;
  ref?: Ref | undefined;
  refs?: RefMap | undefined;
  metadata: { [key: string]: Buffer };
}

export interface Result_MetadataEntry {
  key: string;
  value: Buffer;
}

export interface RefMapDeprecated {
  refs: { [key: string]: string };
}

export interface RefMapDeprecated_RefsEntry {
  key: string;
  value: string;
}

export interface Ref {
  id: string;
  def?: Definition;
}

export interface RefMap {
  refs: { [key: string]: Ref };
}

export interface RefMap_RefsEntry {
  key: string;
  value?: Ref;
}

export interface ReturnRequest {
  result?: Result;
  error?: Status;
}

export interface ReturnResponse {}

export interface InputsRequest {}

export interface InputsResponse {
  Definitions: { [key: string]: Definition };
}

export interface InputsResponse_DefinitionsEntry {
  key: string;
  value?: Definition;
}

export interface ResolveImageConfigRequest {
  Ref: string;
  Platform?: Platform;
  ResolveMode: string;
  LogName: string;
}

export interface ResolveImageConfigResponse {
  Digest: string;
  Config: Buffer;
}

export interface SolveRequest {
  Definition?: Definition;
  Frontend: string;
  FrontendOpt: { [key: string]: string };
  /** 4 was removed in BuildKit v0.11.0. */
  allowResultReturn: boolean;
  allowResultArrayRef: boolean;
  /** apicaps.CapSolveInlineReturn deprecated */
  Final: boolean;
  ExporterAttr: Buffer;
  /**
   * CacheImports was added in BuildKit v0.4.0.
   * apicaps:CapImportCaches
   */
  CacheImports: CacheOptionsEntry[];
  /** apicaps:CapFrontendInputs */
  FrontendInputs: { [key: string]: Definition };
  Evaluate: boolean;
}

export interface SolveRequest_FrontendOptEntry {
  key: string;
  value: string;
}

export interface SolveRequest_FrontendInputsEntry {
  key: string;
  value?: Definition;
}

/** CacheOptionsEntry corresponds to the control.CacheOptionsEntry */
export interface CacheOptionsEntry {
  Type: string;
  Attrs: { [key: string]: string };
}

export interface CacheOptionsEntry_AttrsEntry {
  key: string;
  value: string;
}

export interface SolveResponse {
  /** deprecated */
  ref: string;
  /** these fields are returned when allowMapReturn was set */
  result?: Result;
}

export interface ReadFileRequest {
  Ref: string;
  FilePath: string;
  Range?: FileRange;
}

export interface FileRange {
  Offset: number;
  Length: number;
}

export interface ReadFileResponse {
  Data: Buffer;
}

export interface ReadDirRequest {
  Ref: string;
  DirPath: string;
  IncludePattern: string;
}

export interface ReadDirResponse {
  entries: Stat[];
}

export interface StatFileRequest {
  Ref: string;
  Path: string;
}

export interface StatFileResponse {
  stat?: Stat;
}

export interface PingRequest {}

export interface PongResponse {
  FrontendAPICaps: APICap[];
  LLBCaps: APICap[];
  Workers: WorkerRecord[];
}

export interface WarnRequest {
  digest: string;
  level: number;
  short: Buffer;
  detail: Buffer[];
  url: string;
  info?: SourceInfo;
  ranges: Range[];
}

export interface WarnResponse {}

export interface NewContainerRequest {
  ContainerID: string;
  /** For mount input values we can use random identifiers passed with ref */
  Mounts: Mount[];
  Network: NetMode;
  platform?: Platform;
  constraints?: WorkerConstraints;
  extraHosts: HostIP[];
}

export interface NewContainerResponse {}

export interface ReleaseContainerRequest {
  ContainerID: string;
}

export interface ReleaseContainerResponse {}

export interface ExecMessage {
  ProcessID: string;
  /**
   * InitMessage sent from client to server will start a new process in a
   * container
   */
  Init?: InitMessage | undefined;
  /**
   * FdMessage used from client to server for input (stdin) and
   * from server to client for output (stdout, stderr)
   */
  File?: FdMessage | undefined;
  /** ResizeMessage used from client to server for terminal resize events */
  Resize?: ResizeMessage | undefined;
  /**
   * StartedMessage sent from server to client after InitMessage to
   * indicate the process has started.
   */
  Started?: StartedMessage | undefined;
  /**
   * ExitMessage sent from server to client will contain the exit code
   * when the process ends.
   */
  Exit?: ExitMessage | undefined;
  /**
   * DoneMessage from server to client will be the last message for any
   * process.  Note that FdMessage might be sent after ExitMessage.
   */
  Done?: DoneMessage | undefined;
  /** SignalMessage is used from client to server to send signal events */
  Signal?: SignalMessage | undefined;
}

export interface InitMessage {
  ContainerID: string;
  Meta?: Meta;
  Fds: number[];
  Tty: boolean;
  Security: SecurityMode;
}

export interface ExitMessage {
  Code: number;
  Error?: Status;
}

export interface StartedMessage {}

export interface DoneMessage {}

export interface FdMessage {
  /** what fd the data was from */
  Fd: number;
  /** true if eof was reached */
  EOF: boolean;
  Data: Buffer;
}

export interface ResizeMessage {
  Rows: number;
  Cols: number;
}

export interface SignalMessage {
  /**
   * we only send name (ie HUP, INT) because the int values
   * are platform dependent.
   */
  Name: string;
}

function createBaseResult(): Result {
  return {
    refDeprecated: undefined,
    refsDeprecated: undefined,
    ref: undefined,
    refs: undefined,
    metadata: {},
  };
}

export const Result = {
  encode(
    message: Result,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.refDeprecated !== undefined) {
      writer.uint32(10).string(message.refDeprecated);
    }
    if (message.refsDeprecated !== undefined) {
      RefMapDeprecated.encode(
        message.refsDeprecated,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ref !== undefined) {
      Ref.encode(message.ref, writer.uint32(26).fork()).ldelim();
    }
    if (message.refs !== undefined) {
      RefMap.encode(message.refs, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      Result_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refDeprecated = reader.string();
          break;
        case 2:
          message.refsDeprecated = RefMapDeprecated.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.ref = Ref.decode(reader, reader.uint32());
          break;
        case 4:
          message.refs = RefMap.decode(reader, reader.uint32());
          break;
        case 10:
          const entry10 = Result_MetadataEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.metadata[entry10.key] = entry10.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Result {
    return {
      refDeprecated: isSet(object.refDeprecated)
        ? String(object.refDeprecated)
        : undefined,
      refsDeprecated: isSet(object.refsDeprecated)
        ? RefMapDeprecated.fromJSON(object.refsDeprecated)
        : undefined,
      ref: isSet(object.ref) ? Ref.fromJSON(object.ref) : undefined,
      refs: isSet(object.refs) ? RefMap.fromJSON(object.refs) : undefined,
      metadata: isObject(object.metadata)
        ? Object.entries(object.metadata).reduce<{ [key: string]: Buffer }>(
            (acc, [key, value]) => {
              acc[key] = Buffer.from(bytesFromBase64(value as string));
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.refDeprecated !== undefined &&
      (obj.refDeprecated = message.refDeprecated);
    message.refsDeprecated !== undefined &&
      (obj.refsDeprecated = message.refsDeprecated
        ? RefMapDeprecated.toJSON(message.refsDeprecated)
        : undefined);
    message.ref !== undefined &&
      (obj.ref = message.ref ? Ref.toJSON(message.ref) : undefined);
    message.refs !== undefined &&
      (obj.refs = message.refs ? RefMap.toJSON(message.refs) : undefined);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = base64FromBytes(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.refDeprecated = object.refDeprecated ?? undefined;
    message.refsDeprecated =
      object.refsDeprecated !== undefined && object.refsDeprecated !== null
        ? RefMapDeprecated.fromPartial(object.refsDeprecated)
        : undefined;
    message.ref =
      object.ref !== undefined && object.ref !== null
        ? Ref.fromPartial(object.ref)
        : undefined;
    message.refs =
      object.refs !== undefined && object.refs !== null
        ? RefMap.fromPartial(object.refs)
        : undefined;
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
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

function createBaseResult_MetadataEntry(): Result_MetadataEntry {
  return { key: "", value: Buffer.alloc(0) };
}

export const Result_MetadataEntry = {
  encode(
    message: Result_MetadataEntry,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Result_MetadataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult_MetadataEntry();
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

  fromJSON(object: any): Result_MetadataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? Buffer.from(bytesFromBase64(object.value))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: Result_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Result_MetadataEntry>, I>>(
    object: I
  ): Result_MetadataEntry {
    const message = createBaseResult_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseRefMapDeprecated(): RefMapDeprecated {
  return { refs: {} };
}

export const RefMapDeprecated = {
  encode(
    message: RefMapDeprecated,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.refs).forEach(([key, value]) => {
      RefMapDeprecated_RefsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefMapDeprecated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefMapDeprecated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = RefMapDeprecated_RefsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.refs[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefMapDeprecated {
    return {
      refs: isObject(object.refs)
        ? Object.entries(object.refs).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: RefMapDeprecated): unknown {
    const obj: any = {};
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefMapDeprecated>, I>>(
    object: I
  ): RefMapDeprecated {
    const message = createBaseRefMapDeprecated();
    message.refs = Object.entries(object.refs ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRefMapDeprecated_RefsEntry(): RefMapDeprecated_RefsEntry {
  return { key: "", value: "" };
}

export const RefMapDeprecated_RefsEntry = {
  encode(
    message: RefMapDeprecated_RefsEntry,
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
  ): RefMapDeprecated_RefsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefMapDeprecated_RefsEntry();
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

  fromJSON(object: any): RefMapDeprecated_RefsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: RefMapDeprecated_RefsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefMapDeprecated_RefsEntry>, I>>(
    object: I
  ): RefMapDeprecated_RefsEntry {
    const message = createBaseRefMapDeprecated_RefsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRef(): Ref {
  return { id: "", def: undefined };
}

export const Ref = {
  encode(message: Ref, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.def !== undefined) {
      Definition.encode(message.def, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ref {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.def = Definition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ref {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      def: isSet(object.def) ? Definition.fromJSON(object.def) : undefined,
    };
  },

  toJSON(message: Ref): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.def !== undefined &&
      (obj.def = message.def ? Definition.toJSON(message.def) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ref>, I>>(object: I): Ref {
    const message = createBaseRef();
    message.id = object.id ?? "";
    message.def =
      object.def !== undefined && object.def !== null
        ? Definition.fromPartial(object.def)
        : undefined;
    return message;
  },
};

function createBaseRefMap(): RefMap {
  return { refs: {} };
}

export const RefMap = {
  encode(
    message: RefMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.refs).forEach(([key, value]) => {
      RefMap_RefsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = RefMap_RefsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.refs[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefMap {
    return {
      refs: isObject(object.refs)
        ? Object.entries(object.refs).reduce<{ [key: string]: Ref }>(
            (acc, [key, value]) => {
              acc[key] = Ref.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: RefMap): unknown {
    const obj: any = {};
    obj.refs = {};
    if (message.refs) {
      Object.entries(message.refs).forEach(([k, v]) => {
        obj.refs[k] = Ref.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefMap>, I>>(object: I): RefMap {
    const message = createBaseRefMap();
    message.refs = Object.entries(object.refs ?? {}).reduce<{
      [key: string]: Ref;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Ref.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRefMap_RefsEntry(): RefMap_RefsEntry {
  return { key: "", value: undefined };
}

export const RefMap_RefsEntry = {
  encode(
    message: RefMap_RefsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Ref.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefMap_RefsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefMap_RefsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Ref.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefMap_RefsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Ref.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: RefMap_RefsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Ref.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefMap_RefsEntry>, I>>(
    object: I
  ): RefMap_RefsEntry {
    const message = createBaseRefMap_RefsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Ref.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseReturnRequest(): ReturnRequest {
  return { result: undefined, error: undefined };
}

export const ReturnRequest = {
  encode(
    message: ReturnRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = Result.decode(reader, reader.uint32());
          break;
        case 2:
          message.error = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReturnRequest {
    return {
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ReturnRequest): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Status.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReturnRequest>, I>>(
    object: I
  ): ReturnRequest {
    const message = createBaseReturnRequest();
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Status.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseReturnResponse(): ReturnResponse {
  return {};
}

export const ReturnResponse = {
  encode(
    _: ReturnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReturnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReturnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReturnResponse {
    return {};
  },

  toJSON(_: ReturnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReturnResponse>, I>>(
    _: I
  ): ReturnResponse {
    const message = createBaseReturnResponse();
    return message;
  },
};

function createBaseInputsRequest(): InputsRequest {
  return {};
}

export const InputsRequest = {
  encode(
    _: InputsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InputsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): InputsRequest {
    return {};
  },

  toJSON(_: InputsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InputsRequest>, I>>(
    _: I
  ): InputsRequest {
    const message = createBaseInputsRequest();
    return message;
  },
};

function createBaseInputsResponse(): InputsResponse {
  return { Definitions: {} };
}

export const InputsResponse = {
  encode(
    message: InputsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.Definitions).forEach(([key, value]) => {
      InputsResponse_DefinitionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InputsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = InputsResponse_DefinitionsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.Definitions[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InputsResponse {
    return {
      Definitions: isObject(object.Definitions)
        ? Object.entries(object.Definitions).reduce<{
            [key: string]: Definition;
          }>((acc, [key, value]) => {
            acc[key] = Definition.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: InputsResponse): unknown {
    const obj: any = {};
    obj.Definitions = {};
    if (message.Definitions) {
      Object.entries(message.Definitions).forEach(([k, v]) => {
        obj.Definitions[k] = Definition.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InputsResponse>, I>>(
    object: I
  ): InputsResponse {
    const message = createBaseInputsResponse();
    message.Definitions = Object.entries(object.Definitions ?? {}).reduce<{
      [key: string]: Definition;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Definition.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseInputsResponse_DefinitionsEntry(): InputsResponse_DefinitionsEntry {
  return { key: "", value: undefined };
}

export const InputsResponse_DefinitionsEntry = {
  encode(
    message: InputsResponse_DefinitionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Definition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InputsResponse_DefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputsResponse_DefinitionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Definition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InputsResponse_DefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? Definition.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: InputsResponse_DefinitionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? Definition.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InputsResponse_DefinitionsEntry>, I>>(
    object: I
  ): InputsResponse_DefinitionsEntry {
    const message = createBaseInputsResponse_DefinitionsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Definition.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseResolveImageConfigRequest(): ResolveImageConfigRequest {
  return { Ref: "", Platform: undefined, ResolveMode: "", LogName: "" };
}

export const ResolveImageConfigRequest = {
  encode(
    message: ResolveImageConfigRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    if (message.Platform !== undefined) {
      Platform.encode(message.Platform, writer.uint32(18).fork()).ldelim();
    }
    if (message.ResolveMode !== "") {
      writer.uint32(26).string(message.ResolveMode);
    }
    if (message.LogName !== "") {
      writer.uint32(34).string(message.LogName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResolveImageConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveImageConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ref = reader.string();
          break;
        case 2:
          message.Platform = Platform.decode(reader, reader.uint32());
          break;
        case 3:
          message.ResolveMode = reader.string();
          break;
        case 4:
          message.LogName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveImageConfigRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
      Platform: isSet(object.Platform)
        ? Platform.fromJSON(object.Platform)
        : undefined,
      ResolveMode: isSet(object.ResolveMode) ? String(object.ResolveMode) : "",
      LogName: isSet(object.LogName) ? String(object.LogName) : "",
    };
  },

  toJSON(message: ResolveImageConfigRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    message.Platform !== undefined &&
      (obj.Platform = message.Platform
        ? Platform.toJSON(message.Platform)
        : undefined);
    message.ResolveMode !== undefined &&
      (obj.ResolveMode = message.ResolveMode);
    message.LogName !== undefined && (obj.LogName = message.LogName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveImageConfigRequest>, I>>(
    object: I
  ): ResolveImageConfigRequest {
    const message = createBaseResolveImageConfigRequest();
    message.Ref = object.Ref ?? "";
    message.Platform =
      object.Platform !== undefined && object.Platform !== null
        ? Platform.fromPartial(object.Platform)
        : undefined;
    message.ResolveMode = object.ResolveMode ?? "";
    message.LogName = object.LogName ?? "";
    return message;
  },
};

function createBaseResolveImageConfigResponse(): ResolveImageConfigResponse {
  return { Digest: "", Config: Buffer.alloc(0) };
}

export const ResolveImageConfigResponse = {
  encode(
    message: ResolveImageConfigResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Digest !== "") {
      writer.uint32(10).string(message.Digest);
    }
    if (message.Config.length !== 0) {
      writer.uint32(18).bytes(message.Config);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResolveImageConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveImageConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Digest = reader.string();
          break;
        case 2:
          message.Config = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResolveImageConfigResponse {
    return {
      Digest: isSet(object.Digest) ? String(object.Digest) : "",
      Config: isSet(object.Config)
        ? Buffer.from(bytesFromBase64(object.Config))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: ResolveImageConfigResponse): unknown {
    const obj: any = {};
    message.Digest !== undefined && (obj.Digest = message.Digest);
    message.Config !== undefined &&
      (obj.Config = base64FromBytes(
        message.Config !== undefined ? message.Config : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResolveImageConfigResponse>, I>>(
    object: I
  ): ResolveImageConfigResponse {
    const message = createBaseResolveImageConfigResponse();
    message.Digest = object.Digest ?? "";
    message.Config = object.Config ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseSolveRequest(): SolveRequest {
  return {
    Definition: undefined,
    Frontend: "",
    FrontendOpt: {},
    allowResultReturn: false,
    allowResultArrayRef: false,
    Final: false,
    ExporterAttr: Buffer.alloc(0),
    CacheImports: [],
    FrontendInputs: {},
    Evaluate: false,
  };
}

export const SolveRequest = {
  encode(
    message: SolveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Definition !== undefined) {
      Definition.encode(message.Definition, writer.uint32(10).fork()).ldelim();
    }
    if (message.Frontend !== "") {
      writer.uint32(18).string(message.Frontend);
    }
    Object.entries(message.FrontendOpt).forEach(([key, value]) => {
      SolveRequest_FrontendOptEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.allowResultReturn === true) {
      writer.uint32(40).bool(message.allowResultReturn);
    }
    if (message.allowResultArrayRef === true) {
      writer.uint32(48).bool(message.allowResultArrayRef);
    }
    if (message.Final === true) {
      writer.uint32(80).bool(message.Final);
    }
    if (message.ExporterAttr.length !== 0) {
      writer.uint32(90).bytes(message.ExporterAttr);
    }
    for (const v of message.CacheImports) {
      CacheOptionsEntry.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.FrontendInputs).forEach(([key, value]) => {
      SolveRequest_FrontendInputsEntry.encode(
        { key: key as any, value },
        writer.uint32(106).fork()
      ).ldelim();
    });
    if (message.Evaluate === true) {
      writer.uint32(112).bool(message.Evaluate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SolveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Definition = Definition.decode(reader, reader.uint32());
          break;
        case 2:
          message.Frontend = reader.string();
          break;
        case 3:
          const entry3 = SolveRequest_FrontendOptEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.FrontendOpt[entry3.key] = entry3.value;
          }
          break;
        case 5:
          message.allowResultReturn = reader.bool();
          break;
        case 6:
          message.allowResultArrayRef = reader.bool();
          break;
        case 10:
          message.Final = reader.bool();
          break;
        case 11:
          message.ExporterAttr = reader.bytes() as Buffer;
          break;
        case 12:
          message.CacheImports.push(
            CacheOptionsEntry.decode(reader, reader.uint32())
          );
          break;
        case 13:
          const entry13 = SolveRequest_FrontendInputsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry13.value !== undefined) {
            message.FrontendInputs[entry13.key] = entry13.value;
          }
          break;
        case 14:
          message.Evaluate = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SolveRequest {
    return {
      Definition: isSet(object.Definition)
        ? Definition.fromJSON(object.Definition)
        : undefined,
      Frontend: isSet(object.Frontend) ? String(object.Frontend) : "",
      FrontendOpt: isObject(object.FrontendOpt)
        ? Object.entries(object.FrontendOpt).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      allowResultReturn: isSet(object.allowResultReturn)
        ? Boolean(object.allowResultReturn)
        : false,
      allowResultArrayRef: isSet(object.allowResultArrayRef)
        ? Boolean(object.allowResultArrayRef)
        : false,
      Final: isSet(object.Final) ? Boolean(object.Final) : false,
      ExporterAttr: isSet(object.ExporterAttr)
        ? Buffer.from(bytesFromBase64(object.ExporterAttr))
        : Buffer.alloc(0),
      CacheImports: Array.isArray(object?.CacheImports)
        ? object.CacheImports.map((e: any) => CacheOptionsEntry.fromJSON(e))
        : [],
      FrontendInputs: isObject(object.FrontendInputs)
        ? Object.entries(object.FrontendInputs).reduce<{
            [key: string]: Definition;
          }>((acc, [key, value]) => {
            acc[key] = Definition.fromJSON(value);
            return acc;
          }, {})
        : {},
      Evaluate: isSet(object.Evaluate) ? Boolean(object.Evaluate) : false,
    };
  },

  toJSON(message: SolveRequest): unknown {
    const obj: any = {};
    message.Definition !== undefined &&
      (obj.Definition = message.Definition
        ? Definition.toJSON(message.Definition)
        : undefined);
    message.Frontend !== undefined && (obj.Frontend = message.Frontend);
    obj.FrontendOpt = {};
    if (message.FrontendOpt) {
      Object.entries(message.FrontendOpt).forEach(([k, v]) => {
        obj.FrontendOpt[k] = v;
      });
    }
    message.allowResultReturn !== undefined &&
      (obj.allowResultReturn = message.allowResultReturn);
    message.allowResultArrayRef !== undefined &&
      (obj.allowResultArrayRef = message.allowResultArrayRef);
    message.Final !== undefined && (obj.Final = message.Final);
    message.ExporterAttr !== undefined &&
      (obj.ExporterAttr = base64FromBytes(
        message.ExporterAttr !== undefined
          ? message.ExporterAttr
          : Buffer.alloc(0)
      ));
    if (message.CacheImports) {
      obj.CacheImports = message.CacheImports.map((e) =>
        e ? CacheOptionsEntry.toJSON(e) : undefined
      );
    } else {
      obj.CacheImports = [];
    }
    obj.FrontendInputs = {};
    if (message.FrontendInputs) {
      Object.entries(message.FrontendInputs).forEach(([k, v]) => {
        obj.FrontendInputs[k] = Definition.toJSON(v);
      });
    }
    message.Evaluate !== undefined && (obj.Evaluate = message.Evaluate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveRequest>, I>>(
    object: I
  ): SolveRequest {
    const message = createBaseSolveRequest();
    message.Definition =
      object.Definition !== undefined && object.Definition !== null
        ? Definition.fromPartial(object.Definition)
        : undefined;
    message.Frontend = object.Frontend ?? "";
    message.FrontendOpt = Object.entries(object.FrontendOpt ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.allowResultReturn = object.allowResultReturn ?? false;
    message.allowResultArrayRef = object.allowResultArrayRef ?? false;
    message.Final = object.Final ?? false;
    message.ExporterAttr = object.ExporterAttr ?? Buffer.alloc(0);
    message.CacheImports =
      object.CacheImports?.map((e) => CacheOptionsEntry.fromPartial(e)) || [];
    message.FrontendInputs = Object.entries(
      object.FrontendInputs ?? {}
    ).reduce<{ [key: string]: Definition }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Definition.fromPartial(value);
      }
      return acc;
    }, {});
    message.Evaluate = object.Evaluate ?? false;
    return message;
  },
};

function createBaseSolveRequest_FrontendOptEntry(): SolveRequest_FrontendOptEntry {
  return { key: "", value: "" };
}

export const SolveRequest_FrontendOptEntry = {
  encode(
    message: SolveRequest_FrontendOptEntry,
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
  ): SolveRequest_FrontendOptEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveRequest_FrontendOptEntry();
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

  fromJSON(object: any): SolveRequest_FrontendOptEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: SolveRequest_FrontendOptEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveRequest_FrontendOptEntry>, I>>(
    object: I
  ): SolveRequest_FrontendOptEntry {
    const message = createBaseSolveRequest_FrontendOptEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSolveRequest_FrontendInputsEntry(): SolveRequest_FrontendInputsEntry {
  return { key: "", value: undefined };
}

export const SolveRequest_FrontendInputsEntry = {
  encode(
    message: SolveRequest_FrontendInputsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Definition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SolveRequest_FrontendInputsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveRequest_FrontendInputsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Definition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SolveRequest_FrontendInputsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? Definition.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: SolveRequest_FrontendInputsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? Definition.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SolveRequest_FrontendInputsEntry>, I>
  >(object: I): SolveRequest_FrontendInputsEntry {
    const message = createBaseSolveRequest_FrontendInputsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Definition.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCacheOptionsEntry(): CacheOptionsEntry {
  return { Type: "", Attrs: {} };
}

export const CacheOptionsEntry = {
  encode(
    message: CacheOptionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Type !== "") {
      writer.uint32(10).string(message.Type);
    }
    Object.entries(message.Attrs).forEach(([key, value]) => {
      CacheOptionsEntry_AttrsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheOptionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.string();
          break;
        case 2:
          const entry2 = CacheOptionsEntry_AttrsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): CacheOptionsEntry {
    return {
      Type: isSet(object.Type) ? String(object.Type) : "",
      Attrs: isObject(object.Attrs)
        ? Object.entries(object.Attrs).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: CacheOptionsEntry): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = message.Type);
    obj.Attrs = {};
    if (message.Attrs) {
      Object.entries(message.Attrs).forEach(([k, v]) => {
        obj.Attrs[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CacheOptionsEntry>, I>>(
    object: I
  ): CacheOptionsEntry {
    const message = createBaseCacheOptionsEntry();
    message.Type = object.Type ?? "";
    message.Attrs = Object.entries(object.Attrs ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCacheOptionsEntry_AttrsEntry(): CacheOptionsEntry_AttrsEntry {
  return { key: "", value: "" };
}

export const CacheOptionsEntry_AttrsEntry = {
  encode(
    message: CacheOptionsEntry_AttrsEntry,
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
  ): CacheOptionsEntry_AttrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheOptionsEntry_AttrsEntry();
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

  fromJSON(object: any): CacheOptionsEntry_AttrsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CacheOptionsEntry_AttrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CacheOptionsEntry_AttrsEntry>, I>>(
    object: I
  ): CacheOptionsEntry_AttrsEntry {
    const message = createBaseCacheOptionsEntry_AttrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSolveResponse(): SolveResponse {
  return { ref: "", result: undefined };
}

export const SolveResponse = {
  encode(
    message: SolveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(10).string(message.ref);
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SolveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ref = reader.string();
          break;
        case 3:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SolveResponse {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: SolveResponse): unknown {
    const obj: any = {};
    message.ref !== undefined && (obj.ref = message.ref);
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveResponse>, I>>(
    object: I
  ): SolveResponse {
    const message = createBaseSolveResponse();
    message.ref = object.ref ?? "";
    message.result =
      object.result !== undefined && object.result !== null
        ? Result.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseReadFileRequest(): ReadFileRequest {
  return { Ref: "", FilePath: "", Range: undefined };
}

export const ReadFileRequest = {
  encode(
    message: ReadFileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    if (message.FilePath !== "") {
      writer.uint32(18).string(message.FilePath);
    }
    if (message.Range !== undefined) {
      FileRange.encode(message.Range, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ref = reader.string();
          break;
        case 2:
          message.FilePath = reader.string();
          break;
        case 3:
          message.Range = FileRange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadFileRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
      FilePath: isSet(object.FilePath) ? String(object.FilePath) : "",
      Range: isSet(object.Range) ? FileRange.fromJSON(object.Range) : undefined,
    };
  },

  toJSON(message: ReadFileRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    message.FilePath !== undefined && (obj.FilePath = message.FilePath);
    message.Range !== undefined &&
      (obj.Range = message.Range ? FileRange.toJSON(message.Range) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadFileRequest>, I>>(
    object: I
  ): ReadFileRequest {
    const message = createBaseReadFileRequest();
    message.Ref = object.Ref ?? "";
    message.FilePath = object.FilePath ?? "";
    message.Range =
      object.Range !== undefined && object.Range !== null
        ? FileRange.fromPartial(object.Range)
        : undefined;
    return message;
  },
};

function createBaseFileRange(): FileRange {
  return { Offset: 0, Length: 0 };
}

export const FileRange = {
  encode(
    message: FileRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Offset !== 0) {
      writer.uint32(8).int64(message.Offset);
    }
    if (message.Length !== 0) {
      writer.uint32(16).int64(message.Length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Offset = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Length = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileRange {
    return {
      Offset: isSet(object.Offset) ? Number(object.Offset) : 0,
      Length: isSet(object.Length) ? Number(object.Length) : 0,
    };
  },

  toJSON(message: FileRange): unknown {
    const obj: any = {};
    message.Offset !== undefined && (obj.Offset = Math.round(message.Offset));
    message.Length !== undefined && (obj.Length = Math.round(message.Length));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileRange>, I>>(
    object: I
  ): FileRange {
    const message = createBaseFileRange();
    message.Offset = object.Offset ?? 0;
    message.Length = object.Length ?? 0;
    return message;
  },
};

function createBaseReadFileResponse(): ReadFileResponse {
  return { Data: Buffer.alloc(0) };
}

export const ReadFileResponse = {
  encode(
    message: ReadFileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Data.length !== 0) {
      writer.uint32(10).bytes(message.Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadFileResponse {
    return {
      Data: isSet(object.Data)
        ? Buffer.from(bytesFromBase64(object.Data))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: ReadFileResponse): unknown {
    const obj: any = {};
    message.Data !== undefined &&
      (obj.Data = base64FromBytes(
        message.Data !== undefined ? message.Data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadFileResponse>, I>>(
    object: I
  ): ReadFileResponse {
    const message = createBaseReadFileResponse();
    message.Data = object.Data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseReadDirRequest(): ReadDirRequest {
  return { Ref: "", DirPath: "", IncludePattern: "" };
}

export const ReadDirRequest = {
  encode(
    message: ReadDirRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    if (message.DirPath !== "") {
      writer.uint32(18).string(message.DirPath);
    }
    if (message.IncludePattern !== "") {
      writer.uint32(26).string(message.IncludePattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadDirRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadDirRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ref = reader.string();
          break;
        case 2:
          message.DirPath = reader.string();
          break;
        case 3:
          message.IncludePattern = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadDirRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
      DirPath: isSet(object.DirPath) ? String(object.DirPath) : "",
      IncludePattern: isSet(object.IncludePattern)
        ? String(object.IncludePattern)
        : "",
    };
  },

  toJSON(message: ReadDirRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    message.DirPath !== undefined && (obj.DirPath = message.DirPath);
    message.IncludePattern !== undefined &&
      (obj.IncludePattern = message.IncludePattern);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadDirRequest>, I>>(
    object: I
  ): ReadDirRequest {
    const message = createBaseReadDirRequest();
    message.Ref = object.Ref ?? "";
    message.DirPath = object.DirPath ?? "";
    message.IncludePattern = object.IncludePattern ?? "";
    return message;
  },
};

function createBaseReadDirResponse(): ReadDirResponse {
  return { entries: [] };
}

export const ReadDirResponse = {
  encode(
    message: ReadDirResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      Stat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadDirResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadDirResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(Stat.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadDirResponse {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Stat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ReadDirResponse): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? Stat.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadDirResponse>, I>>(
    object: I
  ): ReadDirResponse {
    const message = createBaseReadDirResponse();
    message.entries = object.entries?.map((e) => Stat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStatFileRequest(): StatFileRequest {
  return { Ref: "", Path: "" };
}

export const StatFileRequest = {
  encode(
    message: StatFileRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    if (message.Path !== "") {
      writer.uint32(18).string(message.Path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Ref = reader.string();
          break;
        case 2:
          message.Path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatFileRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
      Path: isSet(object.Path) ? String(object.Path) : "",
    };
  },

  toJSON(message: StatFileRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    message.Path !== undefined && (obj.Path = message.Path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatFileRequest>, I>>(
    object: I
  ): StatFileRequest {
    const message = createBaseStatFileRequest();
    message.Ref = object.Ref ?? "";
    message.Path = object.Path ?? "";
    return message;
  },
};

function createBaseStatFileResponse(): StatFileResponse {
  return { stat: undefined };
}

export const StatFileResponse = {
  encode(
    message: StatFileResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stat !== undefined) {
      Stat.encode(message.stat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stat = Stat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatFileResponse {
    return {
      stat: isSet(object.stat) ? Stat.fromJSON(object.stat) : undefined,
    };
  },

  toJSON(message: StatFileResponse): unknown {
    const obj: any = {};
    message.stat !== undefined &&
      (obj.stat = message.stat ? Stat.toJSON(message.stat) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatFileResponse>, I>>(
    object: I
  ): StatFileResponse {
    const message = createBaseStatFileResponse();
    message.stat =
      object.stat !== undefined && object.stat !== null
        ? Stat.fromPartial(object.stat)
        : undefined;
    return message;
  },
};

function createBasePingRequest(): PingRequest {
  return {};
}

export const PingRequest = {
  encode(_: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PingRequest {
    return {};
  },

  toJSON(_: PingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PingRequest>, I>>(_: I): PingRequest {
    const message = createBasePingRequest();
    return message;
  },
};

function createBasePongResponse(): PongResponse {
  return { FrontendAPICaps: [], LLBCaps: [], Workers: [] };
}

export const PongResponse = {
  encode(
    message: PongResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.FrontendAPICaps) {
      APICap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.LLBCaps) {
      APICap.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.Workers) {
      WorkerRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PongResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePongResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FrontendAPICaps.push(APICap.decode(reader, reader.uint32()));
          break;
        case 2:
          message.LLBCaps.push(APICap.decode(reader, reader.uint32()));
          break;
        case 3:
          message.Workers.push(WorkerRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PongResponse {
    return {
      FrontendAPICaps: Array.isArray(object?.FrontendAPICaps)
        ? object.FrontendAPICaps.map((e: any) => APICap.fromJSON(e))
        : [],
      LLBCaps: Array.isArray(object?.LLBCaps)
        ? object.LLBCaps.map((e: any) => APICap.fromJSON(e))
        : [],
      Workers: Array.isArray(object?.Workers)
        ? object.Workers.map((e: any) => WorkerRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PongResponse): unknown {
    const obj: any = {};
    if (message.FrontendAPICaps) {
      obj.FrontendAPICaps = message.FrontendAPICaps.map((e) =>
        e ? APICap.toJSON(e) : undefined
      );
    } else {
      obj.FrontendAPICaps = [];
    }
    if (message.LLBCaps) {
      obj.LLBCaps = message.LLBCaps.map((e) =>
        e ? APICap.toJSON(e) : undefined
      );
    } else {
      obj.LLBCaps = [];
    }
    if (message.Workers) {
      obj.Workers = message.Workers.map((e) =>
        e ? WorkerRecord.toJSON(e) : undefined
      );
    } else {
      obj.Workers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PongResponse>, I>>(
    object: I
  ): PongResponse {
    const message = createBasePongResponse();
    message.FrontendAPICaps =
      object.FrontendAPICaps?.map((e) => APICap.fromPartial(e)) || [];
    message.LLBCaps = object.LLBCaps?.map((e) => APICap.fromPartial(e)) || [];
    message.Workers =
      object.Workers?.map((e) => WorkerRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWarnRequest(): WarnRequest {
  return {
    digest: "",
    level: 0,
    short: Buffer.alloc(0),
    detail: [],
    url: "",
    info: undefined,
    ranges: [],
  };
}

export const WarnRequest = {
  encode(
    message: WarnRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest !== "") {
      writer.uint32(10).string(message.digest);
    }
    if (message.level !== 0) {
      writer.uint32(16).int64(message.level);
    }
    if (message.short.length !== 0) {
      writer.uint32(26).bytes(message.short);
    }
    for (const v of message.detail) {
      writer.uint32(34).bytes(v!);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.info !== undefined) {
      SourceInfo.encode(message.info, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ranges) {
      Range.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WarnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWarnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.digest = reader.string();
          break;
        case 2:
          message.level = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.short = reader.bytes() as Buffer;
          break;
        case 4:
          message.detail.push(reader.bytes() as Buffer);
          break;
        case 5:
          message.url = reader.string();
          break;
        case 6:
          message.info = SourceInfo.decode(reader, reader.uint32());
          break;
        case 7:
          message.ranges.push(Range.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WarnRequest {
    return {
      digest: isSet(object.digest) ? String(object.digest) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
      short: isSet(object.short)
        ? Buffer.from(bytesFromBase64(object.short))
        : Buffer.alloc(0),
      detail: Array.isArray(object?.detail)
        ? object.detail.map((e: any) => Buffer.from(bytesFromBase64(e)))
        : [],
      url: isSet(object.url) ? String(object.url) : "",
      info: isSet(object.info) ? SourceInfo.fromJSON(object.info) : undefined,
      ranges: Array.isArray(object?.ranges)
        ? object.ranges.map((e: any) => Range.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WarnRequest): unknown {
    const obj: any = {};
    message.digest !== undefined && (obj.digest = message.digest);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.short !== undefined &&
      (obj.short = base64FromBytes(
        message.short !== undefined ? message.short : Buffer.alloc(0)
      ));
    if (message.detail) {
      obj.detail = message.detail.map((e) =>
        base64FromBytes(e !== undefined ? e : Buffer.alloc(0))
      );
    } else {
      obj.detail = [];
    }
    message.url !== undefined && (obj.url = message.url);
    message.info !== undefined &&
      (obj.info = message.info ? SourceInfo.toJSON(message.info) : undefined);
    if (message.ranges) {
      obj.ranges = message.ranges.map((e) => (e ? Range.toJSON(e) : undefined));
    } else {
      obj.ranges = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WarnRequest>, I>>(
    object: I
  ): WarnRequest {
    const message = createBaseWarnRequest();
    message.digest = object.digest ?? "";
    message.level = object.level ?? 0;
    message.short = object.short ?? Buffer.alloc(0);
    message.detail = object.detail?.map((e) => e) || [];
    message.url = object.url ?? "";
    message.info =
      object.info !== undefined && object.info !== null
        ? SourceInfo.fromPartial(object.info)
        : undefined;
    message.ranges = object.ranges?.map((e) => Range.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWarnResponse(): WarnResponse {
  return {};
}

export const WarnResponse = {
  encode(
    _: WarnResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WarnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWarnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): WarnResponse {
    return {};
  },

  toJSON(_: WarnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WarnResponse>, I>>(
    _: I
  ): WarnResponse {
    const message = createBaseWarnResponse();
    return message;
  },
};

function createBaseNewContainerRequest(): NewContainerRequest {
  return {
    ContainerID: "",
    Mounts: [],
    Network: 0,
    platform: undefined,
    constraints: undefined,
    extraHosts: [],
  };
}

export const NewContainerRequest = {
  encode(
    message: NewContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ContainerID !== "") {
      writer.uint32(10).string(message.ContainerID);
    }
    for (const v of message.Mounts) {
      Mount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.Network !== 0) {
      writer.uint32(24).int32(message.Network);
    }
    if (message.platform !== undefined) {
      Platform.encode(message.platform, writer.uint32(34).fork()).ldelim();
    }
    if (message.constraints !== undefined) {
      WorkerConstraints.encode(
        message.constraints,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.extraHosts) {
      HostIP.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewContainerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ContainerID = reader.string();
          break;
        case 2:
          message.Mounts.push(Mount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.Network = reader.int32() as any;
          break;
        case 4:
          message.platform = Platform.decode(reader, reader.uint32());
          break;
        case 5:
          message.constraints = WorkerConstraints.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.extraHosts.push(HostIP.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewContainerRequest {
    return {
      ContainerID: isSet(object.ContainerID) ? String(object.ContainerID) : "",
      Mounts: Array.isArray(object?.Mounts)
        ? object.Mounts.map((e: any) => Mount.fromJSON(e))
        : [],
      Network: isSet(object.Network) ? netModeFromJSON(object.Network) : 0,
      platform: isSet(object.platform)
        ? Platform.fromJSON(object.platform)
        : undefined,
      constraints: isSet(object.constraints)
        ? WorkerConstraints.fromJSON(object.constraints)
        : undefined,
      extraHosts: Array.isArray(object?.extraHosts)
        ? object.extraHosts.map((e: any) => HostIP.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NewContainerRequest): unknown {
    const obj: any = {};
    message.ContainerID !== undefined &&
      (obj.ContainerID = message.ContainerID);
    if (message.Mounts) {
      obj.Mounts = message.Mounts.map((e) => (e ? Mount.toJSON(e) : undefined));
    } else {
      obj.Mounts = [];
    }
    message.Network !== undefined &&
      (obj.Network = netModeToJSON(message.Network));
    message.platform !== undefined &&
      (obj.platform = message.platform
        ? Platform.toJSON(message.platform)
        : undefined);
    message.constraints !== undefined &&
      (obj.constraints = message.constraints
        ? WorkerConstraints.toJSON(message.constraints)
        : undefined);
    if (message.extraHosts) {
      obj.extraHosts = message.extraHosts.map((e) =>
        e ? HostIP.toJSON(e) : undefined
      );
    } else {
      obj.extraHosts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewContainerRequest>, I>>(
    object: I
  ): NewContainerRequest {
    const message = createBaseNewContainerRequest();
    message.ContainerID = object.ContainerID ?? "";
    message.Mounts = object.Mounts?.map((e) => Mount.fromPartial(e)) || [];
    message.Network = object.Network ?? 0;
    message.platform =
      object.platform !== undefined && object.platform !== null
        ? Platform.fromPartial(object.platform)
        : undefined;
    message.constraints =
      object.constraints !== undefined && object.constraints !== null
        ? WorkerConstraints.fromPartial(object.constraints)
        : undefined;
    message.extraHosts =
      object.extraHosts?.map((e) => HostIP.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNewContainerResponse(): NewContainerResponse {
  return {};
}

export const NewContainerResponse = {
  encode(
    _: NewContainerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewContainerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewContainerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NewContainerResponse {
    return {};
  },

  toJSON(_: NewContainerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewContainerResponse>, I>>(
    _: I
  ): NewContainerResponse {
    const message = createBaseNewContainerResponse();
    return message;
  },
};

function createBaseReleaseContainerRequest(): ReleaseContainerRequest {
  return { ContainerID: "" };
}

export const ReleaseContainerRequest = {
  encode(
    message: ReleaseContainerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ContainerID !== "") {
      writer.uint32(10).string(message.ContainerID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReleaseContainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseContainerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ContainerID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReleaseContainerRequest {
    return {
      ContainerID: isSet(object.ContainerID) ? String(object.ContainerID) : "",
    };
  },

  toJSON(message: ReleaseContainerRequest): unknown {
    const obj: any = {};
    message.ContainerID !== undefined &&
      (obj.ContainerID = message.ContainerID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReleaseContainerRequest>, I>>(
    object: I
  ): ReleaseContainerRequest {
    const message = createBaseReleaseContainerRequest();
    message.ContainerID = object.ContainerID ?? "";
    return message;
  },
};

function createBaseReleaseContainerResponse(): ReleaseContainerResponse {
  return {};
}

export const ReleaseContainerResponse = {
  encode(
    _: ReleaseContainerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReleaseContainerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReleaseContainerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReleaseContainerResponse {
    return {};
  },

  toJSON(_: ReleaseContainerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReleaseContainerResponse>, I>>(
    _: I
  ): ReleaseContainerResponse {
    const message = createBaseReleaseContainerResponse();
    return message;
  },
};

function createBaseExecMessage(): ExecMessage {
  return {
    ProcessID: "",
    Init: undefined,
    File: undefined,
    Resize: undefined,
    Started: undefined,
    Exit: undefined,
    Done: undefined,
    Signal: undefined,
  };
}

export const ExecMessage = {
  encode(
    message: ExecMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ProcessID !== "") {
      writer.uint32(10).string(message.ProcessID);
    }
    if (message.Init !== undefined) {
      InitMessage.encode(message.Init, writer.uint32(18).fork()).ldelim();
    }
    if (message.File !== undefined) {
      FdMessage.encode(message.File, writer.uint32(26).fork()).ldelim();
    }
    if (message.Resize !== undefined) {
      ResizeMessage.encode(message.Resize, writer.uint32(34).fork()).ldelim();
    }
    if (message.Started !== undefined) {
      StartedMessage.encode(message.Started, writer.uint32(42).fork()).ldelim();
    }
    if (message.Exit !== undefined) {
      ExitMessage.encode(message.Exit, writer.uint32(50).fork()).ldelim();
    }
    if (message.Done !== undefined) {
      DoneMessage.encode(message.Done, writer.uint32(58).fork()).ldelim();
    }
    if (message.Signal !== undefined) {
      SignalMessage.encode(message.Signal, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ProcessID = reader.string();
          break;
        case 2:
          message.Init = InitMessage.decode(reader, reader.uint32());
          break;
        case 3:
          message.File = FdMessage.decode(reader, reader.uint32());
          break;
        case 4:
          message.Resize = ResizeMessage.decode(reader, reader.uint32());
          break;
        case 5:
          message.Started = StartedMessage.decode(reader, reader.uint32());
          break;
        case 6:
          message.Exit = ExitMessage.decode(reader, reader.uint32());
          break;
        case 7:
          message.Done = DoneMessage.decode(reader, reader.uint32());
          break;
        case 8:
          message.Signal = SignalMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecMessage {
    return {
      ProcessID: isSet(object.ProcessID) ? String(object.ProcessID) : "",
      Init: isSet(object.Init) ? InitMessage.fromJSON(object.Init) : undefined,
      File: isSet(object.File) ? FdMessage.fromJSON(object.File) : undefined,
      Resize: isSet(object.Resize)
        ? ResizeMessage.fromJSON(object.Resize)
        : undefined,
      Started: isSet(object.Started)
        ? StartedMessage.fromJSON(object.Started)
        : undefined,
      Exit: isSet(object.Exit) ? ExitMessage.fromJSON(object.Exit) : undefined,
      Done: isSet(object.Done) ? DoneMessage.fromJSON(object.Done) : undefined,
      Signal: isSet(object.Signal)
        ? SignalMessage.fromJSON(object.Signal)
        : undefined,
    };
  },

  toJSON(message: ExecMessage): unknown {
    const obj: any = {};
    message.ProcessID !== undefined && (obj.ProcessID = message.ProcessID);
    message.Init !== undefined &&
      (obj.Init = message.Init ? InitMessage.toJSON(message.Init) : undefined);
    message.File !== undefined &&
      (obj.File = message.File ? FdMessage.toJSON(message.File) : undefined);
    message.Resize !== undefined &&
      (obj.Resize = message.Resize
        ? ResizeMessage.toJSON(message.Resize)
        : undefined);
    message.Started !== undefined &&
      (obj.Started = message.Started
        ? StartedMessage.toJSON(message.Started)
        : undefined);
    message.Exit !== undefined &&
      (obj.Exit = message.Exit ? ExitMessage.toJSON(message.Exit) : undefined);
    message.Done !== undefined &&
      (obj.Done = message.Done ? DoneMessage.toJSON(message.Done) : undefined);
    message.Signal !== undefined &&
      (obj.Signal = message.Signal
        ? SignalMessage.toJSON(message.Signal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecMessage>, I>>(
    object: I
  ): ExecMessage {
    const message = createBaseExecMessage();
    message.ProcessID = object.ProcessID ?? "";
    message.Init =
      object.Init !== undefined && object.Init !== null
        ? InitMessage.fromPartial(object.Init)
        : undefined;
    message.File =
      object.File !== undefined && object.File !== null
        ? FdMessage.fromPartial(object.File)
        : undefined;
    message.Resize =
      object.Resize !== undefined && object.Resize !== null
        ? ResizeMessage.fromPartial(object.Resize)
        : undefined;
    message.Started =
      object.Started !== undefined && object.Started !== null
        ? StartedMessage.fromPartial(object.Started)
        : undefined;
    message.Exit =
      object.Exit !== undefined && object.Exit !== null
        ? ExitMessage.fromPartial(object.Exit)
        : undefined;
    message.Done =
      object.Done !== undefined && object.Done !== null
        ? DoneMessage.fromPartial(object.Done)
        : undefined;
    message.Signal =
      object.Signal !== undefined && object.Signal !== null
        ? SignalMessage.fromPartial(object.Signal)
        : undefined;
    return message;
  },
};

function createBaseInitMessage(): InitMessage {
  return { ContainerID: "", Meta: undefined, Fds: [], Tty: false, Security: 0 };
}

export const InitMessage = {
  encode(
    message: InitMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ContainerID !== "") {
      writer.uint32(10).string(message.ContainerID);
    }
    if (message.Meta !== undefined) {
      Meta.encode(message.Meta, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.Fds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.Tty === true) {
      writer.uint32(32).bool(message.Tty);
    }
    if (message.Security !== 0) {
      writer.uint32(40).int32(message.Security);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ContainerID = reader.string();
          break;
        case 2:
          message.Meta = Meta.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.Fds.push(reader.uint32());
            }
          } else {
            message.Fds.push(reader.uint32());
          }
          break;
        case 4:
          message.Tty = reader.bool();
          break;
        case 5:
          message.Security = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InitMessage {
    return {
      ContainerID: isSet(object.ContainerID) ? String(object.ContainerID) : "",
      Meta: isSet(object.Meta) ? Meta.fromJSON(object.Meta) : undefined,
      Fds: Array.isArray(object?.Fds)
        ? object.Fds.map((e: any) => Number(e))
        : [],
      Tty: isSet(object.Tty) ? Boolean(object.Tty) : false,
      Security: isSet(object.Security)
        ? securityModeFromJSON(object.Security)
        : 0,
    };
  },

  toJSON(message: InitMessage): unknown {
    const obj: any = {};
    message.ContainerID !== undefined &&
      (obj.ContainerID = message.ContainerID);
    message.Meta !== undefined &&
      (obj.Meta = message.Meta ? Meta.toJSON(message.Meta) : undefined);
    if (message.Fds) {
      obj.Fds = message.Fds.map((e) => Math.round(e));
    } else {
      obj.Fds = [];
    }
    message.Tty !== undefined && (obj.Tty = message.Tty);
    message.Security !== undefined &&
      (obj.Security = securityModeToJSON(message.Security));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InitMessage>, I>>(
    object: I
  ): InitMessage {
    const message = createBaseInitMessage();
    message.ContainerID = object.ContainerID ?? "";
    message.Meta =
      object.Meta !== undefined && object.Meta !== null
        ? Meta.fromPartial(object.Meta)
        : undefined;
    message.Fds = object.Fds?.map((e) => e) || [];
    message.Tty = object.Tty ?? false;
    message.Security = object.Security ?? 0;
    return message;
  },
};

function createBaseExitMessage(): ExitMessage {
  return { Code: 0, Error: undefined };
}

export const ExitMessage = {
  encode(
    message: ExitMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Code !== 0) {
      writer.uint32(8).uint32(message.Code);
    }
    if (message.Error !== undefined) {
      Status.encode(message.Error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExitMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Code = reader.uint32();
          break;
        case 2:
          message.Error = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExitMessage {
    return {
      Code: isSet(object.Code) ? Number(object.Code) : 0,
      Error: isSet(object.Error) ? Status.fromJSON(object.Error) : undefined,
    };
  },

  toJSON(message: ExitMessage): unknown {
    const obj: any = {};
    message.Code !== undefined && (obj.Code = Math.round(message.Code));
    message.Error !== undefined &&
      (obj.Error = message.Error ? Status.toJSON(message.Error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExitMessage>, I>>(
    object: I
  ): ExitMessage {
    const message = createBaseExitMessage();
    message.Code = object.Code ?? 0;
    message.Error =
      object.Error !== undefined && object.Error !== null
        ? Status.fromPartial(object.Error)
        : undefined;
    return message;
  },
};

function createBaseStartedMessage(): StartedMessage {
  return {};
}

export const StartedMessage = {
  encode(
    _: StartedMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StartedMessage {
    return {};
  },

  toJSON(_: StartedMessage): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartedMessage>, I>>(
    _: I
  ): StartedMessage {
    const message = createBaseStartedMessage();
    return message;
  },
};

function createBaseDoneMessage(): DoneMessage {
  return {};
}

export const DoneMessage = {
  encode(_: DoneMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoneMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoneMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DoneMessage {
    return {};
  },

  toJSON(_: DoneMessage): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoneMessage>, I>>(_: I): DoneMessage {
    const message = createBaseDoneMessage();
    return message;
  },
};

function createBaseFdMessage(): FdMessage {
  return { Fd: 0, EOF: false, Data: Buffer.alloc(0) };
}

export const FdMessage = {
  encode(
    message: FdMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Fd !== 0) {
      writer.uint32(8).uint32(message.Fd);
    }
    if (message.EOF === true) {
      writer.uint32(16).bool(message.EOF);
    }
    if (message.Data.length !== 0) {
      writer.uint32(26).bytes(message.Data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FdMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFdMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Fd = reader.uint32();
          break;
        case 2:
          message.EOF = reader.bool();
          break;
        case 3:
          message.Data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FdMessage {
    return {
      Fd: isSet(object.Fd) ? Number(object.Fd) : 0,
      EOF: isSet(object.EOF) ? Boolean(object.EOF) : false,
      Data: isSet(object.Data)
        ? Buffer.from(bytesFromBase64(object.Data))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: FdMessage): unknown {
    const obj: any = {};
    message.Fd !== undefined && (obj.Fd = Math.round(message.Fd));
    message.EOF !== undefined && (obj.EOF = message.EOF);
    message.Data !== undefined &&
      (obj.Data = base64FromBytes(
        message.Data !== undefined ? message.Data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FdMessage>, I>>(
    object: I
  ): FdMessage {
    const message = createBaseFdMessage();
    message.Fd = object.Fd ?? 0;
    message.EOF = object.EOF ?? false;
    message.Data = object.Data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseResizeMessage(): ResizeMessage {
  return { Rows: 0, Cols: 0 };
}

export const ResizeMessage = {
  encode(
    message: ResizeMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Rows !== 0) {
      writer.uint32(8).uint32(message.Rows);
    }
    if (message.Cols !== 0) {
      writer.uint32(16).uint32(message.Cols);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResizeMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResizeMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rows = reader.uint32();
          break;
        case 2:
          message.Cols = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResizeMessage {
    return {
      Rows: isSet(object.Rows) ? Number(object.Rows) : 0,
      Cols: isSet(object.Cols) ? Number(object.Cols) : 0,
    };
  },

  toJSON(message: ResizeMessage): unknown {
    const obj: any = {};
    message.Rows !== undefined && (obj.Rows = Math.round(message.Rows));
    message.Cols !== undefined && (obj.Cols = Math.round(message.Cols));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResizeMessage>, I>>(
    object: I
  ): ResizeMessage {
    const message = createBaseResizeMessage();
    message.Rows = object.Rows ?? 0;
    message.Cols = object.Cols ?? 0;
    return message;
  },
};

function createBaseSignalMessage(): SignalMessage {
  return { Name: "" };
}

export const SignalMessage = {
  encode(
    message: SignalMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignalMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignalMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignalMessage {
    return {
      Name: isSet(object.Name) ? String(object.Name) : "",
    };
  },

  toJSON(message: SignalMessage): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignalMessage>, I>>(
    object: I
  ): SignalMessage {
    const message = createBaseSignalMessage();
    message.Name = object.Name ?? "";
    return message;
  },
};

export type LLBBridgeService = typeof LLBBridgeService;
export const LLBBridgeService = {
  /** apicaps:CapResolveImage */
  resolveImageConfig: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/ResolveImageConfig",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ResolveImageConfigRequest) =>
      Buffer.from(ResolveImageConfigRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ResolveImageConfigRequest.decode(value),
    responseSerialize: (value: ResolveImageConfigResponse) =>
      Buffer.from(ResolveImageConfigResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ResolveImageConfigResponse.decode(value),
  },
  /** apicaps:CapSolveBase */
  solve: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/Solve",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SolveRequest) =>
      Buffer.from(SolveRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SolveRequest.decode(value),
    responseSerialize: (value: SolveResponse) =>
      Buffer.from(SolveResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SolveResponse.decode(value),
  },
  /** apicaps:CapReadFile */
  readFile: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/ReadFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReadFileRequest) =>
      Buffer.from(ReadFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReadFileRequest.decode(value),
    responseSerialize: (value: ReadFileResponse) =>
      Buffer.from(ReadFileResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReadFileResponse.decode(value),
  },
  /** apicaps:CapReadDir */
  readDir: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/ReadDir",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReadDirRequest) =>
      Buffer.from(ReadDirRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReadDirRequest.decode(value),
    responseSerialize: (value: ReadDirResponse) =>
      Buffer.from(ReadDirResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReadDirResponse.decode(value),
  },
  /** apicaps:CapStatFile */
  statFile: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/StatFile",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: StatFileRequest) =>
      Buffer.from(StatFileRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StatFileRequest.decode(value),
    responseSerialize: (value: StatFileResponse) =>
      Buffer.from(StatFileResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StatFileResponse.decode(value),
  },
  ping: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/Ping",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PingRequest) =>
      Buffer.from(PingRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PingRequest.decode(value),
    responseSerialize: (value: PongResponse) =>
      Buffer.from(PongResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PongResponse.decode(value),
  },
  return: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/Return",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReturnRequest) =>
      Buffer.from(ReturnRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ReturnRequest.decode(value),
    responseSerialize: (value: ReturnResponse) =>
      Buffer.from(ReturnResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ReturnResponse.decode(value),
  },
  /** apicaps:CapFrontendInputs */
  inputs: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/Inputs",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InputsRequest) =>
      Buffer.from(InputsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InputsRequest.decode(value),
    responseSerialize: (value: InputsResponse) =>
      Buffer.from(InputsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InputsResponse.decode(value),
  },
  newContainer: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/NewContainer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: NewContainerRequest) =>
      Buffer.from(NewContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => NewContainerRequest.decode(value),
    responseSerialize: (value: NewContainerResponse) =>
      Buffer.from(NewContainerResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => NewContainerResponse.decode(value),
  },
  releaseContainer: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/ReleaseContainer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ReleaseContainerRequest) =>
      Buffer.from(ReleaseContainerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      ReleaseContainerRequest.decode(value),
    responseSerialize: (value: ReleaseContainerResponse) =>
      Buffer.from(ReleaseContainerResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      ReleaseContainerResponse.decode(value),
  },
  execProcess: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/ExecProcess",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: ExecMessage) =>
      Buffer.from(ExecMessage.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ExecMessage.decode(value),
    responseSerialize: (value: ExecMessage) =>
      Buffer.from(ExecMessage.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ExecMessage.decode(value),
  },
  /** apicaps:CapGatewayWarnings */
  warn: {
    path: "/moby.buildkit.v1.frontend.LLBBridge/Warn",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: WarnRequest) =>
      Buffer.from(WarnRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WarnRequest.decode(value),
    responseSerialize: (value: WarnResponse) =>
      Buffer.from(WarnResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => WarnResponse.decode(value),
  },
} as const;

export interface LLBBridgeServer extends UntypedServiceImplementation {
  /** apicaps:CapResolveImage */
  resolveImageConfig: handleUnaryCall<
    ResolveImageConfigRequest,
    ResolveImageConfigResponse
  >;
  /** apicaps:CapSolveBase */
  solve: handleUnaryCall<SolveRequest, SolveResponse>;
  /** apicaps:CapReadFile */
  readFile: handleUnaryCall<ReadFileRequest, ReadFileResponse>;
  /** apicaps:CapReadDir */
  readDir: handleUnaryCall<ReadDirRequest, ReadDirResponse>;
  /** apicaps:CapStatFile */
  statFile: handleUnaryCall<StatFileRequest, StatFileResponse>;
  ping: handleUnaryCall<PingRequest, PongResponse>;
  return: handleUnaryCall<ReturnRequest, ReturnResponse>;
  /** apicaps:CapFrontendInputs */
  inputs: handleUnaryCall<InputsRequest, InputsResponse>;
  newContainer: handleUnaryCall<NewContainerRequest, NewContainerResponse>;
  releaseContainer: handleUnaryCall<
    ReleaseContainerRequest,
    ReleaseContainerResponse
  >;
  execProcess: handleBidiStreamingCall<ExecMessage, ExecMessage>;
  /** apicaps:CapGatewayWarnings */
  warn: handleUnaryCall<WarnRequest, WarnResponse>;
}

export interface LLBBridgeClient extends Client {
  /** apicaps:CapResolveImage */
  resolveImageConfig(
    request: ResolveImageConfigRequest,
    callback: (
      error: ServiceError | null,
      response: ResolveImageConfigResponse
    ) => void
  ): ClientUnaryCall;
  resolveImageConfig(
    request: ResolveImageConfigRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ResolveImageConfigResponse
    ) => void
  ): ClientUnaryCall;
  resolveImageConfig(
    request: ResolveImageConfigRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ResolveImageConfigResponse
    ) => void
  ): ClientUnaryCall;
  /** apicaps:CapSolveBase */
  solve(
    request: SolveRequest,
    callback: (error: ServiceError | null, response: SolveResponse) => void
  ): ClientUnaryCall;
  solve(
    request: SolveRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SolveResponse) => void
  ): ClientUnaryCall;
  solve(
    request: SolveRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SolveResponse) => void
  ): ClientUnaryCall;
  /** apicaps:CapReadFile */
  readFile(
    request: ReadFileRequest,
    callback: (error: ServiceError | null, response: ReadFileResponse) => void
  ): ClientUnaryCall;
  readFile(
    request: ReadFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReadFileResponse) => void
  ): ClientUnaryCall;
  readFile(
    request: ReadFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReadFileResponse) => void
  ): ClientUnaryCall;
  /** apicaps:CapReadDir */
  readDir(
    request: ReadDirRequest,
    callback: (error: ServiceError | null, response: ReadDirResponse) => void
  ): ClientUnaryCall;
  readDir(
    request: ReadDirRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReadDirResponse) => void
  ): ClientUnaryCall;
  readDir(
    request: ReadDirRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReadDirResponse) => void
  ): ClientUnaryCall;
  /** apicaps:CapStatFile */
  statFile(
    request: StatFileRequest,
    callback: (error: ServiceError | null, response: StatFileResponse) => void
  ): ClientUnaryCall;
  statFile(
    request: StatFileRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: StatFileResponse) => void
  ): ClientUnaryCall;
  statFile(
    request: StatFileRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: StatFileResponse) => void
  ): ClientUnaryCall;
  ping(
    request: PingRequest,
    callback: (error: ServiceError | null, response: PongResponse) => void
  ): ClientUnaryCall;
  ping(
    request: PingRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PongResponse) => void
  ): ClientUnaryCall;
  ping(
    request: PingRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PongResponse) => void
  ): ClientUnaryCall;
  return(
    request: ReturnRequest,
    callback: (error: ServiceError | null, response: ReturnResponse) => void
  ): ClientUnaryCall;
  return(
    request: ReturnRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ReturnResponse) => void
  ): ClientUnaryCall;
  return(
    request: ReturnRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ReturnResponse) => void
  ): ClientUnaryCall;
  /** apicaps:CapFrontendInputs */
  inputs(
    request: InputsRequest,
    callback: (error: ServiceError | null, response: InputsResponse) => void
  ): ClientUnaryCall;
  inputs(
    request: InputsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InputsResponse) => void
  ): ClientUnaryCall;
  inputs(
    request: InputsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InputsResponse) => void
  ): ClientUnaryCall;
  newContainer(
    request: NewContainerRequest,
    callback: (
      error: ServiceError | null,
      response: NewContainerResponse
    ) => void
  ): ClientUnaryCall;
  newContainer(
    request: NewContainerRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: NewContainerResponse
    ) => void
  ): ClientUnaryCall;
  newContainer(
    request: NewContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: NewContainerResponse
    ) => void
  ): ClientUnaryCall;
  releaseContainer(
    request: ReleaseContainerRequest,
    callback: (
      error: ServiceError | null,
      response: ReleaseContainerResponse
    ) => void
  ): ClientUnaryCall;
  releaseContainer(
    request: ReleaseContainerRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ReleaseContainerResponse
    ) => void
  ): ClientUnaryCall;
  releaseContainer(
    request: ReleaseContainerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ReleaseContainerResponse
    ) => void
  ): ClientUnaryCall;
  execProcess(): ClientDuplexStream<ExecMessage, ExecMessage>;
  execProcess(
    options: Partial<CallOptions>
  ): ClientDuplexStream<ExecMessage, ExecMessage>;
  execProcess(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<ExecMessage, ExecMessage>;
  /** apicaps:CapGatewayWarnings */
  warn(
    request: WarnRequest,
    callback: (error: ServiceError | null, response: WarnResponse) => void
  ): ClientUnaryCall;
  warn(
    request: WarnRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: WarnResponse) => void
  ): ClientUnaryCall;
  warn(
    request: WarnRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: WarnResponse) => void
  ): ClientUnaryCall;
}

export const LLBBridgeClient = makeGenericClientConstructor(
  LLBBridgeService,
  "moby.buildkit.v1.frontend.LLBBridge"
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): LLBBridgeClient;
  service: typeof LLBBridgeService;
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
