"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FullTimeEmployee_1 = require("./FullTimeEmployee");
class AdminFullTimeEmployee extends FullTimeEmployee_1.FullTimeEmployee {
    constructor(eid, enm, designation, salary, empType, adminType) {
        super(eid, enm, designation, salary, empType);
        this.adminType = adminType;
    }
    print() {
        super.print();
        // this.empType = "TEST"//Private not available
        console.log(`Employee Admin: ${this.adminType}`);
    }
}
exports.default = AdminFullTimeEmployee;
