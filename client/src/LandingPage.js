import React from 'react'

export default function LandingPage() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font pt-28  h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded-xl" alt="track-emp img" src="/Images/track-emp.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About us...
            <br className="hidden lg:inline-block" />Generating random paragraphs can be an excellent way!
          </h1>
          <p className="mb-8 leading-relaxed">Note - The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Admin</button>
            <a href="https://forms.gle/741DLjmi8Ukmtfr87" target={'_blank'} rel="noreferrer">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Employee</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
