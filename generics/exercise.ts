type Housing = {
  name: string;
  price: number;
};

async function getHousing<T>(url: string): Promise<T[]> {
  const rawData = await fetch(url);
  const parsedData = await rawData.json();

  return parsedData;
}

/* any 타입을 제네릭으로 보완 */
async function wrap() {
  const housing = await getHousing<Housing>('https://unknown-housing.com');

  const firstHousing = housing[0];
}
