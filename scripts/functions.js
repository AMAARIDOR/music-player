"use strict";

let trackIndex = 0;
let isPlaying = false;

function updateTrack() {
  audioElement.src = songsList[trackIndex].path;
  trackStatus.textContent = `Now playing audio ${trackIndex + 1} of ${
    songsList.length
  }`;
  trackCover.src = songsList[trackIndex].image;
  trackName.textContent = songsList[trackIndex].name;
  trackArtist.textContent = songsList[trackIndex].artist;
}

function loadTrack() {
  audioElement.play();
}

function pauseTrack() {
  audioElement.pause();
}

function nextTrack() {
  if (trackIndex === songsList.length) trackIndex = 0;
  updateTrack();
  loadTrack();
  isPlaying = true;
  trackIndex += 1;
}

function previousTrack() {
  if (trackIndex < 0) trackIndex = songsList.length - 1;
  updateTrack();
  loadTrack();
  isPlaying = true;
  trackIndex -= 1;
}
