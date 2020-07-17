import React from "react";

const DailyPhoto = props => {
    const { date, imageData } = props;
    
    return (
        <>
        <div className="image-header">
            <h2>Astronomy Photo of the Day for { date }</h2>
        <title>{ imageData.title }</title>
        </div>
        <img src={ imageData.url} alt={ imageData.title } />
        <div className="image-explanation">
            <p>{ imageData.explanation }</p>
        </div>
    </>
      );
}
export default DailyPhoto;