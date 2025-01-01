import Bowerman from '../characters/Bowerman';

describe('Bowerman damage method tests', () => {
  let character;

  beforeEach(() => {
    character = new Bowerman('Bowman');
  });

  test('should decrease health correctly', () => {
    character.damage(10);
    expect(character.health).toBeLessThan(100);
  });

  test('should not allow health to go below 0', () => {
    character.health = 5;
    character.damage(10);
    expect(character.health).toBe(0);
  });
});
