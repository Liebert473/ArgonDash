import React from "react";

const CreditCard: React.FC = () => {
  return (
    <div className="relative w-full h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-md overflow-hidden">
      {/* Background image pattern */}
      <div className="absolute left-0 top-0 z-0 opacity-20 w-[300%]">
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg"
          alt="Abstract Background Pattern"
          className="w-full h-full object-cover"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // Added type for event
            const target = e.target as HTMLImageElement; // Type assertion for target
            target.onerror = null;
            target.src =
              "https://placehold.co/600x400/333333/666666?text=Error";
          }} // Fallback in case image fails to load
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
        {/* Card Number */}
        <div className="text-xl font-semibold tracking-wider mb-4 mt-8">
          4562 1122 4594 7852
        </div>

        {/* Card Holder and Expiry */}
        <div className="flex justify-between items-end">
          <div className="flex gap-6">
            <div>
              <div className="text-xs md:text-sm text-gray-400 uppercase">
                Card Holder
              </div>
              <div className="text-base md:text-lg font-semibold">
                Jack Peterson
              </div>
            </div>
            <div className="mr-4">
              <div className="text-xs md:text-sm text-gray-400 uppercase">
                Expires
              </div>
              <div className="text-base md:text-lg font-semibold">11/22</div>
            </div>
          </div>

          <div className="flex items-center">
            <svg
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#EB001B" />
              <circle cx="22" cy="10" r="10" fill="#F79E1B" />
              <path
                d="M16 0C10.4772 0 6 4.47715 6 10C6 15.5228 10.4772 20 16 20C21.5228 20 26 15.5228 26 10C26 4.47715 21.5228 0 16 0ZM16 2C11.5817 2 8 5.58172 8 10C8 14.4183 11.5817 18 16 18C20.4183 18 24 14.4183 24 10C24 5.58172 20.4183 2 16 2Z"
                fill="#FF5F00"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
