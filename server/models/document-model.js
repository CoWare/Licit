import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const documentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  },
  shared: [
    {
      uid: Schema.Types.ObjectId,
      permission: {
        type: [],
        enum: ['read', 'write']
      }
    }
  ],
  createdAt: Date,
  templateId: Schema.Types.ObjectId
});

const Document = mongoose.model('Document', documentSchema);
export default Document;
