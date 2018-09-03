
const makeActiveTabContent = function(tabIndex, tabsContent) {
  const currentTabContent = tabsContent[tabIndex];

  tabsContent.forEach(function(tabContent) {
    tabContent.style.display = "none";
  })

  currentTabContent.style.display = "block";
};


const makeActiveTab = function(e, tabs, tabsContent) {
  const tabIndex = e.currentTarget.dataset.index;
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
  })

  e.currentTarget.classList.add('active');
  makeActiveTabContent(tabIndex, tabsContent);
};


module.exports = function(data) {
  const tabBlock = document.querySelector(data.tabWrapper);
  const tabs = tabBlock.querySelectorAll(data.tabName);
  const tabsContent = tabBlock.querySelectorAll(data.tabContentName);

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      makeActiveTab(e, tabs, tabsContent);
    })

    if ( tab.classList.contains('defaultOpen') ) { tab.click() }
  });
}