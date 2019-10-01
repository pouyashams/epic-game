import React from 'react';
import videoGame from "../../images/video.mp4"

const Navbar = () => {

    return (
        <div>

            <header>
                <div class="overlay"></div>
                <video className=" size" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={videoGame} type="video/mp4"/>
                </video>
                <div class="container mr-5 h-10">
                    <div class="d-flex  text-center h-10">
                        <div class="my-auto  justify-content-center w-100 text-white py-3 px-5">

                                <div className="rtl  color-nav border border-dark rcorners  row col-6 justify-content-center py-2  blur">
                                    <button className="btn font-weight-bold border-0 text-light btn-outline-primary  my-2 my-sm-0" type="submit">خانه</button>
                                    <button className="btn border-0 text-light btn-outline-primary font-weight-bold btn-outline-primary my-2 my-sm-0" type="submit">گیفت کارت</button>
                                    <button className="btn border-0 font-weight-bold text-light btn-outline-primary text-light my-2 my-sm-0" type="submit">اکانت ترکیبی</button>
                                    <button className="btn border-0 font-weight-bold text-light btn-outline-primary my-2 my-sm-0" type="submit">آموزش</button>
                                    <button className="btn border-0 font-weight-bold text-light btn-outline-primary my-2 my-sm-0" type="submit">تلگرام</button>
                                    <button className="btn border-0 font-weight-bold text-light btn-outline-primary my-2 my-sm-0" type="submit">تماس با ما</button>
                                </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>


    );
};

export default Navbar;
