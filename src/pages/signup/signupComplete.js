import SignUpAftermath from "@/components/signUp/SignUpAftermath";
import { useSelector } from "react-redux";

const signupComplete = () => {
    const isEmailAdded = useSelector(state => state.email.signUpSucessful)

  return (
    <section id="signup-page">
     <SignUpAftermath successful={isEmailAdded.success} message={isEmailAdded.message}/>
    </section>
  ); 
};

export default signupComplete;
