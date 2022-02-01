function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str =str.substring(0, maxlength-1) + String.fromCharCode(8230);
    return str;
  } else {
    return str;
  };
};

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
truncate('Вот, что мне', 20);
