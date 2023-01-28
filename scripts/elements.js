// Elements:

const trackStatus = document.querySelector(".song-status");
const trackCoverContainer = document.querySelector(".song-image-container");
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
