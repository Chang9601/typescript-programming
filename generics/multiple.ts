const basicRole = {
  postUpdates: ['매일 3시에 일정 갱신'],
  answerCalls: ['응답', '거부'],
};

const intermediateRole = {
  planRoadmaps: ['아침', '점심', '저녁'],
  closeDeals: ['1억', '5억'],
};

function combineRoles<T extends object, K extends object>(role1: T, role2: K) {
  return { ...role1, ...role2 };
}

const role = combineRoles(basicRole, intermediateRole);
console.log(role);
