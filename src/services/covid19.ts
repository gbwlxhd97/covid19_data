import { axiosInstance } from '@src/utils/fetch'

const getGenAge = async () => {
  const { data } = await axiosInstance.get('/api/covid19/genAgeCase');
  return data;
}

const getInfState = async () => {
  const {data} = await axiosInstance.get('/api/covid19/infState');
  return data
} 
const covid19ApiList = {
  getGenAge,
  getInfState
};

export default covid19ApiList;