import {createSortedPersons} from '../view/person/createSortedPersons';
import {getSortPersonsData} from '../model/getSortPersonsData';

export async function addPersonsInDOM(parenteNode, sortState) {
  const url = await sortState.newURL;

  const sortBy = url.searchParams.get(sortState.sortByChBtn.name) || 'id';
  const orderBy = url.searchParams.get(sortState.orderByChBtn.name) || 'asc';
  const view = url.searchParams.get(sortState.viewChBtn.name) || 'table';

  const sortedPersonsData = await getSortPersonsData(sortBy, orderBy);
  const createdPersons = await createSortedPersons(sortedPersonsData, view);

  parenteNode.append(createdPersons);
  console.log('vvvv')
}