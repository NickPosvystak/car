import axios from 'axios';

const carInstance = axios.create({
  baseURL: 'https://65ccd3f8dd519126b83fa909.mockapi.io/cars',
});

export const allCars = async (page, limit) => {
  try {
    const response = await carInstance.get('/car', {
      params: {
        page: page,
        limit: limit,
      },
    });
    console.log('response.data: ====>', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error; // rethrow the error to handle it in the calling code
  }
};
