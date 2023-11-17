import axios from "axios";
import React from "react";
import ImageList from "./ImageList";
import SearchInput from "./SearchInput";


class App extends React.Component{
    state = {images:[]}
    onSearchSubmit=async (entry)=>{
      const response= await axios.get(`https://pixabay.com/api/?key=40734881-dfafcc069112441346bf5e41e&q=${entry}&image_type=photo`)
      
      this.setState({images:response.data.hits})
    }
    render(){
    return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit= {this.onSearchSubmit}/>
           <ImageList images = {this.state.images}/>
        </div>
    )
}
}

export default App;