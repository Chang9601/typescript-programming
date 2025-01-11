type Wage = {
  amount: number;
};

/* 타입 가드는 주어진 매개변수를 받고 불리언 값을 반환한다. */
function isWage(arg: any): arg is Wage {
  return 'amount' in arg && typeof arg.amount === 'number';
}

function pay(arg: unknown) {
  if (isWage(arg)) {
    console.log(`${arg.amount} 지불`);
  }
}
