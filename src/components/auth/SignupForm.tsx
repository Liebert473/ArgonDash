import React, { useState } from "react";

interface SignupFormProps {
  onSignup: (email: string, password: string) => Promise<void>;
  error?: string;
  loading?: boolean;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onSignup,
  error,
  loading,
}) => {
  const [email, setEmail] = useState("");
  const [passwrod, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, passwrod);
  };

  return (
    <div className="relative container mx-auto -mt-50 z-20">
      <div className="mx-auto w-full px-6 md:w-8/12 lg:w-4/12">
        <div className="w-full bg-white p-6 rounded-lg shadow-md font-inter">
          <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Register with
          </h2>

          {/* Social Login Buttons (Placeholders for icons) */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Register with Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4"></stop>
                  <stop offset="1" stop-color="#007ad9"></stop>
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Register with Apple"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
            </button>
            <button
              type="button"
              className="cursor-pointer flex items-center justify-center w-12 h-12 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Register with Google"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
          </div>

          {/* OR Separator */}
          <div className="relative w-full my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-solid border-gray-300 bg-white focus:shadow-md outline-none w-full rounded-md focus:border-blue-500"
                required
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="p-3 border border-solid border-gray-300 bg-white focus:shadow-md outline-none w-full rounded-md focus:border-blue-500"
                required
                aria-label="Password"
                value={passwrod}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Terms and Conditions Checkbox */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="cursor-pointer form-checkbox h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-2"
                aria-label="I agree to the Terms and Conditions"
                required
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree the
                <a className="cursor-pointer font-semibold hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="transition-all disabled:bg-gray-400 hover:shadow-md ease cursor-pointer bg-gray-800 active:bg-gray-700 hover:-translate-y-1 text-white font-bold p-3 rounded-md focus:outline-none focus:shadow-outline w-full duration-200"
            >
              Sign up
            </button>
          </form>

          <div className="flex gap-1 text-sm text-gray-700 mt-6">
            <p>Already have an account?</p>
            <a
              href="/signin"
              className="cursor-pointer font-bold hover:underline"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
