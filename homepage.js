$(document).ready((function(){var e=$(".owl-carousel");e.owlCarousel({loop:!0,margin:10,nav:!1,dots:!0,lazyLoad:!0,center:!0,responsive:{0:{items:1},600:{items:3}}}),e.on("mousewheel",".owl-stage",(function(o){o.deltaY>0?e.trigger("next.owl"):e.trigger("prev.owl"),o.preventDefault()}))}));