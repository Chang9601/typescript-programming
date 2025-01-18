/* 문자열은 불멸 */
const founderName = 'Steve Jobs';

/* 객체는 불멸 X */
const founder = {
  name: 'Steve Jobs',
  company: 'Apple',
} as const;

/* const로 객체는 불멸 */
// founder.name = 'Steve Wozniak';

/* readonly로 배열은 불멸 */
function capitalize(names: ReadonlyArray<string> /*readonly string[]*/) {
  // names.push('Bill Gates');
  return names.map((name) => {
    return name.toUpperCase();
  });
}
