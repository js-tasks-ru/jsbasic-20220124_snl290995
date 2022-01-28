function checkSpam(str) {
    let name = str.toLowerCase();
    if (name == '1xbet now' || name == 'free xxxxx') {
        return true;
    } else {
        return false;
    };
};

alert(checkSpam('1XBeT now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit')); 

