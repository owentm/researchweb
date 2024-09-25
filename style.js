function changeAvatar() { //this funcction changes the avatar

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("avatar").src = `https://avatar.iran.liara.run/public/${randomNumber}`;
  }


  window.onload = function() { //this fdunction runs on first load
    changeAvatar();
  }
