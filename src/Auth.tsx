import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const supa = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

const AuthUI = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supa.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/authenticated");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <Auth
      supabaseClient={supa}
      providers={["google", "github", "apple", "discord"]}
      // controls whether to display only social providers
      // onlyThirdPartyProviders
      redirectTo="/home"
      // comes with preconfigured themes, can add custom themes
      appearance={{ theme: ThemeSupa }}
      // controls how to display the social provider icons
      socialLayout="horizontal"
    />
  );
};

export default AuthUI;
