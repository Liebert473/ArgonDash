import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboradPage";
import TablesPage from "./pages/TablesPage";
import BillingPage from "./pages/Billing";
import ProfilePage from "./pages/ProfilePage";
import { supabase } from "./lib/supabaseClient";

function App() {
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, currentSession) => {
        setSession(currentSession);
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !session ? <Navigate to="/signin" /> : <Navigate to="/dashboard" />
          }
        ></Route>

        <Route
          path="/signin"
          element={!session ? <SigninPage /> : <Navigate to="/dashboard" />}
        ></Route>

        <Route
          path="/signup"
          element={!session ? <SignupPage /> : <Navigate to="/dashboard" />}
        ></Route>

        <Route
          path="/dashboard"
          element={!session ? <SigninPage /> : <DashboardPage />}
        ></Route>

        <Route
          path="/tables"
          element={!session ? <SigninPage /> : <TablesPage />}
        ></Route>

        <Route
          path="/billing"
          element={!session ? <SigninPage /> : <BillingPage />}
        ></Route>

        <Route
          path="/profile"
          element={!session ? <SigninPage /> : <ProfilePage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
