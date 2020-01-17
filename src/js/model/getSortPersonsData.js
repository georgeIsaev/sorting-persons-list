import {getPersonsData} from './modules/getPersonsData';
import {sortByName} from './modules/sortByName';

export async function getSortPersonsData(sortBy, orderBy) {
  const persons = await getPersonsData('../data/data.json'); // Promise полученный через fetch, attr: personsDataURL
  
  if (sortBy === 'name') {
    persons.sort(sortByName);
  } else {
    persons.sort((a, b) => a[sortBy] - b[sortBy]);
  }

  if (orderBy == 'desc') {
    persons.reverse();
  }

  return persons
}