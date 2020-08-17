var user1 = require("../model/user_model");
var express = require("express");
var router = express.Router();


router.get("/:id?", function (req, res, next) {
   
    res.render('ForgotPassword');
    user1.ForgotPassword(req.params.id, function (err, rows) {
        if (err) {
           // res.json(err);
        }
        else {
            //res.json(rows);
        }
    });
});
//router.get("/:id", function (req, res, next) {
//   
//    res.render('ForgotPassword');
//    user1.ForgotPassword(req.params.id, function (err, rows) {
//        if (err) {
//           // res.json(err);
//        }
//        else {
//            //res.json(rows);
//        }
//    });
//});

router.put("/:id?", function (req, res, next) {
    if (req.params.id) {
        user1.updateUserTypeByAdmin(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        user1.changepass(req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;
