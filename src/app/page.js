'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [selectedRate, setSelectedRate] = useState(0)
  const [isSubmited, setSubmit] = useState(false)

  return (
    <main className="w-[90%] max-w-[412px] p-6 lg:p-8 bg-gradient-to-b from-[#232A34] to-[#181E27] rounded-[15px]">
      <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-[#262E38] rounded-full">
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          width={16}
          height={16}
          src="/images/icon-star.svg"
        />
      </div>
      <h1 className="mt-4 text-2xl text-[28px] font-bold">How did we do?</h1>
      <p className="text-[#969FAD] mt-[7px] text-sm lg:text-[15px] leading-[22px] lg:leading-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
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
      {selectedRate !== 0 ? (
        <Link
          href={{
            pathname: '/success',
            query: {
              selectedRate: selectedRate,
            },
          }}
        >
          <button
            onClick={() => setSubmit(true)}
            className="bg-orange hover:bg-white hover:text-orange w-full mt-6 rounded-[22.5px] py-3 uppercase tracking-[1.867px]"
          >
            Submit
          </button>
        </Link>
      ) : (
        <button className="bg-orange hover:bg-white hover:text-orange w-full mt-6 rounded-[22.5px] py-3 uppercase tracking-[1.867px]">
          Submit
        </button>
      )}
    </main>
  )
}
