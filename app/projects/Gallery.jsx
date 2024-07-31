
"use client"
import data from './data'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import { ArrowBigLeftDashIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
function Gallery() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <div>
            <div className=' mt-8 sm:px-20 md:px-20 px-5'>
                <h1 className='px-5 md:p-2 text-5xl font-black text-blue-700'>Gallery </h1>
                <div className="w-100 navigation-wrapper mt-8 py-8 px-10 border rounded-lg">
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                        <div className="keen-slider__slide p-5"><img src="games.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                        <div className="keen-slider__slide p-5"><img src="senior.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                        <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                        <div className="keen-slider__slide p-5"><img src="gym.jpg" className="w-full h-50 border rounded-md" alt="" /></div>
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}
                </div>
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}


function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default Gallery