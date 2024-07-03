// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// components
import styles from './LearningPathDetails.module.scss';
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles);

// cần 2 api, get learning path by id
// get all courses by leanring path id

const LearningPathDetails = () => {
    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-12')}>
                        <div className={cx('learning-path-details-header')}>
                            <div>
                                <Image
                                    src={'https://s.net.vn/CDnn'}
                                    className={cx('learning-path-details-header__image')}
                                />
                            </div>
                            <div className={cx('learning-path-details-header__title')}>
                                <h1>Full stack</h1>
                            </div>
                            {/* <span>Description</span> */}
                        </div>
                    </div>
                </div>

                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {/* map */}
                    <div className={cx('col-12')}>
                        <div className={cx('learning-path-details-item')}>
                            <div className={cx('learning-path-details-item__link')}>
                                <div className={cx('col-2-4')}>
                                    <Image
                                        src={'https://s.net.vn/Ndd7'}
                                        className={cx('learning-path-details-item__image')}
                                        alt={'image - videoIntro'}
                                    />
                                </div>

                                <div className={cx('col-2-8')}>
                                    <div className={cx('learning-path-details-item__course')}>
                                        <div className={cx('learning-path-details-item__course-name')}>
                                            Python cơ bản
                                        </div>
                                        <div className={cx('learning-path-details-item__course-description')}>
                                            Mô tả
                                        </div>
                                        <div className={cx('learning-path-details-item__course-course-info')}>
                                            Thông tin khóa học
                                        </div>
                                        <div className={cx('learning-path-details-item__course-course-fee')}>
                                            1.499.000 VND
                                        </div>
                                        <div className={cx('learning-path-details-item__course-go')}>
                                            <Link
                                                to={config.routes.learningpathdetails}
                                                className={cx('learning-path-details-item__course-go-link')}
                                            >
                                                Xem khóa học <FontAwesomeIcon icon={faArrowRight} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LearningPathDetails;
