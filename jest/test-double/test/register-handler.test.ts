import { IncomingMessage, ServerResponse } from 'http';

import { Authorizer } from '../src/authentication/authorizer';
import { RegisterHandler } from '../src/database/register-handler';

describe('RegisterHandler 클래스 테스트', () => {
  let sut: RegisterHandler;

  const request = {
    method: undefined,
  };

  const response = {
    statusCode: 0,
    writeHead: jest.fn(),
    write: jest.fn(),
  };

  const authorizer = {
    registerUser: jest.fn(),
  };

  beforeEach(() => {
    sut = new RegisterHandler(
      request as any as IncomingMessage,
      response as any as ServerResponse,
      authorizer as any as Authorizer
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
