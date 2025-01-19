import { checkResponse } from "./api";

export const baseUrl = "http://localhost:3001";

export function getToken() {
  return localStorage.getItem("jwt");
}

export function login({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

export function signUp({ email, imageUrl, name, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, avatar: imageUrl, name, password }),
  }).then(checkResponse);
}

export function getCurrentUser() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}
