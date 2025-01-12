import { IncomingMessage } from 'http';

import { getRequestBody } from '../src/util/utils';

const request = {
  on: jest.fn(),
};

const object = {
  name: '홍길동',
  age: 20,
  city: '한양',
};

const json = JSON.stringify(object);

describe('getRequestBody 테스트 모음', () => {
  it('유효한 JSON에 대한 객체를 반환', async () => {
    request.on.mockImplementation((event, callback) => {
      if (event === 'data') {
        callback(json);
      } else {
        callback();
      }
    });

    const actual = await getRequestBody(request as any as IncomingMessage);

    expect(actual).toEqual(object);
  });

  it('유효하지 않은 JSON에 대한 오류를 반환', async () => {
    request.on.mockImplementation((event, callback) => {
      if (event === 'data') {
        callback('a' + json);
      } else {
        callback();
      }
    });

    await expect(getRequestBody(request as any)).rejects.toThrow(
      'Unexpected token a in JSON at position 0'
    );
  });

  it('예상치 못한 오류에 대한 오류를 반환', async () => {
    const error = new Error('오류 발생!');

    request.on.mockImplementation((event, callback) => {
      if (event === 'error') {
        callback(error);
      }
    });

    await expect(getRequestBody(request as any)).rejects.toThrow(error.message);
  });
});
