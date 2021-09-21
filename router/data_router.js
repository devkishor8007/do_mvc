const { getAllData, getSpecific, postData, updateData, deletData } = require('../controller/data_controller');
const express = require('express');
const router = express.Router();

router.route('/').get(getAllData).post(postData);
router.route('/:id').get(getSpecific).put(updateData).delete(deletData);

module.exports = router;

