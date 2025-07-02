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
import RlsPolicyTester from "./pages/Test";

function App() {
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  interface ProfileData {
    avatar_url: string;
    first_name: string;
    last_name: string;
  }

  const [profileData, setProfileData] = useState<ProfileData>({
    avatar_url: "https://github.com/shadcn.png",
    first_name: "User",
    last_name: "",
  });

  const getAvatar = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        console.warn("No user logged in to fetch profile.");
        return;
      }

      const {
        data,
        error: profileError,
        status,
      } = await supabase
        .from("profiles")
        .select(`avatar_url, first_name, last_name`)
        .eq("id", user.id)
        .single();

      if (profileError && status != 406) {
        throw profileError;
      }

      setProfileData((prev) => ({ ...prev, first_name: data?.first_name }));
      setProfileData((prev) => ({ ...prev, last_name: data?.last_name }));
      setProfileData((prev) => ({ ...prev, avatar_url: data?.avatar_url }));
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    getAvatar();

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
          element={
            !session ? (
              <SigninPage />
            ) : (
              <DashboardPage profileData={profileData} />
            )
          }
        ></Route>

        <Route
          path="/tables"
          element={
            !session ? <SigninPage /> : <TablesPage profileData={profileData} />
          }
        ></Route>

        <Route
          path="/billing"
          element={
            !session ? (
              <SigninPage />
            ) : (
              <BillingPage profileData={profileData} />
            )
          }
        ></Route>

        <Route
          path="/profile"
          element={
            !session ? (
              <SigninPage />
            ) : (
              <ProfilePage
                profileData={profileData}
                onUpdateProfileData={getAvatar}
              />
            )
          }
        ></Route>

        <Route path="/test" element={<RlsPolicyTester />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
