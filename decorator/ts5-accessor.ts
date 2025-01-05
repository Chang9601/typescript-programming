class Staffer {
  @monitor
  accessor task: string = '기초 작업';
}

const staffer = new Staffer();
staffer.task = '심화 작업';
staffer.task = '관리자 필요';

function monitor<T, V>(
  accessor: { get: (this: T) => V; set: (this: T, value: V) => void },
  context: ClassAccessorDecoratorContext<T, V>
) {
  return {
    get: function (this: T) {
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      console.log(`${context.name.toString()}을 ${value}로 설정`);
      accessor.set.call(this, value);
    },
  };
}
