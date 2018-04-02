function yearOfBirth(age){
    return 2018 - age;
}
function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log('my name is Isael Lizama and I\'m 21 years old');
  console.log('I was born in ' + yob);
}

whoAmI("jeff", 33);