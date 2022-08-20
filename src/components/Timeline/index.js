import React from 'react'

class Timeline extends React.Component{
    render(){
        const {photos, currentIndex, setActivePicture} = this.props
        return <div className="photo-list">
            {
                photos.map((elm, index) => {
                    let activeImg = index === currentIndex ? "active" : null
                    return <img 
                        className={activeImg} 
                        alt="timeline item" 
                        key={index} 
                        src={require('../../'+elm)}
                        onClick={() => setActivePicture(index)}
                    />
                })
            }
        </div>
    }
}
export default Timeline