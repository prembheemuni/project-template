import { toast } from "react-toastify";
const positionCenter: {} = {
  position: "top-center",
};
const showSuccessToast = (msg: string) => {
  toast.success(msg, positionCenter);
};

const showErrorToast = (msg: string) => {
  toast.error(msg, positionCenter);
};

const showInfoToast = (msg: string) => {
  toast.info(msg, positionCenter);
};

const showWarnToast = (msg: string) => {
  toast.warn(msg, positionCenter);
};

export default {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
  showWarnToast,
};
