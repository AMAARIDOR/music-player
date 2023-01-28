"use strict";

// Counter Variables:

let track_index = 0;
let is_playing = false;

// Functions:

function updateTrack() {
  audio_element.src = songs_list[track_index].path;
  track_cover.src = songs_list[track_index].image;
  track_name.textContent = songs_list[track_index].name;
  track_artist.textContent = songs_list[track_index].artist;
}

function nextTrack() {
  track_index += 1;
  if (track_index === songs_list.length) track_index = 0;
  updateTrack();
}

function previousTrack() {
  track_index -= 1;
  if (track_index < 0) track_index = songs_list.length - 1;
  updateTrack();
}

// Event Handlers:

next_button.addEventListener("click", nextTrack);

previous_button.addEventListener("click", previousTrack);

play_pause_button.addEventListener("click", () => {
  if (!is_playing) {
    // console.log("Play Track");
    is_playing = true;
  } else {
    // console.log("Pause Track");
    is_playing = false;
  }
});
