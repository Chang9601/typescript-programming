type Assignment = {
  name: string;
  level: 'basic' | 'intermediate' | 'advanced';
};

class Member {
  @addAssignment({
    name: '리플렉션 적용',
    level: 'intermediate',
  })
  assignments: Assignment[] = [];

  @addMandatoryAssignment()
  mandatoryAssignments: Assignment[] = [];
}

const member = new Member();
console.log(member);

function addAssignment(assignment: Assignment) {
  return function <T, V extends Assignment[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (args: V) {
      args.push(assignment);

      return args;
    };
  };
}

function addMandatoryAssignment() {
  return addAssignment({
    name: '구구단 출력',
    level: 'basic',
  });
}
