export  function truncatedText ({ text, maxLength }) {
 
    text = text.substring(0, maxLength) + '...';
    
  
    return  truncatedText
       
  };

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

export function IsEmpty(obj){
  var keys = Object.keys(obj);
  if(keys.length==0){
    return "object cannot be empty"
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if(typeof obj[key] == "boolean"){
      continue
    }else{
      if (obj[key] == "" ||obj[key] == undefined  ) 
    {
      return key + " can not be empty.";
    }
    }
  }
  return false;
}