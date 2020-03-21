import { CircularProgress, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { InfiniteLoader, List, WindowScroller } from 'react-virtualized';
import overscanIndicesGetter from '../defaultOverscanIndicesGetter.js';
import Error from './Error';
import PlaylistCard from './Playlist/PlaylistCard';
import TrackCard from './Track/TrackCard';
import UserCard from './User/UserCard';

const CELL_HEIGHT = 316;
const CELL_WIDTH = 216;
const CELLS_IN_ROW = 5;
const WIDTH = CELL_WIDTH * CELLS_IN_ROW;

const cellStyle = {
    flex: '0 0 auto',
    boxSizing: 'border-box',
    padding: 8,
    width: CELL_WIDTH,
};

const rowStyle = {
    display: 'flex',
};

const listStyle = {
    outline: 'none',
};

const loaderContainerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const DataGrid = ({ data, isLoading, isLastPage, error, loadMore }) => {
    if (!data.length && isLoading) {
        return (
            <div className="loader-wrap">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <Error>{error}</Error>;
    }

    if (!data.length && !isLoading && isLastPage) {
        return <Typography variant="h2">Nothing to show</Typography>;
    }

    const loadedRowCount = Math.ceil(data.length / CELLS_IN_ROW);
    const rowCount = isLastPage ? loadedRowCount : loadedRowCount + 1;

    const isRowLoaded = ({ index }) => loadedRowCount > index;

    const rowRenderer = ({ key, index, style }) => {
        const from = index * CELLS_IN_ROW;
        const to = from + CELLS_IN_ROW;
        const rowData = data.slice(from, to);

        if (rowData.length === 0) {
            return (
                <div key={key} style={{ ...style, ...loaderContainerStyle }}>
                    <CircularProgress />
                </div>
            );
        }

        return (
            <div key={key} style={{ ...style, ...rowStyle }}>
                {rowData.map(item => (
                    <div
                        key={item.id}
                        className="animated fadeIn"
                        style={cellStyle}
                    >
                        {item.kind === 'user' ? (
                            <UserCard user={item} />
                        ) : item.kind === 'playlist' ? (
                            <PlaylistCard playlist={item} />
                        ) : item.kind === 'track' ? (
                            <TrackCard track={item} tracks={data} />
                        ) : null}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <WindowScroller>
            {({ height, scrollTop }) => (
                <InfiniteLoader
                    isRowLoaded={isRowLoaded}
                    loadMoreRows={() => loadMore()}
                    rowCount={rowCount}
                    threshold={0}
                >
                    {({ onRowsRendered, registerChild }) => (
                        <List
                            ref={registerChild}
                            onRowsRendered={onRowsRendered}
                            autoHeight
                            height={height}
                            rowCount={rowCount}
                            rowHeight={CELL_HEIGHT}
                            rowRenderer={rowRenderer}
                            scrollTop={scrollTop}
                            width={WIDTH}
                            overscanRowCount={10}
                            overscanIndicesGetter={overscanIndicesGetter}
                            style={listStyle}
                        />
                    )}
                </InfiniteLoader>
            )}
        </WindowScroller>
    );
};

export default observer(DataGrid);
