import { useRef, useState } from "react";
import { signup, useAuth, signin } from "./firebase";


const SignUp = () => {

        const [loading, setLoading] = useState(false);
        const emailRef = useRef();
        const passwordRef = useRef();
        const currentUser = useAuth();

    async function handleSignup(){
        try{
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch{
            alert("Hello")
            setLoading(false);
        }

    }
    async function handleSignin(){
        try{
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
        }
        catch{
            alert("Hello")
            setLoading(false);
        }

    }
    
    return ( 
        <div>
                <div>
                    Currently logged in as {currentUser?.email }
                </div>
                <input ref={emailRef} type="text" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button disabled={loading || currentUser != null } onClick={handleSignup}>sign up</button>
                
                <p>Already have an account? <button onClick={handleSignin}>Sign in</button></p>
        </div>
     );
}
 
export default SignUp;