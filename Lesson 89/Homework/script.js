const cardsData = [
    { id: 1, title: "Card 1", rating: 7.5, photo: "images/action-camera.jpg" },
    { id: 2, title: "Card 2", rating: 5.3, photo: "images/earbuds.jpg" },
    { id: 3, title: "Card 3", rating: 8.0, photo: "images/headphones.jpg" },
    { id: 4, title: "Card 4", rating: 6.1, photo: "images/keyboard.jpg" },
    { id: 5, title: "Card 5", rating: 4.8, photo: "images/laptop.jpg" },
    { id: 6, title: "Card 6", rating: 9.2, photo: "images/monitor.jpg" },
    { id: 7, title: "Card 7", rating: 6.5, photo: "images/mouse.jpg" },
    { id: 8, title: "Card 8", rating: 7.0, photo: "images/smartphone.jpg" },
    { id: 9, title: "Card 9", rating: 5.8, photo: "images/smartwatch.jpg" }
  ];
  
  const cardContainer = document.getElementById('cardContainer');
  const filterBtn = document.getElementById('filterBtn');
  const sortAscBtn = document.getElementById('sortAscBtn');
  const sortDescBtn = document.getElementById('sortDescBtn');
  const sortRandomBtn = document.getElementById('sortRandomBtn');
  
  function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = `
      <img src="${card.photo}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>Rating: ${card.rating}</p>
    `;
    return cardElement;
  }
  
  function renderCards(cards) {
    cardContainer.innerHTML = '';
    cards.forEach(card => {
      const cardElement = createCard(card);
      cardContainer.appendChild(cardElement);
    });
  }
  
  function calculateAverageRating(cards) {
    const total = cards.reduce((acc, card) => acc + card.rating, 0);
    return total / cards.length;
  }
  
  function filterCards() {
    const averageRating = calculateAverageRating(cardsData);
    const filteredCards = cardsData.filter(card => card.rating >= averageRating);
    renderCards(filteredCards);
  }
  
  function sortCardsAscending() {
    const sortedCards = [...cardsData].sort((a, b) => a.rating - b.rating);
    renderCards(sortedCards);
  }
  
  function sortCardsDescending() {
    const sortedCards = [...cardsData].sort((a, b) => b.rating - a.rating);
    renderCards(sortedCards);
  }
  
  function sortCardsRandomly() {
    const shuffledCards = [...cardsData].sort(() => Math.random() - 0.5);
    renderCards(shuffledCards);
  }
  
  filterBtn.addEventListener('click', filterCards);
  sortAscBtn.addEventListener('click', sortCardsAscending);
  sortDescBtn.addEventListener('click', sortCardsDescending);
  sortRandomBtn.addEventListener('click', sortCardsRandomly);
  
  // Initial rendering of cards
  renderCards(cardsData);
  