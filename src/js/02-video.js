   import throttle from 'lodash.throttle';
   import Player from '@vimeo/player';
    
   
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function(data) {
      localStorage.setItem(LOCALSTORAGE_KEY, data.seconds); 
    });

  player.on('timeupdate', throttle(onPlay, 2000));
    

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}
