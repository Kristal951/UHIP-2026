import React from 'react'

interface Props {
    btnText: string;
}

const CTA = ({btnText} : Props) => {
    return (
        <button className='py-2 px-5 rounded-lg bg-gold-600 font-sans text-brown-900 font-bold cursor-pointer'>
            {btnText}
        </button>
    )
}

export default CTA