import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';
class AlbumList extends Component {
  state = { albums: []};
  componentWillMount() {
    let me = this;
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
     .then( response=>{
        return response.json();
     }).then(json => {
      //  console.log(json);
        me.setState({albums: json});
     }).catch(err=> {
       console.log(err);
     })
  }

  renderAlbums() {
    return this.state.albums.map((album,index)=> (
    <AlbumDetail key={index} album={album}/>));
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;