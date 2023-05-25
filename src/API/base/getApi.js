import axios from 'axios';
import { TodoBackendAccessToken } from '../../configuration/constants';


const getApi = async (path) => {
  try {
    const data = await axios({  
      method: 'GET', 
      headers: { 'AccessToken': TodoBackendAccessToken },
      // url: url + path,
    });
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn(`Response from API does not indicate succsess. Status code: ${error.response.status}. Message: ${error.response.data}`);
    } else {
      console.error(error);
    }
    return null;
  }
};

export default getApi;
