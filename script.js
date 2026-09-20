/* ---------- persistent background music across pages ---------- */
const BGM_KEY_TIME = 'avni_bgm_time';
const BGM_KEY_STARTED = 'avni_bgm_started';

function initBGM(){
  const audio = document.getElementById('bgm');
  const toggle = document.getElementById('bgm-toggle');
  if(!audio) return;

  const savedTime = sessionStorage.getItem(BGM_KEY_TIME);
  if(savedTime){
    audio.currentTime = parseFloat(savedTime) || 0;
  }

  const started = sessionStorage.getItem(BGM_KEY_STARTED) === 'true';
  if(started){
    audio.play().then(()=>{
      setToggleState(true);
    }).catch(()=>{
      setToggleState(false);
    });
  }

  audio.addEventListener('timeupdate', ()=>{
    sessionStorage.setItem(BGM_KEY_TIME, audio.currentTime);
  });
  window.addEventListener('pagehide', ()=>{
    sessionStorage.setItem(BGM_KEY_TIME, audio.currentTime);
  });

  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(audio.paused){
        audio.play().then(()=>{
          sessionStorage.setItem(BGM_KEY_STARTED, 'true');
          setToggleState(true);
        });
      } else {
        audio.pause();
        setToggleState(false);
      }
    });
  }
}

function startBGM(){
  const audio = document.getElementById('bgm');
  if(!audio) return;
  audio.play().then(()=>{
    sessionStorage.setItem(BGM_KEY_STARTED, 'true');
    setToggleState(true);
  }).catch(()=>{
    setToggleState(false);
  });
}

function setToggleState(playing){
  const toggle = document.getElementById('bgm-toggle');
  if(!toggle) return;
  toggle.classList.toggle('paused', !playing);
  toggle.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
}

document.addEventListener('DOMContentLoaded', initBGM);
