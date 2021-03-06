import React from 'react';
import { Button } from '@material-ui/core';

import './imageCard.scss';

export default class ImageCard extends React.Component {
    private defaultTitle: string = "Title Here";
    private defaultSubtitle: string = "Subtitle Here";
    private defaultImage: string = "";

    constructor(public props) {
        super(props);
    }

    goToLink(): void {
        if (this.props.link != null) {
            window.location.href = `#${this.props.link}`
        }

        else {
            window.scrollTo({
                top: 600,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    render() {
        return (
            <div className="image-card">
                <img src={this.props.image || this.defaultImage} className="image-image"></img>
                <Button 
                    onClick={this.goToLink.bind(this)}
                    classes={{root: "image-content"}}
                >
                    <div className="image-title">
                        <div className="image-title-text">
                            {this.props.title || this.defaultTitle}
                        </div>
                    </div>
                    <div className="image-subtitle">
                        <div className="image-subtitle-text">
                            {this.props.subtitle || this.defaultSubtitle}
                        </div>
                    </div>
                </Button>
            </div>
        );
    }
}