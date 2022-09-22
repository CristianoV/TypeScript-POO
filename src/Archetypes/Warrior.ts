import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static quantity = 0;
  private _energyType: EnergyType = 'stamina';
  constructor(
    name: string,
  ) {
    super(name);
    Warrior.addNewClass();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewClass(): void {
    this.quantity += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.quantity;
  }
}
