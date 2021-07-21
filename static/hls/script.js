if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('https://raw.githubusercontent.com/revanthstrakz/rasputin-visual-hls/main/master.m3u8');
   // hls.loadSource(video.src); // GC GET VIDEO SRC
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
      video.play();
    });
  }
