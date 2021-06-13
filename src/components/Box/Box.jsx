import { ReactComponent as InstagramLogo } from "../Icons/Instagram.svg";
import { ReactComponent as YoutubeLogo } from "../Icons/Youtube.svg";
import { ReactComponent as TwitterLogo } from "../Icons/Twitter.svg";
import "./Box.scss";
import Spinner from "../Loaders/Spinner/Spinner";
function Box({ title, followers, user, isLoading }) {
  return (
    <div className={`box ${title.toLowerCase()}`}>
      <div className="box-header">
        {title === "Instagram" ? (
          <InstagramLogo />
        ) : title === "Youtube" ? (
          <YoutubeLogo />
        ) : title === "Twitter" ? (
          <TwitterLogo />
        ) : (
          title
        )}
        <h2>{user}</h2>
      </div>
      {!isLoading ? (
        <>
          <div className="box-body">
            <span className="number">{followers.toLocaleString("en-US")}</span>
            <span className="text">followers</span>
          </div>
        </>
      ) : (
        <Spinner variant={title.toLowerCase()} />
      )}
      <div className="box-footer">
        <button className={"p-btn p-btn-" + title.toLowerCase()}>Edit</button>
      </div>
    </div>
  );
}

export default Box;
