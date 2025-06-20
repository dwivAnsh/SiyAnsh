import {axiosInstance} from "./axios.js";

export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

// Ye backend me ek protected route hai jo check karta hai ki token valid hai ya nahi
export const getAuthUser = async () => {
  // axiosInstance is from axios.js
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("error in getAuthUser", error);
    return null;
  }
}

export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};


export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

// When we need to read in server we use queryfn and get method but using mutation func means put,post,delete
// query = read-only
// mutation = write-only
