const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: { type: String, required: true },
  excerpt: String,
  body: String,
  tags: [String],
  categories: [String],
  author: String,
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
