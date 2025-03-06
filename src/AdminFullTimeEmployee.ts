import { FullTimeEmployee } from "./FullTimeEmployee";

export default class AdminFullTimeEmployee extends FullTimeEmployee{
    readonly adminType:string
    
    constructor(eid: number, enm: string, designation: string, salary: number, empType: string, adminType:string){
        super(eid, enm, designation, salary, empType)
        this.adminType = adminType
    }

    print(){
        super.print()
        // this.empType = "TEST"//Private not available
        console.log(`Employee Admin: ${this.adminType}`)
    }
}