import React from "react";
import {ClassCarouselItem} from "../../../../class/HomePage/ClassCarouselItem";

interface CarouselItemProps {
    carouselItem: ClassCarouselItem,
    isFirst: boolean
}

export function CarouselItem({carouselItem, isFirst}: CarouselItemProps) {
    return (
        <div className={`carousel-item ${isFirst ? "active" : ""}`} data-bs-interval="10000">
            <div className="row align-items-center">
                <div className="col-5 text-center">
                    <img src={carouselItem.hinhAnh} className="float-end" style={{width: '150px'}}/>
                </div>
                <div className="col-7">
                    <h5>{carouselItem.label}</h5>
                    <p>{carouselItem.des}</p>
                </div>
            </div>
        </div>

    )
}