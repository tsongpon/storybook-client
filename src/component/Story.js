import React, { Component } from 'react';
import { getStory } from '../util/StoryAPI'
import Photo from './Photo'

export default class Story extends Component {
    constructor(props) {
        super(props)
        this.storyId = props.match.params.id
        this.state = {
            story: {}
        }
    }

    componentDidMount() {
        getStory(this.storyId).then(data => {
            this.setState({
                story: data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header font-weight-bold">
                        {this.state.story.title}
                    </div>
                    <div className="card-body">
                        <p style={{'whiteSpace':'pre-line'}} className="card-text">{this.state.story.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}