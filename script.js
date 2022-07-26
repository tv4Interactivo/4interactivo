// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
    } else {
      progressBar.classList.remove('hide');
      if (event.detail.totalProgress === 0) {
        event.target.querySelector('.center-pre-prompt').classList.add('hide');
      }
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);

  const toggle = document.getElementById("dropdown-content");

//Show/Hide dropdown menu
function toggleDisplay() {
  if (toggle.style.display === "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}

//copy url to clipboard
function copyURL() {
  const btnHome = document.getElementsByClassName("share");
  navigator.clipboard.writeText(window.location.href);

  Swal.fire({
    text: '¡Enlace copiado al portapapeles!',
    icon: 'success',
    confirmButtonText: 'Ok',
    background: '#262636',
    color: '#fff'
  })

  toggle.style.display = "none";
}


//change language
function changeLang() {
  const esp = document.getElementById("text-esp");
  const eng = document.getElementById("text-eng");
  const esp2 = document.getElementById("text-esp2");
  const eng2 = document.getElementById("text-eng2");
  const esp3 = document.getElementById("text-esp3");
  const eng3 = document.getElementById("text-eng3");
  const esp4 = document.getElementById("text-esp4");
  const eng4 = document.getElementById("text-eng4");
  const esp5 = document.getElementById("text-esp5");
  const eng5 = document.getElementById("text-eng5");

  if (esp.style.display === "flex") {
    esp.style.display = "none";
    eng.style.display = "flex";
  } else {
    esp.style.display = "flex";
    eng.style.display = "none";
  }

  if (esp2.style.display === "flex") {
    esp2.style.display = "none";
    eng2.style.display = "flex";
  } else {
    esp2.style.display = "flex";
    eng2.style.display = "none";
  }

  if (esp3.style.display === "flex") {
    esp3.style.display = "none";
    eng3.style.display = "flex";
  } else {
    esp3.style.display = "flex";
    eng3.style.display = "none";
  }

  if (esp4.style.display === "flex") {
    esp4.style.display = "none";
    eng4.style.display = "flex";
  } else {
    esp4.style.display = "flex";
    eng4.style.display = "none";
  }

  if (esp5.style.display === "flex") {
    esp5.style.display = "none";
    eng5.style.display = "flex";
  } else {
    esp5.style.display = "flex";
    eng5.style.display = "none";
  }

  toggle.style.display = "none";
}

new Glider(document.querySelector('.glider'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

new Glider(document.querySelector('.glider2'), {
  slidesToShow: 4,
  slidesToScroll: 4,
  draggable: false,
  arrows: {
    prev: '.b-prev2',
    next: '.b-next2'
  }
});