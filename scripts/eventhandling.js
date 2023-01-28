nextButton.addEventListener("click", nextTrack);

previousButton.addEventListener("click", previousTrack);

playPauseButton.addEventListener("click", () => {
  if (!isPlaying) {
    isPlaying = true;
    loadTrack();
  } else {
    isPlaying = false;
    pauseTrack();
  }
});
