"use strict";

let track_index = 0;
let is_playing = false;

function updateTrack() {
  audio_element.src = songs_list[track_index].path;
  track_cover.src = songs_list[track_index].image;
  track_name.textContent = songs_list[track_index].name;
  track_artist.textContent = songs_list[track_index].artist;
}

function loadTrack() {
  audio_element.play();
}

function pauseTrack() {
  audio_element.pause();
}

function nextTrack() {
  track_index += 1;
  if (track_index === songs_list.length) track_index = 0;
  updateTrack();
  loadTrack();
  is_playing = true;
}

function previousTrack() {
  track_index -= 1;
  if (track_index < 0) track_index = songs_list.length - 1;
  updateTrack();
  loadTrack();
  is_playing = true;
}
