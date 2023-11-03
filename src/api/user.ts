import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>(
    'https://106.14.32.178:8080/api/user/login',
    data
  );
}

export function logout() {
  return axios.post<LoginRes>('http://localhost:4173/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('http://localhost:4173/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>(
    'http://localhost:4173/api/user/menu'
  );
}
