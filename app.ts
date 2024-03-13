console.log('\n\tQuestion no 2');
let personName: string= "Eric";
console.log(`Hello ${personName}, would you like to learn some python today?`);

console.log('\n\tQuestion no 3');
// lower case
let personName2: string ="Ubaid"
console.log("lowercase:", personName2.toLowerCase());

// upper case
console.log("uppercase:", personName2.toLocaleUpperCase());

//Title case
console.log("titlecase:", personName2.replace(/\bw/g,c => c.toUpperCase()));

console.log('\n\tQuestion no 4');
let quote: string="A person who never made a mistake never tried anything new";
let author: string="Albert Einstein";
console.log(`${author} once said, ${quote}`);

console.log('\n\tQuestion no 5');
let quote2: string= "A person who never made mistake never tried anything new";
let person_name="Albert Einstein";
let message=` ${person_name} once said, ${quote2}`;
console.log(message); 

console.log('\n\tQuestion no 6');
let personName1: string ="` \n\t UBAID ALAM\t\n';"
console.log(personName1)
let stripped: string = personName1.trim();
console.log(stripped);

console.log('\n\tQuestion no 7+8');
console.log(5 + 3)
console.log(11 - 3)
console.log(2**3)
console.log(16 / 2)

console.log('\n\tQuestion no 9');
let favouriteNumber: number=4;
console.log(favouriteNumber);

console.log('\n\tQuestion no 10');
// Ubaid Alam
// 2/25/24
console.log(2+3);

console.log('\n\tQuestion no 11');
let names: string[] =['Ubaid', 'Anis', 'SANAULLAH', 'Owais'];

console.log('\n\tQuestion no 12');
for (let name of names) {
console.log(names);
}
let names1: string[] =['Ubaid', 'Anis', 'SANAULLAH', 'Owais'];
let message1: string='How are you our assigment checker:';
for (let name of names1) {
console.log(message1 + names1);
}

console.log('\n\tQuestion no 13');
// List of examples
const modesOfTransportation: string[] = ["Harley-Davidson motorcycle", "Tesla car", "BMW motorcycle", "Toyota car", "Ducati motorcycle"];

// Print statements
for (const transportationMode of modesOfTransportation) {
    if (transportationMode.includes("motorcycle")) {
        console.log(`I would like to own a ${transportationMode}.`);
    } else if (transportationMode.includes("car")) {
        console.log(`I wouldn't mind having a ${transportationMode}.`);
    } else {
        console.log(`I appreciate the uniqueness of a ${transportationMode}.`);
    }
}

