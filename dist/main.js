/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\");\n\nconst Compose = {\n  render() {\n    let div = document.createElement(\"div\");\n    div.classList.add(\"new-message\");\n    div.innerHTML = this.renderForm(); \n\n    div.addEventListener(\"change\", (e) => {\n      let target = e.currentTarget; \n      MessageStore.updateDraftField(target.name, target.value);\n    })\n    div.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      MessageStore.sendDraft();\n      location.hash = \"inbox\";\n    })\n    return div; \n  },\n  renderForm() {\n    let draft = MessageStore.getMessageDraft(); \n    return `<p class=\"new-message-header\">New Message</p>\n    <form class=\"compose-form\">\n      <label>From: </label>\n      <input placholder='From' name='from' type='text' value=${draft.from}>  \n\n      <label>To: </label>\n      <input placholder='Recipient' name='to' type='text' value=${draft.to}>\n      <label>Subject</label>\n      <input placholder='Subject' name='subject' type='text' value=${draft.subject}>\n\n      <label>Message</label>\n      <textarea name='body' rows='20'>${draft.body}</textarea>\n      <button type='submit' class='btn btn-primary submit-message'>Send</button>\n    </form>\n    `\n  }\n\n}\n\nmodule.exports = Compose;\n\n//# sourceURL=webpack:///./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import { unlink } from \"fs\";\nlet MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\")\n\nconst Inbox = {\n\n  renderMessage(message) {\n    let li = document.createElement('li');\n    li.classList.add(\"message\");\n    li.innerHTML = `<span class=\"from\">${message.from}</span>\n    <span class=\"subject\">${message.subject}</span>\n    <span class=\"body\">${message.body}</span>`;\n    return li; \n  },\n\n  render() {\n    let container = document.createElement(\"ul\");\n    let messages = MessageStore.getInboxMessages();\n    messages.forEach(message => { \n      let node = this.renderMessage(message);\n      container.appendChild(node);\n    })\n     container.classList.add(\"messages\");\n    \n    return container; \n   }\n\n \n}\n\nmodule.exports = Inbox; \n\n\n//# sourceURL=webpack:///./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent */ \"./src/sent.js\");\nconst Compose = __webpack_require__(/*! ./compose */ \"./src/compose.js\");\n\nlet routes = {\n  inbox: Inbox,\n  sent: Sent,\n  compose: Compose\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  \n  let node = document.querySelector('.content');\n  let router = new Router(node, routes);\n  router.start(); \n  window.location.hash = '#inbox';\n  \n  let lis = document.getElementsByTagName('li');\n  lis = Array.from(lis);\n  \n  lis.forEach(li => {\n    li.addEventListener(\"click\", () => {\n      let location = li.innerText.toLowerCase();\n       window.location.hash = location; \n    })\n  })\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let messages = JSON.parse(localStorage.getItem(\"messages\"));\n\nif (!messages) {\n  messages = {\n    sent: [\n      { to: \"friend@mail.com\", subject: \"Check this out\", body: \"It's so cool\" },\n      { to: \"person@mail.com\", subject: \"zzz\", body: \"so booring\" }\n    ],\n    inbox: [\n      {\n        from: \"grandma@mail.com\", subject: \"Fwd: Fwd: Fwd: Check this out\",\n        body: \"Stay at home mom discovers cure for leg cramps. Doctors hate her\"\n      },\n      { from: \"person@mail.com\", subject: \"Questionnaire\", body: \"Take this free quiz win $1000 dollars\" }\n    ]\n  };\n}\n\nconst MessageStore = { \n  getInboxMessages: () => messages.inbox.slice(),\n  getSentMessages: () => messages.sent.slice(),\n  getMessageDraft: () => messageDraft,\n  updateDraftField: (field, value) => messageDraft[field] = value,\n  sendDraft: () => {\n    messages.sent.push(messageDraft);\n    messageDraft = new Message();\n    localStorage.setItem(\"messages\", JSON.stringify(messages))\n  }\n };\n\n class Message {\n  constructor(from, to, subject, body) {\n    this.from = from;\n    this.to = to; \n    this.subject = subject;\n    this.body = body;\n  }\n\n }\nlet messageDraft = new Message();\n module.exports = MessageStore; \n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Router {\n  constructor(node, routes) {\n    this.node = node; \n    this.routes = routes \n  }\n\n  start() {\n    this.render(); \n    window.addEventListener(\"hashchange\", () => {\n      this.render(); \n    })\n  }\n\n  activeRoute() {\n    let fragment = window.location.hash.substr(1);\n    let component = this.routes[fragment]; \n    return component; \n  }\n\n  render() {\n    this.node.innerHTML = \"\";\n    let component = this.activeRoute(); \n    if (component) {\n      this.node.appendChild(component.render());\n    }\n    \n  }\n}\n\nmodule.exports = Router; \n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nlet MessageStore = __webpack_require__(/*! ./message_store */ \"./src/message_store.js\")\n\nconst Sent = {\n\n  renderMessage(message) {\n    let li = document.createElement('li');\n    li.classList.add(\"message\");\n    li.innerHTML = `<span class=\"to\">${message.to}</span>\n    <span class=\"subject\">${message.subject}</span>\n    <span class=\"body\">${message.body}</span>`;\n    return li;\n  },\n\n  render() {\n    let container = document.createElement(\"ul\");\n    let messages = MessageStore.getSentMessages();\n    messages.forEach(message => {\n      let node = this.renderMessage(message);\n      container.appendChild(node);\n    })\n    container.classList.add(\"messages\");\n\n    return container;\n  }\n\n\n}\n\nmodule.exports = Sent; \n\n\n//# sourceURL=webpack:///./src/sent.js?");

/***/ })

/******/ });