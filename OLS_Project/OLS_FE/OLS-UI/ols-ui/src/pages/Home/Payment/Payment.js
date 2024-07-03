// From react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';

// Componenets
import styles from './Payment.module.scss';
import Image from '~/components/Image';
import QRCode from '~/assets/images/payment/QRCode.jpg';

const cx = classNames.bind(styles);

const Payment = () => {
    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('payment-sidebar')}>
                            <h1 className={cx('payment-sidebar__heading')}>Payment</h1>
                            <div className={cx('course-info')}>
                                <div className={cx('course-info__course-wrap')}>
                                    <p className={cx('course-info__title')}>Ten khoa hoc:</p>
                                    <p className={cx('course-info__course-name')}>Ngon ngu lap trinh JavaScript</p>
                                </div>
                                <div className={cx('course-info__code-wrap')}>
                                    <p className={cx('course-info__payment-code')}>Ma don hang:</p>
                                    <p className={cx('course-info__code')}>0123F8</p>
                                </div>
                            </div>
                            <div className={cx('payment-details')}>
                                <h1 className={cx('payment-details__title')}>Payment details</h1>
                                <div className={cx('course-price')}>
                                    <div className={cx('course-price-details')}>
                                        <span className={cx('course-price-details__title')}>Gia ban:</span>
                                        <span className={cx('course-price-details__price')}>1.499.000 VND</span>
                                    </div>
                                    <div className={cx('course-price-sum')}>
                                        <span className={cx('course-price-sum__title')}>Tong tien:</span>
                                        <span className={cx('course-price-sum__price')}>1.499.000 VND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-9')}>
                        <div className={cx('payment-content')}>
                            <h1 className={cx('payment-qr-heading')}>Payment QR</h1>
                            <div className={cx('payment-qr')}>
                                <Image src={QRCode} alt={'QR Code'} className={cx('payment-qr__image')} />
                                <div className={cx('payment-qr__content')}>
                                    <p>step 1:</p>
                                    <p>step 2:</p>
                                    <p>step 3:</p>
                                </div>
                            </div>

                            <h1 className={cx('payment-manual-heading')}>Payment manual</h1>
                            <div className={cx('payment-manual')}>
                                <div className={cx('payment-manual__content')}>
                                    <div className={cx('payment-manual__content__account-number')}>
                                        <p>So tai khoan</p>
                                        <br />
                                        <span>0000000000000000</span>
                                    </div>
                                    <div className={cx('payment-manual__content__account-name')}>
                                        <p>Ten tai khoan</p>
                                        <br />
                                        <span>BUI VAN KIEN</span>
                                    </div>
                                    <div className={cx('payment-manual__content__transfer-content')}>
                                        <p>Noi dung</p>
                                        <br />
                                        <span>0123F8</span>
                                    </div>
                                    <div className={cx('payment-manual__content-branch')}>
                                        <p>Chi nhanh</p>
                                        <br />
                                        <span>Vietcombank Ha Noi</span>
                                    </div>
                                </div>
                            </div>

                            <h1 className={cx('payment-notice-heading')}>Luu y</h1>
                            <div className={cx('payment-notice')}>
                                <p className={cx('payment-notice__content')}>noi dung</p>
                                <p className={cx('payment-notice_phone')}>
                                    <FontAwesomeIcon icon={faPhone} className={cx('payment-notice-icon')} />
                                    phone
                                </p>
                                <p className={cx('payment-notice__email')}>
                                    <FontAwesomeIcon icon={faEnvelope} className={cx('payment-notice-icon')} />
                                    email
                                </p>
                                <p className={cx('payment-notice__address')}>
                                    <FontAwesomeIcon icon={faHouse} className={cx('payment-notice-icon')} />
                                    address
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Payment;
