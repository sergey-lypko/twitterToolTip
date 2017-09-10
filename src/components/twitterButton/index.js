export default function injectTwitterButton({ idDOM, prePopulatedText }) {
  const widget = twttr.widgets.createShareButton(
    "https:\/\/dev.twitter.com\/web\/tweet-button",
    document.getElementById(idDOM),
    {
      size: "large",
      text: prePopulatedText,
      hashtags: "example,demo",
      via: "twitterdev",
      related: "twitterapi,twitter"
    }
  )

  return Promise.resolve(widget)
}
