// Add feature speakers dynamically

const speaker = document.querySelector('.speaker-group');

const speakersArray = [
  {
    name: 'Yochai Benkler',
    img: '././images/speaker_01 1.png',
    qualification: `Berkman Professor of Entrepreneurial Legal Studies at Harvard
  Law School`,
    para: `Benkler studies commons-based peer production, and published his
  seminal book, The Wealth of Networks in 2006`,
  },

  {
    name: 'Yochai Benkler',
    img: '././images/speaker_01 2.png',
    qualification: `Berkman Professor of Entrepreneurial Legal Studies at Harvard
  Law School`,
    para: `Benkler studies commons-based peer production, and published his
  seminal book, The Wealth of Networks in 2006`,
  },

  {
    name: 'Yochai Benkler',
    img: '././images/speaker_01 1.png',
    qualification: `Berkman Professor of Entrepreneurial Legal Studies at Harvard
  Law School`,
    para: `Benkler studies commons-based peer production, and published his
  seminal book, The Wealth of Networks in 2006`,
  },

  {
    name: 'Yochai Benkler',
    img: '././images/speaker_01 2.png',
    qualification: `Berkman Professor of Entrepreneurial Legal Studies at Harvard
  Law School`,
    para: `Benkler studies commons-based peer production, and published his
  seminal book, The Wealth of Networks in 2006`,
  },

];

speakersArray.forEach((value) => {
  const speak = document.createElement('div');
  speak.className = 'speaker-card';
  speak.innerHTML = `

          <img class="speaker-img" src="${value.img}" alt="" />
          <div class="speaker-detail">
            <h3 class="speaker-name">${value.name}</h3>
            <h4 class="speaker-qualification">
            ${value.qualification}
            </h4>
            <p class="speaker-para">
            ${value.para}
            </p>
          </div>
`;

  speaker.append(speak);
});