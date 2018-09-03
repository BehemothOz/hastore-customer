import '../../../style/main.scss';
import './card.scss';

import tabs from '../../components/tabs/tabs.js'
import popup from '../../components/popup/popup.js'
import inputSearch from '../../components/header/header.js';

inputSearch();

tabs({
  tabWrapper: '.tab-container',
  tabName: '.tab',
  tabContentName: '.tab-content',
});

popup();


console.log('card');
