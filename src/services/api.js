import axios from 'axios';

const carInstance = axios.create({
  baseURL: 'https://65ccd3f8dd519126b83fa909.mockapi.io/cars',
});

export const allCars = async (page, limit) => {
  try {
    const response = await carInstance.get('/car', {
      params: {
        page,
        limit,
      },
    });
    // console.log('response.data: ====>', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error; 
  }
};

export const CarById = async () => {
  try {
    const response = await carInstance.get('/car/:id');
    console.log('response: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetchedCarById:', error);
    throw error;
  }
};
