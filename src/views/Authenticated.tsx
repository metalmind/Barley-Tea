// REMOVE SIGN OUT PAGE LATER

import { createClient } from "@supabase/supabase-js";

const supa = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY!
);

function AuthenticatedPage() {
  const signOut = async () => {
    await supa.auth.signOut();
    window.location.href = "/"; // redirect to login
  };

  return (
    <div className="page">
      <h1>Welcome! You’re logged in 🎉</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default AuthenticatedPage;