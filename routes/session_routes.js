var session = require("../model/session_model");
var express = require("express");
var router = express.Router();
var da="";
var loc="";

router.get('/',function(req,res,next){


    session.getAllSession(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            da=JSON.stringify(rows);
           res.render('Sessions',{title:"DAIICT-UTILITIES",text:"Request For Session",data:da});
        }
    });
    

});
//router.get('/:id?',function(req,res,next){
//    if(req.params.id){
//        session.getSessionByIdId(req.params.id,function(err,rows){
//            if(err){
//                res.json(err);
//            }
//            else{
//               loc=res.json(rows);
//            }
//        });
//    }
//    else{
//    session.getAllSession(function(err,rows){
//        if(err){
//            res.json(err);
//        }
//        else{
//            res.json(rows);
//            res.end();
//        }
//    });
//    }
//});

router.post('/',function(req,res,next){
    session.addSession(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

// router.put("/:id" ,function(req, res, next) {
//     session.updateSession(req.params.id,req.body, function(err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   });

  router.delete("/:id", function(req, res, next) {
    session.deleteSession(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

module.exports=router;