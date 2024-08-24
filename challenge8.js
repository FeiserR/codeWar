function rot13(message) {
  const alphabet =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const letters = message.match(/./g);

  const result = letters.map((letter) => {
    if (/^[A-Za-z]$/.test(letter)) {
      return (letter = alphabet[alphabet.indexOf(letter) + 13]);
    }
    return letter;
  });

  return result.join("");
}

console.log(rot13("dkaAsskpdadskp"));
