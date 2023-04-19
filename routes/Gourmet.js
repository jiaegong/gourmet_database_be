const express = require('express');
const router = express();
const { Gourmet } = require('../models/Gourmet');

// 모든 맛집 조회
router.get('/', async (req, res) => {
  const gourmetFindAll = await Gourmet.find({});

  res.json(gourmetFindAll);
});

// 특정 맛집 조회
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  const gourmetFindOne = await Gourmet.findOne({ name });

  res.json(gourmetFindOne);
});

// 맛집 정보 만들기
router.post('/', async (req, res) => {
  const { name, rating, desc, type } = req.body;
  const createdDate = new Date();
  const gourmetCreate = new Gourmet({ name, rating, desc, type, createdDate });
  await gourmetCreate.save();

  res.json(gourmetCreate);
});

// 특정 맛집 정보 업데이트
router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const { name, rating, desc, type } = req.body;

  const gourmetUpdateOne = await Gourmet.updateOne({ _id }, { name, rating, desc, type });

  res.json(gourmetUpdateOne);
});

// 특정 맛집 삭제
router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  const gourmetDeleteOne = await Gourmet.deleteOne({ _id });

  res.json(gourmetDeleteOne);
});

module.exports = router;
