import { IncomingMessage, ServerResponse } from 'http';

import { Authorizer } from '../src/authentication/authorizer';
import { RegisterHandler } from '../src/database/register-handler';
import { HTTP_CODES, HTTP_METHODS } from '../src/model/server.model';
import { Account } from '../src/model/authentication.model';

const getRequestBody = jest.fn();

jest.mock('../src/util/utils', () => ({
  getRequestBody: () => getRequestBody(),
}));

describe('RegisterHandler 클래스 테스트', () => {
  let sut: RegisterHandler;

  const request = {
    method: '',
  };

  const response = {
    statusCode: 0,
    writeHead: jest.fn(),
    write: jest.fn(),
  };

  const authorizer = {
    registerUser: jest.fn(),
  };

  const account: Account = {
    id: '',
    username: '사용자이름',
    password: '비밀번호',
  };

  const id = '5293';

  beforeEach(() => {
    sut = new RegisterHandler(
      request as IncomingMessage,
      response as any as ServerResponse,
      authorizer as any as Authorizer
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('유효한 계정 등록', async () => {
    request.method = HTTP_METHODS.POST;
    getRequestBody.mockResolvedValueOnce(account);
    authorizer.registerUser.mockResolvedValueOnce(id);

    await sut.handleRequest();

    expect(response.statusCode).toBe(HTTP_CODES.CREATED);
    expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.CREATED, {
      'Content-Type': 'application/json',
    });
    expect(response.write).toHaveBeenCalledWith(
      JSON.stringify({
        userId: id,
      })
    );
  });

  it('지원되지 않는 메서드로 계정 등록 실패', async () => {
    request.method = HTTP_METHODS.GET;

    await sut.handleRequest();

    expect(response.writeHead).not.toHaveBeenCalled();
    expect(response.write).not.toHaveBeenCalled();
    expect(getRequestBody).not.toHaveBeenCalled();
  });
});
