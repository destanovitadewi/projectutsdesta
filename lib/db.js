// lib/db.js

let messages = [];

export function getMessages() {
  return messages;
}

export function addMessage(message) {
  messages.push(message);
}
