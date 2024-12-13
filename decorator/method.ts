class Project {
  budget = 1000;
  name = '투자';

  @addBudget(10)
  test() {
    console.log('테스트 필수');
  }

  @addBudget(10000)
  refactor() {
    console.log('리팩토링 옵션');
  }
}

const project = new Project();
project.test();
project.refactor();

function logger1(
  target: Object,
  propertyKey: string,
  /*
   * descriptor 매개변수는 함수를 기술하며 원본 함수를 변경할 수 있다.
   * value 속성은 함수 자체이다.
   */
  descriptor: PropertyDescriptor
) {
  console.log(`target: `);
  console.log(target);
  console.log(`propertyKey: `);
  console.log(propertyKey);
  console.log(`descriptor: `);
  console.log(descriptor);
}

function logger2(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod: Function = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log('원본 함수 변경 중...');
    console.log(this);
    originalMethod.apply(this, args);
  };
}

function addBudget(budget: number) {
  /* budget 필드를 가진 클래스로만 제한 */
  return function <T extends { budget: number }>(
    target: T,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod: Function = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const instance = this as T;

      if (instance.budget > budget) {
        instance.budget = instance.budget - budget;
        originalMethod.apply(this, args);
      } else {
        console.error(
          `${propertyKey}을 위한 예산이 부족하다. 필요 예산은 ${budget}인데 가능한 예산은 ${instance.budget}.`
        );
      }
    };
  };
}
