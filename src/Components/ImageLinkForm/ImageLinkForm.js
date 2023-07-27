import React from 'react'

const ImageLinkForm = () => {
  return (
    <div>
        <p className="f3 center">
            {'This Magic Brain will detect faces in Your Pictures. Give It a Try!'}
        </p>
        <div>
            <div className='form w-50 br3 pa4 center shadow-5'>
                <input type='text'className="f4 p2 w-70 "/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue pointer">Detect</button>
            </div>
            
        </div>

    </div>
  )
}

export default ImageLinkForm