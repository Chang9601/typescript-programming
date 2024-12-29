import { Account } from '../src/model/authentication.model';
import { Database } from '../src/database/database';
import { UserCredentialsDataAccess } from '../src/user-credentials-data-access';

const insert = jest.fn();
const findBy = jest.fn();

jest.mock('../src/database', () => {
  return {
    Database: jest.fn().mockImplementation(() => {
      return {
        insert: insert,
        findBy: findBy,
      };
    }),
  };
});

describe('UserCredentialsDataAccess 클래스 테스트', () => {
  let sut: UserCredentialsDataAccess;

  const account: Account = {
    id: '',
    username: '사용자',
    password: '비밀번호',
  };

  const id = '1122';

  beforeEach(() => {
    sut = new UserCredentialsDataAccess();
    expect(Database).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('사용자를 추가하고 아이디 반환', async () => {
    insert.mockResolvedValueOnce(id);

    const actual = await sut.addUser(account);

    expect(actual).toBe(id);
    expect(insert).toHaveBeenCalledWith(account);
  });

  it('아이디로 사용자 반환', async () => {
    findBy.mockResolvedValueOnce(account);

    const actual = await sut.getUserById(id);

    expect(actual).toEqual(account);
    expect(findBy).toHaveBeenCalledWith('id', id);
  });

  it('이름으로 사용자 반환', async () => {
    findBy.mockResolvedValueOnce(account);

    const actual = await sut.getUserByUsername(account.username);

    expect(actual).toEqual(account);
    expect(findBy).toHaveBeenCalledWith('username', account.username);
  });
});
