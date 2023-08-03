import React from 'react'

const Rank = ({name, entries}) => {
  return (
    <div>
        <div className='white f3 center mt4'>
            {`${name}, your current entry count...`}
        </div>

        <div className='white f1 center'>
            {entries}
        </div>
    </div>
  )
}

export default Rank