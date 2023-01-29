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

let trackIndex = 0;
let isPlaying = false;

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
