import axios from 'axios';

export interface MessageRecord {
  id: number;
  type: string;
  title: string;
  subTitle: string;
  avatar?: string;
  content: string;
  time: string;
  status: 0 | 1;
  messageType?: number;
}
export type MessageListType = MessageRecord[];

export function queryMessageList() {
  return axios.post<MessageListType>('/api/message/list');
}

interface MessageStatus {
  ids: number[];
}

export function setMessageStatus(data: MessageStatus) {
  return axios.post<MessageListType>('/api/message/read', data);
}
export function getText() {
  return axios.get<MessageListType>('/api/news');
}
//  官网简介api
export function getBrief() {
  return axios.get<MessageListType>('/api/brief');
}
export function postBrief(data: any) {
  return axios.post<MessageListType>('/api/brief', data);
}
// 核心优势api
export function getAdvantages() {
  return axios.get<MessageListType>('/api/advantage');
}
export function postAdvantages(data: any) {
  return axios.post<MessageListType>('/api/advantage', data);
}
//  文件上传api
export function postSystem(data: any) {
  return axios.post<MessageListType>('/api/system/upload', data);
}
export interface ChatRecord {
  id: number;
  username: string;
  content: string;
  time: string;
  isCollect: boolean;
}

export function queryChatList() {
  return axios.post<ChatRecord[]>('/api/chat/list');
}
