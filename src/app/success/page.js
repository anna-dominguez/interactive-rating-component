import Image from 'next/image'
import React from 'react'

export default function Success({ searchParams }) {
  return (
    <main className="flex flex-col items-center w-[90%] max-w-[412px] p-6 lg:p-8 bg-gradient-to-b from-[#232A34] to-[#181E27] rounded-[15px]">
      <Image
        width={140}
        height={96}
        src="/images/illustration-thank-you.svg"
        alt="Thank you illustration"
      />
      <p className="text-orange bg-[#262E38] mt-6 py-[5px] lg:py-1 px-3 lg:px-5 rounded-[22.5px]">
        You selected {searchParams.selectedRate} out of 5
      </p>
      <h2 className="mt-8 text-2xl lg:text-[28px] font-bold">Thank you!</h2>
      <p className="lg:mt-[7px] mt-2.5 text-center text-sm lg:text-[15px] text-[#969FAD]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  )
}
