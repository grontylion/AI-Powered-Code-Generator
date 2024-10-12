import zh from './messages/zh.json';

type Messages = typeof zh;

declare global {
  type IntlMessages = Messages
}
