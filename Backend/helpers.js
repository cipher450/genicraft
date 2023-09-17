const fs = require('fs');

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
  },
  randomNameGenerator:(length=10,extension='')=>{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let filename = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        filename += characters.charAt(randomIndex);
    }

    return filename + extension;
  },
  saveBlobToFile : async(blob,path)=>{
    return new Promise((resolve, reject) => {
      const fileStream = fs.createWriteStream(path);

      blob.arrayBuffer().then(buffer => {
          fileStream.write(Buffer.from(buffer));
          fileStream.end();

          fileStream.on('finish', () => {
              resolve();
          });

          fileStream.on('error', error => {
              reject(error);
          });
      });
  });
}
  
};
