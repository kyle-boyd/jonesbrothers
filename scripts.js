//Responsive Design


  
//Sliding navbar

                $(function(){
                    $('.hamburger').click(function(){
                        $('.sliding-navbar').toggleClass('sliding-navbar--open');
                      //  $('.mask').toggleClass('show');
                        $('.mask').fadeIn(1000);
                        //$('.mask').css('z-index', 200);
                        //$('.mask').css('opacity', .25);
                        $('.hamburger').toggleClass('menu-opened');
                    });

                    $('.mask').click(function(){
                        $('.sliding-navbar').toggleClass('sliding-navbar--open');
                        $('.mask').fadeOut();
                      //  $('.mask').delay(0.8s).css('z-index', -100);

                        $('.hamburger').toggleClass('menu-opened');
                    })
                });
