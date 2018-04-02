function yearOfBirth(age){
   if(age < 0)
    throw new Error("Age can not be negative");

    return 2018 - age;
}
function whoAmI(name, age) {
  if(name === undefined || age === undefined) {
      console.error("Arguements not valid");
      throw new Error("Arguements not valid");
  }
    
  let yob = yearOfBirth(age);
  console.log(`'My name is ${name} and I'm ${age} years old`);
  console.log('I was born in ' + yob);
}

whoAmI("jeff", 33);