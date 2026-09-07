import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchSuccess: false
        }
    }
    
    componentDidMount() {
        this.hideTimer = setTimeout(() => {
          this.setState({ fetchSuccess: true });
        }, 100); // or 300ms if you want it to animate
    }

    componentWillUnmount() {
        clearTimeout(this.hideTimer);
    }

    render() {
        const classNamess = this.state.fetchSuccess ? 'd-none' : '';
        return (
            <div className={`${classNamess}`}>
                <div className="preloader d-flex align-items-center justify-content-center"> <div className="cssload-container"> <div className="cssload-loading"><i /><i /><i /><i /></div> </div> </div>
            </div>
        );
    }
}

export default Preloader;
