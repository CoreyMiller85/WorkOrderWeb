const express = require('express');
const router = express.Router();
const { Unit, Workorder } = require('../db/models/Models');

router.get('/:id', async (req, res) => {
  const results = await Unit.findByPk(req.params.id, { include: Workorder });
  res.json(results);
});

router.post('/createtest', async (req, res) => {
  const result = await Unit.create({
    address: '123 test st',
    city: 'test city',
    state: 'test state',
    zip: 555555,
    community: 'test community',
  });
  res.json(result);
});

router.post('/create', async (req, res) => {
  const data = req.body;
  const query = await Unit.create(data);
  res.json(query);
});

module.exports = router;
