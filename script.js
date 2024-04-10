function clearInput(input) {
  input.value = '';
}

function addGamer() {
  const inputs = document.querySelectorAll('.input_main');
  const values = [];
  let isError = false;

  inputs.forEach(function (input) {
    if (input.value.trim() === '') {
      isError = true;
      input.classList.add('input_error');
    } else {
      input.classList.remove('input_error');
    }
    values.push(input.value);
  });

  if (isError) {
    return;
  }

  const newGamer = document.createElement('div');
  newGamer.classList.add('gamer');

  newGamer.innerHTML = `
    <div class="gamer__wrap">
      <p class="gamer__name">${values[0]} ${values[1]}</p>
      <p class="gamer__date_add">${getDate()}</p>
    </div>
    <p class="gamer_team">${values[2]}</p>
    <p class="gamer_score-total">${values[3]}</p>
    <div class="gamer__value_block">
      <p class="gamer__del"><img src="trash.svg" alt="" width="16" height="16" onclick="deleteBlock(this)"></p>
      <p class="gamer__score-plus" onclick="incrementScore(this)">+1</p>
      <p class="gamer__score-minus" onclick="decrementScore(this)">-1</p>
    </div>
  `;

  const gamersContainer = document.querySelector('.gamers');
  gamersContainer.appendChild(newGamer);
}

function getDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}.${month}.${year} г. ${hours}:${minutes}`;
}

function deleteBlock(element) {
  const gamerBlock = element.closest('.gamer');
  gamerBlock.remove();
}


function incrementScore(element) {
  const gamerBlock = element.closest('.gamer');
  const scoreElement = gamerBlock.querySelector('.gamer_score-total');
  let score = parseInt(scoreElement.textContent);
  score++;
  scoreElement.textContent = score;
}

function decrementScore(element) {
  const gamerBlock = element.closest('.gamer');
  const scoreElement = gamerBlock.querySelector('.gamer_score-total');
  let score = parseInt(scoreElement.textContent);
  score--;
  scoreElement.textContent = score;
}
