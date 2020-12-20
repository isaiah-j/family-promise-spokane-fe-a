import axios from 'axios';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('okta-token-storage'))?.idToken
    ?.value;

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: 'https://family-pomise-spokane.herokuapp.com',
  });
};
