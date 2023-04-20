// main-menu
const ham = document.querySelector('.ham');

ham.addEventListener('click', () => {
  const sect = document.createElement('section');
  sect.classList.add('menu');
  sect.innerHTML = `
<ul class="menu-ul">
<li class="li-1" id="cross"> &times; </li>
<li class="menu-li"><a class="menu-li-a" href="./index.html"> Home </a> </li>
<li class="menu-li"> <a class="menu-li-a" href="./about.html"> About </a>  </li>
<li class="menu-li"> <a class="menu-li-a" href="#"> Program </a>  </li>
<li class="menu-li"> <a class="menu-li-a" href="#"> Join </a> </li>
<li class="menu-li"> <a class="menu-li-a" href="#"> Sponser </a> </li>
</ul>
`;
  document.body.prepend(sect);

  //  close main-menu -- start

  const menu = document.querySelector('.menu');
  const cross = document.getElementById('cross');
  cross.addEventListener('click', () => {
    sect.classList.remove('menu');
    sect.classList.add('hide');

    menu.remove(sect);
  });

  //  close main-menu -- end
});
