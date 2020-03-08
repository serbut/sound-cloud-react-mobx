import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';
import {getSearchTracksByTagRequest} from '../api';

export const GENRES_MAP = {
  ambient: 'Ambient',
  deephouse: 'Deep House',
  electronic: 'Electronic',
  house: 'House',
  techno: 'Techno',
  trap: 'Trap',
  'hiphop': 'Hip Hop',
  dance: 'Dance',
  pop: 'Pop',
  'drum&bass': 'Drum & Bass'
};

const GENRES_LIST = [];

for (var key in GENRES_MAP) {
  GENRES_LIST.push(key);
}

@inject('viewStore')
@observer
export default class Explore extends Component {

  componentDidMount() {
    this.props.viewStore.title = 'Explore';

    if (!this.props.params.genre) {
      this.props.router.replace(`/explore/${GENRES_LIST[0]}`);
    }
  }

  handleChange = (e, i) => {
    this.props.router.push(`/explore/${GENRES_LIST[i]}`);
  };

  render() {
    const { params } = this.props;
    const currentTabIndex = GENRES_LIST.indexOf(params.genre);

    if (!params.genre) {
      return null;
    }

    const {url, params: requestParams} = getSearchTracksByTagRequest(params.genre);

    return (
      <div>
        <div className='app-toolbar'>
          {currentTabIndex !== -1 && <Tabs textColor='accent' index={currentTabIndex} onChange={this.handleChange}>
            {GENRES_LIST.map((el, i) => <Tab key={i} label={GENRES_MAP[el]} />)}
          </Tabs>}
        </div>

        <div className='container' style={{ paddingTop: 48 + 48 }}>
          <DataLoader
            url={url}
            params={requestParams}
            render={(props) =>
              <DataGrid {...props} />
            }
          />
        </div>
      </div>
    );
  }
}
