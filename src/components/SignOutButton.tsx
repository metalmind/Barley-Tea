// REMOVE SIGN OUT PAGE LATER

import { createClient } from "@supabase/supabase-js";

const supa = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);

function SignOutButton() {
  const signOut = async () => {
    await supa.auth.signOut();
    window.location.href = "/"; // redirect to login
  };

  return (
    <button
        onClick={signOut}
        style={{
          position: "absolute",
          top: "2.5%",
          right: "2.5%",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Sign Out
      </button>
  );
}

export default SignOutButton;