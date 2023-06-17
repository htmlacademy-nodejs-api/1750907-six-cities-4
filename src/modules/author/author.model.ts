import mongoose from 'mongoose';
import { Author } from '../../types/author.type';

export interface AuthorDocument extends Author, mongoose.Document {}

const authorSchema = new mongoose.Schema({
  email: String,
  avatarPath: String,
  firstname: String,
  lastname: String,
})

export const AuthorModel = mongoose.model<AuthorDocument>('Author', authorSchema);