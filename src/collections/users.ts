import { Document, model, ObjectId, Schema } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  idNum: number;
  encryptedPassword: string;
  isAdmin: number;
  city: string;
  street: string;
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  idNum: { type: Number, required: true, unique: true },
  encryptedPassword: { type: String, required: true },
  isAdmin: { type: Number, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
});

export const User = model<IUser>("User", UserSchema);
