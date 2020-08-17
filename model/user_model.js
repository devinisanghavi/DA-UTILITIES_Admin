var db=require('../dbconnection');

var user={

    getUserByID:function(id,callback){
        return db.query("select * from usermaster natural join batchmaster where emailId=?",[id],callback);
    },
    getAllUser:function(callback){
        return db.query("select * from usermaster order by userUpdatedAt DESC",callback);
    },
    userLogin:function(item,callback){
        return db.query('select * from usermaster where emailId=? And password=? And UserId=?',[item.emailId,item.password,item.UserId],callback);
    },
    // userSignup:function(item,callback){
    //     var date=new Date();
    //     var def_val=1;
    //     it
    //     return db.query("insert into usermaster values (?,?,?,?,?,?,?,?)",[item.emailId,item.password,item.userName,item.batchId,item.mobileNo,def_val,date,date],callback);
    // },
    updateUser:function(item,callback){
         var date=new Date();
        
        console.log("called1="+item.emailId);
        global.uname=item.userName;
        return db.query("update usermaster set userName=?,batchId=?,mobileNo=?,userUpdatedAt=? where emailId=?",[item.userName,3,item.mobileNo,date,global.uid],callback);
    },
    deleteUser(id,callback){
        return db.query("delete from usermaster where emailId=?",[id],callback);
    },
    
    changepass:function(item,callback){
        var date=new Date();
        return db.query("update usermaster set password=?,userUpdatedAt=? where emailId=?",[item.password,date,item.emailId],callback);
    },
    updateUserTypeByAdmin:function(item,callback){
        console.log("item="+item.id);
        var date=new Date();
        var val=2;
        return db.query("update usermaster set userId=2,userUpdatedAt=? where emailId=?",[date,item.emailId],callback);
    },
    getSpecialUser:function(callback){
        return db.query("select * from usermaster natural join batchmaster natural join usertype where userId!=3",callback);
    },
    removeSpecialUser:function(item,callback){
        console.log("item1="+item);
        var date=new Date();
        return db.query("update usermaster set userId=1,userUpdatedAt=? where emailId=?",[date,item],callback);
    }
    
};


module.exports=user;