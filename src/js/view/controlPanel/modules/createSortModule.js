export function createSortModule(controlPanelClass) {
  const $sortModule = document.createElement('div');
  $sortModule.classList.add(`${controlPanelClass}__sortModule`);

  $sortModule.innerHTML = `
    <h4 class="${controlPanelClass}__sortModule__title"> Sort by </h4>
    <div class="${controlPanelClass}__sortModule__properties">
      <label class="${controlPanelClass}__sortModule__properties__id">
        <input type="radio" name="sortBy" value="id" checked>
        <span>ID</span>
      </label>
      <label class="${controlPanelClass}__sortModule__properties__name">
        <input type="radio" name="sortBy" value="name">
        <span>Name</span>
      </label>
      <label class="${controlPanelClass}__sortModule__properties__age">
        <input type="radio" name="sortBy" value="age">
        <span>Age</span>
      </label>
    </div>
    <div class="${controlPanelClass}__sortModule__order">
      <label class="${controlPanelClass}__sortModule__order__asc">
        <input type="radio" name="orderBy" value="asc" checked>
        <span>Asc</span>
      </label>
      <label class="${controlPanelClass}__sortModule__order__desc">
        <input type="radio" name="orderBy" value="desc">
        <span>Desc</span>
      </label>
    </div>
  `;

  return $sortModule
}