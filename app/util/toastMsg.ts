import { toast, type ToastOptions } from "react-toastify";

const toastMsg = (msg: string, type: ToastOptions["type"] = "info") =>
  toast(msg, { type });
export default toastMsg;
