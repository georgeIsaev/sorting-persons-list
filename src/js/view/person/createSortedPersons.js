import {createPerson} from './modules/createPerson';
import {createPersonsContainer} from './modules/createPersonsContainer';

export async function createSortedPersons(sortedPersonsData, view) {
  const personsContainer = createPersonsContainer();

  sortedPersonsData.forEach(person => {
    personsContainer.append( createPerson(person, `__${view}View`) );
  });

  return personsContainer
}