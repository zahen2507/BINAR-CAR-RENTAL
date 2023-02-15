import axiosInstance from "../configs/axiosInstance";

const APICar = {
  getCarList: async ({
    name,
    category,
    isRented,
    minPrice,
    maxPrice,
    page,
    pageSize,
  }) => {
    const params = {};
    if (name) params["name"] = name;
    if (category) params["category"] = category;
    if (isRented) params["isRented"] = isRented;
    if (minPrice) params["minPrice"] = minPrice;
    if (maxPrice) params["maxPrice"] = maxPrice;
    if (page) params["page"] = page;
    if (pageSize) params["pageSize"] = pageSize;
    const res = await axiosInstance.get("/v2/car", { params });
    return res;
  },

  getCarDetails: async (carId) => {
    const res = await axiosInstance.get(`/car/${carId}`);
    return res;
  },
};

export default APICar;