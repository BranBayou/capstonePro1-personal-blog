const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.mob-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
}));

const gridContainer = document.querySelector('.grid-container');
const featuredBlogs = [
  {
    img: 'img/speaker_01.svg',
    blogers: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    img: 'img/speaker_02.svg',
    blogers: 'Kilnam Chon',
    title: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    img: 'img/speaker_03.svg',
    blogers: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    img: 'img/speaker_04.svg',
    blogers: 'Julia Leda',
    title: "President of Young Pirates of Europe', 'Executive Director of the Wikimedia Foundation'",
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    img: 'img/speaker_05.svg',
    blogers: 'Lila tretikov',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    img: 'img/speaker_06.svg',
    blogers: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

function showFeaturedBlogs(blog) {
  gridContainer.innerHTML += `
  <div class="cards">
    <div>
      <img src="${featuredBlogs[blog].img}" alt="">
    </div>
    <div>
      <h6 class="blogerName">${featuredBlogs[blog].blogers}</h6>
      <p class="blogerTitle">${featuredBlogs[blog].title}</p>
      <p class="blogerDes">${featuredBlogs[blog].description}</p>
    </div>
  </div>
  `;
}
for (let i = 0; i < featuredBlogs.length; i += 1) {
  showFeaturedBlogs(i);
}
function addClass() {
  const cards = document.querySelectorAll('.cards');
  for (let j = 0; j <= featuredBlogs.length; j += 1) {
    cards[j].setAttribute('id', `card${j}`);
  }
}
addClass();
