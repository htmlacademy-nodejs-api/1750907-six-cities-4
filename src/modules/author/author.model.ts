import mongoose from 'mongoose';
import { Author } from '../../types/author.type';

export interface AuthorDocument extends Author, mongoose.Document {
  createdAt: Date,
  updatedAt: Date,
}

const authorSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  },
  avatarPath: {
    type: String,
    required: true,
    minlength: [5, 'Min length for avatar path is 5'],
  },
  firstname: {
    type: String,
    required: true,
    minlength: [2, 'Min length for firstname is 2']
  },
  lastname: String,
}, {
  timestamps: true,
})

export const AuthorModel = mongoose.model<AuthorDocument>('Author', authorSchema);