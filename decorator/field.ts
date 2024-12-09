class Applicant {
  name: string;
  @onChange
  skills: string;

  constructor() {
    this.name = '김이박';
    this.skills = 'TypeScript';

    console.log('Applicant 클래스 초기화...');
  }
}

const applicant = new Applicant();
applicant.skills = 'Java';

/* symbol 오류를 제거하기 위해서 keyof T & string */
function onChange<T extends Object>(target: T, key: keyof T & string) {
  console.log('데코레이터 호출...');

  let property = target[key];

  const getter = () => {
    return property;
  };

  const setter = (newproperty: any) => {
    console.log(`${key}: ${property} → ${newproperty}`);
    property = newproperty;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true,
  });
}
