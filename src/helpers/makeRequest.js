import axios from 'axios';

const baseApiUrl = 'https://api-qa.chessfinder.org/api';

export const MAKE_REQUEST = async (url, method, requestData) => {
  try {
    const response = await axios({
      method,
      url: `${baseApiUrl}/${url}`,
      data: requestData,
    });

    return response.data;
  } catch (error) {
    throw error.response;
  }
};
