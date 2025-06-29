interface PaymentCardProps {
  title: string;
  subtitle: string;
  amount: string;
  iconBgColor: string; // Tailwind class for background color, e.g., 'bg-indigo-500'
  icon: string;
}

// PaymentCard component
const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  subtitle,
  amount,
  iconBgColor,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-full text-center">
      {/* Icon Placeholder */}
      <div
        className={`w-16 h-16 ${iconBgColor} rounded-xl mb-4 flex items-center justify-center`}
      >
        <img src={icon} width={24} height={24} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>

      {/* Amount */}
      <p className="text-2xl font-bold text-gray-900">{amount}</p>
    </div>
  );
};

export default PaymentCard;
