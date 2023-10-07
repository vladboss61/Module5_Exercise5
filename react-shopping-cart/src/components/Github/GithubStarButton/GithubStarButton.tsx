const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Leave a star on Github if this repository was useful :)</small>
    </p>
    <a
      className="github-button"
      href="https://github.com/vladboss61/Module5_Exercise5"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;
