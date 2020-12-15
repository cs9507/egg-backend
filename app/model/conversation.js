module.exports = app =>{
    const {DATE,BOOLEAN,ENUM} = app.Sequelize;
    const Conversation = app.model.define('conversation',{
        type:{
            type:ENUM,
            values:['chat','groupchat']
        },
        activeTime:{
            type:DATE
        },
        active:{
            type:BOOLEAN,
            defaultValue:true
        }
    })
    Conversation.associate = function(){
        app.model.Conversation.hasMany(app.model.Message)
    }
    return Conversation
}