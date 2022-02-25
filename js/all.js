const topBtn = document.querySelector('.topBtn');
const scrollTop = () => {
   window.scrollTo({top: 0, behavior: 'smooth'});
};

topBtn.addEventListener('click', scrollTop);