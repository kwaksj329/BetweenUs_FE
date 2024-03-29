import instance from "../ApiInstance";

export const PostAddressSettingApi = async (data) => {
  try {
    const response = await instance.post("/address", data);
    console.log(response);
  } catch (e) {
    console.log("[FAIL] GET user data", e);
    return e;
  }
};
