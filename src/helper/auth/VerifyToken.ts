import { jwtDecode } from "jwt-decode";
import { TUser } from "@/redux/features/auth/authSlice";

const verifyToken = (token: string) => {
  const decodedUser: TUser = jwtDecode(token);
  return decodedUser;
};

export default verifyToken;
