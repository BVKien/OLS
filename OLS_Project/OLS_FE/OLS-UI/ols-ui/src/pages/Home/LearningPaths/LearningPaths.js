// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// components
import styles from './LearningPaths.module.scss';
import Image from '~/components/Image';
import logo from '~/assets/images/logo.svg';
import config from '~/config';

// apis
import customerApi from '~/services/apis/customerApi';

// quy ước viết tắt của classNames
const cx = classNames.bind(styles);

const LearningPaths = () => {
    const [learningPaths, setLearningPaths] = useState([]);

    useEffect(() => {
        getDataFromApi();
    }, []);

    const getDataFromApi = async () => {
        try {
            const response = await axios.get(customerApi.learningPath.get_all_learning_path);

            if (!response.status === 200) {
                throw new Error('Network is not ok. Cannot connect to API.');
            }

            setLearningPaths(response.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-12')}>
                        <div className={cx('learningPath-header')}>
                            <div className={cx('learningPath-header__title')}>
                                <h1>Tất cả các lộ trình học tập</h1>
                            </div>

                            {/* <div className={cx('learningPath-header__logo')}>
                                <Image src={logo} className={cx('learningPath-header__logo-link')} />
                            </div> */}

                            {/* <div className={cx('learningPath-header__content')}>
                                <h1>Chi tiết</h1>
                                <p>
                                    Các lộ trình học được chia theo nhiều hướng đi
                                    <br />
                                    cho người học vạch ra con đường rõ ràng.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {/* map */}
                    {learningPaths.map((learningPath) => (
                        <div key={learningPath.learningPathId} className={cx('col-12')}>
                            <div className={cx('learningPath-item')}>
                                <div className={cx('learningPath-item__link')}>
                                    <div className={cx('col-2-4')}>
                                        <Image src={learningPath.image} className={cx('learningPath-item__image')} />
                                    </div>

                                    <div className={cx('col-2-8')}>
                                        <div className={cx('learningPath-item__content')}>
                                            <div className={cx('learningPath-item__content-name')}>
                                                {learningPath.learningPathName}
                                            </div>
                                            <div className={cx('learningPath-item__content-description')}>
                                                {learningPath.description}
                                            </div>
                                            <div className={cx('learningPath-item__content-course-amount')}>
                                                Số lượng: {learningPath.courseAmount} khóa học
                                            </div>
                                            <div className={cx('learningPath-item__content-go')}>
                                                <Link
                                                    to={
                                                        'http://localhost:3003' +
                                                        config.routes.learningpathdetails +
                                                        `?learningPathId=${learningPath.learningPathId}`
                                                    }
                                                    className={cx('learningPath-item__content-go-link')}
                                                >
                                                    Đi đến lộ trình <FontAwesomeIcon icon={faArrowRight} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row */}
                {/* <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('learningPath-footer')}>
                            <div className={cx('learningPath-footer__degree')}>
                                <div className={cx('learningPath-footer__degree-img')}>degree img</div>
                                <div className={cx('learningPath-footer__degree-content')}>degree content</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </main>
    );
};

export default LearningPaths;
