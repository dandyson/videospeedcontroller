const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('video');


console.log(video.playbackRate);

//MY SOLUTION
function changeSpeed(e) {
    let speedRate = e.offsetY / 100;
    bar.innerHTML = `${speedRate.toFixed(2)}x`;
    video.playbackRate = speedRate;
    bar.style.height = `${e.offsetY / 4}%`;
}

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
}

// speed.addEventListener('mousemove', handleMove);

speed.addEventListener('mousemove', changeSpeed);