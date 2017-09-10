export default function injectTwitterButton(_id, prePopulatedText) {
  return twttr.widgets.createShareButton(
    "https:\/\/dev.twitter.com\/web\/tweet-button",
    document.getElementById(_id),
    {
      size: "large",
      text: prePopulatedText,
      hashtags: "example,demo",
      via: "twitterdev",
      related: "twitterapi,twitter"
    }
  )
}


