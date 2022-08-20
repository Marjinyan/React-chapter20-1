import React from 'react'
import Timeline from '../Timeline'

class Slider extends React.Component{
    render(){
        const {photos, currentIndex, goNext, goPrev, setActivePicture}=this.props
        const mainPhoto = photos[currentIndex]
        return <div className="slider">
            <img
                alt="main"
                className="main-photo"
                src={require("../../"+mainPhoto)}
            />
            <div>
                <button onClick={goPrev}>Prev</button>
                <button onClick={goNext}>Next</button>
            </div>
            <Timeline 
                photos={photos} 
                currentIndex = {currentIndex} 
                setActivePicture={setActivePicture}
            />
        </div>
    }

}
export default Slider