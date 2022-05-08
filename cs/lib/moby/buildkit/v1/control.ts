/* eslint-disable */
import {
  CallOptions, ChannelCredentials,
  ChannelOptions, Client, ClientDuplexStream, ClientReadableStream, ClientUnaryCall, handleBidiStreamingCall, handleServerStreamingCall, handleUnaryCall, makeGenericClientConstructor, Metadata, ServiceError, UntypedServiceImplementation
} from "@grpc/grpc-js";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import {
  BuildkitVersion,
  WorkerRecord
} from "../../../moby/buildkit/v1/types/worker";
import { Definition, ProgressGroup, Range, SourceInfo } from "../../../pb/ops";

export const protobufPackage = "moby.buildkit.v1";

export interface PruneRequest {
  filter: string[];
  all: boolean;
  keepDuration: number;
  keepBytes: number;
}

export interface DiskUsageRequest {
  filter: string[];
}

export interface DiskUsageResponse {
  record: UsageRecord[];
}

export interface UsageRecord {
  ID: string;
  Mutable: boolean;
  InUse: boolean;
  Size: number;
  /** @deprecated */
  Parent: string;
  CreatedAt?: Date;
  LastUsedAt?: Date;
  UsageCount: number;
  Description: string;
  RecordType: string;
  Shared: boolean;
  Parents: string[];
}

export interface SolveRequest {
  Ref: string;
  Definition?: Definition;
  Exporter: string;
  ExporterAttrs: { [key: string]: string };
  Session: string;
  Frontend: string;
  FrontendAttrs: { [key: string]: string };
  Cache?: CacheOptions;
  Entitlements: string[];
  FrontendInputs: { [key: string]: Definition };
}

export interface SolveRequest_ExporterAttrsEntry {
  key: string;
  value: string;
}

export interface SolveRequest_FrontendAttrsEntry {
  key: string;
  value: string;
}

export interface SolveRequest_FrontendInputsEntry {
  key: string;
  value?: Definition;
}

export interface CacheOptions {
  /**
   * ExportRefDeprecated is deprecated in favor or the new Exports since
   * BuildKit v0.4.0. When ExportRefDeprecated is set, the solver appends
   * {.Type = "registry", .Attrs = ExportAttrs.add("ref", ExportRef)}
   * to Exports for compatibility. (planned to be removed)
   */
  ExportRefDeprecated: string;
  /**
   * ImportRefsDeprecated is deprecated in favor or the new Imports since
   * BuildKit v0.4.0. When ImportRefsDeprecated is set, the solver appends
   * {.Type = "registry", .Attrs = {"ref": importRef}}
   * for each of the ImportRefs entry to Imports for compatibility. (planned to
   * be removed)
   */
  ImportRefsDeprecated: string[];
  /**
   * ExportAttrsDeprecated is deprecated since BuildKit v0.4.0.
   * See the description of ExportRefDeprecated.
   */
  ExportAttrsDeprecated: { [key: string]: string };
  /** Exports was introduced in BuildKit v0.4.0. */
  Exports: CacheOptionsEntry[];
  /** Imports was introduced in BuildKit v0.4.0. */
  Imports: CacheOptionsEntry[];
}

export interface CacheOptions_ExportAttrsDeprecatedEntry {
  key: string;
  value: string;
}

export interface CacheOptionsEntry {
  /** Type is like "registry" or "local" */
  Type: string;
  /**
   * Attrs are like mode=(min,max), ref=example.com:5000/foo/bar .
   * See cache importer/exporter implementations' documentation.
   */
  Attrs: { [key: string]: string };
}

export interface CacheOptionsEntry_AttrsEntry {
  key: string;
  value: string;
}

export interface SolveResponse {
  ExporterResponse: { [key: string]: string };
}

export interface SolveResponse_ExporterResponseEntry {
  key: string;
  value: string;
}

export interface StatusRequest {
  Ref: string;
}

export interface StatusResponse {
  vertexes: Vertex[];
  statuses: VertexStatus[];
  logs: VertexLog[];
  warnings: VertexWarning[];
}

export interface Vertex {
  digest: string;
  inputs: string[];
  name: string;
  cached: boolean;
  started?: Date;
  completed?: Date;
  /** typed errors? */
  error: string;
  progressGroup?: ProgressGroup;
}

export interface VertexStatus {
  ID: string;
  vertex: string;
  name: string;
  current: number;
  total: number;
  timestamp?: Date;
  started?: Date;
  completed?: Date;
}

export interface VertexLog {
  vertex: string;
  timestamp?: Date;
  stream: number;
  msg: Buffer;
}

export interface VertexWarning {
  vertex: string;
  level: number;
  short: Buffer;
  detail: Buffer[];
  url: string;
  info?: SourceInfo;
  ranges: Range[];
}

