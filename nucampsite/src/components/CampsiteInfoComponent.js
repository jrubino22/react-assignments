import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.props.comments.map(comments => {
                        return (<div key={comments.id}>
                                <p>{comments.text}</p>
                                <p>{comments.author}, {comments.date}</p>

                        </div>
                        )
                    })}
                </div>
            )
        }else{
            <div/>
        }
    }

    render() {
        if (this.props.campsite) {
            return (
                <div>
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                </div>
                <div className="row">
                    {this.renderComments(this.props.campsite.comments)}
                </div>
                </div>
            )
        } else {
            return <div />
        }
    }


}

export default CampsiteInfo