const express = require('express');
const router = express();
const { Gourmet } = require('../models/Gourmet');

// 모든 맛집 조회
router.get('/gourmet', async (req, res) => {
  const { name, type } = req.query;

  const filter = {};
  if (name) filter.name = name;
  if (type) filter.type = type;

  const gourmetList = await Gourmet.find(filter);

  res.json(gourmetList);
});

// 특정 맛집 조회
router.get('/gourmet/:_id', async (req, res) => {
  const { _id } = req.params;
  const gourmetFindOne = await Gourmet.findOne({ _id });

  res.json(gourmetFindOne);
});

// 맛집 정보 만들기
router.post('/gourmet', async (req, res) => {
  const { name, rating, desc, type } = req.body;
  const createdDate = new Date();

  const gourmetCreate = new Gourmet({ name, rating, desc, type, createdDate });
  await gourmetCreate.save();

  res.json(gourmetCreate);
});

// 특정 맛집 정보 업데이트
router.put('/gourmet/:_id', async (req, res) => {
  const { _id } = req.params;
  const { name, rating, desc, type } = req.body;

  const gourmetUpdateOne = await Gourmet.updateOne({ _id }, { name, rating, desc, type });

  res.json(gourmetUpdateOne);
});

// 특정 맛집 삭제
router.delete('/gourmet/:_id', async (req, res) => {
  const { _id } = req.params;
  const gourmetDeleteOne = await Gourmet.deleteOne({ _id });

  res.json(gourmetDeleteOne);
});

module.exports = router;
