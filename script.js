const videoContainer = document.getElementById('video-container');

const videos = [
  'rm-Eexth0Pw',
  'xTef7B-3o7o',
  'Cmg4xmT70p8',
  'EnmGyR95bsw',
  'o50J2xg8-sU',
  'MGHtl5GeYAw',
  'Ri-eF5PJ2X0',
  'F05D12ckxb8'
];

videos.forEach(videoId => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', '320');
  iframe.setAttribute('height', '180');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  videoContainer.appendChild(iframe);
});
