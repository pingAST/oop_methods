// TODO: write your code here
import Bowerman from "./characters/Bowerman";
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));

const hero = new Bowerman('Hero', 'Bowman');
console.log(hero);

// метод levelUp
console.log('Уровень до повышения:', hero.level);
hero.levelUp();
console.log('Уровень после повышения:', hero.level);
console.log('Здоровье после повышения уровня:', hero.health);
console.log('Атака после повышения уровня:', hero.attack);
console.log('Защита после повышения уровня:', hero.defence);

// метод damage
console.log('Здоровье до получения урона:', hero.health);
hero.damage(10);
console.log('Здоровье после получения урона:', hero.health);
