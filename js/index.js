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