import React, {Component} from 'react';

require('dotenv').config();

class ColdTemp extends Component {
    state = {
        warmTemp: null,
        loading: false,
        data: [],
    }

    componentDidMount() {
        this.setState({loading: true})
    }


    render () {
        const isBackgroundNormal = true;

        return (
            <div className= {isBackgroundNormal ? 'background-normal' : 'background-cold'}>
                <div className="loading-data">
                    {this.state.loading 
                    ? <p><b>It's cold outside.</b></p>
                    : <div>
                    </div> }
                </div>
            </div>
        )
    }

}

export default ColdTemp;

