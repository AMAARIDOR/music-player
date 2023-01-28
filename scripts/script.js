// Counter Variables:

let track_index = 0;
let is_playing = false;

// Functions:

function nextTrack() {
  if (track_index >= 0) track_index += 1;
  // console.log(track_index);
}

function previousTrack() {
  if (track_index > 0) track_index -= 1;
  // console.log(track_index);
}

// Event Handlers:

next_button.addEventListener("click", () => {
  nextTrack();
});

previous_button.addEventListener("click", () => {
  previousTrack();
});

play_pause_button.addEventListener("click", () => {
  if (!is_playing) {
    // console.log("Play Track");
    is_playing = true;
  } else {
    // console.log("Pause Track");
    is_playing = false;
  }
});
