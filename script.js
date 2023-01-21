(function ($) {

  'use strict';

  var $isAnimatedFirst = $('.first .is-animated'),
    $isAnimatedFirstSingle = $('.first .is-animated__single'),
    $isAnimatedSecond = $('.second .is-animated'),
    $isAnimatedSecondSingle = $('.second .is-animated__single'),
    $isAnimatedThird = $('.third .is-animated'),
    $isAnimatedThirdSingle = $('.third .is-animated__single');

  $('#fullpage').fullpage({

    navigation: true,
    onLeave: function (index, nextIndex) {

      if (index == 1) {
        $isAnimatedFirst.addClass('animated fadeInUpBig');
        $isAnimatedFirst.eq(0).css('animation-delay', '.10s');
        $isAnimatedFirst.eq(1).css('animation-delay', '.16s');
        $isAnimatedFirst.eq(2).css('animation-delay', '.19s');
        $isAnimatedFirstSingle.addClass('animated rollIn').css('animation-delay', '2.7s');
      }

      if (index == 1 && nextIndex == 2) {
        $isAnimatedSecond.addClass('animated fadeInUpBig');
        $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }


      else if ((index == 1 || index == 2) && nextIndex == 3) {
        $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s');
        $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
        $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      }
    }
  });

  tippy('#myButton', {
    content: 'My tooltip!',
  });

  // Define chart labels
  const labels = ['Monday', 'Tuesday', 'Wednesday',
    'Thursday',
    'Friday', 'Saturday', 'Sunday'
  ];


  // Set labels, colours and data
  const data = {
    labels: labels, datasets: [{
      label: 'Daily Cases',
      backgroundColor: ['orange'],
      data: [5, 10, 5, 2, 20, 30, 45],
    }]
  };


  // Configure chart
  const config = {
    type: 'bar', data: data
  };


  // Render chart in <canvas>
  const myChart = new Chart(document.getElementById('myChart'), config
  );

  // Define chart labels
  const labels1 = ['Male', 'Female'];


  // Set labels, colours and data
  const data1 = {
    labels: labels1, datasets: [{
      label: 'Vacinnation process by gender',
      backgroundColor: ['blue', 'pink'],
      borderColor: ['black'],
      data: [15, 25],
      hoverOffset: 4,
    }]
  };


  // Configure chart
  const config1 = {
    type: 'pie', data: data1
  };


  // Render chart in <canvas>
  const myChart1 = new Chart(document.getElementById('myChart1'), config1
  );

  tippy('#east', {
    content: ['Pasir ris', 'Tampines'],
  });

  tippy('#east', {
    placement: 'right', //place tippy to the right 
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text) 
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds) 
    followCursor: true //get tippy to follow mouse cursor
  });

  tippy('#east', {
    content: ['Pasir ris', 'Tampines'],
  });

  tippy('#east', {
    placement: 'right', //place tippy to the right 
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text) 
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds) 
    followCursor: true //get tippy to follow mouse cursor
  });

  tippy('#west', {
    content: ['Jurong East', 'Pioneer'],
  });

  tippy('#west', {
    placement: 'right', //place tippy to the right 
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text) 
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds) 
    followCursor: true //get tippy to follow mouse cursor
  });

  tippy('#north', {
    content: ['Woodlands', 'Yishun'],
  });

  tippy('#north', {
    placement: 'right', //place tippy to the right 
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text) 
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds) 
    followCursor: true //get tippy to follow mouse cursor
  });

  tippy('#south', {
    content: ['Harbourfront', 'Tiong Bahru'],
  });

  tippy('#south', {
    placement: 'right', //place tippy to the right 
    trigger: 'click', //trigger tippy on click
    interactive: true, //allow interaction in tippy (e.g. click and select text) 
    content: '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true, //allow HTML in tippy content
    delay: 500, //delay tippy showing and hiding (in milliseconds) 
    followCursor: true //get tippy to follow mouse cursor
  });

  var dataSet = [
    ["East", "Pasir Ris Community Centre S(686098)"],
    ["East", "Our Tampines Hub S(528523)"],
    ["West", "Taman Jurong Community Centre S(618496)"],
    ["West", "WestGate Shopping Mall S(618980)"],
    ["South", "Tiong Bahru Mall S(686098)"],
    ["South", "Harbourfront Office building S(686098)"],
    ["North", "Woodlands Community Centre S(686098)"],
    ["North", "Yishun Community Centre S(686098)"],
  ];


  //Initialise DataTables to the table above
  $(document).ready(function () {
    $('#example').DataTable({
      data: dataSet, columns: [
        { title: "Area" },
        { title: "Address" }
      ]
    });
  });

})(jQuery);