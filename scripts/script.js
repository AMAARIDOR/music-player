"use strict";

const trackStatus = document.querySelector(".song-status");
const trackCover = document.querySelector(".song-image");
const trackName = document.querySelector(".song-name");
const trackArtist = document.querySelector(".song-artist");

const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");

const seekSlider = document.querySelector(".audio-slider");
const volumeSlider = document.querySelector(".volume-slider");

const previousButton = document.querySelector(".previous-button");
const playPauseButton = document.querySelector(".play-pause-button");
const nextButton = document.querySelector(".next-button");

const audioElement = document.createElement("audio");

let trackIndex = -1;
let isPlaying = false;
let currentTrack;

function checkPlayOrPause() {
  if (!isPlaying) {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-play fa-3x"></i>`;
  } else {
    playPauseButton.innerHTML = `<i class="fa-sharp fa-solid fa-pause fa-3x"></i>`;
  }
}

function loadTrack(i) {
  isPlaying = true;
  audioElement.src = songsList[i].path;
  trackCover.src = songsList[i].image;
  trackName.textContent = songsList[i].name;
  trackArtist.textContent = songsList[i].artist;
  trackStatus.textContent = `Playing song ${i + 1} out of ${songsList.length}`;
  checkPlayOrPause();
}

function nextTrack() {
  trackIndex++;
  loadTrack(trackIndex);
  playTrack();
  // checkPlayOrPause();
  console.log(trackIndex);
}

function previousTrack() {
  trackIndex--;
  loadTrack(trackIndex);
  playTrack();
  // checkPlayOrPause();
  console.log(trackIndex);
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

// function updateTrack() {
//   audioElement.src = songsList[trackIndex].path;
//   trackCover.src = songsList[trackIndex].image;
//   trackName.textContent = songsList[trackIndex].name;
//   trackArtist.textContent = songsList[trackIndex].artist;
//   trackStatus.textContent = `Now playing audio ${trackIndex + 1} of ${
//     songsList.length
//   }`;

//   audioElement.addEventListener("canplaythrough", () => {
//     totalDuration.textContent = audioElement.duration;
//   });
// }

// function loadTrack() {
//   audioElement.play();
// }

// function pauseTrack() {
//   audioElement.pause();
// }

// function nextTrack() {
//   if (trackIndex === songsList.length) trackIndex = 0;
//   updateTrack();
//   loadTrack();
//   isPlaying = true;
//   trackIndex += 1;
//   console.log(trackIndex);
// }

// function previousTrack() {
//   if (trackIndex < 0) trackIndex = songsList.length - 1;
//   updateTrack();
//   loadTrack();
//   isPlaying = true;
//   trackIndex -= 1;
//   console.log(trackIndex);
// }

// nextButton.addEventListener("click", nextTrack);

// previousButton.addEventListener("click", previousTrack);

// playPauseButton.addEventListener("click", () => {
//   if (!isPlaying) {
//     isPlaying = true;
//     loadTrack();
//   } else {
//     isPlaying = false;
//     pauseTrack();
//   }
// });
