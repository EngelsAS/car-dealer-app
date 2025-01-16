import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Altere para sua URL base
  headers: {
    "Content-Type": "application/json",
  },
});
