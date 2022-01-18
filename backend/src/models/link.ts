import { Schema, model } from 'mongoose';

const LinkSchema = new Schema({
  title: { type: String, unique: true },
  link: String,
  tags: [{ title: String, color: String }]
});

export default model('link', LinkSchema);
