import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, unique: true },
  avatar: String
});

export default model('user', UserSchema);
