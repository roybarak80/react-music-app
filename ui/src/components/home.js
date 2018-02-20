import React ,{ Component } from 'react';
import Banner from '../components/banner';
import ArtistsList from '../components/artistsList';


const URL_ARTISTS ='http://localhost:5000/api'
class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artists:json
            })
            
        })
    }
    render (){
        //console.log(this.state.artists)
        return (
            <div>
                <Banner/>
                <ArtistsList allArtists={this.state.artists}/>
            </div>
        )
    }
}

export default Home;