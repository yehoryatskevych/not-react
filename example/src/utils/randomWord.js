function randomWord(size) {
  const start = 'a'.charCodeAt(0);
  const end = 'z'.charCodeAt(0);

  const wordChars = [];
  for (let i = 0; i < size; ++i) {
    const charCode = start + Math.round(Math.random() * (end - start));
    wordChars.push(String.fromCharCode(charCode));
  }

  return wordChars.join('');
}

export default randomWord;
