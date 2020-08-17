var express = require('express');
var router = express.Router();
var sell = require("../model/sell_model");
var session = require("../model/session_model");
var batch = require("../model/batch_model");
var itemtype = require("../model/itemtype_model");
var venue = require("../model/venue_model");
var user = require("../model/user_model");
var cnt = require("../model/count_model");
var da="";


router.get('/', function (req, res, next) {
       cnt.getAllCount(function(err,rows){
    if(err){
    res.render('Login');
    }
        else{
        res.render('Login');
        }
    });
});

router.get('/login', function(req, res, next) {
    cnt.getAllCount(function(err,rows){
    if(err){
    res.render('Login');
    }
        else{
        res.render('Login');
        }
    });
  
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
    
  cnt.getAllCount(function(err,rows){
    if(err){
    res.render('layout');
    }
        else{
        res.render('layout');
        }
    });
});

router.get('/batch', function(req, res, next) {
//   res.render('batch');
    batch.getAllBatch(function(err,rows){
        if(err){
            res.json(err);
            da=JSON.stringify(rows);
            res.render('batch',{data:da});
        }
        else{
//            res.json(rows);
            da=JSON.stringify(rows);
            res.render('batch',{data:da});
        }
    });
      router.post("/batch/:id?", function(req, res, next) {
          if(req.params.id!="batch")
          {
               
    batch.deleteBatch(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
          }
//          else{
//             
//              batch.addBatch(req.body,function(err,rows){
//        if(err){
//            res.json(err);
//        }
//        else{
//            res.redirect("/batch");
//        }
//    });
//          }
   
  });
  router.post("/batch1",function(req,res,next){
   batch.addBatch(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.redirect("/batch");
        }
    });
  });
});
router.get('/student', function(req, res, next) {
//   res.render('student');
    user.getSpecialUser(function(err,rows){
        if(err){
            res.render('student');
        }
        else{
            da=JSON.stringify(rows);
//            console.log("da="+da)
           res.render('student',{title:"DAIICT-UTILITIES",text:"Request For Session",data:da});
        }
    });
    router.post("/student/:id?", function (req, res, next) {
        console.log("id===="+req.params.id);
    user.deleteUser(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            console.log("success");
            res.json(rows);
        }
    });
});
});
router.get('/sell', function(req, res, next) {
    sell.getAllSell(function(err,rows){
        if(err){
            res.json(err);
            console.log("error");
            res.render('Sell',{title:"DAIICT-UTILITIES",text:"Request For Session",data:da});
        }
        else{
            da=JSON.stringify(rows);
//            console.log(da);
            res.render('Sell',{title:"DAIICT-UTILITIES",text:"Request For Session",data:da});
            
        }
    });
    router.post("/sell/:id?", function (req, res, next) {
    sell.deleteSell(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            
            res.json(rows);
        }
    });
});

});


router.get('/itemtype', function(req, res, next) {
    itemtype.getAllItem(function(err,rows){
        if(err){
            res.render('itemtype');
        }
        else{
            da=JSON.stringify(rows);
            res.render('itemtype',{data:da});
        }
    });
    router.post("/itemtype/:id?", function(req, res, next) {
          if(req.params.id!="itemtype")
          {
            console.log("delete not working ??????");
   itemtype.deleteItem(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
          }
//          else{
//             
//             itemtype.addItem(req.body,function(err,rows){
//        if(err){
//            res.json(err);
//        }
//        else{
//            res.redirect("/itemtype");
//        }
//    });
//          }
   
  });
    router.post("/itemtype1",function(req,res,next){
     itemtype.addItem(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.redirect("/itemtype");
        }
    });
  });
});
router.get('/sessions', function(req, res, next) {
//   res.render('sessions');
    session.getAllSession(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            da=JSON.stringify(rows);
            console.log("da="+da)
           res.render('Sessions',{title:"DAIICT-UTILITIES",text:"Request For Session",data:da});
        }
    });
    router.post("/session/:id?", function(req, res, next) {
    session.deleteSession(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

});
router.get('/venue', function(req, res, next) {
//   res.render('Venue');
    venue.getAllVenue(function(err,rows){
        if(err){
            res.render('Venue')
        }
        else{
            da=JSON.stringify(rows);
            res.render('Venue',{data:da});
        }
    });
    router.post("/venue/:id?", function(req, res, next) {
          if(req.params.id!="venue")
          {
    venue.deleteVenue(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
          }
//          else{
//             venue.addVenue(req.body,function(err,rows){
//        if(err){
//            res.json(err);
//        }
//        else{
//            res.redirect("/venue");
//        }
//    });
//           
//          }
   
  });
      router.post("/venue1",function(req,res,next){
     venue.addVenue(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.redirect("/venue");
        }
    });
  });
    
});
router.get("/profile/:id?", function (req, res, next) {
    if (req.params.id) {
    user.getUserByID(req.params.id, function (err, rows) {
      if (err) {
         res.json(err);
            res.render('profile',{title:"DAIICT-UTILITIES"});
      } else {
            da=JSON.stringify(rows);
            res.render('profile',{title:"DAIICT-UTILITIES",user1:da});
      }
    });
  }
});

router.post("/profile/:id?", function (req, res, next) {
    console.log("called");
  user.updateUser(req.body, function (err, rows) {
    if (err) {
//      res.send(response('Error', 403, null, err, null, null))
    } else {
    
      res.redirect("/profile/"+global.uid)
    }
  });
});

router.get("/adminaccess", function (req, res, next) {
     res.render('SessionAdminAccess', { title: 'DA-UTILITIES' });
    
});
   
router.post("/adminaccess", function (req, res, next) {
    
//    sell.addSell(req.body, req.file.filename, function (err, rows) {
//        if (err) {
////            res.json(err);
//            res.redirect("/");
//        } else {
////            res.json(rows);
//            res.redirect("/sell");
//        }
//    });
    user.updateUserTypeByAdmin(req.body,function(err,rows){
        console.log("req="+req.body.emailId);
    if(err)
    {
        console.log("errrrrrrrrrrrrrrrrrrrrr="+err);
    }
    else{
         console.log("errrrrrrrrrrrrrrrrrrrrr 111");
        res.redirect("/adminaccess");
        res.end();
    }
    
    
    });
});


module.exports = router;
