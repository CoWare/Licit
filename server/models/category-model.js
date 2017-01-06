import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const DocumentCategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  },
  templates: [],
  createdAt: Date
});

const DocumentCategory = mongoose.model('DocumentCategory', DocumentCategorySchema);
export default DocumentCategory;
