import React from "react";
import { Jumbotron } from "reactstrap";

const DailyPhoto = props => {
    const { date, imageData } = props;
    
    return (
        <Jumbotron className="daily-photo">
        <div className="image-header">
            <h2>Astronomy Photo of the Day for { date }</h2>
        <title>{ imageData.title }</title>
        </div>
        <img src={ imageData.url} alt={ imageData.title } />
        <div className="image-explanation">
            <p>{ imageData.explanation }</p>
        </div>
    </Jumbotron>
      );
}
export default DailyPhoto;