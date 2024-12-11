import { useState } from "react";
import axios from "axios";

export default function PhotosUploader({photos, onChange}) {


    function removePhoto(e, filename) {
        e.preventDefault()
        onChange([...photos.filter(p => p !== filename)]);
    }

    function selectAsMainPhoto(e, filename) {
        e.preventDefault()
        onChange([filename, ...photos.filter(p => p !== filename)])
    }

    return (
        <div className="w-full mt-8">
            <h2 className="text-accent2 text-2xl font-bold mb-2 text-center">Characters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {photos.length > 0 && (
                    photos.map((link, index) => (
                    <div key={index} className=" relative aspect-square">
                        <img src={'characters/'+link} alt="" className="object-cover h-full w-full"/>
                        <button onClick={(e) => removePhoto(e, link)} className="absolute right-2 top-2 danger cursor-pointer rounded-lg py-1 px-1 text-sm lg:py-2">
                            <i className="fi fi-rr-trash-xmark px-1"></i>
                            <span className="hidden lg:inline">Remove</span>
                        </button>
                        {/* <div onClick={(e) => selectAsMainPhoto(e, link)} className="absolute left-2 top-2">
                            {link !== photos[0] && (
                                <button className="primary cursor-pointer rounded-lg py-1 px-1 text-sm lg:py-2">
                                    <i className="fi fi-rr-star px-1"></i>
                                    <span className="hidden lg:inline">Main</span>
                                </button>
                            )}       
                        </div> */}
                    </div>
                    ))
                )}
            </div>
        </div>
    )
}