const Former = require('../models/former');
let router = require('express').Router();
const { Sequelize } = require('sequelize');

//get all formers
router.get('/all', (req, res) => {
    Former.findAll().then((result) => {
        return res.status(200).json({ data: result });
    }).catch(err => {
        return res.status(500).json({ message: err });
    });;
});

//get former by id
router.get('/by_id/:id', async (req, res) => {
    try {
        let former = await Former.findByPk(req.params.id);
        if (!former) {
            return res.status(404).json({ message: 'المدرب غير موجود!' });
        }
        return res.status(200).json({ data: former })
    } catch (e) {
        return res.status(500).json({ message: 'خطأ في الخادم الداخلي!' });
    }
});

// إضافة مدرب
router.post('/add', (req, res) => {
    Former.create({
        fullname: req.body.fullname,
        speciality: req.body.speciality,
        direction: req.body.direction,
    }).then((former) => {
        return res.status(201).json({ message: "تمت الإضافة بنجاح", data: former })
    }).catch(err => {
        return res.status(500).json({ error: "خطأ في الخادم: " + err });
    });
});

// تحديث المدرب
router.put('/update/:id', (req, res) => {
    Former.update({
        fullname: req.body.fullname,
        speciality: req.body.speciality,
        direction: req.body.direction,
    },
        {
            where: {
                former_id: req.params.id
            }
        }
    ).then(result => {
        return res.status(201).json({ message: "تم التحديث بنجاح", data: result });
    }).catch(err => {
        return res.status(500).json({ error: "خطأ في الخادم:" + err });
    });
});

// حذف المدرب
router.delete('/delete/:id', async (req, res) => {
    try {
        let formerToDelete = await Former.findOne({ where: { former_id: req.params.id } });
        if (!formerToDelete) {
            return res.status(404).json({ message: "لا يوجد مدرب بهذا الهوية!" });
        }
        formerToDelete.removeCycles();

        await formerToDelete.destroy();

        return res.status(201).json({ message: "تم الحذف بنجاح!" });

    } catch (e) {
        return res.status(500).json({ message: "خطأ أثناء حذف المدرب!" });
    }
});

module.exports = router ;