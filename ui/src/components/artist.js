import React, { Component } from 'react';
import Header from './header';
import AlbumsList from './albumsList';
const REQ_URL = `http://localhost:5000/artist`;


class Artist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: ''
        }
    }

    componentDidMount() {
      


        fetch(`${REQ_URL}/${this.props.match.params.id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {

                this.setState({
                    artist: json
                })
            }
            )
    }
    render() {
        //console.log(this.state.artist)
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                    
                        <span style={{ background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat` }}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumsList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;