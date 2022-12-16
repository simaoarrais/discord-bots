export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export function getRandomEmoji() {
  const emojiList = ['💿','👋','🌊'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}
