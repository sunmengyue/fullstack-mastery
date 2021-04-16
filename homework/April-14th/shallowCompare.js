// Shallow compare
function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1); // return an array of keys
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

// const hero1 = {
//   name: 'Batman',
//   realName: 'Bruce Wayne',
// };
// const hero2 = {
//   name: 'Robin',
//   realName: 'Bruce Wayne',
// };
// const hero3 = {
//   name: 'Joker',
// };

// shallowEqual(hero1, hero2);
// shallowEqual(hero1, hero3);

const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};

console.log(shallowEqual(hero1, hero2));
