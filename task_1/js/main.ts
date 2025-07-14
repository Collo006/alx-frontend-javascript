//Teachers section
interface Teacher{
    firstName: string;
    fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    contract: boolean;
    yearsOfExperience?: number;
}

const teacher3 : Teacher={
    firstName: "Mary",
    fullTimeEmployee: false,
    lastName: "Smith",
    location: "Saul",
    contract: true
};

//Directors Section
interface Directors extends Teacher{
    numberOfReports: number;
}

const director1 : Directors={
    firstName: "Mary",
    fullTimeEmployee: false,
    lastName: "Smith",
    location: "Saul",
    contract: true,
    numberOfReports: 17
}


interface printTeacherFunction{
    (firstName:string, lastName:string):string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}

//classes
class StudentClass{
    firstName: string;
    lastName: string;


constructor(firstName:string,lastName:string){
 this.firstName=firstName;
 this.lastName=lastName;
}

workOnHomework():string{
    return "Currently working"
}
}