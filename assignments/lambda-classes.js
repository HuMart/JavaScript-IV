// CODE here for your Lambda Classes
class Person{
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender =attrs.grnder;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }    
}

class Student extends Person {
    constructor(studAttrs) {
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects() {
    return `${this.favSubjects}`;
    }
    PRAssignment(param) {
    return `${this.name} has submitted a PR for ${param}`;
    }
    sprintChallenge(param1) {
    return `${this.name} has begun sprint challenge on ${param1}`;
    }
}

class Instructor extends Student{
    constructor(InsAttrs) {
        super(InsAttrs);
        this.specialty = InsAttrs.specialty;
        this.favLanguage = InsAttrs.favLanguage;
        this.catchPhrase = InsAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(stud, subj) {
        return `${stud} receives a perfect score on ${subj}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(PmAttrs) {
    super(PmAttrs);
    this.gradClassName = PmAttrs.gradClassName;
    this.favInstructor = PmAttrs.favInstructor;
    }
    standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugCode() {
    return `${this.name} debugs ${this.name}'s code on ${param1} `;
    }
}

const michael = new ProjectManagers({
    name: 'Michael',
    age: 35,
    location: 'California',
    gender: 'Male',
    gradClassName: "Web 19",
    favInstructor: 'Jhon',
    favLanguage: 'css'
});

const jhon = new Instructor({
name: 'Jhon',
age: 45,
favLanguage: 'Python',
catchPhrase: 'Coooode Tiiime!!!!!',
specialty: 'JavaScript'
});

const paul = new Student({
    name: 'Paul',
    age: 25,
    location: 'Miami',
    favSubjects: "HTML, CSS, JavaScript",
});

console.log(michael);
console.log(jhon);
console.log(paul.listsSubjects());