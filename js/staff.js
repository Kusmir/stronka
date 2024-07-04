const cardsData = [
    {
      imgSrc: 'img/ludzik.png',
      title: 'Ludzik',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonUrl: '#',
      buttonText: 'Go somewhere'
    },
    {
      imgSrc: 'img/zaglowka.png',
      title: 'Żaglówka',
      text: 'Another example card with different content.',
      buttonUrl: '#',
      buttonText: 'Explore'
    },
    {
      imgSrc: 'img/helikopter.png',
      title: 'Helikopter',
      text: 'Another example card with different content.',
      buttonUrl: '#',
      buttonText: 'Explore'
    }
  ];

  // Function to create card elements
  function createStaffCard(cardData) {
    // Create elements
    let card = document.createElement('div');
    card.className = 'col-md-6';
    card.innerHTML = `
      <div class="card h-70 fixed-height-card mt-4">
        <div class="row no-gutters">
          <div class="col-6">
            <img src="${cardData.imgSrc}" alt="Image" class="img-fluid">
          </div>
          <div class="col-6">
            <div class="card-body">
              <h5 class="card-title">${cardData.title}</h5>
              <p class="card-text">${cardData.text}</p>
              <a href="${cardData.buttonUrl}" class="btn btn-primary">${cardData.buttonText}</a>
            </div>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  function renderStaffCards() {
    const cardContainer = document.getElementById('staffContainer');
    cardsData.forEach(cardData => {
      let cardElement = createStaffCard(cardData);
      cardContainer.appendChild(cardElement);
    });
  }

  renderStaffCards();