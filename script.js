document.body.onload = addElement;

function addElement() {
  var video = document.createElement('video');
  video.setAttribute('playsinline', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.id = 'myvid';

  var constraints = {
    audio: false,
    video: {
      facingMode: 'user'
    }
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => (video.srcObject = stream));
  var mydiv = document.getElementById('mydiv');
  mydiv.appendChild(video);

}

function capture() {
  var cvs = document.createElement('canvas');
  cvs.width = 256;
  cvs.height = 192;
  var vid = document.getElementById('myvid');
  cvs.getContext('2d').drawImage(vid, 0, 0,160,120);
  cvs.id='hi';
  
  var toc = document.getElementById('tic');
  toc.appendChild(cvs);
}

function clear()
{
    var division = document.getElementById('tic');
    division.innerHTML='';
}


btn.addEventListener("click",capture);
clr.addEventListener("click",clear)
