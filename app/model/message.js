module.exports = app =>{
    const {JSON,INTEGER} = app.Sequelize;

    const  Message = app.model.define('message',{
        body:{
            type:JSON
        },
        formId:{
            type:INTEGER
        },
        toId:{
            type:INTEGER
        }
    })

    return Message

}