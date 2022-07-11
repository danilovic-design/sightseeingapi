const sanitize = (input: string) => {
  let beforeSanitization: string = input;
  const badStrings = ["<", ">", "{", "}", "http://"];
  for (let badString of badStrings) {
    beforeSanitization = beforeSanitization.replace(badString, "");
  }
  return beforeSanitization;
};

export { sanitize };
