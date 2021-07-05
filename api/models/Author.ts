import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

interface IAuthor extends Document {
  name: string;
  age: string;
}

const AuthorSchema = new Schema<IAuthor>({
  name: String,
  age: Number,
});

export default mongoose.model<IAuthor>('Author', AuthorSchema);
