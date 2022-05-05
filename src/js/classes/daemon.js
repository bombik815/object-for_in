import Character from './character';

export default class Daemon extends Character {
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, health, level);
    this.type = 'Daemon';
    this.attack = attack;
    this.defence = defence;
  }
}
