import {
  ActionCreatorInvariantMiddlewareOptions,
  ImmutableStateInvariantMiddlewareOptions,
  SerializableStateInvariantMiddlewareOptions,
} from '@reduxjs/toolkit';

export type ReturnSearchMP3Type = {
  result: StatResult[];
  resultWithFolders: StatResultWhithFolders;
};

export interface StatResult {
  name: string | undefined;
  path: string;
  size: number;
  mode: number;
  ctime: string;
  mtime: string;
  originalFilepath: string;
  isFile: boolean;
  isDirectory: boolean;
}

export type StatResultWhithFolders =
  | {
      [id: string]: [StatResultWhithFolders] | [];
    }
  | StatResult;

interface ThunkOptions<E = any> {
  extraArgument: E;
}
export interface GetDefaultMiddlewareOptions {
  thunk?: boolean | ThunkOptions;
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
  actionCreatorCheck?: boolean | ActionCreatorInvariantMiddlewareOptions;
}
