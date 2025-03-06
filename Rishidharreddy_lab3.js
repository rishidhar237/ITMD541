// Rishidhar Reddy Palagulla
// ITMD 541-01 Graduate Student

// Exercise #1: minMaxAverage function
function minMaxAverage(arr) {
    var totalNumbers = arr.length;
    var minValue = Math.min.apply(null, arr);
    var maxValue = Math.max.apply(null, arr);
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / totalNumbers;
    
    console.log("Total Numbers: " + totalNumbers + ", Min Value: " + minValue + ", Max Value: " + maxValue + ", Average: " + average.toFixed(2));
}

// Test case 1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
// Test case 2
minMaxAverage([1, 5, 3, 11, 10, 16, 8, 6, 33]);
// Test case 3
minMaxAverage([7, 12, 21, 3, 15]);


// Exercise #2: countVowels function
function countVowels(word) {
    var vowels = "aeiou";
    var count = 0;
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            count++;
        }
    }
    console.log(word + ": " + count + " vowels");
}

// Test case 1
countVowels("beautiful");
// Test case 2
countVowels("coding");
// Test case 3
countVowels("pineapple");


// Exercise #3: sortNumbers function
function sortNumbers(arr) {
    var sortedArray = arr.slice();
    sortedArray.sort(function(a, b) {
        return a - b;
    });
    console.log("Original Array: [" + arr + "], Sorted Array: [" + sortedArray + "]");
}

// Test case 1
sortNumbers([8, 4, 6, 1]);
// Test case 2
sortNumbers([12, 3, 8, 7, 10]);
// Test case 3
sortNumbers([25, 18, 5, 6]);


// Exercise #4: celsiusToFahrenheit function (handles string inputs)
function celsiusToFahrenheit(celsius) {
    if (typeof celsius === 'string') {
        celsius = parseFloat(celsius);
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit");
}

// Test case 1
celsiusToFahrenheit(34);
// Test case 2
celsiusToFahrenheit("30");
// Test case 3
celsiusToFahrenheit(0);
// Test case 4 (string input)
celsiusToFahrenheit("42");


// Exercise #5: sortPeopleByAge function
function sortPeopleByAge(people) {
    people.sort(function(a, b) {
        return a.age - b.age;
    });
    for (var i = 0; i < people.length; i++) {
        console.log(people[i].name + " is " + people[i].age + " and from " + people[i].city);
    }
}

// Test case 1
var people1 = [
    {name: 'rishi', age: 24, city: 'new york'},
    {name: 'shyam', age: 27, city: 'delhi'},
    {name: 'sujay', age: 21, city: 'hyderabad'},
    {name: 'varun', age: 35, city: 'wisconsin'},
    {name: 'preetham', age: 20, city: 'new jersey'}
];
sortPeopleByAge(people1);

// Test case 2
var people2 = [
    {name: 'ram', age: 25, city: 'banglore'},
    {name: 'naveen', age: 28, city: 'chennai'},
    {name: 'debruyne', age: 30, city: 'ethihad'},
    {name: 'haaland', age: 21, city: 'norway'},
    {name: 'nishda', age: 27, city: 'tokyo'}
];
sortPeopleByAge(people2);

