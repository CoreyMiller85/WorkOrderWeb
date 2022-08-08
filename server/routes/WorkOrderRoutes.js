const express = require('express');
const router = express.Router();
const { Workorder } = require('../db/models/Models');
const { Unit } = require('../db/models/Models');

router.get('/', async (req, res) => {
  const results = await Workorder.findAll({});
  res.json(results);
});

router.get('/:id', async (req, res) => {
  const wo = await Workorder.findOne({ where: { id: req.params.id } });
  res.json(wo);
});

router.post('/create', async (req, res) => {
  try {
    const unit = await Unit.findByPk(req.body.unitId);
    const wo = await Workorder.create(req.body, { include: Unit });
    const test = await Workorder.findAll({ include: Unit });
    res.json(test);
  } catch (error) {
    res.send(error);
  }
});

router.put('/:id', async (req, res) => {
  const wo = await Workorder.update(req.body, { where: { id: req.params.id } });
  res.json(wo);
});

router.delete('/:id', async (req, res) => {
  const wo = await Workorder.destroy({ where: { id: req.params.id } });
  res.json(wo);
});

module.exports = router;
