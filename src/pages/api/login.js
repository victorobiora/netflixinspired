import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const createNewUser = await signInWithEmailAndPassword(
        auth,
        req.body.email,
        req.body.email
      );
        res.status(200).json({ userCredentials: createNewUser, body: req.body });
    } catch (error) {
      throw new Error ({ error: error })
    }
  }
}
