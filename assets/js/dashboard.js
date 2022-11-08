
var value = document.querySelector(".progress").getAttribute('data-value');
var left = document.querySelector('.progress-left .progress-bar');
var right = document.querySelector('.progress-right .progress-bar');

if (value > 0) {
  if (value <= 50) {
    right.style.transform='rotate(' + percentageToDegrees(value) + 'deg)'
  } else {
    right.style.transform='rotate(180deg)';
    left.style.transform='rotate(' + percentageToDegrees(value - 50) + 'deg)'
  }
}

function percentageToDegrees(percentage) {
  return percentage / 100 * 360;
}

var value = document.querySelector(".progress.progress-active").getAttribute('data-value');
var left = document.querySelector('.progress-left .progress-active.progress-bar');
var right = document.querySelector('.progress-right .progress-active.progress-bar');

if (value > 0) {
  if (value <= 50) {
    right.style.transform='rotate(' + percentageToDegrees(value) + 'deg)'
  } else {
    right.style.transform='rotate(180deg)';
    left.style.transform='rotate(' + percentageToDegrees(value - 50) + 'deg)'
  }
}



// document.querySelector(function() {

//   document.querySelector(".progress").each(function() {

//     var value = document.querySelector(this).attr('data-value');
//     var left = document.querySelector(this).querySelector('.progress-left .progress-bar');
//     var right = document.querySelector(this).querySelector('.progress-right .progress-bar');

//     if (value > 0) {
//       if (value <= 50) {
//         right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
//       } else {
//         right.css('transform', 'rotate(180deg)')
//         left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
//       }
//     }

//   })

//   function percentageToDegrees(percentage) {

//     return percentage / 100 * 360

//   }

// });


