/* 배열 */
const desserts: string[] = ['아이스크림'];
desserts.push('케이크');
desserts.map((dessert) => {
  console.log(dessert.length);
});

/* 튜플 */
let card: [string, number] = ['가나다', 22];
// card = [12, 23] 타입이 맞지 않아서 오류.
card.push(30); /* 오류지만 오류로 인식 못한다. */
console.log(card);
