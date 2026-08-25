import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const login = () => signInWithRedirect(auth, new GoogleAuthProvider());
  
  useEffect(() => { 
    getRedirectResult(auth).then(r => r && setUser(r.user)) 
  }, []);

  if(user) return <h1 style={{textAlign:'center', marginTop:50}}>مرحبا {user.displayName} 🎉</h1>
  
  return (
    <div style={{textAlign:'center', marginTop:100}}>
      <button onClick={login} style={{padding:15, fontSize:18}}>الدخول بجوجل</button>
    </div>
  )
}
