import React, { Component } from 'react';
import Info from './Info';
import AddInfo from './AddInfo';

class Person extends Component {
  state ={
      infos: [
      { name: 'Ragnar', birthday:'24 May 1947', aboutMe:'I love playing Cricket', id: 1 },
      { name: 'Lagartha', birthday:'10 August 1987', aboutMe:'I love to Dance', id: 2 },
      { name: 'Bjorn', birthday:'28 January 1997', aboutMe:'I love playing Football', id: 3 },
     { name: 'Helga', birthday:'31 September 2000', aboutMe:'I love playing Chess', id: 4 },
    { name: 'Floki', birthday:'23 January 2001', aboutMe:'I love playing Football', id: 5 }
    ]
  }
  deleteInfo = (id)=>{
      //console.log(id);
      let infos = this.state.infos.filter(info=>{
          return info.id!==id;
      })
      console.log('After Deleting',infos);
      this.setState({
          infos
      })
  }
  addInfo = (info) => {
    console.log('Inside App Component', info);
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
    let infos = [...this.state.infos, info];
    this.setState({
      infos
    })
  }
  componentDidMount(){
      console.log('Component has been mounted');
  }
componentDidUpdate(prevProps, prevState){
    console.log("Component updated");
    console.log(prevProps, prevState);
}
  render(){
      return (
        <div className="App container">
          <h4 className="center a">Information of People</h4><br />
          <Info infos={this.state.infos} deleteInfo={this.deleteInfo}/><br />
          <h5 className="a">Add Person Details</h5><br/>
          <AddInfo addInfo={this.addInfo} />
        </div>
      );
  }
}

export default Person;
// ... spread operator to create a copy