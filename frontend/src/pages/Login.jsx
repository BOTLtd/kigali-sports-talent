import { createClient } from "@supabase/supabase-js";

const supabase = createClient("YOUR_URL", "YOUR_KEY");

export default function Login() {

  const login = async () => {
    await supabase.auth.signInWithOtp({
      email: prompt("Enter email")
    });
    alert("Check email!");
  };

  return (
    <div style={{padding:20}}>
      <button onClick={login}>Login (Player / Scout)</button>
    </div>
  );
}
