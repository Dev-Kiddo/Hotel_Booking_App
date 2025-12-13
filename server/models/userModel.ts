import bcrypt from "bcryptjs";
import mongoose from "mongoose";

// 53.49

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
    },
    lastName: {
      type: String,
      required: [true, "Lastname is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
  return;
});

const userModel = mongoose.model<IUser>("user", userSchema);

export default userModel;
