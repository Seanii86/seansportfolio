import { signInGoogle } from "../../firebase";

export default function Login () {
    return (
        <div className="dashboard">
            <button onClick={signInGoogle}>
                Sign in with google
            </button>
        </div>
    )
}