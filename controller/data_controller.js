const asyncHandler = require("../middleware/async");
const DataModel = require('../model/data_model');
const ErrorResponse = require("../utilis/errorResponse");

exports.getAllData = asyncHandler(async (req, res, next) => {
    let query;

    const reqQuery = { ...req.query };

    const queryGetting = ['select', 'sort'];

    queryGetting.forEach(param => delete reqQuery[param]);

    let queyString = JSON.stringify(reqQuery);

    queyString = queyString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    query = DataModel.find(JSON.parse(queyString));

    if (req.query.select) {
        const fieldSelect = req.query.select.split(',').join(' ');
        query = query.select(fieldSelect);
    }

    if (req.query.sort) {
        const soryAs = req.query.sort.split(',').join(' ');
        query = query.sort(soryAs);
    } else {
        query = query.sort('-name');
    }

    const datasample = await query;
    res.status(200).json({ success: true, count: datasample.length, data: datasample });
});

exports.getSpecific = asyncHandler(async (req, res, next) => {
    const datasample = await DataModel.findById(req.params.id);
    if (!datasample) {
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}`, 400));
    }
    res.status(200).json({ success: true, data: datasample });
});

exports.postData = asyncHandler(async (req, res, next) => {
    const datasample = await DataModel.create(req.body);
    res.status(200).json({ success: true, data: datasample });
});


exports.updateData = asyncHandler(async (req, res, next) => {
    const datasample = await DataModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });
    if (!datasample) {
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}`, 400));
    }
    res.status(200).json({ success: true, data: datasample });
})

exports.deletData = asyncHandler(async (req, res, next) => {
    const datasample = await DataModel.findById(req.params.id);
    if (!datasample) {
        return next(new ErrorResponse(`Bootcamp not found with the id of ${req.params.id}`, 400));
    }
    datasample.remove();
    res.status(200).json({ success: true, data: "Successfully delete!" });
});