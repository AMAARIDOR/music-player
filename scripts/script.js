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

function checkPlayOrPause() {
  if (!isPlaying) {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-play fa-3x"></i>`;
  } else {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-pause fa-3x"></i>`;
  }
}

function loadTrack(i) {
  clearInterval(updateTimer);
  isPlaying = true;
  audioElement.src = songsList[i].path;
  trackCover.src = songsList[i].image;
  trackName.textContent = songsList[i].name;
  trackArtist.textContent = songsList[i].artist;
  trackStatus.textContent = `Playing song ${i + 1} out of ${songsList.length}`;

  setTimeout(() => {
    totalDuration.textContent = (audioElement.duration / 60)
      .toFixed(2)
      .replace(".", ":");
  }, 100);

  checkPlayOrPause();

  updateTimer = setInterval(function updateMediaTime() {
    if (isPlaying) {
      let currentMediaTime = (
        Math.ceil(audioElement.currentTime) / 100
      ).toFixed(2);

      console.log(`0${currentMediaTime}`);
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
