export default abstract class Race {
  private static quantidade = 0;
  constructor(private _name: string, private _dexterity: number) {
    Race.addEmployee();
  }
  
  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  private static addEmployee() {
    this.quantidade += 1;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}