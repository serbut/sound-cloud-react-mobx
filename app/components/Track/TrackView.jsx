import { Chip, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { getTags } from "../../utils";
import Comments from "../Comments/Comments";
import TrackHeader from "./TrackHeader";

const TrackView = ({ track, history }) => {
  const handleTagClick = q => {
    const searchParams = new URLSearchParams();
    searchParams.append("q", q);
    searchParams.append("where", "tracks");

    history.push({
      pathname: `/search`,
      search: searchParams.toString()
    });
  };

  return (
    <div className="animated fadeIn">
      <TrackHeader track={track}></TrackHeader>

      <div className="container">
        {track.description && (
          <pre>
            <Typography>{track.description}</Typography>
          </pre>
        )}
        {track.tag_list && (
          <div className="track-tags">
            {getTags(track.tag_list).map((el, i) => (
              <Chip
                key={i}
                label={el}
                style={{ margin: 4 }}
                onClick={e => handleTagClick(el)}
              />
            ))}
          </div>
        )}

        <Comments trackId={track.id} />
      </div>
    </div>
  );
};

export default observer(TrackView);
