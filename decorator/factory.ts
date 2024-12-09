@addCalorie('')
class Food {
  name: string;
  description: string;

  constructor() {
    this.name = '파스타';
    this.description = '이탈리아 음식';

    console.log('Food 클래스 초기화...');
  }
}

/* 데코레이터 팩토리는 인자를 받을 수 있다. */
function addCalorie(calorie: string) {
  return function <T extends { new (...args: any[]): {} }>(coreClass: T) {
    console.log('데코레이터 호출...');

    return class extends coreClass {
      calorie = calorie;
      constructor(...args: any[]) {
        super(...args);
        console.log(`${coreClass.name}에 칼로리 추가`);
      }
    };
  };
}
