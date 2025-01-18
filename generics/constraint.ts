type withTeam = {
  team: string;
};

type Developer = withTeam & {
  name: string;
  language: string;
};

function updateTeam<T extends withTeam>(arg: T, team: string) {
  arg.team = team;
}

const developer: Developer = {
  name: '홍길동',
  language: 'TypeScript',
  team: '개발',
};

updateTeam(developer, '유지보수');

type Dessert<T extends 'Coffee' | 'Cookie' | 'Fruit'> = {
  name: string;
  kind: T;
};

const dessert: Dessert<'Fruit'> = {
  name: '사과',
  kind: 'Fruit',
};
