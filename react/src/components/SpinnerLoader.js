import { useEffect, useState } from 'react'

const SpinnerLoader=()=> {

    const [text, setText] = useState('')
    const [showImg, setShowImg] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowImg(false)
            setText('One Moment Please')
        }, 3000)
    }, [])

    return(

        <div>
            {
                showImg ? (
                    <img src='/images/spin.gif' alt="" />
                ) : (
                    <h3>{text}</h3>
                )
            }
        </div>
    )
}

export default SpinnerLoader