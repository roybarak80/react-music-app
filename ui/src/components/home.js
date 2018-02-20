import React ,{ Component } from 'react';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArtists } from '../actions'

import { bindActionCreators } from 'redux';

class Home extends Component {



    componentDidMount(){
       
        this.props.getArtists()
    }

    renderArtists = ({artists_list}) => {
        if(artists_list){
          return artists_list.map((item)=>{
            const style = {
                background:`url('/images/covers/${item.cover}.jpg') no-repeat`
            }
           return <Link key={item.id} to={`/artist/${item.url_name}`}
            className="artist_item"
            style={style}
            >
          <div>{item.name}</div>
           </Link>
          })
        }
      }

    render (){
        //console.log(this.state.artists)
        return (
            <div>
                <Banner/>
                <div className="artists_list">
                  <h4>Browse the Artists</h4>
                  {this.renderArtists(this.props.artists)} 

                  </div>
               
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log(state)
      return {
          artists:state.artists,
         
      }
  }
  
  function mapDispatchToProps(dispatch){
      return bindActionCreators({getArtists}, dispatch);
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home)

  
