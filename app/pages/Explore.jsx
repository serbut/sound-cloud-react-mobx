import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Tabs from 'material-ui/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import DataGrid from '../components/DataGrid';
import DataLoader from '../hoc/DataLoader';

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

@inject('viewStore') @observer
class Explore extends Component {

  componentDidMount() {
    this.props.viewStore.title = 'Explore';
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.genre !== this.props.params.genre)
      this.load(nextProps);
  }

  load({params, router}) {
    if (!params.genre)
      router.replace(`/explore/${GENRES_LIST[0]}`);
    else {
      this.props.clearData();
      this.props.loadData('/tracks', { tags: params.genre });
    }
  }

  handleChange = (e, i) => {
    this.props.router.push(`/explore/${GENRES_LIST[i]}`);
  };

  render() {
    const { params, data, isLoading, isLastPage, loadMore } = this.props;
    let index = GENRES_LIST.indexOf(params.genre);
    index = index === -1 ? 0 : index;

    return (
      <div>
        <div className='app-toolbar'>
          <Tabs textColor='accent' index={index} onChange={this.handleChange}>
            {GENRES_LIST.map((el, i) => <Tab key={i} label={GENRES_MAP[el]} />)}
          </Tabs>
        </div>

        <div className='container' style={{ paddingTop: 48 + 48 }}>
          <DataGrid data={data} isLoading={isLoading} isLastPage={isLastPage} loadMore={loadMore} />
        </div>
      </div>
    );
  }
}

export default DataLoader(Explore);
