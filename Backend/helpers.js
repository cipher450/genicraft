module.exports = {
  isEmpty: (obj) => {
    var keys = Object.keys(obj);
    if(keys.length==0){
      return "object cannot be empty"
    }
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (obj[key] == "" ||obj[key] == undefined ) {
        return key + " can not be empty.";
      }
    }
    return false;
  },
  isObj:(obj)=>{
    if(typeof obj == "object"){
      return true
    }else{
      return false
    }
  }
};
