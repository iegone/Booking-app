import { t } from "i18next";
import { toast as toaster } from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";

const toast = (message, type = "success", position = "top-center") => {
  toaster.dismiss();
  const toastFunction = {
    success: toaster.success,
    error: toaster.error,
    warning: (msg, opts) =>
      toaster(msg, {
        ...opts,
        icon: <IoIosWarning size={20} fill="#f1cc29" stroke="#000" />,
      }),
    info: toaster.info,
  }[type];

  toastFunction(t(message), {
    position: position,
  });
};

export default toast;