// from react and other libs
import React from 'react';
import classNames from 'classnames/bind';

// components
import styles from './HomePage.module.scss';
import CoursesHaveFee from './components/CoursesHaveFee';
import CoursesFree from './components/CoursesFree';
import NewestBlogs from './components/NewestBlogs';
import LearningPaths from './components/LearningPaths';

const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={'col-12'}>
                        {/* <CoursesHaveFee /> */}
                        <CoursesFree />
                        <NewestBlogs />
                        {/* <LearningPaths /> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
