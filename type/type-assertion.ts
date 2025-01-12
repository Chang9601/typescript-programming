type EntryTask = {
  language: string;
  control: string;
};

type AdvancedTask = {
  language: string;
  control: string;
  meeting: true;
  reports: string[];
};

type QaTask = {
  language: string;
  test: true;
};

let entryTask: EntryTask = { language: 'TypeScript', control: 'Git' };
let advancedTask: AdvancedTask = {
  language: 'TypeScript',
  control: 'Git',
  meeting: true,
  reports: [],
};
let qaTask: QaTask = {
  language: 'Python',
  test: true,
};

entryTask = advancedTask;
/**
 * 필드가 없어서 오류 발생
 * 타입 단언으로 해결
 */
advancedTask = entryTask as AdvancedTask;
/**
 * 겹치는 필드가 없어서 오류 발생
 * 이중 타입 단언으로 해결
 */
advancedTask = qaTask as unknown as AdvancedTask;

/* 같은 의미 다른 구문 */
advancedTask = <AdvancedTask>entryTask;
advancedTask = <AdvancedTask>(<unknown>entryTask);
