import React from 'react';

const Footer = () => {
    return <footer
        className="  navbar navbar-dark bg-dark col-md-12 ml-sm-auto col-lg-12 px-4 shadow">
        <div className="copyright">
            <span className="fa text-center justify-content-center flo fa-copyright m-1"/>
            تمامی حقوق این سایت محفوظ میباشید
        </div>
        <div className={"socialmedia"}>
            <a className="fa fa-telegram m-1"
               href="https://telegram.org">
            </a>
            <a
                className="fa fa-instagram m-1"
                href="http://instagram.com">
            </a>
        </div>
    </footer>;
};

export default Footer;
