import axiosInstance from "../configs/axiosInstance";

const APIRegistration = {
  register: async ({ email, password, role }) => {
    try {
      const res = await axiosInstance.post("/auth/register", {
        email,
        password,
        role,
      });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIRegistration;