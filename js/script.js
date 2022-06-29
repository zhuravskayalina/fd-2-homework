const links = document.querySelectorAll('.task-link');
console.log(links);

for (let link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const blockId = event.target.dataset.anchor;
        const scrollTo = document.getElementById(blockId);
        scrollTo.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};

const upButton = document.querySelector('.up-button');



window.addEventListener('scroll', function() {
    if (this.scrollY > 750) {
        upButton.classList.add('show-button');
    } else if (this.scrollY < 750) {
        upButton.classList.remove('show-button');
    }
  });

  upButton.addEventListener('click', function(event) {
    window.scrollTo({
        top: 100,
        behavior: "smooth"
    });
})
