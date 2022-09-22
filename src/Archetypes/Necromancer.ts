import Energy, { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static quantidade = 0;
  constructor(
    name: string,
    special: number,
    cost: number,
    private _energyType: Energy,
  ) {
    super(name, special, cost);
    Necromancer.addEmployee();
  }

  get energyType(): EnergyType {
    return this._energyType.type_;
  }

  private static addEmployee(): void {
    this.quantidade += 1;
  }

  static createdArchetypeInstances(): number {
    return this.quantidade;
  }
}
