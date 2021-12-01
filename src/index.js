import './style/index.scss';
const person = {
    first_name: "Mohd",
    last_name: "Amir",
    email: "md.amir14@gmail.com"
}
const person1 = {
    ...person,
    email: "md.amir1411@gmail.com"
}
console.log(person);
console.log(person1);