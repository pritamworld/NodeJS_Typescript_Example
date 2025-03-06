import IEmployee from "./IEmployee";

export class FullTimeEmployee implements IEmployee {
    eid: number;
    enm: string;
    designation: string;
    salary: number;//public salary: number;
    private empType: string

    constructor(eid: number, enm: string, designation: string, salary: number, empType: string){
        this.eid = eid
        this.enm = enm
        this.designation = designation
        this.salary = salary
        this.empType = empType
    }

    print(): void {
        console.log(`Employee Name: ${this.enm}`)
        console.log(`Employee Type: ${this.empType}`)
    }
}