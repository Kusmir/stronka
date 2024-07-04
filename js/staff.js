const cardsData = [
    {
      imgSrc: '',//'img/ludzik.png',
      title: 'Ludzik',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonUrl: '#',
      buttonText: 'Go somewhere'
    },
    {
      imgSrc: '',//'img/zaglowka.png',
      title: 'Żaglówka',
      text: 'Another example card with different content.',
      buttonUrl: '#',
      buttonText: 'Explore'
    },
    {
      imgSrc: '',//'img/helikopter.png',
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
    card.className = 'col-lg-6';
    card.innerHTML = `
      <div class="card-img-left h-100">
        <img src="${cardData.imgSrc}" alt="Image" class="img-fluid">
        <div class="card-body h-100 flex-grow-1">
          <h5 class="card-title">${cardData.title}</h5>
          <p class="card-text">${cardData.text}</p>
          <a href="${cardData.buttonUrl}" class="btn btn-primary">${cardData.buttonText}</a>
        </div>
      </div>
    `;
    return card;
  }

  function renderStaffCards() {
    const cardContainer = document.getElementById('staffContainer');

    function createNewRow() {
      let row = document.createElement('div');
      row.className = 'row d-flex';
      row.innerHTML = '';
      cardContainer.appendChild(row);
      return row;
    }

    var row = createNewRow();
    let spaceLeft = 2;
    for (const cardData of cardsData) {
      if (spaceLeft == 0) {
        row = createNewRow();
        spaceLeft = 2;
      }

      let cardElement = createStaffCard(cardData);
      row.appendChild(cardElement);
      spaceLeft -= 1;
    }
  }

  renderStaffCards();