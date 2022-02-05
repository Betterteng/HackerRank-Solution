function caesarCipher(s, k) {
  // Write your code here
  const originalCaseArray = Array.from(s);

  // Find index for UpperCase letters
  let upperCaseIndexArray = [];
  originalCaseArray.map((element, index) => {
    const isUppercase = element !== element.toLowerCase();
    if (isUppercase) {
      upperCaseIndexArray.push(index);
    }
  });

  // Convert to lowerCase version
  let lowerCaseArray = Array.from(s.toLowerCase());
  // Set a template
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Find all index for lowerCaseArray
  const currentIndexArray = lowerCaseArray.map((element) => {
    return element === '-' ? '-' : alphabet.findIndex((target) => target === element);
  });

  // Transfer the currentIndexArray to an encrypted index array
  const encryptedIndexArray = currentIndexArray.map((element) => {
    return element === '-' ? '-' : (element + k) % 26;
  });

  // Transfer encryptedIndexArray to lowerCase letters
  const encryptedLettersArray = encryptedIndexArray.map((element) => {
    return element === '-' ? '-' : alphabet[element];
  });

  // If original input has upperCase letters, convert lowerCast to UpperCase
  if (upperCaseIndexArray.length > 0) {
    upperCaseIndexArray.map((element) => {
      encryptedLettersArray[element] = encryptedLettersArray[element].toUpperCase();
    })
  }

  return encryptedLettersArray.join('');
}


console.log(caesarCipher('middle-Outz', 2)); // Expected Output: okffng-Qwvb