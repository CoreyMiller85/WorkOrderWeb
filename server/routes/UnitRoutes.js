const express = require('express');
const router = express.Router();
const { Unit } = require('../db/models/Models');

router.get('/:id', async (req, res) => {
  const results = await Unit.findByPk(req.params.id);
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

module.exports = router;
