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
  tags: string;
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
// 技术能力api
export function getTechnique() {
  return axios.get<MessageListType>('/api/solution');
}
export function postTechnique(data: any) {
  return axios.post<MessageListType>('/api/solution', data);
}
// 我们的服务api
export function getServere() {
  return axios.get<MessageListType>('/api/servere');
}
export function postServere(data: any) {
  return axios.post<MessageListType>('/api/servere', data);
}
export function deleteServere(data: any) {
  return axios.delete<MessageListType>(`/api/servere?id=${data}`);
}

//  项目案例api
export function getCases() {
  return axios.get<MessageListType>('/api/cases');
}
export function postCases(data: any) {
  return axios.post<MessageListType>('/api/cases', data);
}
export function deleteCases(data: any) {
  return axios.delete<MessageListType>(`/api/cases?id=${data}`);
}
// 新闻资讯
export function getNews() {
  return axios.get<MessageListType>('/api/news');
}
export function postNews(data: any) {
  return axios.post<MessageListType>('/api/news', data);
}
export function deleteNews(data: any) {
  return axios.delete<MessageListType>(`/api/news?id=${data}`);
}
//  文件上传api
// export function postSystem(data: any) {
//   return axios.post<MessageListType>('/api/system/upload', data);
// }
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
