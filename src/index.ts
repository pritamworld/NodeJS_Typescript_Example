import IEmployee, { ORG_NAME } from "./IEmployee";
import { FullTimeEmployee } from "./FullTimeEmployee";
import  AdminFullTimeEmployee  from "./AdminFullTimeEmployee"
console.log("Welcome to Typescript programming")

var a = 100 //number
//a = "Hello" //Error
var b:string = "Hello"
var c:boolean
var d:number
var e:any //10 "Hello" true obj

// null
// any
// unknown
// void

function add(a:number, b:number):  number {
    return a + b
}

var s = add(10, 20)

console.log(typeof s)

//Union 
var x:string | number //Union 
x = "Hello"
x = 10
// x = true //error

var emp1:IEmployee = {
    eid: 1,
    enm: "Pritesh",
    designation: "Prof",
    salary: 400.90
}

console.log(emp1)

var femp1: FullTimeEmployee = new FullTimeEmployee(
    1,
    "Pritesh Patel",
    "Teacher",
    6700.85,
    "Full Time Employee"
)
// femp1.empType = "NEW"//Private
femp1.print()

//type declaration

type Person = {
    readonly pid: number
    pname: string
}

//Object literal in JS
var p1: Person = {
    pid:1,
    pname: "Patel"
}

// p1.pid = 1000// read-only

type Address = {
    streetNo: number
    streetName: string
    city: string
    country: string
}

console.log(p1)
console.log(p1)

//Intesect
type Student = Person & Address
var s1: Student = {
    pid:1,
    pname: "Patel",
    streetNo: 1223,
    streetName: "Street Name",
    city: "Tor",
    country: "CAN"
}
console.log(s1)

//enum
enum STATUS {
    PR,
    CITIZEN,
    WORK_PERMIT,
    STUDENT
}
console.log(STATUS)

var aAdmin: AdminFullTimeEmployee = new AdminFullTimeEmployee(
    1,
    "Pritesh Patel",
    "Teacher",
    6700.85,
    "Full Time Employee",
    "ADMIN"
)

// aAdmin.adminType = "ADMIN ADMIN" //read-only
aAdmin.print()


//unknown force you to check data type before use
let data: unknown;

data = "Hello";
// data = 42;
// data = true;

if(typeof data === 'string'){
    console.log(data.toUpperCase())
}