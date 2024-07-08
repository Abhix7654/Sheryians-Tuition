// ### Task: Student Grade Management System

// You need to create a simple student grade management system. This system will manage student information and their grades for different subjects. The task includes the following steps:

// 1. *Create Student Objects*:
//    - Each student should have the following properties: id, name, and grades.
//    - The grades property should be an object with subjects as keys and corresponding grades as values.

// 2. *Store Students in an Array*:
//    - Create an array to store multiple student objects.

// 3. *Functions*:
//    - *Add a Student*: Create a function to add a new student to the array.
//    - *Remove a Student*: Create a function to remove a student from the array by their id.


let student=[{id:1,name:"Abhishek",grades:{math:20,science:60,english:90}},
        {id:2,name:"Muskan",grades:{math:80,science:40,english:20}},
        {id:3,name:"Rahul",grades:{math:90,science:60,english:70}}];

function addStudent(newStudent) {
    student.push(newStudent);
}


function removeStudent(studentId) {
    student = student.filter(student => student.id !== studentId);
}



addStudent({id: 4, name: "Priya", grades: {math: 75, science: 85, english: 95}});



removeStudent(2);
 

for(i in student){
        console.log(i,student[i]);
}


