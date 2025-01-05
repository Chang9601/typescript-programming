type Task = {
  name: string;
  level: 'entry' | 'mid' | 'high';
};

class Intern {
  @addHighTask
  tasks: Task[] = [];
}

const intern = new Intern();
console.log(intern);

function addHighTask<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>
) {
  return function (args: V) {
    args.push({
      name: 'DB 점검',
      level: 'high',
    });

    return args;
  };
}
