let router = require('express').Router();
const { Sequelize } = require('sequelize');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

let secretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NDg2Nzc4MywiaWF0IjoxNjk0ODY3NzgzfQ.m8qitj_9g1F_eAjwLF4h8o0hfQlgcGm41wG_TK8qhQI";

//login
router.post('/login', (req, res) => {
    Admin.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(result => {
        const payload = {
            username: result.username
        }
        const options = {
            expiresIn: '24h'
        }
        const token = jwt.sign(payload, secretKey, options);
        return res.status(200).json({ message: "تم تسجيل الدخول بنجاح!", token: token });
    }).catch(err => {
        return res.status(403).json({ message: "غير مصرح به!" });
    });
});

// إضافة مدير
router.post('/add_admin', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password,
    }).then(result => {
        return res.send("تمت إضافة المدير");
    }).catch(err => {
        return res.status(500).json({ message: "حدث خطأ أثناء إضافة المدير!" });
    });
});

module.exports = router;