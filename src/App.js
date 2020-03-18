import React, {Component} from 'react';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {"title":"title1","detail":"detail1"},
                {"title":"title2","detail":"detail2"},
                {"title":"title3","detail":"detail3"},
            ],
            title: "stateTitle",
            detail: "stateDetail"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log("yo")
    }

    render(){
    console.log(this.state.list)
    const displayList = this.state.list.map( (listItem) =>
        <li>{listItem.title} == {listItem.detail}</li>
    )

        return (
            <div>
                <header>
                    <form className="addNewItem">
                        <label>
                            title:
                            <input type="text"
                            />
                        <label>
                        </label>
                            detail:
                            <input type="text"/>
                        </label>
                        <button
                        onClick={this.handleClick}
                        />
                    </form>
                </header>
                <br></br>
                {displayList}
            </div>
        )
    }
}

export default App;
