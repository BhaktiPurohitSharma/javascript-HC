//de-structure of object

const course={
    name:"javascript",
    price:999,
    courseInstructor:"Hitesh"
};

//console.log(course.courseInstructor);

const { courseInstructor:instructor } = course;
console.log(instructor);

//API creation
// JSON object Format 
// {
//     "name" :"javascript",
//     "price":999,
//     "courseInstructor":"Hitesh"
// }

// array api
// [
//     {}
//     {}
//     {}
// ]

//example:"randomuser me" google it
//json formatter is tool to understand api
