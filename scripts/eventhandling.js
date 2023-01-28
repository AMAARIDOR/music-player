next_button.addEventListener("click", nextTrack);

previous_button.addEventListener("click", previousTrack);

play_pause_button.addEventListener("click", () => {
  if (!is_playing) {
    is_playing = true;
    loadTrack();
  } else {
    is_playing = false;
    pauseTrack();
  }
});
