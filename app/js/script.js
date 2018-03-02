
$( document ).ready(function() {
  //проверка подключения
  console.log( "hallo!" );

  $('#login').on('click', function () {
      console.log('login');
      $('.header-profile').html('<div class="header-profile__photo--login"><img src="../../img/user.svg"></div><span class="header-profile__name--login">Константин К.</span>')
  })


    // скрытие-появление фикс кнопок
    // $('.main-layout .table tbody tr').hover(function () {
    //     $('tr').removeClass();
    //     $(this).addClass('selected');
    //     // var index = indexOf($(this));
    //     // var trId = this.rowIndex + 1;
    //      console.log('hi');
    //     // $('.fixed-button').removeClass('selected');
    //     // var stroka = $('.fixed-button:nth-child(' + trId + ')');
    //     // stroka.addClass('selected');
    // })

    // $(".card-layout .table-part__body .table tr").mouseleave(function(){
    //     $('.fixed-button').removeClass('selected');
    // });

  // $('.filter-open').on('click', function () {
  //   $('.toolbar-navigation__filter > *').slideToggle('normal');
  // })
  //
  //
  //
  // $(window).on("load",function(){
  //   $(".scroll").mCustomScrollbar({
  //     // axis: "xy"
  //     theme:"dark-3"
  //   });
  //   resz();
  //
  // });
  // resz();
  // //высота фикса
  //
  // $( window ).resize(function() {
  //   resz()
  // });
  // function resz() {
  //   //вычисляем высоту каждой строки, записываем в массив heights
  //   var heights = [];
  //   $(".table-part__body table tr").each(function(indx, element){
  //     heights.push($(element).height());
  //   });
  //
  //   // передаем каждому эл-ту с классом .fixed-button соответств высоту из массива heights
  //   $('.fixed-button').each(function(i,elem) {
  //     $(this).css('height', heights[i])
  //     // console.log(heights[i])
  //   });
  //
  //   //вычисляем высоту каждого .fixed-button, записываем в массив fixHeights  - только для проверки
  //   // var fixHeights = [];
  //   // $(".fixed-button").each(function(indx, element){
  //   //   fixHeights.push($(element).height());
  //   // });
  //   // console.log('fixHeights', fixHeights)
  //   // console.log(heights);
  //
  //
  //   // пересчет высоты фиксированной колонки с кнопками
  //
  //   var heightBody = $('.table-part__body').height();
  //   var heightTable = $('.table-part__body table').height();
  //   // console.log('тело ',heightBody);
  //   // console.log('таблица', heightTable);
  //
  //
  //   //можно длбавить -16 для больших таблиц, но нужно доработать
  //   // if(heightTable >= heightBody-16){
  //   if(heightTable >= heightBody){
  //     var heigthFix = heightBody - 16;
  //     var positionRight = 58;
  //     var paddingSmall = 17;
  //   } else {
  //     var heigthFix = heightTable;
  //     var positionRight = 41;
  //     var paddingSmall = 0;
  //   }
  //
  //   $('.fixed-buttons').css('right', positionRight+'px');
  //   $('.card-layout .table-part__header.table--small .table').attr('style', 'padding-right: '+paddingSmall+'px');
  //
  //   //высота фикса для маленьких таблиц
  //   if(heightTable >= heightBody){
  //     $('.fixed-buttons').css('height', heigthFix-2+'px');
  //     $('.table--small .fixed-buttons').css('height', heigthFix+16-1+'px');
  //     $('.card-layout .table table tbody tr:last-of-type').attr('style', 'border-bottom: none')
  //   }else{
  //     $('.fixed-buttons').css('height', heigthFix+'px');
  //     $('.table--small .fixed-buttons').css('height', heigthFix+'px');
  //     $('.card-layout .table table tbody tr:last-of-type').attr('style', 'border-bottom: 1px solid #ddd')
  //   }
  //
  //
  //
  //   // вычисляем ширину ячеек шабли и тела таблицы
  //   var widthsHeadTable = [];
  //   $(".table-part__header table th > div").each(function(indx, element){
  //     widthsHeadTable.push($(element).width());
  //   });
  //
  //   // передаем каждому эл-ту с классом .fixed-button соответств высоту из массива heights
  //   $('.table-part__body table td > div').each(function(i,elem) {
  //     $(this).css('width', widthsHeadTable[i])
  //   });
  //
  //
  // }
  //
  //
  //
  // // скрытие-появление фикс кнопок
  //   $('.card-layout .table-part__body tbody tr').hover(function () {
  //     $('tr').removeClass();
  //     $(this).addClass('selected');
  //     // var index = indexOf($(this));
  //     var trId = this.rowIndex + 1;
  //     // console.log(trId);
  //     $('.fixed-button').removeClass('selected');
  //     var stroka = $('.fixed-button:nth-child(' + trId + ')');
  //     stroka.addClass('selected');
  //   })
  //
  // $(".card-layout .table-part__body .table tr").mouseleave(function(){
  //   $('.fixed-button').removeClass('selected');
  // });
  //
  // // table-part__body
  //
  //
  //
  // // synch();
  // //синхронизация скроллов
  // $(function() {
  //   console.log('scroll')
  //   var DivTable1 = document.querySelector('.table-part__body')
  //   DivTable1.onscroll = (e) => {
  //     var x = DivTable1.pageXOffset || DivTable1.scrollLeft;
  //     let header = document.querySelector('.table-part__header>.section-wrapper')
  //     header.style.marginLeft = '-' + x + 'px'
  //
  //     var y = DivTable1.pageYOffset || DivTable1.scrollTop;
  //   //   var fixedCols = document.querySelectorAll('.fixed-buttons')
  //   //   fixedCols.forEach(v => {
  //   //     v.style.marginTop = '-' + y + 'px'
  //   // })
  //     var fixedCenteredCols = document.querySelectorAll('.fixed-buttons__wrapper')
  //     fixedCenteredCols.forEach(v => {
  //       let caclY = +y
  //       v.style.marginTop = '-' + caclY + 'px'
  //   })
  //   }
  // });








});