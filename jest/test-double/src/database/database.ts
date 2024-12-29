import { generateId } from './id-generator';

type ObjectWithId = {
  id: string;
};

export class Database<T extends ObjectWithId> {
  private elements = new Array<T>();

  public async insert(arg: T) {
    arg.id = generateId();
    this.elements.push(arg);
    return arg.id;
  }

  public async findBy(argName: keyof T, argValue: string) {
    return this.elements.find((x) => x[argName] === argValue);
  }

  public async findAllBy(argName: keyof T, argValue: string) {
    return this.elements.filter((x) => x[argName] === argValue);
  }

  public async update(id: string, argName: keyof T, argValue: any) {
    const index = this.elements.findIndex((x) => x.id === id);
    this.elements[index][argName] = argValue;
  }

  public async delete(id: string) {
    const index = this.elements.findIndex((x) => x.id === id);
    this.elements.splice(index, 1);
  }

  public async findAll() {
    return this.elements;
  }
}
