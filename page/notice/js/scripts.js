    function searchContent() {
      // Lấy giá trị từ ô tìm kiếm
      const searchTerm = document.getElementById('searchInput').value.toLowerCase();
      // Lấy tất cả các đoạn văn
      const paragraphs = document.querySelectorAll('#content h3');
      
      // Xóa bỏ các đánh dấu trước đó
      paragraphs.forEach(paragraph => {
          paragraph.innerHTML = paragraph.textContent;
      });

      // Tìm kiếm và đánh dấu từ khóa
      paragraphs.forEach(paragraph => {
          const text = paragraph.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
              const regex = new RegExp(`(${searchTerm})`, 'gi');
              paragraph.innerHTML = paragraph.innerHTML.replace(regex, '<span class="highlight">$1</span>');
          }
      });
  }

  // div show click
  function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");   

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";   

  }

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
