import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('http://localhost:4000/api/db/services');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}


