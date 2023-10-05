'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedRate, setSelectedRate] = useState(0)
  const [isSubmited, setSubmit] = useState(false)

  return (
    <main className="w-[90%] max-w-[412px] p-6 lg:p-8 bg-gradient-to-b from-[#232A34] to-[#181E27] rounded-[15px]">
      {!isSubmited ? (
        <>
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-[#262E38] rounded-full">
            <Image
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={16}
              height={16}
              src="/images/icon-star.svg"
            />
          </div>
          <h1 className="mt-4 text-2xl text-[28px] font-bold">
            How did we do?
          </h1>
          <p className="text-[#969FAD] mt-[7px] text-sm lg:text-[15px] leading-[22px] lg:leading-6">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex mt-6 w-full justify-between">
            {[1, 2, 3, 4, 5].map((rate) => (
              <p
                key={`rate-${rate}`}
                onClick={() => setSelectedRate(rate)}
                className={`font-bold flex items-center justify-center w-[41px] h-[42px] lg:w-[51px] lg:h-[51px]
              rounded-full text-[#7C8798] cursor-pointer ${
                selectedRate === rate
                  ? 'bg-[#7C8798] text-white'
                  : 'bg-[#262E38] hover:bg-orange hover:text-white'
              }`}
              >
                {rate}
              </p>
            ))}
          </div>
          <button
            onClick={() => selectedRate !== 0 && setSubmit(true)}
            className="bg-orange hover:bg-white hover:text-orange w-full mt-6 rounded-[22.5px] py-3 uppercase tracking-[1.867px]"
          >
            Submit
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <Image
            width={140}
            height={96}
            src="/images/illustration-thank-you.svg"
            alt="Thank you illustration"
          />
          <p className="text-orange bg-[#262E38] mt-6 py-[5px] lg:py-1 px-3 lg:px-5 rounded-[22.5px]">
            You selected {selectedRate} out of 5
          </p>
          <h2 className="mt-8 text-2xl lg:text-[28px] font-bold">Thank you!</h2>
          <p className="lg:mt-[7px] mt-2.5 text-center text-sm lg:text-[15px] text-[#969FAD]">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </main>
  )
}
