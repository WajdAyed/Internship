const sequelize = require('./config/dbConfig');

let express = require('express');

let path = require('path');

let cors = require('cors');

let bodyParser = require('body-parser');

let app = express();

app.use(express.json());

app.use(cors());

const Cycle = require('./models/cycle');
const Former = require('./models/former');
const Participant = require('./models/participant');
/*app.use(require('./models/admin'));
app.use(require('./models/participant'));
app.use(require('./models/former'));
app.use(require('./models/cycle'));*/
Participant.belongsToMany(Cycle, { through: 'partCycle' });
Cycle.belongsToMany(Participant, { through: 'partCycle' });
Former.belongsToMany(Cycle, { through: 'FormerCycle' })
Cycle.belongsToMany(Former, { through: 'FormerCycle' })



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/cycle', require('./routes/cycle_route'));
app.use('/former', require('./routes/former_route'));
app.use('/part', require('./routes/participant_route'));
app.use('/auth', require('./routes/auth_route'));



/*sequelize.authenticate().then(() => {
    console.log("Connected Successfully!");
}).catch(err => {
    console.log(err);
});*/

sequelize.sync().then(() => {
    console.log('تم إنشاء الجداول بنجاح!');
}).catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("التطبيق يعمل على المنفذ 3000");
});