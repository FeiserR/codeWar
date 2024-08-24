function fight(health, level) {
  let Actions = "";
  let AttackA = "A"; //deals 8 damage
  let vulnerable = 0;
  const AttackB = "B"; //deals 2 damage
  const AttackC = "C"; //deals 4 damage
  const Move = "-";

  for (; Actions.length < level.length; ) {
    let currentEnemyHealth = level[Actions.length][0];
    if (currentEnemyHealth === 0) {
      Actions = Actions + Move;
      if(vulnerable > 0) {
        vulnerable = 1
      }
    }
    for (; currentEnemyHealth > 0; ) {
      Actions = Actions + AttackA;
      currentEnemyHealth = currentEnemyHealth - 8;
      vulnerable =+2;
    }
  }

  return Actions;
}

console.log(
  fight(10, [
    [8, 10],
    [8, 10],
    [8, 10],
  ])
);

// const str = "AAAAAABBBBBABABAAAAAA";
// const target = "AA";
// let countAA = 0;
// let index = 0;
// let countAs = 0;

// while ((index = str.indexOf(target, index)) !== -1) {
//     countAA++;
//     index++; // Move index by 1 to allow for overlapping matches
// }

// console.log(countAs++)
