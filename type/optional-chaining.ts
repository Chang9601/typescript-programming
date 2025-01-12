type Senior = {
  team?: {
    architect?: {
      design(): () => void;
    };
  };
};

/**
 * ?: 선택 연산자(JS 기능)
 * !: 단언 연산자(TS 기능)
 */

/* 존재한다는 확실한 보증이 없으면 위험 */
function doWork(senior: Senior) {
  senior!.team!.architect!.design();
}

function doWorkNewFashion(senior: Senior) {
  senior.team?.architect?.design();
}

function doWorkOldFashion(senior: Senior) {
  if (senior.team && senior.team.architect) {
    senior.team.architect.design();
  }
}
