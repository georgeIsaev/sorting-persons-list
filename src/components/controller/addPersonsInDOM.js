import PersonContainer from "../PersonsContainer/PersonsContainer";
import {getSortPersonsData} from '../getSortPersonsData/getSortPersonsData';
import React from "react";
export async function AddPersonsInDOM(sortState) {
  const url = await sortState.newURL;

  const sortBy = url.searchParams.get(sortState.sortByChBtn.name) || 'id';
  const orderBy = url.searchParams.get(sortState.orderByChBtn.name) || 'asc';
  const view = url.searchParams.get(sortState.viewChBtn.name) || 'table';

  const sortedPersonsData = await getSortPersonsData(sortBy, orderBy);
  const createdPersons = await <PersonContainer personsData={sortedPersonsData} viewClass={view} />;

  return createdPersons
}