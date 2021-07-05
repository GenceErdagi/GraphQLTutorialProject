import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

interface IBook extends Document {
  name: string;
  genre: string;
  authorId: mongoose.Types.ObjectId;
}

const BookSchema = new Schema<IBook>({
  name: String,
  genre: String,
  authorId: mongoose.Types.ObjectId,
});

export default mongoose.model<IBook>('Book', BookSchema);
