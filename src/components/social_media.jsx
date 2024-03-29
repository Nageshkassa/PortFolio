import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Social_media = () => {
  const { data } = useGlobalContext();

  useEffect(() => {
    if (data && data.user) {
      console.log("fetched data from social media");
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="social_media_main" id="social_media_main">
        <ul className="social_media">
          {data.user.social_handles.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank">
                {/* {item.platform} */}
                <img
                  src={item.image.url}
                  alt={item.platform}
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Social_media;
