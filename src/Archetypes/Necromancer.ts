import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static quantity = 0;
  private _energyType: EnergyType = 'mana';
  constructor(
    name: string,
  ) {
    super(name);
    Necromancer.addNewClass();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewClass(): void {
    this.quantity += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.quantity;
  }
}
