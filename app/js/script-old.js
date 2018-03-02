
$( document ).ready(function() {
  //проверка подключения
  console.log( "hallo!" );
  
  $('.filter-open').on('click', function () {
    $('.toolbar-navigation__filter > *').slideToggle('normal');
  })

  $(window).on("load",function(){
    $(".scroll").mCustomScrollbar({
      // axis: "xy"
      theme:"dark"
    });
    resz();
  });

  //высота фикса

  $( window ).resize(function() {
    resz()
  });
  function resz() {
    var heightBody = $('.table-part__body').height();
    var heightTable = $('.table-part__body table').height();
    // var hei = 70;
    // console.log(heightBody);
    // console.log(heightTable);
    if(heightTable >= heightBody){
      var heigthFix = heightBody - 16;
    } else {
      var heigthFix = heightTable;
    }
    $('.fixed-buttons').css('height', heigthFix+'px')


    var heightTd = $('.table-part__body td').height();
    // console.log(heightTd);
    $('.fixed-buttons .fixed-button').css('height', heightTd+12+'px')
    // console.log('текущая', $('.fixed-buttons .fixed-button').height())
  }

  // synch();
  //синхронизация скроллов
  $(function() {
    console.log('scroll')
    var DivTable1 = document.querySelector('.table-part__body')
    DivTable1.onscroll = (e) => {
      var x = DivTable1.pageXOffset || DivTable1.scrollLeft;
      let header = document.querySelector('.table-part__header>.section-wrapper')
      header.style.marginLeft = '-' + x + 'px'
    //   var y = DivTable1.pageYOffset || DivTable1.scrollTop;
    //   var fixedCols = document.querySelectorAll('.superTable-body .fixed')
    //   fixedCols.forEach(v => {
    //     v.style.marginTop = '-' + y + 'px'
    // })
    //   var fixedCenteredCols = document.querySelectorAll('.fix-col-inner')
    //   fixedCenteredCols.forEach(v => {
    //     let caclY = +y
    //     v.style.marginTop = '-' + caclY + 'px'
    // })
    }
  });








});