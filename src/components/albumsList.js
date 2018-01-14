import React from 'react';
//import { Link } from 'react-router-dom';

const AlbumsList = (props) => {

        const showlist = (props) => {
            console.log(props);
            
        }
        
        return (
         
                 <div className ="albums_list">{showlist(props)}</div>
      
        )
    
    

}

export default AlbumsList;