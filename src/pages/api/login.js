import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const signInUser = await signInWithEmailAndPassword(
        auth,
        req.body.email,
        req.body.password
      );
        res.status(200).json({ userCredentials: signInUser, body: req.body });
    } catch (error) {
      throw new Error ({ error: error })
    }
  }
}
