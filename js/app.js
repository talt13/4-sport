document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('#header__bottom-btn')
    .click(function(){
        $('#popup__container').fadeIn();
   });

    $('#popup__container').click(function(event){
        if(event.target == this) {
            $(this).fadeOut();
        }
    })

$('#company__about-btn')
    .click(function(){
        $('#popup__container').fadeIn();
   });

    $('#popup__container').click(function(event){
        if(event.target == this) {
            $(this).fadeOut();
        }
    })
