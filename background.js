chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var found = details.url.match(/news(|\d{2})\.php#(\d+)/);
    if (found) {
      var id = found[2];
      var redirect_url = "http://lovelive-anime.jp/uranohoshi/news.php?id=" + id;
      return {redirectUrl: redirect_url };
    } else {
      return {};
    }
  },
  {
    urls: ["*://www.lovelive-anime.jp/uranohoshi/news*"],
    types: ["main_frame"]
  },
  ["blocking"]
);
