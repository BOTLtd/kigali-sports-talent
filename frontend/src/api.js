import axios from "axios";

export const API = import.meta.env.VITE_API_URL;

export const getPlayers = () => axios.get(`${API}/players`);
export const likePlayer = (id) => axios.post(`${API}/like/${id}`);
