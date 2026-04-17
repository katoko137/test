const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.panel');

function activateSection(targetId) {
  tabs.forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.target === targetId);
  });

  sections.forEach((section) => {
    section.classList.toggle('is-active', section.id === targetId);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateSection(tab.dataset.target);
  });
});
