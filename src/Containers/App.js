import {React, Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox' ;
import './App.css'
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

class App extends Component{
    constructor(){
        super()
        // STATE
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    // used for fetching data from API
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots : users}))
         }



    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        
        const filteredRobots=this.state.robots.filter(robots=>{
            //  robots ke name mein .........  search field m jo hm daalenge vo hai ya nhi
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);

        if(this.state.robots.length===0){
            return <h1 className='tc'>Loading !!</h1>
        }
        else{
        return(
        <div className='tc'>      
            <h1 className='f1'>RoboFriends</h1>  
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
            <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
        </div>
    );
        }
    }
}
 




export default App;