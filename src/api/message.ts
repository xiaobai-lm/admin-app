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
// 首页api
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
// 新闻资讯api
export function getNews() {
  return axios.get<MessageListType>('/api/news');
}
export function postNews(data: any) {
  return axios.post<MessageListType>('/api/news', data);
}
export function deleteNews(data: any) {
  return axios.delete<MessageListType>(`/api/news?id=${data}`);
}
// 留言列表api
export function getMessage() {
  return axios.get<MessageListType>('/api/message');
}
export function deleteMessage(data: any) {
  return axios.delete<MessageListType>(`/api/message?id=${data}`);
}
//      关于我们api
// 企业文化api
export function getCulture() {
  return axios.get<MessageListType>('/api/culture');
}
export function postCulture(data: any) {
  return axios.post<MessageListType>('/api/culture', data);
}
export function deleteCulture(data: any) {
  return axios.delete<MessageListType>(`/api/culture?id=${data}`);
}
//  企业证书api
export function getCertificate() {
  return axios.get<MessageListType>('/api/certificate');
}
export function postCertificate(data: any) {
  return axios.post<MessageListType>('/api/certificate', data);
}
export function deleteCertificate(data: any) {
  return axios.delete<MessageListType>(`/api/certificate?id=${data}`);
}
// 业务分类
export function getBusiness() {
  return axios.get<MessageListType>('/api/business');
}
export function postBusiness(data: any) {
  return axios.post<MessageListType>('/api/business', data);
}
export function deleteBusiness(data: any) {
  return axios.delete<MessageListType>(`/api/business?id=${data}`);
}
// 我们的客户api
export function getCustomer() {
  return axios.get<MessageListType>('/api/customer');
}
export function postCustomer(data: any) {
  return axios.post<MessageListType>('/api/customer', data);
}
export function deleteCustomer(data: any) {
  return axios.delete<MessageListType>(`/api/customer?id=${data}`);
}
//      解决方案
// 方案列表
export function getTag() {
  return axios.get<MessageListType>('/api/prescription/title');
}
export function postTag(data: any) {
  return axios.post<MessageListType>('/api/prescription/title', data);
}
export function deleteTag(data: any) {
  return axios.delete<MessageListType>(`/api/prescription/title?id=${data}`);
}
// 内容列表
export function getContent() {
  return axios.get<MessageListType>('/api/content');
}
export function postContent(data: any) {
  return axios.post<MessageListType>('/api/content', data);
}
export function deleteContent(data: any) {
  return axios.delete<MessageListType>(`/api/content?id=${data}`);
}
// 内容细节api
export function getChanges() {
  return axios.get<MessageListType>('/api/changes');
}
export function postChanges(data: any) {
  return axios.post<MessageListType>('/api/changes', data);
}
export function deleteChanges(data: any) {
  return axios.delete<MessageListType>(`/api/changes?id=${data}`);
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
