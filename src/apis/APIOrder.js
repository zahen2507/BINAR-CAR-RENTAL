import axiosInstance from "../configs/axiosInstance";

const APIOrder = {
  //Create new car order
  createNewCarOrder: async ({ start_rent_at, finish_rent_at, car_id }) => {
    const params = { start_rent_at, finish_rent_at, car_id };
    const res = await axiosInstance.post("/order", { params });
    return res;
  },

  //Get order details by order id
  getOrderDetails: async (orderId) => {
    const res = await axiosInstance.get(`/order/${orderId}`);
    return res;
  },

  //Delete order by id
  deleteOrder: async (orderId) => {
    const res = await axiosInstance.delete(`/order/${orderId}`);
    return res;
  },

  //Upload payment reciept (slip data hasn't been included)
  uploadPaymentSlip: async (orderId, slipFormData) => {
    const res = await axiosInstance.put(
      `/order/${orderId}/slip`,
      slipFormData,
      {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      }
    );
    return res;
  },

  //Get Order List
  getOrderList: async ({ page, pageSize }) => {
    const params = { page, pageSize };
    const res = await axiosInstance.get("/v2/order", { params });
    return res;
  },
};

export default APIOrder;
