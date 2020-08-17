var db=require('../dbconnection');
var sell={
    getAllSell:function(callback){
        return db.query("select * from sellmaster natural join itemtype order by updatedAt DESC",callback);
    },
    getSellById:function(id,callback){
        return db.query("select * from sellmaster where emailId=?",[id],callback);
    },
    deleteSell(id,callback){
        return db.query("delete from sellmaster where sellId=?",[id],callback);
    }   
}
module.exports=sell;