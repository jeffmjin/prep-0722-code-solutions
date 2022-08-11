const person = {
  firstName: 'Jeff',
  lastName: 'Jin',
  hobby: 'Tennis'
};

console.log(person);
person.fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", person.fullName);

person.job = 'firefighter';
console.log("The person's current job is:", person.job);

person.previousJob = 'police officer';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object:', person);
