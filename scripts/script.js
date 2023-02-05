"use strict";

const trackStatus = document.querySelector(".song-status");
const trackCover = document.querySelector(".song-image");
const trackName = document.querySelector(".song-name");
const trackArtist = document.querySelector(".song-artist");

const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");

const audioSlider = document.querySelector(".audio-slider");
const volumeSlider = document.querySelector(".volume-slider");

const previousButton = document.querySelector(".previous-button");
const playPauseButton = document.querySelector(".play-pause-button");
const nextButton = document.querySelector(".next-button");

const audioElement = document.createElement("audio");

let trackIndex = -1;
let isPlaying = false;
let updateTimer;

function seekTo() {
  let seekTo = audioElement.duration * (audioSlider.value / 100);
  audioElement.currentTime = seekTo;
}

function changeVolume() {
  let currentVolume = volumeSlider.value / 10;
  audioElement.volume = currentVolume;
}

function checkPlayOrPause() {
  if (!isPlaying) {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-play fa-3x"></i>`;
  } else {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-pause fa-3x"></i>`;
  }
}

function loadTrack(i) {
  clearInterval(updateTimer);
  resetValues();
  isPlaying = true;
  audioElement.src = songsList[i].path;
  trackCover.src = songsList[i].image;
  trackName.textContent = songsList[i].name;
  trackArtist.textContent = songsList[i].artist;
  trackStatus.textContent = `Playing song ${i + 1} out of ${songsList.length}`;

  checkPlayOrPause();

  updateTimer = setInterval(function updateMediaTime() {
    let seekPosition = 0;

    setTimeout(() => {
      if (!isNaN(audioElement.duration)) {
        seekPosition = audioElement.currentTime * (100 / audioElement.duration);
        audioSlider.value = seekPosition;
      }
    }, 100);
    if (isPlaying) {
      let currentMinutes = Math.floor(audioElement.currentTime / 60);
      let currentSeconds = Math.floor(
        audioElement.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(audioElement.duration / 60);
      let durationSeconds = Math.floor(
        audioElement.duration - durationMinutes * 60
      );

      if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
      if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
      if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
      if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

      currentTime.textContent = `${currentMinutes}:${currentSeconds}`;
      totalDuration.textContent = `${durationMinutes}:${durationSeconds}`;
    }
  }, 1000);

  audioElement.addEventListener("ended", nextTrack);
}

function nextTrack() {
  if (trackIndex < songsList.length - 1) trackIndex++;
  else trackIndex = 0;
  loadTrack(trackIndex);
  playTrack();
}

function previousTrack() {
  if (trackIndex > 0) trackIndex--;
  else trackIndex = songsList.length - 1;
  loadTrack(trackIndex);
  playTrack();
}

function playTrack() {
  audioElement.play();
}

function pauseTrack() {
  audioElement.pause();
}

function resetValues() {
  currentTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
  audioSlider.value = 0;
}

function playPauseTrack() {
  if (!isPlaying) {
    playTrack();
    isPlaying = true;
  } else {
    pauseTrack();
    isPlaying = false;
  }
  checkPlayOrPause();
}

nextButton.addEventListener("click", nextTrack);
previousButton.addEventListener("click", previousTrack);
playPauseButton.addEventListener("click", playPauseTrack);
