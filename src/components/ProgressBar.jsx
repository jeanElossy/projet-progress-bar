import React from 'react'

const ProgressBar = ({ item, className }) => {

    let xpYear = 2;
    let progressBar = item.xp / xpYear * 100 + '%'

    return (
        <div className={className}>

            <div>
                {
                    <div className='languageList'>
                        <div className='value mt-3 mb-2'>{item.value}</div>
                        <div className="progressBar" style={{width:progressBar}}>
                            
                        </div>
                    </div>
                    
                }
            </div>
        </div>
    )
}

export default ProgressBar;
