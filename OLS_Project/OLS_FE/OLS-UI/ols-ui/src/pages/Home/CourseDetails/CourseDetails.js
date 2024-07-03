// From react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

// Components
import styles from './CourseDetails.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState(null);
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                // Extracting courseId from the URL
                const urlParams = new URLSearchParams(window.location.search);
                const courseId = urlParams.get('courseId');

                // Fetching course details using the provided API
                const responseCourseDetails = await axios.get(
                    `https://localhost:7158/getCourseByCourseId_Home/${courseId}`,
                );
                setCourseDetails(responseCourseDetails.data);

                const responseChapters = await axios.get(`https://localhost:7158/getAllChaptersByCourseId/${courseId}`);
                setChapters(responseChapters.data);
            } catch (error) {
                console.error('Error fetching course details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetails();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or message
    }

    if (!courseDetails) {
        return <div>Error loading course details.</div>; // You can replace this with an error message
    }

    const getCurrentDateString = () => {
        const now = new Date();
        const options = { month: 'short', day: 'numeric' };
        const currentDateString = now.toLocaleDateString('vn', options); //'en-US'

        return `Bắt đầu ngày ${currentDateString}`;
    };

    const handleEnrollClick = async () => {
        try {
            // Extracting courseId from the URL
            const urlParams = new URLSearchParams(window.location.search);
            const courseId = urlParams.get('courseId');

            // Check if the course fee is zero
            if (courseDetails.fee === 0) {
                // Perform API call to register free course
                const response = await axios.post('https://localhost:7158/registerFreeCourse', {
                    enrolledDate: new Date().toISOString(),
                    status: 1,
                    courseCourseId: courseId,
                    userUserId: 2, // user id lấy của user hiện đang đăng nhập - chưa có login -> chưa có
                });

                // Handle the response as needed
                console.log('Registration successful:', response.data);
                // Redirect to payment page
                window.location.href = `${config.routes.courseinprogress}?courseId=${courseId}`;
            } else {
                // Redirect to payment page
                window.location.href = `${config.routes.payment}?courseId=${courseId}`;
            }
        } catch (error) {
            console.error('Error during enrollment:', error);
        }
    };

    return (
        <main className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={'col-9'}>
                        <div className={cx('course-details__info-chapters-lessons-wrap')}>
                            <div className={cx('course-details__info-wrap')}>
                                <div className={cx('course-details__info')}>
                                    <h1 className={cx('course-details__info__name')}>{courseDetails.courseName}</h1>
                                    <p className={cx('course-details__info__description')}>
                                        {courseDetails.description}
                                    </p>
                                    <p className={cx('course-details__info__info')}>{courseDetails.courseInfomation}</p>
                                </div>
                                <div className={cx('course-details__enroll')}>
                                    {/* Nếu course fee = 0 -> trực tiếp đăng ký | else -> payment */}
                                    <Button
                                        primary
                                        large
                                        className={cx('course-details__enroll-btn')}
                                        onClick={handleEnrollClick}
                                    >
                                        Đăng ký <br /> {getCurrentDateString()}
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('course-details__chapters-lessons-wrap')}>
                                {chapters.map((chapter) => (
                                    <div className={cx('course-details__chapters')} key={chapter.chapterId}>
                                        <span className={cx('course-details__chapters-name')}>
                                            {chapter.chapterName}
                                        </span>
                                        <br /> <br />
                                        <span className={cx('course-details__chapters-time')}>
                                            Thời lượng: 18 tiếng
                                        </span>
                                        <span className={cx('course-details__chapters-lessons')}>
                                            {' '}
                                            với 31 bài giảng
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('course-details__video-intro')}>
                            <iframe
                                className={cx('course-details__video-intro-img')}
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${courseDetails.videoIntro}`}
                                allowFullScreen
                                title="videoIntro"
                                name="videoIntro"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CourseDetails;
