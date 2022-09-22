import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static quantity = 0;
  constructor(
    name: string,
    special: number,
    cost: number,
    private _energyType: EnergyType,
  ) {
    super(name, special, cost);
    Mage.addNewMage();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewMage(): void {
    this.quantity += 1;
  }

  static createdArchetypeInstances(): number {
    return this.quantity;
  }
}

// const a = new Mage('maguinho', 1, 1, 'mana');

// console.log(a.name);
