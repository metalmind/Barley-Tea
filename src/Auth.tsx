// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

// function App() {
//   const [instruments, setInstruments] = useState([]);

//   useEffect(() => {
//     getInstruments();
//   }, []);

//   async function getInstruments() {
//     const { data } = await supabase.from("instruments").select();
//     setInstruments(data);
//   }

//   return (
//     <ul>
//       {instruments.map((instrument) => (
//         <li key={instrument.id}>{instrument.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const supa = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

const Authentication = () => {
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
      redirectTo="http://localhost:3000/authenticated"
      // comes with preconfigured themes, can add custom themes
      appearance={{ theme: ThemeSupa }}
      // controls how to display the social provider icons
      socialLayout="horizontal"
    />
  );
};

export default Authentication;