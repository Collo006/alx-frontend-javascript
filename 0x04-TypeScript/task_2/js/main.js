//Advanced Types part1
//create directorInterface with 3 methods
//create a class director that implements directorintrface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
//create a class teacher that implements teacherinterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workDirectorTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (salary < 500) {
        return Teacher;
    }
    else {
        return Director;
    }
};
console.log(createEmployee(900));
