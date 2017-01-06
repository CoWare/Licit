import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DocumentTemplateSchema = new Schema({
  templateName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  categories: [],
  createdAt: Date
});

const DocumentTemplate = mongoose.model('DocumentTemplate', DocumentTemplateSchema);
export default DocumentTemplate;
