export function createPerson({id, favourite: fav, name, age, phone, image: img, phrase, video}, viewClass) {
  const $personView = document.createElement('div');

  $personView.setAttribute('id', id);
  $personView.classList.add(viewClass, 'person');

  if (video) {
    $personView.classList.add('withVideo');
  }

  $personView.innerHTML = `
    <div class="person__info">
      <div class="person__name-avatar">
        <img class="person__name-avatar__avatar" src="/data/images/${img}.svg" alt="avatar">
        <h3 class="person__name-avatar__name">${name}</h3>
      </div>
      <div class="person__age">
        <h3 class="person__age__title">${age} years</h3>
      </div>
      <div class="person__phone">
        <h3 class="person__phone__title">${phone}</h3>
      </div>
      <div class="person__fav">
        <span class="person__fav__icon ">
          <svg width="20" height="20">
            <polygon points="10,0 4,20 20,8 0,8 16,20" fill="${fav ? 'gray' : 'black'}"/>
          </svg>
        </span>
      </div>
      <div class="person__phrase">
        <p class="person__phrase__text">${phrase}</p>
      </div>
    </div>
    ${video ? 
      `<div class="person__video">
        <video controls="controls">
          <source src="/data/videos/${video}.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
        </video>
      </div>`: ''}
  `;

  return $personView
}