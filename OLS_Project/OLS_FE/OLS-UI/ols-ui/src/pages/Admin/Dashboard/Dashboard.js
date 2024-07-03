// From react and libs
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Componenets
import styles from './Dashboard.module.scss';
import { faUsers, faBook, faBlog } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Dashboard = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gird')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('dashboard-heading')}>
                            <h1 className={cx('dashboard-heading__title')}>Bảng điều khiển</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-2')}>
                        <div className={cx('dashboard-user-manager-wrap')}>
                            <div className={cx('dashboard-user-manager-content')}>
                                <FontAwesomeIcon
                                    icon={faUsers}
                                    className={cx('dashboard-user-manager-content__icon')}
                                />
                                <div className={cx('dashboard-user-manager-content__wrap')}>
                                    <span className={cx('dashboard-user-manager-content__count')}>558</span>
                                    <p className={cx('dashboard-user-manager-content__title')}>Người</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('col-2')}>
                        <div className={cx('dashboard-learning-path-manager-wrap')}>
                            <div className={cx('dashboard-learning-path-manager-content')}>
                                <FontAwesomeIcon
                                    icon={faBook}
                                    className={cx('dashboard-learning-path-manager-content__icon')}
                                />
                                <div className={cx('dashboard-learning-path-manager-content__wrap')}>
                                    <span className={cx('dashboard-learning-path-manager-content__count')}>558</span>
                                    <p className={cx('dashboard-learning-path-manager-content__title')}>Lộ trình</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('col-2')}>
                        <div className={cx('dashboard-blog-manager-wrap')}>
                            <div className={cx('dashboard-blog-manager-content')}>
                                <FontAwesomeIcon icon={faBlog} className={cx('dashboard-blog-manager-content__icon')} />
                                <div className={cx('dashboard-blog-manager-content__wrap')}>
                                    <span className={cx('dashboard-blog-manager-content__count')}>558</span>
                                    <p className={cx('dashboard-blog-manager-content__title')}>Bài viết</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
