const Cycle = require('../models/cycle');
let router = require('express').Router();
const { Sequelize } = require('sequelize');
const Former = require('../models/former');
const Participant = require('../models/participant');

//get all Cycles
router.get('/all', (req, res) => {
    Cycle.findAll({
        include: [
            { model: Former },
            { model: Participant }
        ]
    }).then((result) => {
        return res.status(200).json({ data: result });
    }).catch(err => {
        return res.status(500).json({ message: err });
    });;
});

router.get('/by_id/:id', async (req, res) => {
    try {
        let cycle = await Cycle.findByPk(req.params.id, { include: Former });
        if (!cycle) {
            return res.status(404).json({ message: 'الدورة غير موجودة!' });
        }
        return res.status(200).json({ data: cycle })
    } catch (e) {
        return res.status(500).json({ message: 'خطأ في الخادم الداخلي!' });
    }
});

// إضافة دورة
router.post('/add', (req, res) => {
    Cycle.create({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        roomNumber: req.body.roomNumber
    }).then((former) => {
        return res.status(201).json({ message: "تمت الإضافة بنجاح", data: former })
    }).catch(err => {
        return res.status(500).json({ error: "خطأ في الخادم: " + err });
    });
});

// تحديث الدورة
router.put('/update/:id', (req, res) => {
    Cycle.update({
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        roomNumber: req.body.roomNumber
    },
        {
            where: {
                cycle_id: req.params.id
            }
        }
    ).then(result => {
        return res.status(201).json({ message: "تم التحديث بنجاح", data: result });
    }).catch(err => {
        return res.status(500).json({ error: "خطأ في الخادم:" + err });
    });
});

// حذف الدورة
router.delete('/delete/:id', async (req, res) => {
    try {
        let cycleToDelete = await Cycle.findOne({ where: { cycle_id: req.params.id } });
        if (!cycleToDelete) {
            return res.status(404).json({ message: "لا يوجد دورة بهذا الهوية!" });
        }
        cycleToDelete.removeFormers();

        await cycleToDelete.destroy();

        return res.status(201).json({ message: "تم الحذف بنجاح!" });

    } catch (e) {
        return res.status(500).json({ message: "خطأ أثناء حذف الدورة!" });
    }
});

// إضافة مدرب إلى الدورة
router.post('/add_former/:id_former/:id_cycle', async (req, res) => {
    try {
        let former = await Former.findByPk(req.params.id_former);
        if (!former) {
            return res.status(404).json({ message: "المدرب غير موجود!" });
        }
        let cycle = await Cycle.findByPk(req.params.id_cycle);
        cycle.addFormer(former);
        return res.status(201).json({ message: "تمت الإضافة بنجاح!" });
    } catch (e) {
        return res.status(500).json({ message: "خطأ أثناء إضافة المدرب!" });
    }
});

module.exports = router;