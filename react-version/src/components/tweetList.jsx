import Tweet from "./tweet"

const TweetList = () => {
  return (
    <section className="tweets">
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={ Tweet.avatar } />
          <h2 className="tweet--name">{ Tweet.lastName }</h2>
          <small className="tweet--handle">{ Tweet.handle }</small>
        </header>

        <div className="tweet--body">
          <p>{ Tweet.body }</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{ Tweet.age }<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
      </article>
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={ Tweet.avatar } />
          <h2 className="tweet--name">{ Tweet.lastName }</h2>
          <small className="tweet--handle">{ Tweet.handle }</small>
        </header>

        <div className="tweet--body">
          <p>{ Tweet.body }</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">{ Tweet.age }<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small></footer>
      </article>

    </section>
  );
}

export default TweetList;