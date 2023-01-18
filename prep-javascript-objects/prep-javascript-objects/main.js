const person = {
  firstName: 'Jung',
  lastName: 'Song',
  hobby: 'gaming'
};
console.log(person);
const fullName = (`${person.firstName}  ${person.lastName}`);
console.log(`My name is ${fullName}`);
person.job = 'Occupational Therapist';
person.previousJob = 'Chemist';
console.log(`My current job is being a ${person.job}, and my previous job was being a ${person.previousJob}`);
console.log(person);
