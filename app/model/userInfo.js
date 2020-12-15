module.exports = app => {
    const { STRING } = app.Sequelize;

    const UserInfo = app.model.define('userInfo',{
        nickname:{
            type:STRING
        },
        avatar:{
            type:STRING,
            defaultValue:''
        },
        sign:{
            type:STRING
        }
    })

    return UserInfo;
}