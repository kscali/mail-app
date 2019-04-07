// import { unlink } from "fs";
let MessageStore = require('./message_store')

const Inbox = {

  renderMessage(message) {
    let li = document.createElement('li');
    li.classList.add("message");
    li.innerHTML = `<span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>`;
    return li; 
  },

  render() {
    let container = document.createElement("ul");
    let messages = MessageStore.getInboxMessages();
    messages.forEach(message => { 
      let node = this.renderMessage(message);
      container.appendChild(node);
    })
     container.classList.add("messages");
    
    return container; 
   }

 
}

module.exports = Inbox; 
