@addProperties
@addPropertiesOnPrototype
// @sealClass 오류가 발생한다.
class Employee {
  name: string;
  task: string;

  constructor() {
    this.name = '김이박';
    this.task = '여행 애플리케이션';

    console.log('Employee 클래스 초기화...');
  }
}

function addPropertiesOnPrototype(arg: Function) {
  arg.prototype.terminationDateOnPrototype = new Date().toISOString();
}

/*
 * new 연산자와 가변 인자를 포함한 배열 구문을 통해 생성자를 받아들이는 클래스라는 것을 명시한다.
 * 이를 데코레이터 내부에 사용하면 클래스를 인자로 받아 확장하는 새로운 클래스를 반환할 수 있다.
 */
function addProperties<T extends { new (...args: any[]): {} }>(coreClass: T) {
  console.log('데코레이터 호출...');

  return class extends coreClass {
    terminationDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log(`${coreClass.name}에 퇴사날짜 추가`);
    }
  };
}

function sealClass(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
