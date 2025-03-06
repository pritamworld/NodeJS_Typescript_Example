"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FullTimeEmployee_1 = require("./FullTimeEmployee");
const AdminFullTimeEmployee_1 = __importDefault(require("./AdminFullTimeEmployee"));
console.log("Welcome to Typescript programming");
var a = 100; //number
//a = "Hello" //Error
var b = "Hello";
var c;
var d;
var e; //10 "Hello" true obj
// null
// any
// unknown
// void
function add(a, b) {
    return a + b;
}
var s = add(10, 20);
console.log(typeof s);
//Union 
var x; //Union 
x = "Hello";
x = 10;
// x = true //error
var emp1 = {
    eid: 1,
    enm: "Pritesh",
    designation: "Prof",
    salary: 400.90
};
console.log(emp1);
var femp1 = new FullTimeEmployee_1.FullTimeEmployee(1, "Pritesh Patel", "Teacher", 6700.85, "Full Time Employee");
// femp1.empType = "NEW"//Private
femp1.print();
//Object literal in JS
var p1 = {
    pid: 1,
    pname: "Patel"
};
console.log(p1);
console.log(p1);
var s1 = {
    pid: 1,
    pname: "Patel",
    streetNo: 1223,
    streetName: "Street Name",
    city: "Tor",
    country: "CAN"
};
console.log(s1);
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PR"] = 0] = "PR";
    STATUS[STATUS["CITIZEN"] = 1] = "CITIZEN";
    STATUS[STATUS["WORK_PERMIT"] = 2] = "WORK_PERMIT";
    STATUS[STATUS["STUDENT"] = 3] = "STUDENT";
})(STATUS || (STATUS = {}));
console.log(STATUS);
var aAdmin = new AdminFullTimeEmployee_1.default(1, "Pritesh Patel", "Teacher", 6700.85, "Full Time Employee", "ADMIN");
// aAdmin.adminType = "ADMIN ADMIN" //read-only
aAdmin.print();
let data;
data = "Hello";
// data = 42;
// data = true;
if (typeof data === 'string') {
    console.log(data.toUpperCase());
}
