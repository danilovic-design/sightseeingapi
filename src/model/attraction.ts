import { Schema, Document, model, Model } from "mongoose";

// Document interface
interface IAttraction extends Document {
  city: string;
  country: string;
  shortName: string;
  description: string;
  type: string;
}

// Schema
const AttractionSchema = new Schema<IAttraction>({
  city: { type: String, required: true },
  country: { type: String, required: true },
  shortName: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
});

export const Attraction: Model<IAttraction> = model(
  "Attraction",
  AttractionSchema
);

//import { model, Schema, Model, Document } from 'mongoose';
/*
interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const User: Model<IUser> = model('User', UserSchema);

*/
