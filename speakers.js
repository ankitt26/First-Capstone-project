// Add feature speakers dynamically

const speaker = document.querySelector('.speaker-group');

const speakersArray = [
  {
    name: 'Yochai Benkler',
    img: './images/profile/profile1.jpg',
    qualification: 'graduate from Quill pen in August 2022',
    para: 'My learning experience with Simplilearn was great. I am thankful to Simplilearn for providing upskilling opportunities, and I got placed in a reputable organization.',
  },

  {
    name: 'Yochai Benkler',
    img: './images/profile/profile2.jpg',
    qualification: 'graduate from Quill pen in jan 2023',
    para: 'The course was beneficial and it definitely helped me upskill. Since I am a fresher, I am glad that I was also to grab my first job after completing the course.',
  },

  {
    name: 'Yochai Benkler',
    img: './images/profile/profile3.jpg',
    qualification: 'graduate from Quill pen in jan 2021',
    para: 'The course was beneficial and it definitely helped me upskill. Since I am a fresher, I am glad that I was also to grab my first job after completing the course.',
  },

  {
    name: 'Yochai Benkler',
    img: './images/profile/profile4.jpg',
    qualification: 'graduate from Quill pen in feb 2023',
    para: 'I love the format and logistics of Simplilearn so much that I would chose them for future courses at any cost rather than take anything else. Awesome guys',
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
