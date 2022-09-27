import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private monster: SimpleFighter[] | Monster[] | Fighter[],
  ) {
    super(_character);
  }

  fight(): number {
    this.monster.forEach((enemy) => {
      while (this._character.lifePoints > 0 && enemy.lifePoints > 0) {
        this._character.attack(enemy);
        enemy.attack(this._character);
      }
    });
    return super.fight();
  }
}
