"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
class FullTimeEmployee {
    constructor(eid, enm, designation, salary, empType) {
        this.eid = eid;
        this.enm = enm;
        this.designation = designation;
        this.salary = salary;
        this.empType = empType;
    }
    print() {
        console.log(`Employee Name: ${this.enm}`);
        console.log(`Employee Type: ${this.empType}`);
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
