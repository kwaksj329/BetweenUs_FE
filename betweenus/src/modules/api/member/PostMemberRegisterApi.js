import axios from "axios";

export const PostMemberRegister = async (data) => {
  try {
    const response = await axios.post("/api/member", data);
    return response;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};