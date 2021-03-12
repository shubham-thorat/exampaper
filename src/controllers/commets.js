const {comment,user} = require('../Models/db')

async function createComment(title,message){
    if(typeof title != 'string' || title.length < 1){
        throw new Error('Title empty or undefined');
    }

    if(typeof message != 'string' || message.length < 10){
        throw new Error('message is to short or undefined');
    }

    try{
        await comment.create({
            title,message
        })
    }
    catch(e){
        throw e
    }
}

async function fetchComment(){

    try{
        const cs = await comments.findAll();
        return cs;
    }
    catch(e){
        throw e;
    }
}
module.exports = {
    createComment,
}