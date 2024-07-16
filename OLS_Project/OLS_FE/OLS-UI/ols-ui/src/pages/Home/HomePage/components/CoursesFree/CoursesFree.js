// From react and libs
import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import styles from './CoursesFree.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';

// apis
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

// hard code
var userId = 46;
const CoursesFree = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

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

    const fetchDataFromApi = async () => {
        try {
            const response = await axios.get(customerApi.course.get_all_free_course);

            if (response.status !== 200) {
                throw new Error('Network is not ok.');
            }

            const coursesWithEnrollmentStatus = await Promise.all(
                response.data.map(async (course) => {
                    const isEnrolled = await isCourseEnrolled(course.courseId, userId);
                    return { ...course, isEnrolled };
                }),
            );

            setCourses(coursesWithEnrollmentStatus);
        } catch (error) {
            console.error('Error fetching data from API:', error.message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                <h1 className={cx('course-heading')}>Các khóa học miễn phí</h1>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {courses.map((course) => (
                        <div key={course.courseId} className={cx('col-3')}>
                            <div className={cx('course-item')}>
                                <Link
                                    to={
                                        course.isEnrolled
                                            ? `${config.routes.courseinprogress}?courseId=${course.courseId}`
                                            : `${config.routes.coursedetails}?courseId=${course.courseId}`
                                    }
                                    className={cx('course-item__link')}
                                >
                                    <Image
                                        src={course.image}
                                        alt={course.courseName}
                                        className={cx('course-item__image')}
                                    />
                                    <div className={cx('course-item__info')}>
                                        <span className={cx('course-item__learningPath')}>
                                            <Image
                                                src={course.learningPathImage}
                                                className={cx('course-item__learningPath__image')}
                                            />
                                            {course.learningPathName}
                                        </span>
                                        <span className={cx('course-item__name')}>{course.courseName}</span>
                                        <div className={cx('course-item__footer')}>
                                            <span className={cx('course-item__fee')}></span>
                                            <span className={cx('course-item__course-degree')}>
                                                Khóa học / Chứng chỉ
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cx('free')}>
                                        <span className={cx('free-title')}>Miễn phí</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row */}
                <div className={cx('row')}>
                    <div className={cx('show-more')}>
                        <Button outline small className={cx('btn-show-more')}>
                            <span className={cx('btn-show-more__title')}>Hiển thị thêm</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesFree;
