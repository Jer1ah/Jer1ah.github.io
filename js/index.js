const portfolioListItemController = (function(){
  const _listItems = document.querySelectorAll('.portfolio__listItem');
  const _overlayList = document.querySelectorAll('.overlay');

  for(let i = 0; i < _listItems.length; i++) {
      _listItems[i].addEventListener('mouseenter', () => {
          _overlayList[i].style.opacity = '1';
      });

      _listItems[i].addEventListener('mouseleave', () => {
          _overlayList[i].style.opacity = '0';
      });
  }
}());


const emailButtonController = (function(){
  const _emailButton = document.querySelector('.contact__email');
  const _emailIcon = document.querySelector('.contact__email img');

  _emailButton.addEventListener('mouseenter', () => {
      _emailIcon.src = 'images/email-blue.svg';
  });

  _emailButton.addEventListener('mouseleave', () => {
      _emailIcon.src = 'images/email-white.svg';
  });
}());