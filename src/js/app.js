import Character from './Character';

function createCharacter(name, type) {
  try {
    const character = new Character(name, type);
    console.log(`Создан персонаж: ${character.name}, Тип: ${character.type}, Уровень: ${character.level}, Здоровье: ${character.health}, Атака: ${character.attack}, Защита: ${character.defence}`);
    return character;
  } catch (error) {
    console.error('Ошибка создания персонажа:', error.message);
  }
}


const archer = createCharacter('Archer', 'Bowman');


if (archer) {

  archer.levelUp();
  console.log(`После повышения уровня: Уровень: ${archer.level}, Здоровье: ${archer.health}, Атака: ${archer.attack}, Защита: ${archer.defence}`);
  
  archer.damage(10);
  console.log(`После урона: Здоровье: ${archer.health}`);
}