export interface BytesMessage {
  data: Buffer;
}

export interface ListWorkersRequest {
  /** containerd style */
  filter: string[];
}

export interface ListWorkersResponse {
  record: WorkerRecord[];
}

export interface InfoRequest { }

export interface InfoResponse {
  buildkitVersion?: BuildkitVersion;
}

function createBasePruneRequest(): PruneRequest {
  return { filter: [], all: false, keepDuration: 0, keepBytes: 0 };
}

export const PruneRequest = {
  encode(
    message: PruneRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.filter) {
      writer.uint32(10).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PruneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePruneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter.push(reader.string());
          break;
        case 2:
          message.all = reader.bool();
          break;
        case 3:
          message.keepDuration = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.keepBytes = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PruneRequest {
    return {
      filter: Array.isArray(object?.filter)
        ? object.filter.map((e: any) => String(e))
        : [],
      all: isSet(object.all) ? Boolean(object.all) : false,
      keepDuration: isSet(object.keepDuration)
        ? Number(object.keepDuration)
        : 0,
      keepBytes: isSet(object.keepBytes) ? Number(object.keepBytes) : 0,
    };
  },

  toJSON(message: PruneRequest): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) => e);
    } else {
      obj.filter = [];
    }
    message.all !== undefined && (obj.all = message.all);
    message.keepDuration !== undefined &&
      (obj.keepDuration = Math.round(message.keepDuration));
    message.keepBytes !== undefined &&
      (obj.keepBytes = Math.round(message.keepBytes));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PruneRequest>, I>>(
    object: I
  ): PruneRequest {
    const message = createBasePruneRequest();
    message.filter = object.filter?.map((e) => e) || [];
    message.all = object.all ?? false;
    message.keepDuration = object.keepDuration ?? 0;
    message.keepBytes = object.keepBytes ?? 0;
    return message;
  },
};

function createBaseDiskUsageRequest(): DiskUsageRequest {
  return { filter: [] };
}

export const DiskUsageRequest = {
  encode(
    message: DiskUsageRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.filter) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskUsageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): DiskUsageRequest {
    return {
      filter: Array.isArray(object?.filter)
        ? object.filter.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DiskUsageRequest): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) => e);
    } else {
      obj.filter = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskUsageRequest>, I>>(
    object: I
  ): DiskUsageRequest {
    const message = createBaseDiskUsageRequest();
    message.filter = object.filter?.map((e) => e) || [];
    return message;
  },
};

function createBaseDiskUsageResponse(): DiskUsageResponse {
  return { record: [] };
}

