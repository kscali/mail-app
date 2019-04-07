let MessageStore = require('./message_store');

const Compose = {
  render() {
    let div = document.createElement("div");
    div.classList.add("new-message");
    div.innerHTML = this.renderForm(); 

    div.addEventListener("change", (e) => {
      let target = e.currentTarget; 
      MessageStore.updateDraftField(target.name, target.value);
    })
    div.addEventListener("submit", (e) => {
      e.preventDefault();
      MessageStore.sendDraft();
      location.hash = "inbox";
    })
    return div; 
  },
  renderForm() {
    let draft = MessageStore.getMessageDraft(); 
    return `<p class="new-message-header">New Message</p>
    <form class="compose-form">
      <label>From: </label>
      <input placholder='From' name='from' type='text' value=${draft.from}>  

      <label>To: </label>
      <input placholder='Recipient' name='to' type='text' value=${draft.to}>
      <label>Subject</label>
      <input placholder='Subject' name='subject' type='text' value=${draft.subject}>

      <label>Message</label>
      <textarea name='body' rows='20'>${draft.body}</textarea>
      <button type='submit' class='btn btn-primary submit-message'>Send</button>
    </form>
    `
  }

}

module.exports = Compose;