console.log('\n\tQuestion no 14');
let guest_list : string [] = ['Ubaid', 'SANAULLAH', 'Anis', 'Owais'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
export{guest_list}

console.log('\n\tQuestion no 15');
let guests_list : string [] = ['Ubaid', 'SANAULLAH', 'Anis', 'Owais'];
for(let i=0; i<guests_list.length; i++){
    console.log('Respected Sir/Madam' + guests_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
let not_present : string = 'Anis';
let new_guest : string = 'Usman';
guests_list[2] = new_guest
for(let i=0; i<guests_list.length; i++){
    console.log('Respected Sir/Madam' + guests_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
console.log(`Mr ${not_present} will not coming tomorrow dinner`);

console.log('\n\tQuestion no 16');
let guest_lists : string [] = ['Ubaid', 'SANAULLAH', 'Anis', 'Owais'];
/*for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}*/
let notPresent : string = 'Anis';
let newGuest : string = 'Usman';
guest_lists[2] = newGuest
for(let i=0; i<guest_lists.length; i++){
    console.log('Respected Sir/Madam' + guest_lists[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}
console.log(`Mr ${notPresent} will not coming tomorrow dinner`);
guest_lists.unshift('Hamza', 'Umar', 'Faraz');
for(let i=0; i<guest_lists.length; i++){
    console.log('Respected Sir/Madam' + guest_lists[i] + ',\nWe found a big table so we decided to invite three more guests.\nThank You\n')
}

console.log('\n\tQuestion no 17');
let guest_list_ : string [] = ['Ubaid', 'SANAULLAH', 'Anis', 'Owais'];
/*for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}*/
let not_present_ : string = 'Anis';
let new_guest_ : string = 'Usman';
guest_list_[2] = new_guest_
/*for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank You\n')
}*/
console.log(`Mr ${not_present_} will not coming tomorrow dinner`);
guest_list_.unshift('Hamza', 'Umar', 'Faraz');
/*for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe found a big table so we decided to invite three more guests.\nThank You\n')
}*/
console.log('\nunfortunately we can not arrang big table , Only two people allow')
while(guest_list_.length>2){
    let remove_guest = guest_list_.pop();
    console.log(`Sorry Sir.${remove_guest} you are not invited on dinner.`);
}
for(let i=0; i<guest_list_.length; i++){
    console.log('Respected Sir/Madam' + guest_list_[i] + ',\nYes you are still invited on tomorrow dinner.\nThank You\n')
}
guest_list_.splice(0,2)
console.log(guest_list_)

console.log('\n\tQuestion no 18');


 console.log('\n\tQuestion no 19 is comment out');
// import{ guest_list } from '../Guest Lists/app'
// console.log(`n\PRINTING NUMBER OF GUEST INVITED`);
// console.log(`We had finally invited ${guest_list.length} people from exercise 14`);

console.log('\n\tQuestion no 20');
let countries : string [] = ['Pakistan', 'India', 'Palestine', 'Turkey',];
console.log("list of countries:")
for(let top of countries){
    console.log(top)
}

console.log('\n\tQuestion no 21');
interface item {
    name : string
    price : number
}
// create two objects
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: item ={
    name:'apple',
    price:200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)

console.log('\n\tQuestion no 22');
const counting: number[] = [1,2,3];
console.log(counting[0]);

console.log('\n\tQuestion no 23');
let number = 42;
let string = 'hello';
let booleanValue = true;

// Test 1: Check if number is greater than 50
console.log(`Is number > 50? I predict False.`);
console.log(number > 50);

// Test 2: Check if string is equal to 'world'
console.log(`Is string == 'world'? I predict False.`);
console.log(string == 'world');

// Test 3: Check if booleanValue is false
console.log(`Is booleanValue False? I predict False.`);
console.log(booleanValue ===true);

// Test 4: Check if number is less than or equal to 42
console.log(`Is number <= 42? I predict True.`);
console.log(number <= 42);

// Test 5: Check if string is not equal to 'hello'
console.log(`Is string != 'hello'? I predict False.`);
console.log(string !== 'hello');

console.log('\n\tQuestion no 24');
let string1 = 'apple';
let string2 = 'orange';
let number1 = 10;
let number2 = 20;
let booleanValue1 = true;
let booleanValue2 = false;
let fruitArray = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log(`Test 1: Is string1 equal to string2? I predict False.`);
console.log(string1 === string2);

console.log(`Test 2: Is string1 not equal to string2? I predict True.`);
console.log(string1 !== string2);

// Tests using the lower case function
console.log(`Test 3: Is string1 in lowercase equal to 'apple'? I predict True.`);
console.log(string1.toLowerCase() === 'apple');

// Numerical tests
console.log(`Test 4: Is number1 equal to number2? I predict False.`);
console.log(number1 === number2);

console.log(`Test 5: Is number1 not equal to number2? I predict True.`);
console.log(number1 !== number2);

console.log(`Test 6: Is number1 greater than number2? I predict False.`);
console.log(number1 > number2);

console.log(`Test 7: Is number1 less than number2? I predict True.`);
console.log(number1 < number2);

console.log(`Test 8: Is number1 greater than or equal to number2? I predict False.`);
console.log(number1 >= number2);

console.log(`Test 9: Is number1 less than or equal to number2? I predict True.`);
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log(`Test 10: Is booleanValue1 true and booleanValue2 false? I predict False.`);
console.log(booleanValue1 && booleanValue2);

console.log(`Test 11: Is booleanValue1 true or booleanValue2 false? I predict True.`);
console.log(booleanValue1 || booleanValue2);

// Test whether an item is in an array
console.log(`Test 12: Is 'banana' in the fruitArray? I predict True.`);
console.log(fruitArray.includes('banana'));

// Test whether an item is not in an array
console.log(`Test 13: Is 'kiwi' not in the fruitArray? I predict True.`);
console.log(!fruitArray.includes('kiwi'));

console.log('\n\tQuestion no 25');
let alien_color_1 : string ="green"

if (alien_color_1 == "green")
console.log("you earn 5 points")

let alien_color : string ="green";

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
} else {   
    console.log("no points earned");
}    

console.log('\n\tQuestion no 26');
let alien_colors: string = "red";

if (alien_colors === 'red') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

console.log('\n\tQuestion no 27');
let alien_color_ : string ="yellow";

if(alien_color_ == "green") {
    console.log("the player earned 5 points.")
} else if (alien_color_ == "yellow") {
    console.log("the player earned 10 points.")
} else {
    console.log(" the player earned 15 points.")
}

console.log('\n\tQuestion no 28');
let age: number = 25; // Set the age value

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

console.log('\n\tQuestion no 29');
let favorite_fruits: string[] = ['banana', 'apple', 'mango'];

// Check for specific fruits in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("Oranges are not in your list of favorite fruits.");
}

if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
} else {
    console.log("Grapes are not in your list of favorite fruits.");
}

console.log('\n\tQuestion no 30');
let usernames: string[] = ['admin', 'Eric', 'John', 'Alice', 'Bob'];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames) {
        // Check if the username is 'admin'
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

console.log('\n\tQuestion no 31');
let usernames_: string[] = []; // Empty array

// Check if the list of users is not empty
if (usernames_.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames_) {
        // Check if the username is 'admin'
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames_}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}

console.log('\n\tQuestion no 32');
// Make a list of current users
let current_users: string[] = ['john', 'alice', 'bob', 'sarah', 'mike'];

// Make a list of new users
let new_users: string[] = ['alice', 'peter', 'MIKE', 'emma', 'steve'];

// Loop through new users to check for uniqueness (case insensitive)
for (let new_user of new_users) {
    // Check if the lowercase version of the new username is in the lowercase version of the current usernames
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

console.log('\n\tQuestion no 33');
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinal;

    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(`${number}${ordinal}`);
}

console.log('\n\tQuestion no 34');
let favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'Vegetarian'];

// Print the name of each pizza using a for loop
console.log("Pizza names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Print a sentence for each pizza
console.log("\nPizza statements:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line stating how much you like pizza
console.log("\nI really love pizza!");

console.log('\n\tQuestion no 35');
let commonAnimals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the name of each animal using a for loop
console.log("Animal names:");
for (let animal of commonAnimals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nAnimal statements:");
for (let animal of commonAnimals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");

console.log('\n\tQuestion no 36');
// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

// Call the function with specific size and message
make_shirt('medium', 'Hello, World!');

console.log('\n\tQuestion no 37');
// Define the make_shirt function with default values
function make_shirt2(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
}

// Create a large shirt with the default message
make_shirt2();

// Create a medium shirt with the default message
make_shirt2('medium');

// Create a shirt of any size with a different message
make_shirt('small', 'Programming is fun!');


console.log('\n\tQuestion no 38');
function describeCity(city: string, country: string = 'Default Country'): void {
    console.log("${city} is in ${country}.");
}

// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Tokyo');  // Using the default country

console.log('\n\tQuestion no 39');
// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
let result1: string = city_country('Lahore', 'Pakistan');
let result2: string = city_country('Paris', 'France');
let result3: string = city_country('New York', 'USA');

// Print the returned values
console.log(result1);
console.log(result2);
console.log(result3);

console.log('\n\tQuestion no 40');
// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    // Add tracks to the album if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function to make three dictionaries representing different albums
let album1 = make_album('Artist1', 'Album Title 1');
let album2 = make_album('Artist2', 'Album Title 2', 12); // Including the number of tracks
let album3 = make_album('Artist3', 'Album Title 3');

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

console.log('\n\tQuestion no 41');
// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magiciansArray: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// Call the function to print the names of magicians in the array
show_magicians(magiciansArray);

console.log('\n\tQuestion no 42');
// Define the show_magicians function
function show_magicians_(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];

    for (let magician of magicians) {
        modifiedMagicians.push(`${magician} the Great`);
    }

    return modifiedMagicians;
}

// Array of magician's names
let magiciansArray_: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// Call make_great to modify the array of magicians
let greatMagicians = make_great(magiciansArray);

// Call show_magicians to see the modified list
console.log("Modified list of magicians:");
show_magicians(greatMagicians);


console.log('\n\tQuestion no 43');
// Define the show_magicians function
function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify the array of magicians
function make_great1(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];

    for (let magician of magicians) {
        modifiedMagicians.push(`${magician} the Great`);
    }

    return modifiedMagicians;
}

// Array of magician's names
let magiciansArrays: string[] = ['Merlin', 'David Copperfield', 'Houdini', 'Harry Potter'];

// Call make_great with a copy of the array of magicians' names
let greatMagicianss = make_great([...magiciansArray]);

// Call show_magicians with both arrays to show the original and modified lists
console.log("Original list of magicians:");
show_magicians(magiciansArray);

console.log("\nModified list of magicians:");
show_magicians(greatMagicians);


console.log('\n\tQuestion no 44');
function makeSandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    for (const item of ingredients) {
        console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!\n");
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Swiss");
makeSandwich("Peanut Butter", "Jelly");

console.log('\n\tQuestion no 45');
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow for arbitrary properties
}

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
        manufacturer,
        model,
    };

    // Process additional keyword arguments
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", 2022);

// Print the created object
console.log(myCar);
