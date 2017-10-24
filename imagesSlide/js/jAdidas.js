$(document).ready(function() {

  var $btnNext = $('.fa-angle-right');
  var $btnPrev = $('.fa-angle-left');
  var $indexPhoto = $('.gallery').find('li');
  var $indexCircle = $('.controls').find('i.fired');
  var $indexPoint = $('.controls').find('li');
  var $gallery = $('.gallery');
  var counter = 1;
  var myInterval = 3000;

  var time = setInterval(changeSlide, myInterval);
  $indexCircle.eq(0).css('display', 'inline-block');

  console.log(counter);

  function changeSlide() {
    $gallery.animate({
      marginLeft: '-400px'
    }, 500, moveFirstSlide);
    changeCircle();
  }

  function moveFirstSlide() {
    var firstSlide = $gallery.find('li:first');
    $gallery.append(firstSlide);
    $gallery.css('marginLeft', '0');
    $indexPhoto = $gallery.find('li');
  }

  function moveLastSlide() {
    var lastSlide = $gallery.find('li:last');
    $gallery.prepend(lastSlide);
    $gallery.css('marginLeft', '0');
    indexPhoto = $gallery.find('li');
  }

  $btnNext.click(function() {
    $gallery.animate({
      marginLeft: '-400px'
    }, 500, moveFirstSlide);
    clearInterval(time);
    time = setInterval(changeSlide, myInterval);
    changeCircle();
  });

  $btnPrev.click(function() {
    $gallery.animate({
      marginLeft: '400px'
    }, 500, moveLastSlide);
    clearInterval(time);
    time = setInterval(changeSlide, myInterval);
    changeCircleBack();
  });

  function changeCircle() {
    counter++;
    if (counter > $indexPhoto.length) counter = 1;
    toEmptyCircle();
    $indexCircle.eq(counter - 1).css('display', 'inline-block');
  }

  function toEmptyCircle() {
    $indexCircle.each(function() {
      $(this).css('display', 'none');
    });
  }

  function changeCircleBack() {
    counter--;
    if (counter == 0) counter = $indexPhoto.length;
    toEmptyCircle();
    $indexCircle.eq(counter - 1).css('display', 'inline-block');
  }

  $indexPoint.each(function() {
    $(this).click(function() {
      
      $indexCircle.each(function() {

        $(this).css('display', 'none');
      });
      $(this).find('i').css('display', 'inline-block');

      $getIdPoint = $(this).attr('id');
      moveSlidePoint();

      /*console.log('counter wynosi: ' + counter + ' a distPoint wynosi: ' + distPoint);*/

      clearInterval(time);
      time = setInterval(changeSlide, myInterval);
      counter = $(this).attr('id');
    });
  });

  function moveSlidePoint() {
    if (counter < $getIdPoint) {
      distPoint = $getIdPoint - counter;
      pickGalleryNext(distPoint);
    } 
    else {
      distPoint = counter - $getIdPoint;
      pickGalleryBack(distPoint);
    }
  }

  function pickGalleryNext(num) {
    for (var i = 0; i < num; i++) {
      $gallery.append($gallery.find('li:first'));
    }
  }

  function pickGalleryBack(num) {
    for (var i = 0; i < num; i++) {
      $gallery.prepend($gallery.find('li:last'));
    }
  }
});