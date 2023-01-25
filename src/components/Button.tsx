import React from 'react'

type Props = {
  styles: string;
}

function Button({styles}: Props) {

  return (
    <button type="button" className={`rounded-[8px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button