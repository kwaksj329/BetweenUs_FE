import instance from "../ApiInstance";

export const PostRecruitmentCloseApi = async (index) => {
  try {
    const { data } = await instance.post(
      `/groupbuying/recruitmentClose/${index}`
    );
    return data;
  } catch (e) {
    console.log("[FAIL] GET order progress data", e);
    return e;
  }
};