export const DiskUsageResponse = {
  encode(
    message: DiskUsageResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.record) {
      UsageRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiskUsageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiskUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record.push(UsageRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiskUsageResponse {
    return {
      record: Array.isArray(object?.record)
        ? object.record.map((e: any) => UsageRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DiskUsageResponse): unknown {
    const obj: any = {};
    if (message.record) {
      obj.record = message.record.map((e) =>
        e ? UsageRecord.toJSON(e) : undefined
      );
    } else {
      obj.record = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiskUsageResponse>, I>>(
    object: I
  ): DiskUsageResponse {
    const message = createBaseDiskUsageResponse();
    message.record =
      object.record?.map((e) => UsageRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUsageRecord(): UsageRecord {
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
    Parents: [],
  };
}

export const UsageRecord = {
  encode(
    message: UsageRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.CreatedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.LastUsedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.LastUsedAt),
        writer.uint32(58).fork()
      ).ldelim();
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
    for (const v of message.Parents) {
      writer.uint32(98).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsageRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.Size = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.Parent = reader.string();
          break;
        case 6:
          message.CreatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.LastUsedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.UsageCount = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): UsageRecord {
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
      Parents: Array.isArray(object?.Parents)
        ? object.Parents.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: UsageRecord): unknown {
    const obj: any = {};
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
      obj.Parents = message.Parents.map((e) => e);
    } else {
      obj.Parents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsageRecord>, I>>(
    object: I
  ): UsageRecord {
    const message = createBaseUsageRecord();
    message.ID = object.ID ?? "";
    message.Mutable = object.Mutable ?? false;
    message.InUse = object.InUse ?? false;
    message.Size = object.Size ?? 0;
    message.Parent = object.Parent ?? "";
    message.CreatedAt = object.CreatedAt ?? undefined;
    message.LastUsedAt = object.LastUsedAt ?? undefined;
    message.UsageCount = object.UsageCount ?? 0;
    message.Description = object.Description ?? "";
    message.RecordType = object.RecordType ?? "";
    message.Shared = object.Shared ?? false;
    message.Parents = object.Parents?.map((e) => e) || [];
    return message;
  },
};

function createBaseSolveRequest(): SolveRequest {
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
    FrontendInputs: {},
  };
}

export const SolveRequest = {
  encode(
    message: SolveRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    if (message.Definition !== undefined) {
      Definition.encode(message.Definition, writer.uint32(18).fork()).ldelim();
    }
    if (message.Exporter !== "") {
      writer.uint32(26).string(message.Exporter);
    }
    Object.entries(message.ExporterAttrs).forEach(([key, value]) => {
      SolveRequest_ExporterAttrsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.Session !== "") {
      writer.uint32(42).string(message.Session);
    }
    if (message.Frontend !== "") {
      writer.uint32(50).string(message.Frontend);
    }
    Object.entries(message.FrontendAttrs).forEach(([key, value]) => {
      SolveRequest_FrontendAttrsEntry.encode(
        { key: key as any, value },
        writer.uint32(58).fork()
      ).ldelim();
    });
    if (message.Cache !== undefined) {
      CacheOptions.encode(message.Cache, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.Entitlements) {
      writer.uint32(74).string(v!);
    }
    Object.entries(message.FrontendInputs).forEach(([key, value]) => {
      SolveRequest_FrontendInputsEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
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
          message.Ref = reader.string();
          break;
        case 2:
          message.Definition = Definition.decode(reader, reader.uint32());
          break;
        case 3:
          message.Exporter = reader.string();
          break;
        case 4:
          const entry4 = SolveRequest_ExporterAttrsEntry.decode(
            reader,
            reader.uint32()
          );
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
          const entry7 = SolveRequest_FrontendAttrsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry7.value !== undefined) {
            message.FrontendAttrs[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.Cache = CacheOptions.decode(reader, reader.uint32());
          break;
        case 9:
          message.Entitlements.push(reader.string());
          break;
        case 10:
          const entry10 = SolveRequest_FrontendInputsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): SolveRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
      Definition: isSet(object.Definition)
        ? Definition.fromJSON(object.Definition)
        : undefined,
      Exporter: isSet(object.Exporter) ? String(object.Exporter) : "",
      ExporterAttrs: isObject(object.ExporterAttrs)
        ? Object.entries(object.ExporterAttrs).reduce<{
          [key: string]: string;
        }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Session: isSet(object.Session) ? String(object.Session) : "",
      Frontend: isSet(object.Frontend) ? String(object.Frontend) : "",
      FrontendAttrs: isObject(object.FrontendAttrs)
        ? Object.entries(object.FrontendAttrs).reduce<{
          [key: string]: string;
        }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Cache: isSet(object.Cache)
        ? CacheOptions.fromJSON(object.Cache)
        : undefined,
      Entitlements: Array.isArray(object?.Entitlements)
        ? object.Entitlements.map((e: any) => String(e))
        : [],
      FrontendInputs: isObject(object.FrontendInputs)
        ? Object.entries(object.FrontendInputs).reduce<{
          [key: string]: Definition;
        }>((acc, [key, value]) => {
          acc[key] = Definition.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SolveRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    message.Definition !== undefined &&
      (obj.Definition = message.Definition
        ? Definition.toJSON(message.Definition)
        : undefined);
    message.Exporter !== undefined && (obj.Exporter = message.Exporter);
    obj.ExporterAttrs = {};
    if (message.ExporterAttrs) {
      Object.entries(message.ExporterAttrs).forEach(([k, v]) => {
        obj.ExporterAttrs[k] = v;
      });
    }
    message.Session !== undefined && (obj.Session = message.Session);
    message.Frontend !== undefined && (obj.Frontend = message.Frontend);
    obj.FrontendAttrs = {};
    if (message.FrontendAttrs) {
      Object.entries(message.FrontendAttrs).forEach(([k, v]) => {
        obj.FrontendAttrs[k] = v;
      });
    }
    message.Cache !== undefined &&
      (obj.Cache = message.Cache
        ? CacheOptions.toJSON(message.Cache)
        : undefined);
    if (message.Entitlements) {
      obj.Entitlements = message.Entitlements.map((e) => e);
    } else {
      obj.Entitlements = [];
    }
    obj.FrontendInputs = {};
    if (message.FrontendInputs) {
      Object.entries(message.FrontendInputs).forEach(([k, v]) => {
        obj.FrontendInputs[k] = Definition.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveRequest>, I>>(
    object: I
  ): SolveRequest {
    const message = createBaseSolveRequest();
    message.Ref = object.Ref ?? "";
    message.Definition =
      object.Definition !== undefined && object.Definition !== null
        ? Definition.fromPartial(object.Definition)
        : undefined;
    message.Exporter = object.Exporter ?? "";
    message.ExporterAttrs = Object.entries(object.ExporterAttrs ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Session = object.Session ?? "";
    message.Frontend = object.Frontend ?? "";
    message.FrontendAttrs = Object.entries(object.FrontendAttrs ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Cache =
      object.Cache !== undefined && object.Cache !== null
        ? CacheOptions.fromPartial(object.Cache)
        : undefined;
    message.Entitlements = object.Entitlements?.map((e) => e) || [];
    message.FrontendInputs = Object.entries(
      object.FrontendInputs ?? {}
    ).reduce<{ [key: string]: Definition }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Definition.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSolveRequest_ExporterAttrsEntry(): SolveRequest_ExporterAttrsEntry {
  return { key: "", value: "" };
}

export const SolveRequest_ExporterAttrsEntry = {
  encode(
    message: SolveRequest_ExporterAttrsEntry,
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
  ): SolveRequest_ExporterAttrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveRequest_ExporterAttrsEntry();
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

  fromJSON(object: any): SolveRequest_ExporterAttrsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: SolveRequest_ExporterAttrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveRequest_ExporterAttrsEntry>, I>>(
    object: I
  ): SolveRequest_ExporterAttrsEntry {
    const message = createBaseSolveRequest_ExporterAttrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSolveRequest_FrontendAttrsEntry(): SolveRequest_FrontendAttrsEntry {
  return { key: "", value: "" };
}

export const SolveRequest_FrontendAttrsEntry = {
  encode(
    message: SolveRequest_FrontendAttrsEntry,
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
  ): SolveRequest_FrontendAttrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveRequest_FrontendAttrsEntry();
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

  fromJSON(object: any): SolveRequest_FrontendAttrsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: SolveRequest_FrontendAttrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveRequest_FrontendAttrsEntry>, I>>(
    object: I
  ): SolveRequest_FrontendAttrsEntry {
    const message = createBaseSolveRequest_FrontendAttrsEntry();
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

function createBaseCacheOptions(): CacheOptions {
  return {
    ExportRefDeprecated: "",
    ImportRefsDeprecated: [],
    ExportAttrsDeprecated: {},
    Exports: [],
    Imports: [],
  };
}

export const CacheOptions = {
  encode(
    message: CacheOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ExportRefDeprecated !== "") {
      writer.uint32(10).string(message.ExportRefDeprecated);
    }
    for (const v of message.ImportRefsDeprecated) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.ExportAttrsDeprecated).forEach(([key, value]) => {
      CacheOptions_ExportAttrsDeprecatedEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    for (const v of message.Exports) {
      CacheOptionsEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.Imports) {
      CacheOptionsEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ExportRefDeprecated = reader.string();
          break;
        case 2:
          message.ImportRefsDeprecated.push(reader.string());
          break;
        case 3:
          const entry3 = CacheOptions_ExportAttrsDeprecatedEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.ExportAttrsDeprecated[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.Exports.push(
            CacheOptionsEntry.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.Imports.push(
            CacheOptionsEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CacheOptions {
    return {
      ExportRefDeprecated: isSet(object.ExportRefDeprecated)
        ? String(object.ExportRefDeprecated)
        : "",
      ImportRefsDeprecated: Array.isArray(object?.ImportRefsDeprecated)
        ? object.ImportRefsDeprecated.map((e: any) => String(e))
        : [],
      ExportAttrsDeprecated: isObject(object.ExportAttrsDeprecated)
        ? Object.entries(object.ExportAttrsDeprecated).reduce<{
          [key: string]: string;
        }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Exports: Array.isArray(object?.Exports)
        ? object.Exports.map((e: any) => CacheOptionsEntry.fromJSON(e))
        : [],
      Imports: Array.isArray(object?.Imports)
        ? object.Imports.map((e: any) => CacheOptionsEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CacheOptions): unknown {
    const obj: any = {};
    message.ExportRefDeprecated !== undefined &&
      (obj.ExportRefDeprecated = message.ExportRefDeprecated);
    if (message.ImportRefsDeprecated) {
      obj.ImportRefsDeprecated = message.ImportRefsDeprecated.map((e) => e);
    } else {
      obj.ImportRefsDeprecated = [];
    }
    obj.ExportAttrsDeprecated = {};
    if (message.ExportAttrsDeprecated) {
      Object.entries(message.ExportAttrsDeprecated).forEach(([k, v]) => {
        obj.ExportAttrsDeprecated[k] = v;
      });
    }
    if (message.Exports) {
      obj.Exports = message.Exports.map((e) =>
        e ? CacheOptionsEntry.toJSON(e) : undefined
      );
    } else {
      obj.Exports = [];
    }
    if (message.Imports) {
      obj.Imports = message.Imports.map((e) =>
        e ? CacheOptionsEntry.toJSON(e) : undefined
      );
    } else {
      obj.Imports = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CacheOptions>, I>>(
    object: I
  ): CacheOptions {
    const message = createBaseCacheOptions();
    message.ExportRefDeprecated = object.ExportRefDeprecated ?? "";
    message.ImportRefsDeprecated =
      object.ImportRefsDeprecated?.map((e) => e) || [];
    message.ExportAttrsDeprecated = Object.entries(
      object.ExportAttrsDeprecated ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Exports =
      object.Exports?.map((e) => CacheOptionsEntry.fromPartial(e)) || [];
    message.Imports =
      object.Imports?.map((e) => CacheOptionsEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCacheOptions_ExportAttrsDeprecatedEntry(): CacheOptions_ExportAttrsDeprecatedEntry {
  return { key: "", value: "" };
}

export const CacheOptions_ExportAttrsDeprecatedEntry = {
  encode(
    message: CacheOptions_ExportAttrsDeprecatedEntry,
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
  ): CacheOptions_ExportAttrsDeprecatedEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheOptions_ExportAttrsDeprecatedEntry();
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

  fromJSON(object: any): CacheOptions_ExportAttrsDeprecatedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: CacheOptions_ExportAttrsDeprecatedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CacheOptions_ExportAttrsDeprecatedEntry>, I>
  >(object: I): CacheOptions_ExportAttrsDeprecatedEntry {
    const message = createBaseCacheOptions_ExportAttrsDeprecatedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
  return { ExporterResponse: {} };
}

export const SolveResponse = {
  encode(
    message: SolveResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.ExporterResponse).forEach(([key, value]) => {
      SolveResponse_ExporterResponseEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
          const entry1 = SolveResponse_ExporterResponseEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): SolveResponse {
    return {
      ExporterResponse: isObject(object.ExporterResponse)
        ? Object.entries(object.ExporterResponse).reduce<{
          [key: string]: string;
        }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SolveResponse): unknown {
    const obj: any = {};
    obj.ExporterResponse = {};
    if (message.ExporterResponse) {
      Object.entries(message.ExporterResponse).forEach(([k, v]) => {
        obj.ExporterResponse[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SolveResponse>, I>>(
    object: I
  ): SolveResponse {
    const message = createBaseSolveResponse();
    message.ExporterResponse = Object.entries(
      object.ExporterResponse ?? {}
    ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSolveResponse_ExporterResponseEntry(): SolveResponse_ExporterResponseEntry {
  return { key: "", value: "" };
}

export const SolveResponse_ExporterResponseEntry = {
  encode(
    message: SolveResponse_ExporterResponseEntry,
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
  ): SolveResponse_ExporterResponseEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolveResponse_ExporterResponseEntry();
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

  fromJSON(object: any): SolveResponse_ExporterResponseEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: SolveResponse_ExporterResponseEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SolveResponse_ExporterResponseEntry>, I>
  >(object: I): SolveResponse_ExporterResponseEntry {
    const message = createBaseSolveResponse_ExporterResponseEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return { Ref: "" };
}

export const StatusRequest = {
  encode(
    message: StatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Ref !== "") {
      writer.uint32(10).string(message.Ref);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): StatusRequest {
    return {
      Ref: isSet(object.Ref) ? String(object.Ref) : "",
    };
  },

  toJSON(message: StatusRequest): unknown {
    const obj: any = {};
    message.Ref !== undefined && (obj.Ref = message.Ref);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatusRequest>, I>>(
    object: I
  ): StatusRequest {
    const message = createBaseStatusRequest();
    message.Ref = object.Ref ?? "";
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return { vertexes: [], statuses: [], logs: [], warnings: [] };
}

export const StatusResponse = {
  encode(
    message: StatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vertexes) {
      Vertex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.statuses) {
      VertexStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.logs) {
      VertexLog.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.warnings) {
      VertexWarning.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertexes.push(Vertex.decode(reader, reader.uint32()));
          break;
        case 2:
          message.statuses.push(VertexStatus.decode(reader, reader.uint32()));
          break;
        case 3:
          message.logs.push(VertexLog.decode(reader, reader.uint32()));
          break;
        case 4:
          message.warnings.push(VertexWarning.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    return {
      vertexes: Array.isArray(object?.vertexes)
        ? object.vertexes.map((e: any) => Vertex.fromJSON(e))
        : [],
      statuses: Array.isArray(object?.statuses)
        ? object.statuses.map((e: any) => VertexStatus.fromJSON(e))
        : [],
      logs: Array.isArray(object?.logs)
        ? object.logs.map((e: any) => VertexLog.fromJSON(e))
        : [],
      warnings: Array.isArray(object?.warnings)
        ? object.warnings.map((e: any) => VertexWarning.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    if (message.vertexes) {
      obj.vertexes = message.vertexes.map((e) =>
        e ? Vertex.toJSON(e) : undefined
      );
    } else {
      obj.vertexes = [];
    }
    if (message.statuses) {
      obj.statuses = message.statuses.map((e) =>
        e ? VertexStatus.toJSON(e) : undefined
      );
    } else {
      obj.statuses = [];
    }
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? VertexLog.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    if (message.warnings) {
      obj.warnings = message.warnings.map((e) =>
        e ? VertexWarning.toJSON(e) : undefined
      );
    } else {
      obj.warnings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatusResponse>, I>>(
    object: I
  ): StatusResponse {
    const message = createBaseStatusResponse();
    message.vertexes = object.vertexes?.map((e) => Vertex.fromPartial(e)) || [];
    message.statuses =
      object.statuses?.map((e) => VertexStatus.fromPartial(e)) || [];
    message.logs = object.logs?.map((e) => VertexLog.fromPartial(e)) || [];
    message.warnings =
      object.warnings?.map((e) => VertexWarning.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVertex(): Vertex {
  return {
    digest: "",
    inputs: [],
    name: "",
    cached: false,
    started: undefined,
    completed: undefined,
    error: "",
    progressGroup: undefined,
  };
}

export const Vertex = {
  encode(
    message: Vertex,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.digest !== "") {
      writer.uint32(10).string(message.digest);
    }
    for (const v of message.inputs) {
      writer.uint32(18).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.cached === true) {
      writer.uint32(32).bool(message.cached);
    }
    if (message.started !== undefined) {
      Timestamp.encode(
        toTimestamp(message.started),
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.completed !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completed),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(58).string(message.error);
    }
    if (message.progressGroup !== undefined) {
      ProgressGroup.encode(
        message.progressGroup,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vertex {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertex();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.started = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.completed = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.error = reader.string();
          break;
        case 8:
          message.progressGroup = ProgressGroup.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vertex {
    return {
      digest: isSet(object.digest) ? String(object.digest) : "",
      inputs: Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => String(e))
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
        ? ProgressGroup.fromJSON(object.progressGroup)
        : undefined,
    };
  },

  toJSON(message: Vertex): unknown {
    const obj: any = {};
    message.digest !== undefined && (obj.digest = message.digest);
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => e);
    } else {
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
        ? ProgressGroup.toJSON(message.progressGroup)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vertex>, I>>(object: I): Vertex {
    const message = createBaseVertex();
    message.digest = object.digest ?? "";
    message.inputs = object.inputs?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.cached = object.cached ?? false;
    message.started = object.started ?? undefined;
    message.completed = object.completed ?? undefined;
    message.error = object.error ?? "";
    message.progressGroup =
      object.progressGroup !== undefined && object.progressGroup !== null
        ? ProgressGroup.fromPartial(object.progressGroup)
        : undefined;
    return message;
  },
};

function createBaseVertexStatus(): VertexStatus {
  return {
    ID: "",
    vertex: "",
    name: "",
    current: 0,
    total: 0,
    timestamp: undefined,
    started: undefined,
    completed: undefined,
  };
}

export const VertexStatus = {
  encode(
    message: VertexStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.started !== undefined) {
      Timestamp.encode(
        toTimestamp(message.started),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.completed !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completed),
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.current = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.total = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.started = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.completed = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VertexStatus {
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
        : undefined,
    };
  },

  toJSON(message: VertexStatus): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<VertexStatus>, I>>(
    object: I
  ): VertexStatus {
    const message = createBaseVertexStatus();
    message.ID = object.ID ?? "";
    message.vertex = object.vertex ?? "";
    message.name = object.name ?? "";
    message.current = object.current ?? 0;
    message.total = object.total ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.started = object.started ?? undefined;
    message.completed = object.completed ?? undefined;
    return message;
  },
};

function createBaseVertexLog(): VertexLog {
  return { vertex: "", timestamp: undefined, stream: 0, msg: Buffer.alloc(0) };
}

export const VertexLog = {
  encode(
    message: VertexLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vertex !== "") {
      writer.uint32(10).string(message.vertex);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.stream !== 0) {
      writer.uint32(24).int64(message.stream);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertex = reader.string();
          break;
        case 2:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.stream = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.msg = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VertexLog {
    return {
      vertex: isSet(object.vertex) ? String(object.vertex) : "",
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
      stream: isSet(object.stream) ? Number(object.stream) : 0,
      msg: isSet(object.msg)
        ? Buffer.from(bytesFromBase64(object.msg))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: VertexLog): unknown {
    const obj: any = {};
    message.vertex !== undefined && (obj.vertex = message.vertex);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    message.stream !== undefined && (obj.stream = Math.round(message.stream));
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(
        message.msg !== undefined ? message.msg : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VertexLog>, I>>(
    object: I
  ): VertexLog {
    const message = createBaseVertexLog();
    message.vertex = object.vertex ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.stream = object.stream ?? 0;
    message.msg = object.msg ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseVertexWarning(): VertexWarning {
  return {
    vertex: "",
    level: 0,
    short: Buffer.alloc(0),
    detail: [],
    url: "",
    info: undefined,
    ranges: [],
  };
}

export const VertexWarning = {
  encode(
    message: VertexWarning,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vertex !== "") {
      writer.uint32(10).string(message.vertex);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexWarning {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexWarning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vertex = reader.string();
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

  fromJSON(object: any): VertexWarning {
    return {
      vertex: isSet(object.vertex) ? String(object.vertex) : "",
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

  toJSON(message: VertexWarning): unknown {
    const obj: any = {};
    message.vertex !== undefined && (obj.vertex = message.vertex);
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

  fromPartial<I extends Exact<DeepPartial<VertexWarning>, I>>(
    object: I
  ): VertexWarning {
    const message = createBaseVertexWarning();
    message.vertex = object.vertex ?? "";
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

function createBaseBytesMessage(): BytesMessage {
  return { data: Buffer.alloc(0) };
}

export const BytesMessage = {
  encode(
    message: BytesMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytesMessage {
    return {
      data: isSet(object.data)
        ? Buffer.from(bytesFromBase64(object.data))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: BytesMessage): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BytesMessage>, I>>(
    object: I
  ): BytesMessage {
    const message = createBaseBytesMessage();
    message.data = object.data ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseListWorkersRequest(): ListWorkersRequest {
  return { filter: [] };
}

export const ListWorkersRequest = {
  encode(
    message: ListWorkersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.filter) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ListWorkersRequest {
    return {
      filter: Array.isArray(object?.filter)
        ? object.filter.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ListWorkersRequest): unknown {
    const obj: any = {};
    if (message.filter) {
      obj.filter = message.filter.map((e) => e);
    } else {
      obj.filter = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListWorkersRequest>, I>>(
    object: I
  ): ListWorkersRequest {
    const message = createBaseListWorkersRequest();
    message.filter = object.filter?.map((e) => e) || [];
    return message;
  },
};

function createBaseListWorkersResponse(): ListWorkersResponse {
  return { record: [] };
}

export const ListWorkersResponse = {
  encode(
    message: ListWorkersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.record) {
      WorkerRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListWorkersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListWorkersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record.push(WorkerRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListWorkersResponse {
    return {
      record: Array.isArray(object?.record)
        ? object.record.map((e: any) => WorkerRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListWorkersResponse): unknown {
    const obj: any = {};
    if (message.record) {
      obj.record = message.record.map((e) =>
        e ? WorkerRecord.toJSON(e) : undefined
      );
    } else {
      obj.record = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListWorkersResponse>, I>>(
    object: I
  ): ListWorkersResponse {
    const message = createBaseListWorkersResponse();
    message.record =
      object.record?.map((e) => WorkerRecord.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInfoRequest(): InfoRequest {
  return {};
}

export const InfoRequest = {
  encode(_: InfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoRequest();
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

  fromJSON(_: any): InfoRequest {
    return {};
  },

  toJSON(_: InfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InfoRequest>, I>>(_: I): InfoRequest {
    const message = createBaseInfoRequest();
    return message;
  },
};

function createBaseInfoResponse(): InfoResponse {
  return { buildkitVersion: undefined };
}

export const InfoResponse = {
  encode(
    message: InfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.buildkitVersion !== undefined) {
      BuildkitVersion.encode(
        message.buildkitVersion,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildkitVersion = BuildkitVersion.decode(
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

  fromJSON(object: any): InfoResponse {
    return {
      buildkitVersion: isSet(object.buildkitVersion)
        ? BuildkitVersion.fromJSON(object.buildkitVersion)
        : undefined,
    };
  },

  toJSON(message: InfoResponse): unknown {
    const obj: any = {};
    message.buildkitVersion !== undefined &&
      (obj.buildkitVersion = message.buildkitVersion
        ? BuildkitVersion.toJSON(message.buildkitVersion)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InfoResponse>, I>>(
    object: I
  ): InfoResponse {
    const message = createBaseInfoResponse();
    message.buildkitVersion =
      object.buildkitVersion !== undefined && object.buildkitVersion !== null
        ? BuildkitVersion.fromPartial(object.buildkitVersion)
        : undefined;
    return message;
  },
};

export type ControlService = typeof ControlService;
export const ControlService = {
  diskUsage: {
    path: "/moby.buildkit.v1.Control/DiskUsage",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DiskUsageRequest) =>
      Buffer.from(DiskUsageRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DiskUsageRequest.decode(value),
    responseSerialize: (value: DiskUsageResponse) =>
      Buffer.from(DiskUsageResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DiskUsageResponse.decode(value),
  },
  prune: {
    path: "/moby.buildkit.v1.Control/Prune",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: PruneRequest) =>
      Buffer.from(PruneRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PruneRequest.decode(value),
    responseSerialize: (value: UsageRecord) =>
      Buffer.from(UsageRecord.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UsageRecord.decode(value),
  },
  solve: {
    path: "/moby.buildkit.v1.Control/Solve",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SolveRequest) =>
      Buffer.from(SolveRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SolveRequest.decode(value),
    responseSerialize: (value: SolveResponse) =>
      Buffer.from(SolveResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SolveResponse.decode(value),
  },
  status: {
    path: "/moby.buildkit.v1.Control/Status",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: StatusRequest) =>
      Buffer.from(StatusRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => StatusRequest.decode(value),
    responseSerialize: (value: StatusResponse) =>
      Buffer.from(StatusResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => StatusResponse.decode(value),
  },
  session: {
    path: "/moby.buildkit.v1.Control/Session",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: BytesMessage) =>
      Buffer.from(BytesMessage.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BytesMessage.decode(value),
    responseSerialize: (value: BytesMessage) =>
      Buffer.from(BytesMessage.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BytesMessage.decode(value),
  },
  listWorkers: {
    path: "/moby.buildkit.v1.Control/ListWorkers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListWorkersRequest) =>
      Buffer.from(ListWorkersRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListWorkersRequest.decode(value),
    responseSerialize: (value: ListWorkersResponse) =>
      Buffer.from(ListWorkersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListWorkersResponse.decode(value),
  },
  info: {
    path: "/moby.buildkit.v1.Control/Info",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InfoRequest) =>
      Buffer.from(InfoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InfoRequest.decode(value),
    responseSerialize: (value: InfoResponse) =>
      Buffer.from(InfoResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InfoResponse.decode(value),
  },
} as const;

export interface ControlServer extends UntypedServiceImplementation {
  diskUsage: handleUnaryCall<DiskUsageRequest, DiskUsageResponse>;
  prune: handleServerStreamingCall<PruneRequest, UsageRecord>;
  solve: handleUnaryCall<SolveRequest, SolveResponse>;
  status: handleServerStreamingCall<StatusRequest, StatusResponse>;
  session: handleBidiStreamingCall<BytesMessage, BytesMessage>;
  listWorkers: handleUnaryCall<ListWorkersRequest, ListWorkersResponse>;
  info: handleUnaryCall<InfoRequest, InfoResponse>;
}

export interface ControlClient extends Client {
  diskUsage(
    request: DiskUsageRequest,
    callback: (error: ServiceError | null, response: DiskUsageResponse) => void
  ): ClientUnaryCall;
  diskUsage(
    request: DiskUsageRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DiskUsageResponse) => void
  ): ClientUnaryCall;
  diskUsage(
    request: DiskUsageRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DiskUsageResponse) => void
  ): ClientUnaryCall;
  prune(
    request: PruneRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<UsageRecord>;
  prune(
    request: PruneRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<UsageRecord>;
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
  status(
    request: StatusRequest,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StatusResponse>;
  status(
    request: StatusRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>
  ): ClientReadableStream<StatusResponse>;
  session(): ClientDuplexStream<BytesMessage, BytesMessage>;
  session(
    options: Partial<CallOptions>
  ): ClientDuplexStream<BytesMessage, BytesMessage>;
  session(
    metadata: Metadata,
    options?: Partial<CallOptions>
  ): ClientDuplexStream<BytesMessage, BytesMessage>;
  listWorkers(
    request: ListWorkersRequest,
    callback: (
      error: ServiceError | null,
      response: ListWorkersResponse
    ) => void
  ): ClientUnaryCall;
  listWorkers(
    request: ListWorkersRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ListWorkersResponse
    ) => void
  ): ClientUnaryCall;
  listWorkers(
    request: ListWorkersRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ListWorkersResponse
    ) => void
  ): ClientUnaryCall;
  info(
    request: InfoRequest,
    callback: (error: ServiceError | null, response: InfoResponse) => void
  ): ClientUnaryCall;
  info(
    request: InfoRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InfoResponse) => void
  ): ClientUnaryCall;
  info(
    request: InfoRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InfoResponse) => void
  ): ClientUnaryCall;
}

export const ControlClient = makeGenericClientConstructor(
  ControlService,
  "moby.buildkit.v1.Control"
) as unknown as {
  new(
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): ControlClient;
  service: typeof ControlService;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
