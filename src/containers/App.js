import React, { Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			searchField: ''
		}
	};

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
		   .then(response => response.json())
		   .then(users => this.setState({friends: users}));
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value});
	}
	render () {
		const { friends, searchField } = this.state;

		const filteredFriends = friends.filter(friend => {
			return friend.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return !friends.length ?
		   <h1 className='tc'>Loading</h1> :
	       (
		      <div className = 'tc'>
		          <h1 className='f1'>Friends</h1>
		          <SearchBox searchChange={this.onSearchChange}/>
		          <Scroll>
		          <CardList friends={filteredFriends} />
		          </Scroll>
		      </div>
	       )
    }
}

export default App;
