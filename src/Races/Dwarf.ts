import Race from './Race';

export default class Dwarf extends Race {
  private static quantidade = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addEmployee();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addEmployee(): void {
    this.quantidade += 1;
  }

  static createdRacesInstances(): number {
    return this.quantidade;
  }
}
