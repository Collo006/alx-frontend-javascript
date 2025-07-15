//Advanced Types part1
//create directorInterface with 3 methods

interface DirectorInterface {
    workFromHome(): string
getCoffeeBreak(): string
workDirectorTasks(): string
}

//create TeacherInterface with 3 mehtods

interface TeacherInterface {
       workFromHome(): string
getCoffeeBreak(): string
workTeacherTasks(): string
 
}

//create a class director that implements directorintrface

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}
//create a class teacher that implements teacherinterface

class Teacher implements TeacherInterface{
        workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }

}


//function that returns if one is a teacher or a director
const createEmployee=(salary:any)=>{
    if(salary<500){
        return Teacher
    }else{
        return Director
    }
}
console.log(createEmployee(200))

//creating functions specific to employees
function isDirector(employee: Director | Teacher ): employee is Director{
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork=(employee:Director | Teacher)=>{
    if(isDirector(employee)){
        employee
        return employee.workDirectorTasks()
    }else {
        employee
        return employee.workTeacherTasks()
    }
}
console.log(executeWork)


//string literal types
type Subjects= 'Math'| 'History';

const teachClass=(todayClass: Subjects ):string=>{
  if(todayClass==='Math'){
     return 'Teaching Math'
  }else{
    return 'Teaching History'
  }
}
console.log(teachClass('Math'))