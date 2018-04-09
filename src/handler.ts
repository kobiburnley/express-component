import {HandleFn} from "./types";

export interface HandlerParams {
  path?: string;

  handle: HandleFn | any;
}

export interface Handler extends HandlerParams {

}

export class Handler {
  constructor(params: HandlerParams) {
    Object.assign(this, params)
  }
}
