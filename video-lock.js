(() => {
  const selector = "video[data-lock-seeking]";

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
})();
