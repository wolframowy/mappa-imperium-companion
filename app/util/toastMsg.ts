import { toast } from "react-toastify";

const toastMsg = (msg: string, type: "info" | "success" | "error" = "info") =>
  toast(msg, { type });
export default toastMsg;
