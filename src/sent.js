
let MessageStore = require('./message_store')

const Sent = {

  renderMessage(message) {
    let li = document.createElement('li');
    li.classList.add("message");
    li.innerHTML = `<span class="to">${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>`;
    return li;
  },

  render() {
    let container = document.createElement("ul");
    let messages = MessageStore.getSentMessages();
    messages.forEach(message => {
      let node = this.renderMessage(message);
      container.appendChild(node);
    })
    container.classList.add("messages");

    return container;
  }


}

module.exports = Sent; 
