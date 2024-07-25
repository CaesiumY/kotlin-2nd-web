import axios from "axios";

export const getPresignedUrl = async (fileName) => {
  // NOTE - fake API 엔드포인트 입니다.
  const response = await axios.get(
    `http://localhost:3000/upload?fileName=${fileName}`
  );

  return response.data.presignedUrl;
};
