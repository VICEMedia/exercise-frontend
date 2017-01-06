import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import SelectedVideo from './SelectedVideo';

class Display extends React.Component {
  constructor(){
    super();

    this.fetchData = this.fetchData.bind(this);
    this.generateData = this.generateData.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);

    this.generateData();

    this.state = {
      videoList: [],
      videoId: null,
      title: null,
      episodes: null,
      thumbnail: null,
      listPopulated: false
    };
  }

generateData () {
  axios.get('/shows.json')
  .then((response) => {
    const res = eval(response.data);
    this.setState({videoList: res});
    this.fetchData();
  })
  .catch((err) => { console.log(err);});
}

fetchData(init) {
  const videoList = this.state.videoList;

  // if no previous ID initialize the data
  if(!this.state.videoId) {
    this.setState({
      videoId:    videoList[0].id,
      title:      videoList[0].title,
      episodes:   videoList[0].episodes,
      thumbnail:  videoList[0].product_image_url,
      listPopulated: true
    });
    const queryInclude = Number(this.props.location.query.id);
    if (queryInclude && queryInclude <= this.state.videoList.length)
      this.changeVideo(queryInclude);
  }
}

changeVideo(id) {
  this.setState({
    videoId:    this.state.videoList[id-1].id,
    title:      this.capitalizeFirstLetter(this.state.videoList[id-1].title),
    episodes:   this.state.videoList[id-1].episodes,
    thumbnail:  this.state.videoList[id-1].product_image_url
  });
}

capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  render(){
    const queryInclude = Number(this.props.location.query.id);
    if (queryInclude !== this.state.videoId && this.state.listPopulated){
      this.changeVideo.bind(this, queryInclude);
    }
    return(
      <div className="mainComponent">
        <SelectedVideo
          image={this.state.thumbnail}
          episodes={this.state.episodes}
          headline={this.state.title}
        />

        <nav>
          <ul>
            {this.state.videoList.map((item) => {
              const param = `/?id=${item.id}`;
              return (
                <Link key={item.id} to={param} >
                  <li onClick={this.changeVideo.bind(this, item.id)}>
                    <img src={item.product_image_url} />
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>

      </div>
    )
  }
}

export default Display;
