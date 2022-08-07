
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authontication.styles.scss"

const Authontication = () => {
 
  return (
    <div className="authentication-container">
      
      <SignInForm/>

      <SignUp/>

    </div>
  );
};


export default Authontication;
