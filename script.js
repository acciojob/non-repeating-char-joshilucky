function firstNonRepeatedChar(str) {
  // Create a frequency map for all characters
  const freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  // If no non-repeated character found
  return null;
}
