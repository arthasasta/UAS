import axios from 'axios';

const koneksitoko = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/mahasiswa',
});

export default koneksitoko;
