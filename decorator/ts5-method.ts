class Operation {
  budget: number = 10000;

  @addBudget(1000)
  test() {
    console.log('테스트');
  }

  @addBudget(3000)
  preprocess() {
    console.log('전처리');
  }
}

const operation = new Operation();
operation.preprocess();
operation.preprocess();

function addBudget(budget: number) {
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>
  ) {
    return function (...args: any) {
      const instance = this as T;

      if (instance.budget > budget) {
        instance.budget = instance.budget - budget;
        target.apply(instance, args);
      } else {
        console.error(
          `${context.name.toString()} 예산 부족: 필요한 예산 ${budget} > 현재 예산 ${
            instance.budget
          }`
        );
      }

      return target;
    };
  };
}
