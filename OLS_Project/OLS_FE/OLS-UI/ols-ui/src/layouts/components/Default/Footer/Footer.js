// From react and libs
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagramSquare,
    faTwitterSquare,
    faYoutubeSquare,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// Components
import styles from './Footer.module.scss';
import Image from '~/components/Image';
import GooglePlay from '~/assets/images/apps/google-play.png';
import AppStore from '~/assets/images/apps/app-store.png';
import Certified from '~/assets/images/apps/certified.png';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('grid')}>
                {/* Row */}
                {/* Content */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('footer-content')}>
                            <h1 className={cx('footer-heading')}>OLS</h1>
                            <ul className={cx('footer-list')}>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Về OLS
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Những gì chúng tôi cung cấp
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Khả năng lãnh đạo
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Nghề nghiệp
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Mục lục
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Chứng chỉ chuyên môn
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Chứng chỉ MasterTrack®
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Dành cho doanh nghiệp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('footer-content')}>
                            <h1 className={cx('footer-heading')}>Cộng đồng</h1>
                            <ul className={cx('footer-list')}>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Người học
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Đối tác
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Người thử nghiệm beta
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Người dịch
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Bài viết
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Công nghệ
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Trung tâm giảng dạy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('footer-content')}>
                            <h1 className={cx('footer-heading')}>Hơn nữa</h1>
                            <ul className={cx('footer-list')}>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Nhà đầu tư
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Điều kiện
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Giúp đỡ
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Khả năng tiếp cận
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Chi nhánh
                                    </a>
                                </li>
                                <li className={cx('footer-item')}>
                                    <a href="#" className={cx('footer-item__link')}>
                                        Quản lý tùy chọn cookie
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('footer-content')}>
                            <h1 className={cx('footer-heading')}>Mobile App</h1>
                            <div className={cx('footer-download')}>
                                <div className={cx('footer-download__apps')}>
                                    <a href="#" className={cx('footer-download__google-play')}>
                                        <Image src={GooglePlay} />
                                    </a>
                                    <a href="#" className={cx('footer-download__app-store')}>
                                        <Image src={AppStore} />
                                    </a>
                                </div>
                                <a href="#" className={cx('footer-download__certified')}>
                                    <Image src={Certified} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row */}
                {/* Copyright */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-12')}>
                        <div className={cx('copy-right')}>
                            <div className={cx('copy-right__heading')}>
                                <p className={cx('copy-right__heading-text')}>
                                    © 2023 Coursera Inc. All rights reserved. <br />© 2018 - 2023 F8. Nền tảng học lập
                                    trình hàng đầu Việt Nam
                                </p>
                            </div>
                            <div className={cx('brand-icon')}>
                                <a href="#" className={cx('brand-icon__link')}>
                                    <FontAwesomeIcon className={cx('brand-icon__facebook')} icon={faFacebook} />
                                </a>
                                <a href="#" className={cx('brand-icon__link')}>
                                    <FontAwesomeIcon className={cx('brand-icon__linkedin')} icon={faLinkedin} />
                                </a>
                                <a href="#" className={cx('brand-icon__link')}>
                                    <FontAwesomeIcon className={cx('brand-icon__twitter')} icon={faTwitterSquare} />
                                </a>
                                <a href="#" className={cx('brand-icon__link')}>
                                    <FontAwesomeIcon className={cx('brand-icon__youtube')} icon={faYoutubeSquare} />
                                </a>
                                <a href="#" className={cx('brand-icon__link')}>
                                    <FontAwesomeIcon className={cx('brand-icon__instagram')} icon={faInstagramSquare} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
