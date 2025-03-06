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
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
// Test case 3
minMaxAverage([7, 12, 19, 3, 15]);


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
countVowels("Winter");
// Test case 2
countVowels("Programming");
// Test case 3
countVowels("Apple");


// Exercise #3: sortNumbers function
function sortNumbers(arr) {
    var sortedArray = arr.slice();
    sortedArray.sort(function(a, b) {
        return a - b;
    });
    console.log("Original Array: [" + arr + "], Sorted Array: [" + sortedArray + "]");
}

// Test case 1
sortNumbers([9, 4, 6, 2]);
// Test case 2
sortNumbers([12, 3, 8, 7, 10]);
// Test case 3
sortNumbers([21, 18, 9, 6]);


// Exercise #4: celsiusToFahrenheit function (handles string inputs)
function celsiusToFahrenheit(celsius) {
    if (typeof celsius === 'string') {
        celsius = parseFloat(celsius);
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit");
}

// Test case 1
celsiusToFahrenheit(30);
// Test case 2
celsiusToFahrenheit("25");
// Test case 3
celsiusToFahrenheit(0);
// Test case 4 (string input)
celsiusToFahrenheit("35");


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
    {name: 'John', age: 23, city: 'Chicago'},
    {name: 'Jane', age: 29, city: 'New York'},
    {name: 'Steve', age: 21, city: 'Los Angeles'},
    {name: 'Alice', age: 35, city: 'San Francisco'},
    {name: 'Bob', age: 19, city: 'Miami'}
];
sortPeopleByAge(people1);

// Test case 2
var people2 = [
    {name: 'Liam', age: 25, city: 'Boston'},
    {name: 'Emma', age: 28, city: 'Seattle'},
    {name: 'Olivia', age: 30, city: 'Austin'},
    {name: 'James', age: 22, city: 'Dallas'},
    {name: 'Isabella', age: 27, city: 'Portland'}
];
sortPeopleByAge(people2);

