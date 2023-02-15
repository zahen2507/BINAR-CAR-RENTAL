import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  login: async ({ email, password }) => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      Auth.storeUserInfoToCookies(res.data.access_token);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIAuth;
