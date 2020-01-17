export function createPersonsContainer() {
  let personsContainer = null;

  if (document.querySelector('.personsContainer')) {
    personsContainer = document.querySelector('.personsContainer');
  } else {
    personsContainer =  document.createElement('div');
    personsContainer.classList.add('personsContainer');
  }

  personsContainer.innerHTML = '';

  return personsContainer
}