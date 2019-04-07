const Router = require('./router');
const Inbox = require('./inbox');
const Sent = require('./sent');
const Compose = require('./compose');

let routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
};

document.addEventListener("DOMContentLoaded", () => {
  
  let node = document.querySelector('.content');
  let router = new Router(node, routes);
  router.start(); 
  window.location.hash = '#inbox';
  
  let lis = document.getElementsByTagName('li');
  lis = Array.from(lis);
  
  lis.forEach(li => {
    li.addEventListener("click", () => {
      let location = li.innerText.toLowerCase();
       window.location.hash = location; 
    })
  })
})
