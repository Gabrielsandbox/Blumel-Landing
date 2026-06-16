(() => {
  const selector = "video[data-lock-seeking]";
  const pendingPlay = new Set();

  function playWithAudio(video) {
    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;
    video.controls = false;

    const playAttempt = video.play();
    if (playAttempt?.catch) {
      playAttempt
        .then(() => pendingPlay.delete(video))
        .catch(() => pendingPlay.add(video));
    }
  }

  function retryPendingVideos() {
    pendingPlay.forEach(playWithAudio);
  }

  function lockVideo(video) {
    if (video.dataset.lockSeekingReady === "true") return;

    video.dataset.lockSeekingReady = "true";
    let allowedTime = 0;

    video.addEventListener("timeupdate", () => {
      if (!video.seeking) allowedTime = video.currentTime;
    });

    video.addEventListener("seeking", () => {
      if (Math.abs(video.currentTime - allowedTime) > 0.35) {
        video.currentTime = allowedTime;
      }
    });

    playWithAudio(video);
  }

  function lockAllVideos() {
    document.querySelectorAll(selector).forEach(lockVideo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", lockAllVideos, { once: true });
  } else {
    lockAllVideos();
  }

  new MutationObserver(lockAllVideos).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  document.addEventListener("pointerdown", retryPendingVideos, { passive: true });
  document.addEventListener("keydown", retryPendingVideos);
})();
