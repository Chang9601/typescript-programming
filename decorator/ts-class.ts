@addGraduationDate
@addGraduationDateOnPrototype
class Student {
  name: string = '김나박';
  assignment: string = '과제';

  constructor() {
    console.log('Student 클래스 초기화...');
  }
}

const student = new Student();
console.log(student);

function addGraduationDate<T extends { new (...args: any[]): {} }>(
  coreClass: T,
  context: ClassDecoratorContext
) {
  return class extends coreClass {
    graduationDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log(`${coreClass}에 졸업날 추가`);
    }
  };
}

function addGraduationDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  value.prototype.graduationDateOnPrototype = new Date().toISOString();
}

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log('value: ');
  console.log(value);
  console.log('context: ');
  console.log(context);

  context.addInitializer(() => {
    console.log('초기화된 클래스: ' + context.name);
  });
}
