import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-15/20">
                        <img
                            src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            <b>Apni Kalam</b>  <br />
                            <h4 className="text-2xl font-normal italic">Apni Kalam – Where Words Find Their Voice</h4>

                        </h2>
                        <p className="mt-6 text-gray-600">
                       At Apni Kalam, we believe that words have the power to heal, inspire, and transform lives.
This platform is not just about writing—it’s about expressing.
                        </p>

                        <p className='mt-6 text-gray-600'>
                    Whether it’s a heartfelt blog, a motivational thought that pushes you forward, or soulful shayari that touches your heart, Apni Kalam is a voice for every emotion.
                        </p>

                        <p className='mt-6 text-gray-600'>
                    🌿 Here, we celebrate the beauty of words—crafted with honesty, passion, and creativity. Every line we write is meant to connect with you, to remind you that you are not alone in your journey, and to spark the courage to keep moving forward.
                        </p>

                          <p className='mt-6 text-gray-600'>
               ✨ From short quotes that lift your spirit, to deep writings that make you pause and reflect—Apni Kalam is a home for dreamers, thinkers, and believers.
                        </p>

                          <p className='mt-6 text-gray-600'>
       Because sometimes, ek chhoti si line bhi zindagi badal deti hai 💚
                        </p>



                        {/* <p className="mt-4 text-gray-600">
                 <b>Apni Kalam</b> is more than just words  <br />it’s a voice.
A place where shayari meets soul, <br />
where blogs inspire dreams, <br />
and where every motivational thought <br />
becomes a spark of hope.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}