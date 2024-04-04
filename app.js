//1.შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

const userAge = [15, 20, 22, 28, 35];
console.log((userAge[0] + userAge[1] + userAge[2] + userAge[3] + userAge[4]) / 5 );

//2.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.

const students = [
	{ name: 'Ann', age: 25 },
	{ name: 'Meri', age: 23 },
	{ name: 'Nino', age: 24 },
	{ name: 'Lasha', age: 27 },
	{ name: 'Rezi', age: 29 },
];
console.log(students);

//3.შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties)

const lawyer = {
	firstname: "Valeri",
	lastname: "Porchkhidze",
	adress: ["Kutaisi", "Nikea"],
	age: 29,
	phoneNumbers: [555123457, 555123455],
}
console.log(lawyer);

//4.console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"


console.log(`My name is ${lawyer.firstname}, My age is ${lawyer.age}, My address is ${lawyer.adress[0]}`);