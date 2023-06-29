export function generateRandomValue(min:number, max: number, numAfterDigit = 0) {
  return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

export function getRandomItems<T>(items: T[]):T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
}

export function getRandomItem<T>(items: T[]):T {
  return items[generateRandomValue(0, items.length - 1)];
}

// перемешивает значения массива
export function shuffleArray<T>(items: T[]): T[] {
  return items.sort(() => Math.random() - 0.5);
}

// выбирает заданное число случайных элементов массива
export function getQuantedRandomItems<T>(items: T[], qnt: number): T[] {
  return shuffleArray(items).slice(0, qnt);
}

// генерирует случайные плавающие числа
export function getRandomFloat(min: number, max: number, decimals: number) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

// const mockData = ['Algebra', 'Gemotria', 'Izo', 'Trud'];

// console.log(getQuantedRandomItems(mockData, 3));
