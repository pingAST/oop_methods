import Character from '../Character';
import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../characters';

describe('Character and subclasses tests', () => {
  test('should create a Bowman correctly', () => {
    const bowman = new Bowman('Archer');
    expect(bowman.name).toBe('Archer');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should create a Swordsman correctly', () => {
    const swordsman = new Swordsman('Warrior');
    expect(swordsman.name).toBe('Warrior');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('should throw an error for invalid name', () => {
    const invalidNames = [
      'A',              // Менее 2 символов
      '',               // Пустая строка
      'abcdefghijk',    // Более 10 символов
    ];

    invalidNames.forEach(name => {
      expect(() => new Bowman(name)).toThrow('Имя должно быть строкой от 2 до 10 символов.');
    });
  });


  test('should throw an error for invalid type', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow('Неверный тип персонажа.');
  });


  test('should create a Magician correctly', () => {
    const magician = new Magician('Gandalf');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });


  test.each([
    [Undead, 'Undead', 25, 25],
    [Zombie, 'Zombie', 40, 10],
    [Daemon, 'Daemon', 10, 40],
  ])('should create a %s correctly', (CharacterClass, type, attack, defence) => {
    const character = new CharacterClass(type === 'Zombie' ? 'Zed' : 'UndeadHero');
    expect(character.type).toBe(type);
    expect(character.attack).toBe(attack);
    expect(character.defence).toBe(defence);
  });


  // Тесты для методов levelUp и damage

  describe('levelUp and damage methods', () => {
    let character;

    beforeEach(() => {
      character = new Bowman('Archer');
    });

    test('levelUp should increase level and restore health', () => {
      character.health = 50;
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.health).toBe(100);
    });

    test('levelUp should increase attack and defence by 20%', () => {
      character.levelUp();
      expect(character.attack).toBe(30);
      expect(character.defence).toBe(30);
    });

    test('levelUp should throw an error if health is 0', () => {
      character.health = 0;
      expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
    });

    test('damage should decrease health correctly', () => {
      character.damage(10);
      expect(character.health).not.toBe(90);
      expect(character.health).toBeLessThan(100);
    });

    test('damage should not allow health to go below 0', () => {
      character.health = 5;
      character.damage(10);
      expect(character.health).toBe(0);
    });
  });
});
