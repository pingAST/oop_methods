// TODO: write your code here
import Character from './Character';
import sum from './basic';

console.log('worked');
console.log(sum([1, 2]));

const archer = new Character('Archer', 'Bowman');
console.log(`Создан персонаж: ${archer.name}, Тип: ${archer.type}, Уровень: ${archer.level}, Здоровье: ${archer.health}, Атака: ${archer.attack}, Защита: ${archer.defence}`);

// Пример повышения уровня
archer.levelUp();
console.log(`После повышения уровня: Уровень: ${archer.level}, Здоровье: ${archer.health}, Атака: ${archer.attack}, Защита: ${archer.defence}`);

// Пример урона
archer.damage(10);
console.log(`После урона: Здоровье: ${archer.health}`);
