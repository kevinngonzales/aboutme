let article = {
  title: 'Why Accessibility Matters in UI UX Design',
  date: 'May 25, 2023',
  description: 'Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it’s important.'
}

let title = document.getElementById('title');
let date = document.getElementById('date');
let description = document.getElementById('description');

title.textContent = article.title;
date.textContent = article.date;
description.textContent = article.description;


let article02 = {
  title: "Accessibility on the Platform",
  date: "Oct 9, 2020",
  description: "Codecademy is committed to providing a high-quality learning experience for all learners. That includes accommodating different usage forms such as auditory, motor, or visual restrictions, limited hardware, or other accessibility concerns. Codecademy’s Learning Environment is typically split into 2 to 5 “panes,” each of which is an ARIA Region on the page and includes a visually hidden heading on top of it. The first pane is always a “Narration Pane.” Other sections typically represent the input you’ll be entering for the lesson and/or the resulting output.",
}

let title2 = document.getElementById('title2');
let date2 = document.getElementById('date2');
let description2 = document.getElementById('description2');

title2.textContent = article02.title;
date2.textContent = article02.date;
description2.textContent = article02.description;



