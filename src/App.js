import React, { Component } from 'react';
import Banner from './component/banner/Banner';
import List from './component/list/List';
import './App.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentWillMount = () => {
    fetch('/asserts/summary/index.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          articles: data.articles
        });
      }).catch(e => {
        console.error(e);
      })
  }


  render() {
    return (
      <div>
        <Banner></Banner>
        <ul>
          {
            this.state.articles.map(li => {
              return <List key={li.title} {...li}></List>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
