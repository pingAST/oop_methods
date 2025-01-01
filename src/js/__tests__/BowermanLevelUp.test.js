import Bowerman from '../characters/Bowerman';

describe('Bowerman levelUp method tests', () => {
  let character;

  beforeEach(() => {
    character = new Bowerman('Bowman');
  });

  test('should increase level and restore health', () => {
    character.health = 50;
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
  });

  test('should increase attack and defence by 20%', () => {
    character.levelUp();
    expect(character.attack).toBe(30);
    expect(character.defence).toBe(30);
  });

  test('should throw an error if health is 0', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
  });
});
