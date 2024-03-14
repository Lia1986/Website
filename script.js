$(document).ready(function () {
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1500,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerPadding: '20px',
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          centerPadding: '20px',
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });
});

function toggleDropdown(dropdownId) {
  var selectedDropdown = document.getElementById(dropdownId + "Dropdown");

  if (selectedDropdown.style.display === "block") {
    selectedDropdown.style.display = "none";
  } else {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
    selectedDropdown.style.display = "block";
  }
}


function toggleNav() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}