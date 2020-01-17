export function createViewModule(controlPanelClass) {
  const $viewModule = document.createElement('div');
  $viewModule.classList.add(`${controlPanelClass}__viewModule`);

  $viewModule.innerHTML = `
    <h4 class="${controlPanelClass}__viewModule__title"> View </h4>
    <div class="${controlPanelClass}__viewModule__types">
      <label class="${controlPanelClass}__viewModule__types__table">
        <input type="radio" name="view" value="table" checked>
        <span>Table</span>
      </label>
      <label class="${controlPanelClass}__viewModule__types__preview">
        <input type="radio" name="view" value="pre">
        <span>Preview</span>
      </label>
    </div>
  `;

  return $viewModule
}