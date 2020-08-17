var db=require('../dbconnection');
var cnt={
   
    getAllCount:function(callback){
    
        var sql = "SELECT * FROM batchmaster";
       var query = db.query(sql, function(err, result) {
       global.bcnt=result.length;
       });
        sql="select * from sellmaster";
        query = db.query(sql, function(err, result) {
       global.scnt=result.length;
       });
         sql="select * from sessionmaster";
        query = db.query(sql, function(err, result) {
       global.secnt=result.length;
       });
         sql="select * from venuemaster";
        query = db.query(sql, function(err, result) {
       global.vcnt=result.length;
       });
      return db.query("select * from usermaster",callback);  
    }
}
module.exports=cnt;