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
