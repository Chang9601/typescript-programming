import { Database } from '../src/database/database';
import * as IdGenerator from '../src/database/id-generator';

type ObjectWithId = {
  id: string;
  name: string;
  color: string;
};

describe('Database 클래스 테스트', () => {
  let sut: Database<ObjectWithId>;

  const id = '1212';
  const object1 = {
    id: '',
    name: '의자',
    color: '검정',
  };
  const object2 = {
    id: '',
    name: '책상',
    color: '검정',
  };

  beforeEach(() => {
    sut = new Database<ObjectWithId>();
    jest.spyOn(IdGenerator, 'generateId').mockReturnValue(id);
  });

  it('삽입 후 아이디 반환', async () => {
    const actual = await sut.insert({
      id: '',
    } as any);

    expect(actual).toBe(id);
  });

  it('삽입 후 요소 반환', async () => {
    const id = await sut.insert(object1);
    const actual = await sut.findBy('id', id);

    expect(actual).toBe(object1);
  });

  it('삽입 후 같은 속성을 가진 모든 요소 반환', async () => {
    await sut.insert(object1);
    await sut.insert(object2);

    const expected = [object1, object2];
    const actual = await sut.findAllBy('color', '검정');

    expect(actual).toEqual(expected);
  });

  it('색깔을 수정', async () => {
    const id = await sut.insert(object1);
    const color = '녹색';

    await sut.update(id, 'color', color);
    const actual = await sut.findBy('id', id);
    const actualColor = actual?.color;

    expect(actualColor).toBe(color);
  });

  it('요소 삭제', async () => {
    const id = await sut.insert(object1);

    await sut.delete(id);

    const actual = await sut.findBy('id', id);

    expect(actual).toBeUndefined();
  });
});
