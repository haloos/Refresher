const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Jason'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceb = Singleton.getInstance();

//console.log(instanceA);

console.log(instanceA === instanceb);