import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/lib/supabaseClient";

const LogoutButton = () => {
  // State to control the visibility of the AlertDialog
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // To show loading state on logout

  // Function to handle the actual logout process
  const handleLogout = async () => {
    setIsLoggingOut(true); // Set loading state
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error logging out:", error.message);
        // You might want to show a toast/notification here
      } else {
        console.log("Successfully logged out.");
        // Redirect to login page or update UI state to unauthenticated
        // window.location.href = '/login'; // Example redirection
      }
    } catch (err) {
      console.error("Logout failed:", err);
      // Handle network errors or unexpected issues
    } finally {
      setIsLoggingOut(false); // Reset loading state
      setShowLogoutConfirm(false); // Close the dialog whether successful or not
    }
  };

  return (
    <>
      <button
        onClick={() => setShowLogoutConfirm(true)}
        className="cursor-pointer inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-red-500 bg-150 hover:bg-red-700 hover:shadow-xs hover:-translate-y-px"
      >
        Logout
      </button>

      {/* The AlertDialog Confirmation Pop-up */}
      <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <AlertDialogContent className="rounded-lg shadow-xl z-1000">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-gray-800">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              This action will log you out of your account. You will need to
              sign in again to access your data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setShowLogoutConfirm(false)}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 transition-colors duration-200 cursor-pointer"
              disabled={isLoggingOut} // Disable button while logging out
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LogoutButton;
