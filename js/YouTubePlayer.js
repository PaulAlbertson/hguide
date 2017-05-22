// Dynamic <script> tag insertion will load the iframe Player API on demand.
var scriptTag = document.createElement('script');
// This scheme-relative URL will use HTTPS if the host page is accessed via HTTPS,
// and HTTP otherwise.
scriptTag.src = '//www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

// This code handles the situation where multiple ChapterMarkerPlayer.insert() calls are made
// before the iframe Player API has loaded. The code does so by maintaining an array of
// functions, each of which adds a specific player and chapters. The functions will be
// executed when onYouTubePlayerAPIReady() is invoked by the API.
window.ChapterMarkerPlayer.onYouTubePlayerAPIReadyCallbacks.push(function() {
  insertPlayerAndAddChapterMarkers(params);
});

window.onYouTubePlayerAPIReady = function() {
  for (var i = 0; i < window.ChapterMarkerPlayer.onYouTubePlayerAPIReadyCallbacks.length; i++) {
    window.ChapterMarkerPlayer.onYouTubePlayerAPIReadyCallbacks[i]();
  }
};

// Calls the YT.Player constructor with the appropriate options to add the iframe player
// instance to a parent element.
// This is a private method that isn't exposed via the ChapterMarkerPlayer namespace.
function initializePlayer(containerElement, params) {
  var playerContainer = document.createElement('div');
  containerElement.appendChild(playerContainer);

  // Attempt to use any custom player options that were passed in via params.playerOptions.
  // Fall back to reasonable defaults as needed.
  var playerOptions = params.playerOptions || {};
  return new YT.Player(playerContainer, {
    // Maintain a 16:9 aspect ratio for the player based on the width passed in via params.
    // Override can be done via params.playerOptions if needed
    height: playerOptions.height ||
        width * PLAYER_HEIGHT_TO_WIDTH_RATIO + YOUTUBE_CONTROLS_HEIGHT,
    width: playerOptions.width || width,
    // Unless playerVars are explicitly provided, use a reasonable default of { autohide: 1 },
    // which hides the controls when the mouse isn't over the player.
    playerVars: playerOptions.playerVars || { autohide: 1 },
    videoId: params.videoId,
    events: {
      onReady: playerOptions.onReady,
      onStateChange: playerOptions.onStateChange,
      onPlaybackQualityChange: playerOptions.onPlaybackQualityChange,
      onError: playerOptions.onError
    }
  });
}
