import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { PlaylistPlay } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_SIZES } from '../../constants';
import { getImageUrl } from '../../utils';
import './PlaylistCard.less';

const PlaylistCard = ({ playlist }) => {
    const link = `/users/${playlist.user.permalink}/playlists/${playlist.permalink}`;

    return (
        <Card className="playlist-card">
            <CardMedia className="playlist-card__media">
                <Link to={link}>
                    <img
                        src={getImageUrl(
                            playlist.artwork_url,
                            IMAGE_SIZES.t500x500
                        )}
                        alt={playlist.title}
                    />
                    <div className="playlist-card__overlay">
                        <Typography
                            type="subtitle"
                            color="inherit"
                            style={{ marginRight: 4 }}
                        >
                            {playlist.track_count}
                        </Typography>
                        <PlaylistPlay />
                    </div>
                </Link>
            </CardMedia>
            <CardContent>
                <Typography type="subtitle" noWrap title={playlist.title}>
                    <Link to={link} className="link">
                        {playlist.title}
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PlaylistCard;
