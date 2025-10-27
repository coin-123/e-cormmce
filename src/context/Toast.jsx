// src/components/Toast.js
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * showToast - trigger toast message
 * @param {string} message - Text to show
 * @param {string} type - success | error | info | warning
 * @param {object} options - Custom Toastify settings
 */
export const showToast = (message, type = "info", options = {}) => {
  const baseOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    ...options, // override defaults if provided
  };

  switch (type) {
    case "success":
      toast.success(message, baseOptions);
      break;
    case "error":
      toast.error(message, baseOptions);
      break;
    case "warning":
      toast.warning(message, baseOptions);
      break;
    case "info":
    default:
      toast.info(message, baseOptions);
      break;
  }
};

// You only need one ToastContainer in your app root
export const ToastProvider = () => <ToastContainer />;
