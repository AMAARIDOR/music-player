// Counter Variables:

let track_index = 0;
let is_playing = false;

// Functions:

function changeTrack() {
  audio_element.src = songs_list[track_index].path;
}

function loopTracks() {
  if (track_index === songs_list.length) {
    track_index = 0;
  } else if (track_index < 0) {
    track_index = songs_list.length - 1;
  }
}

function nextTrack() {
  track_index += 1;
  loopTracks();
  changeTrack();
  console.log(audio_element.src);
}

function previousTrack() {
  track_index -= 1;
  loopTracks();
  changeTrack();
  console.log(audio_element.src);
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
