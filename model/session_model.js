var db=require('../dbconnection');
var session={
    getAllSession:function(callback){
        return db.query("select * from sessionmaster natural join venuemaster order by sessionUpdatedAt DESC",callback);
    },
    
    getSessionById:function(id,callback){
        return db.query("select * from sessionmaster where sessionId=?",[id],callback);
    },
     getSessionByDate:function(id,callback){
        return db.query("select * from sessionmaster where sessionDate=?",[id],callback);
    },
    deleteSession(id,callback){
        return db.query("delete from sessionmaster where sessionId=?",[id],callback);
    },
    getLocById(id,callback)
    {
        return db.query("select LocationName from venuemaster where LocationId=?",[id],callback);
    }
}
module.exports=session;