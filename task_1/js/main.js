var teacher3 = {
    firstName: "Mary",
    fullTimeEmployee: false,
    lastName: "Smith",
    location: "Saul",
    contract: true
};
var director1 = {
    firstName: "Mary",
    fullTimeEmployee: false,
    lastName: "Smith",
    location: "Saul",
    contract: true,
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
//classes
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    return StudentClass;
}());
