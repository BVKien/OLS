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

// customer api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const LearningPathDetails = () => {
    // -- LearningPath --
    const [learningPathDetails, setLearningPathDetails] = useState([]);
    // -- Course --
    const [courses, setCourses] = useState([]);

    // hard code
    var userId = 46;

    // Extracting courseId from URLs
    const urlParams = new URLSearchParams(window.location.search);
    const learningPathId = urlParams.get('learningPathId');

    const isCourseEnrolled = async (courseId, userId) => {
        try {
            const response = await axios.get(
                customerApi.courseEnrolled.check_course_register_by_user + '/' + courseId + '/' + userId,
            );
            return response.data; // Assuming the API returns true or false
        } catch (error) {
            console.error('Error checking course enrollment:', error.message);
            return false;
        }
    };

    useEffect(() => {
        const getAllCoursesByLearningPathId = async () => {
            try {
                const response = await axios.get(
                    customerApi.course.get_all_course_in_learning_path + '/' + learningPathId,
                );

                const coursesWithEnrollmentStatus = await Promise.all(
                    response.data.map(async (course) => {
                        const isEnrolled = await isCourseEnrolled(course.courseId, userId);
                        return { ...course, isEnrolled };
                    }),
                );

                setCourses(coursesWithEnrollmentStatus);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        getAllCoursesByLearningPathId();
    }, [learningPathId]);

    useEffect(() => {
        const getLearningPathDetails = async () => {
            try {
                const response = await axios.get(
                    customerApi.learningPath.get_learning_path_detail + '/' + learningPathId,
                );
                setLearningPathDetails(response.data);
            } catch (error) {
                console.error('Error fetching learning path:', error);
            }
        };

        getLearningPathDetails();
    }, [learningPathId]);

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
                                    src={learningPathDetails.image}
                                    className={cx('learning-path-details-header__image')}
                                />
                            </div>
                            <div className={cx('learning-path-details-header__title')}>
                                <h1>{learningPathDetails.learningPathName}</h1>
                            </div>
                            {/* <span>Description</span> */}
                        </div>
                    </div>
                </div>

                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {/* map */}
                    {courses.map((course) => (
                        <div className={cx('col-12')}>
                            <div className={cx('learning-path-details-item')}>
                                <div key={course.courseId} className={cx('learning-path-details-item__link')}>
                                    <div className={cx('col-2-4')}>
                                        <Image
                                            src={course.image}
                                            className={cx('learning-path-details-item__image')}
                                            alt={'image - videoIntro'}
                                        />
                                    </div>

                                    <div className={cx('col-2-8')}>
                                        <div className={cx('learning-path-details-item__course')}>
                                            <div className={cx('learning-path-details-item__course-name')}>
                                                {course.courseName}
                                            </div>
                                            <div className={cx('learning-path-details-item__course-description')}>
                                                Mô tả
                                            </div>
                                            <div className={cx('learning-path-details-item__course-course-info')}>
                                                {course.description}
                                            </div>
                                            <div className={cx('learning-path-details-item__course-course-fee')}>
                                                Free
                                            </div>
                                            <div className={cx('learning-path-details-item__course-go')}>
                                                <Link
                                                    to={
                                                        course.isEnrolled
                                                            ? `${config.routes.courseinprogress}?courseId=${course.courseId}`
                                                            : `${config.routes.coursedetails}?courseId=${course.courseId}`
                                                    }
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
                    ))}
                </div>
            </div>
        </main>
    );
};

export default LearningPathDetails;
