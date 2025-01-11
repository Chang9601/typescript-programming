function getDemographicData(countyCode: string): unknown {
  return JSON.parse('인구절벽 고령화');
}

let data = getDemographicData('ko');

/*
 * 반환형을 모르는 경우 any보다 unknown을 사용한다.
 * unknown은 타입 축소를 강제한다.
 * data.populations any의 경우 사용할 수 있지만 unknown에서는 사용할 수 없다.
 */

if (typeof data === 'number') {
  data++;
}
if (typeof data === 'string') {
  data.match('populations');
}
if (typeof data === 'string' || typeof data === 'number') {
  data.valueOf();
}

if (
  data &&
  typeof data === 'object' &&
  'populations' in data &&
  Array.isArray(data.populations)
) {
  data.populations.push('50M');
}
