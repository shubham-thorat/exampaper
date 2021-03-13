const models = require('../src/Models/db')


let persondata = new models.newuser([
    { username: "firstuser", password: "firstpass" },
    { username: "Seconduser", password: "Secondpass" }
]);
let commentdata = new models.commentuser([
    {
        title: "Hello Coder",
        message: "Coding is part of living.F**k the competetive programming get job at 'FAANG'  ",
        date: "12-03-2021"
    },
    {
        title: "What is Lorem Ipsum?",
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap `,
        date: "02-11-2020"
    },
    {
        title: "Why do we use it?",
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like  ",
        date: "11-03-2019"
    },
])



module.exports = {
    persondata,
    commentdata
}