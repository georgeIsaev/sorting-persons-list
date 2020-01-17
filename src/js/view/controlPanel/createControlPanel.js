import {createSortModule} from './modules/createSortModule';
import {createViewModule} from './modules/createViewModule';

export function createControlPanel() {
  const $controlPanel = document.createElement('div');
  $controlPanel.classList.add('controlPanel');
  
  $controlPanel.append(createSortModule('controlPanel'));
  $controlPanel.append(createViewModule('controlPanel'));

  return $controlPanel;
} 