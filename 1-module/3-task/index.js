'use strict'

function ucFirst(str) {
  if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

ucFirst('вася');
ucFirst('');