import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { email, password } = req.body;
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);

    return res.status(200).json({ userCredentials, body: req.body });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ message: "Authentication failed", error: error.message });
  }
}
