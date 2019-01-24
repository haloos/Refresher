const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);  // this = user
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message 
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
          }
          
        }
      }
    }
  }
}

const jason = new User('Jason');
const jeff = new User('Jeff');
const jessica = new User('Jessica');

const chatroom = new Chatroom();

chatroom.register(jason);
chatroom.register(jeff);
chatroom.register(jessica);

jason.send('Hello Jeff', jeff);
jessica.send('Hi Jason, how are you today?', jason);
jeff.send('Hello Everyone!!');