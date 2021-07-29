import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
        
    }
    handleBitRateButton = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionButton = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitRateButton}>Change Bitrate</button>
                <button className= "resolution" onClick={this.handleResolutionButton}>Change Resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;

