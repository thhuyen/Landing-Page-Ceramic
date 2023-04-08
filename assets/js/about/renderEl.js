const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const coreValues = [
  {
    icon: "fa-regular fa-gem",
    title: "Design",
    text: "Our global marketplace is a vibrant community of real people connecting over special goods.",
  },
  {
    icon: "fa-solid fa-puzzle-piece",
    title: "Innovation",
    text: "With powerful tools, support and education, we help creative entrepreneurs start, manage, and scale their businesses.",
  },
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "Journey",
    text: "Our Journal and Editors Picks curate exciting trends and ideas discovered in the marketplace by our own team.",
  },
];

function render(parent, typeTag, className, id, HTML, attribute, css) {
  const element = document.createElement(typeTag);
  if (className) element.className = className;
  if (id) element.id = id;
  if (css) element.style.cssText = css;
  if (attribute) element.setAttribute(attribute.event, attribute.name);
  if (HTML) element.innerHTML = HTML;
  parent.append(element);
}

// render coreValues
coreValues.map((element, index) => {
  let valueHTML = ` <div key=${index} class="value ${element.title}">
  <i class="fa-value ${element.icon}"></i>
  <h3 class="value-title">${element.title}</h3>
  <hr />
  <p class="value-content">
    ${element.text}
  </p>
</div>`;

  render($(".core-value"), "div", null, null, valueHTML, null, null);
});

//Profile-slider
const sliders = [
  {
    img: "../assets/img/about-img/mem1.webp",
    fullName: "John Kim",
    title: "CEO",
  },
  {
    img: "../assets/img/about-img/mem2.jpeg",
    fullName: "Jenny Kim",
    title: "Chief of Designer",
  },
  {
    img: "../assets/img/about-img/mem3.jpeg",
    fullName: "Kai Kim",
    title: "Developer",
  },
  {
    img: "../assets/img/about-img/mem4.png",
    fullName: "YooJung Kim",
    title: "Chief of Marketing",
  },
  {
    img: "../assets/img/about-img/mem5.jpeg",
    fullName: "Minho Choi",
    title: "COO",
  },
];

// render slider
sliders.map((element, index) => {
  sliderHTML = `<div class="mem-profile" id="mem${index}">
<div class="mem-img">
  <img src=${element.img} alt="member" />
  <div class="mem-contacts">
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-skype"></i>
    <i class="fa-brands fa-slack"></i>
    <i class="fa-brands fa-square-behance"></i>
  </div>
</div>

<div class="mem-info">
  <p class="mem-name">${element.fullName}</p>
  <p class="mem-title">${element.title}</p>
</div>
</div>`;

  render($("#profile-slider"), "div", null, null, sliderHTML, null, null);
});
