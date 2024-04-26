function toggleSideMenu() {
    var sideMenu = document.getElementById('side-menu');
    if (sideMenu.style.left === "-250px") {
      sideMenu.style.left = "0";
    } else {
      sideMenu.style.left = "-250px";
    }
  }

  const userName = sessionStorage.getItem('userName');
  const p_name = document.querySelector(".p_name");
  p_name.innerHTML = userName;
  p_name.innerHTML = userName.toUpperCase();