import axios from "axios";

const API_URL = "/api/users/";

// Register User
const register = async (oUserData) => {
  const response = await axios.post(API_URL, oUserData);

  if (response.data) {
    localStorage.setItem("oUserData", JSON.stringify(response.data));
  }

  return response.data;
};

//Log out user
const logout = () => {
  localStorage.removeItem("oUserData");
  return true;
};

//Log in user
const login = async (oUserData) => {
  const response = await axios.post(API_URL + "login", oUserData);
  if (response.data) {
    localStorage.setItem("oUserData", JSON.stringify(response.data));
  }
  return response.data;
};

//Reset Password
const resetPassword = async (oUserData) => {
  const response = await axios.post(API_URL + "/forgot", oUserData);

  if (response.data) {
    localStorage.setItem("oUserData", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  resetPassword,
};

export default authService;
