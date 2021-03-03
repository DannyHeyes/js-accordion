// Needs:
// 1. Select all of the accordion and panel items
// 2. Create a loop which would allow the cycling through of all accordion items
// 3. Depending on which one is clicked, toggle the active class onto
// the panel item
// 4. select arrow icon and flip it 180deg on click
const accordion = document.querySelectorAll('.accordion');
const panel = document.querySelectorAll('.panel');
const arrow = document.querySelectorAll('.arrow')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    panel[i].classList.toggle('active');
    arrow[i].classList.toggle('imgActive')
  });
}
