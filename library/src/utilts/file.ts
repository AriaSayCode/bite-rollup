interface IPerson {
  age: number;
}

export function tt() {
  console.log("123");
  const person: IPerson = {
    age: 20,
  };

  console.log(person?.age);
}
