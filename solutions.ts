//Problem 1:
function filterEvenNumbers(numbers: number[]): number[] {
    let even_nums: number[] = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            even_nums.push(num);
        }
    }
    return even_nums;
};

//Problem 2:
function reverseString(strng: string): string {
    let reverse: string = "";

    for (let i = strng.length - 1; i >= 0; i--) {
        reverse += strng[i];
    }
    return reverse;
}

//Problem 3:
type StringOrNumber = string|number;
function checkType(value: StringOrNumber): string {
    if (typeof value=="string") {
        return "string";
    }
    else{
        return "number";
    }
}

//Problem 4:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

//Problem 5:
interface Book { 
    title: "string", 
    author: "string", 
    publishedYear: number; 
}
function toggleReadStatus (book:Book,isRead:boolean=true):readstatus {
    return {
        ...book,
        isRead: isRead
    }
}
interface readstatus extends Book{
    isRead: boolean;
}

//Problem 6:
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age  = age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
new Student("Alice", 20, "A").getDetails();

//Problem 7:
function getIntersection(array1: number[], array2: number[]): number[] {
    return array1.filter(num => array2.includes(num));
}
