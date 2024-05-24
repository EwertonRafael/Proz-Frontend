document.getElementById("video-link").addEventListener("click", function() {
  const videoContainer = document.getElementById("video-container");
  if (videoContainer.style.display === "none") {
    videoContainer.style.display = "block";
  } else {
    videoContainer.style.display = "none";
  }
});
