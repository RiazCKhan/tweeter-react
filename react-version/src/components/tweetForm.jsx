const TweetForm = () => {
  const text = "What are you humming about?"
  
  const PreventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <section className="newtweet">
      <form onSubmit={PreventDefault} method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={text}></textarea>
        <input onClick={PreventDefault} type="submit" value="Tweet" className="form__input" />
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;