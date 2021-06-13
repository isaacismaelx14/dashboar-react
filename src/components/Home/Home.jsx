import { useEffect, useState } from "react";
import {
  conectToYoutube,
  conectToInstagram,
  conectToTwitter,
} from "../../services/social.service";
import Box from "../Box";
import "./Home.scss";
function Home() {
  const [youtubeUser, setYoutubeUser] = useState(undefined);
  const [instagramUser, setInstagramUser] = useState(undefined);
  const [twitterUser, setTwitterUser] = useState(undefined);
  useEffect(() => {
    conectToYoutube("UC5WjFrtBdufl6CZojX3D8dQ").then(setYoutubeUser);
    conectToInstagram("teslamotors").then(setInstagramUser);
    conectToTwitter("tesla").then(setTwitterUser);
  }, []);
  return (
    <main data-testid="MainComponent" className="HomePage">
      <div className="p-container home-container">
        <div className="box-container">
          {[youtubeUser, instagramUser, twitterUser].map((user, index) => {
            return (
              <Box
                title={
                  index === 0
                    ? "Youtube"
                    : index === 1
                    ? "Instagram"
                    : "Twitter"
                }
                followers={user?.followers}
                user={user?.name}
                url={user?.pic_url}
                key={index}
                isLoading={!user ? true : false}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Home;
