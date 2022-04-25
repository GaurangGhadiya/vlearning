 const camelCase = (str) => {
  return str.replace(/\W+(.)/g, function (_, chr) {
    return chr.toUpperCase();
  });
};

export default camelCase;