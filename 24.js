// ¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

// Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

// Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

// Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

// Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

// const dishes = [
//   ["christmas turkey", "turkey", "sauce", "herbs"],
//   ["cake", "flour", "sugar", "egg"],
//   ["hot chocolate", "chocolate", "milk", "sugar"],
//   ["pizza", "sauce", "tomato", "cheese", "ham"],
// ]

// organizeChristmasDinner(dishes)

// /*

// "sauce" está en 2 platos: "christmas turkey" y "pizza".
// "sugar" está en 2 platos: "cake" y "hot chocolate".
// El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

// Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
// Y los platos de cada ingrediente también están ordenados alfabéticamente.

// [
//   ["sauce", "christmas turkey", "pizza"],
//   ["sugar", "cake", "hot chocolate"]
// ]
// */

function organizeChristmasDinner(dishes) {
  const ingredents = {};

  dishes.forEach((dish) => {
    const plate = dish[0];
    dish.forEach((ingredent, index) => {
      if (index === 0) return;
      // in first position we store te quantity and the rest the plates that use that ingredent
      if (!ingredents[ingredent]) ingredents[ingredent] = [1, plate];
      else {
        ingredents[ingredent][0]++;
        ingredents[ingredent].push(plate)
      }

    })
  });
  const ingredentsArr = [];


  for (const ingredent in ingredents) {
    if (ingredents[ingredent][0] <= 1) continue;
    const index = ingredentsArr.length;
    ingredentsArr[index] = [ingredent];
    ingredents[ingredent].forEach((plate, i) => {
      if (i === 0) return;
      ingredentsArr[index].push(plate);
    });
  }
  const finalIngredents = [];

  ingredentsArr.forEach(ingredent => {
    const sortedIngredents = ingredent.splice(1).sort((a, b) => a.localeCompare(b));
    ingredent = [ingredent[0], ...sortedIngredents];
    finalIngredents.push([ingredent[0], ...sortedIngredents]);
  });

  finalIngredents.sort((a, b) => a[0].localeCompare(b[0]));

  return finalIngredents;
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))
