import React from "react";
import {CarouselItem} from "./Carousel-item/Carousel-item";
import {ClassCarouselItem} from "../../../class/HomePage/ClassCarouselItem";

export function Carousel(){
    const mushokuTenSeiImg:string = require("./../../../images/books/1.png");
    const reZeroImg : string = require("./../../../images/books/2.jpg")
    const listImg:ClassCarouselItem [] = [];
    listImg.push(new ClassCarouselItem(mushokuTenSeiImg, "That nghiep chuyen sinh", "hay"));
    listImg.push(new ClassCarouselItem(reZeroImg, "Chuyen sinh tu con so 0", "hay"));

    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    {listImg.map((carouselItem,index) => (
                        <CarouselItem carouselItem = {carouselItem} isFirst={index === 0} key = {index}/>))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );

}