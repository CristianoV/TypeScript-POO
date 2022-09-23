import Fighter from './Fighter';
import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private Race: Race;
  private Archetype: Archetype;
  private MaxLifePoints: number;
  private LifePoints: number;
  private Strength: number;
  private Defense: number;
  private Dexterity: number;
  private Energy: Energy;
  constructor(private name: string) {
    this.Dexterity = getRandomInt(1, 10);
    this.Race = new Elf(this.name, this.Dexterity);
    this.Archetype = new Mage(this.name);
    this.MaxLifePoints = this.Race.maxLifePoints / 2;
    this.LifePoints = this.MaxLifePoints;
    this.Strength = getRandomInt(1, 10);
    this.Defense = getRandomInt(1, 10);
    this.Energy = { type_: this.Archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this.Race;
  }

  get archetype(): Archetype {
    return this.Archetype;
  }

  get lifePoints(): number {
    return this.LifePoints;
  }

  get strength(): number {
    return this.Strength;
  }

  get defense(): number {
    return this.Defense;
  }

  get dexterity(): number {
    return this.Dexterity;
  }

  get energy(): Energy {
    return { amount: this.Energy.amount, type_: this.Energy.type_ };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.Defense;
    if (damage > this.lifePoints) {
      return -1;
    } return this.LifePoints;
  }

  attack(target: Fighter): void {
    const attackPoints = this.Strength;
    target.receiveDamage(attackPoints);
  }
  
  levelUp(): void {
    this.MaxLifePoints += getRandomInt(1, 10);
    this.Strength += getRandomInt(1, 10);
    this.Defense += getRandomInt(1, 10);
    this.Dexterity += getRandomInt(1, 10);
    this.Energy.amount = 10;
    if (this.Race.maxLifePoints < this.MaxLifePoints) {
      this.MaxLifePoints = this.Race.maxLifePoints;
    }
    this.LifePoints = this.MaxLifePoints;
  }

  special(enemy?: Fighter | undefined): void {
    const attackPoints = this.Strength + 10;
    if (enemy) {
      enemy.receiveDamage(attackPoints);
    } else {
      console.log('Você sai voando');
    }
  }
}

const teste = new Character('Xablau');

console.log(teste.special());
