function checkSpam(str) {
    let name = str.toLowerCase();
    if (name == '1xbet now' || name == 'free xxxxx') {
        return true;
    } else {
        return false;
    };
};

(checkSpam('1XBeT now'));
(checkSpam('free xxxxx'));
(checkSpam('innocent rabbit')); 

