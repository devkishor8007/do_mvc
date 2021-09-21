const mongoose = require('mongoose');

const DataModel = mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: [true, 'Please add a course title'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not more than 500 Characters']
    },
    havejob: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

DataModel.virtual('id').get(function () {
    return this._id.toHexString();
});

DataModel.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Datamodels', DataModel);