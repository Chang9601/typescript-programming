class Job {
  pay: number = 5000_000;

  addToPay(@logger amount: number) {
    this.pay += amount;
  }
}

const job = new Job();
job.addToPay(1000_000);

function logger(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(`target: `);
  console.log(target);
  console.log(`propertyKey: `);
  console.log(propertyKey);
  console.log(`parameterIndex: `);
  console.log(parameterIndex);
}
