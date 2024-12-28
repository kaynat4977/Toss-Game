function tossCoin() {
    const coin = document.querySelector('.TOSS');
    const result = document.querySelector('.RESULT');

    const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';

    coin.textContent = outcome === 'Heads' ? 'H' : 'T';
    result.textContent = `It's ${out}!`;
  }