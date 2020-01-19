export async function getPersonsData() {
  const url = '../data/data.json';
  const response = await fetch(url);

  if (response.ok) { 
    // если HTTP-статус в диапазоне 200-299 получаем тело ответа 
    const personsData = await response.json();
    
    return personsData;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}