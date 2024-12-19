import React from "react";

export function Banner(){
    return (
        <>
            <div className={"p-5 mb-4 bg-dark"}>
                <div className={"container-fluid py-5 text-white d-flex " +
                    "justify-content-center align-items-center"}>
                    <div>
                        <h3 className={"display-5"}>
                           <p className={"fw-bold"}>
                               Đọc sách chính là hộ chiếu <br/>
                               cho vô số cuộc phiêu
                           </p>
                            <button className={"btn btn-primary float-end mt-2"}>Khám phá gian hàng sách tại đây</button>
                        </h3>
                    </div>
                </div>

            </div>
        </>
    )
}