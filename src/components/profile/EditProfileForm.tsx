import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface EditProfileFormProps {
  onUpdateProfile: () => Promise<void>;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  onUpdateProfile,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form states
  const [email, setEmail] = useState(""); // Email usually comes from auth.user, not editable here
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  // State to store the original profile data for discard functionality
  const [originalProfile, setOriginalProfile] = useState<any | null>(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("User not logged in.");
        setLoading(false);
        return;
      }

      setEmail(user.email || ""); // Set email from auth.user

      // Fetch profile data from the 'profiles' table
      const {
        data,
        error: profileError,
        status,
      } = await supabase
        .from("profiles")
        .select(
          `first_name, last_name, address, city, country, postal_code, about_me`
        )
        .eq("id", user.id) // Crucial for RLS: only query for the current user's ID
        .single(); // Expect only one row

      if (profileError && status !== 406) {
        // 406 means no data found, which is fine for new users
        throw profileError;
      }

      if (data) {
        setFirstName(data.first_name || "");
        setLastName(data.last_name || "");
        setAddress(data.address || "");
        setCity(data.city || "");
        setCountry(data.country || "");
        setPostalCode(data.postal_code || "");
        setAboutMe(data.about_me || "");
        // Store original data for discard
        setOriginalProfile(data);
      } else {
        // If no profile exists, it's a new user, form will be empty
        console.log("No existing profile found, user can create one.");
        setOriginalProfile({}); // Set empty object for discard
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while fetching profile.");
      }

      console.error("Error fetching profile:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setError("User not logged in. Cannot save profile.");
        setLoading(false);
        return;
      }

      const updates = {
        id: user.id, // Link to auth.users ID
        email: user.email, // Email is usually not editable here
        first_name: firstName,
        last_name: lastName,
        address,
        city,
        country,
        postal_code: postalCode,
        about_me: aboutMe,
        updated_at: new Date().toISOString(),
      };

      // Use upsert to either insert a new profile or update an existing one
      // This is generally safer than update if you're not sure if the profile exists
      const { error: updateError } = await supabase
        .from("profiles")
        .upsert(updates);

      if (updateError) {
        throw updateError;
      }

      setSuccessMessage("Profile updated successfully!");
      onUpdateProfile();

      // Update original profile state after successful save
      setOriginalProfile(updates);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred while saving profile.");
      }
      console.error("Error saving profile:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDiscard = () => {
    setError(null);
    setSuccessMessage(null);
    if (originalProfile) {
      setFirstName(originalProfile.first_name || "");
      setLastName(originalProfile.last_name || "");
      setAddress(originalProfile.address || "");
      setCity(originalProfile.city || "");
      setCountry(originalProfile.country || "");
      setPostalCode(originalProfile.postal_code || "");
      setAboutMe(originalProfile.about_me || "");
    } else {
      // If no original profile was fetched, clear all fields
      setFirstName("");
      setLastName("");
      setAddress("");
      setCity("");
      setCountry("");
      setPostalCode("");
      setAboutMe("");
    }
    console.log("Discarded changes.");
  };

  return (
    <div className="flex bg-gray-50 w-full">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
          <div className="flex space-x-3">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:shadow-sm hover:bg-gray-300 transition-all cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDiscard}
              disabled={loading}
            >
              Discard
            </button>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-md hover:bg-indigo-700 transition-all cursor-pointer duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}
        {successMessage && (
          <p className="text-sm text-green-600 text-center mb-4">
            {successMessage}
          </p>
        )}

        {loading && !originalProfile ? ( // Show initial loading spinner
          <p className="text-center text-gray-600 py-10">
            Loading profile data...
          </p>
        ) : (
          <>
            {/* User Information Section */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                USER INFORMATION
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100 cursor-not-allowed"
                    value={email} // Display email from state
                    disabled // Email is typically not editable here
                  />
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                CONTACT INFORMATION
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            {/* About Me Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
                ABOUT ME
              </h3>
              <div>
                <label htmlFor="aboutMe" className="sr-only">
                  About me
                </label>
                <textarea
                  id="aboutMe"
                  rows={4}
                  className="text-gray-800 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  disabled={loading}
                ></textarea>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfileForm;
