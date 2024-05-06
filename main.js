const videoContainer = document.querySelector(".video-container")
const playPauseBtn = document.querySelector(".playPauseBtn")
const progress = document.querySelector(".progress")
const progressBar = document.querySelector(".progress__filled")

function togglePlay() {
  if (videoContainer.paused || videoContainer.ended) {
    videoContainer.play()
  } else {
    videoContainer.pause()
  }
}
function updatePlayBtn() {
  playPauseBtn.innerHTML = videoContainer.paused ? "►" : "❚❚"
}
playPauseBtn.addEventListener("click", togglePlay)
videoContainer.addEventListener("click", togglePlay)
videoContainer.addEventListener("play", updatePlayBtn)
videoContainer.addEventListener("pause", updatePlayBtn)
videoContainer.addEventListener("timeupdate", handleProgress)
