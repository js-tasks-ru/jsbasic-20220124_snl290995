'use strict'

function isEmpty(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
    }
}
return true;
}

let schedule = {};

alert( isEmpty(schedule) ); 

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); 
