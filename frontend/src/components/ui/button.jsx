import React from "react";
const Button = ({
  label,
  icon,
  type = "button",
  variant = "primary",
  loading = false,
  disabled,
  className = "",
  ...rest
}) => {
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-black text-white font-medium px-5 py-2 rounded-md cursor-pointer";
      break;
    case "secondary":
      variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case "danger":
      variantClasses = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "outline":
      variantClasses =
        "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50";
      break;
    default:
      variantClasses =
        "border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition";
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${variantClasses} ${className}`}
      {...rest}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin cursor-wait"></span>
      )}
      {!loading && icon}
      {label}
    </button>
  );
};

export default Button;
