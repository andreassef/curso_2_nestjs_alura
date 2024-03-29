/* eslint-disable @typescript-eslint/ban-types */
import { NestResponse } from './nest-response';

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  };

  setStatus(status: number) {
    this.response.status = status;
    return this;
  }

  setHeaders(headers: Object) {
    this.response.headers = headers;
    return this;
  }

  setBody(body: Object) {
    this.response.body = body;
    return this;
  }

  build(): NestResponse {
    return new NestResponse(this.response);
  }
}
