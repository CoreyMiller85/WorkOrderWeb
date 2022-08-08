const express = require('express');
const sequelize = require('./db/config');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const { Unit } = require('./db/models/Models');
const UnitRoutes = require('./routes/UnitRoutes');
const WorkorderRoutes = require('./routes/WorkorderRoutes');
app.use(cors());
app.use(express.json());

sequelize.sync({ alter: true });

app.get('/', async (req, res) => {
  const test = await Unit.findAll();
  res.json(test);
});

app.use('/unit', UnitRoutes);
app.use('/workorder', WorkorderRoutes);

app.listen(PORT, () => {
  console.log(`Server open on port: ${PORT}`);
});
