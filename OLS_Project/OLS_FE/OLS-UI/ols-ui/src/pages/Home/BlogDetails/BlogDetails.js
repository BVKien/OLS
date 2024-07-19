// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faImage } from '@fortawesome/free-regular-svg-icons';

// components
import styles from './BlogDetails.module.scss';
import config from '~/config';
import Image from '~/components/Image';

// apis
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const BlogDetails = () => {
    // -- Blog --
    const [blogDetails, setBlogDetails] = useState([]);

    // hard code
    var userId = 46;

    // Extracting courseId from URLs
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('blogId');

    useEffect(() => {
        const getBlogDetails = async () => {
            try {
                const response = await axios.get(customerApi.blog.get_blog_detail + '/' + blogId);
                setBlogDetails(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        getBlogDetails();
    }, [blogId]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    return (
        <div className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    <div className={cx('col-3')}>
                        <div className={cx('blog-detail__author-func')}>
                            <div className={cx('blog-detail__author')}>{blogDetails.userName}</div>
                            <div className={cx('blog-detail__func')}>
                                <FontAwesomeIcon className={cx('blog-detail__func-comment')} icon={faComment} />
                            </div>
                        </div>
                    </div>

                    {/* Col */}
                    <div className={cx('col-6')}>
                        <div className={cx('blog-detail__content')}>
                            <div className={cx('blog-detail__title')}>
                                <h1>{blogDetails.blogTitle}</h1>
                            </div>
                            <div className={cx('blog-detail__author-info')}>
                                <Image src={blogDetails.userImage} className={cx('blog-detail__author-info__image')} />
                                <div className={cx('blog-detail__author-info__name-post-date')}>
                                    <span className={cx('blog-detail__author-info__name')}>{blogDetails.userName}</span>
                                    <p className={cx('blog-detail__author-info__post-date')}>
                                        Ngày đăng: {formatDate(blogDetails.postDate)}
                                    </p>
                                </div>
                            </div>
                            <div className={cx('blog-detail__content-detail')}>
                                <p className={cx('blog-detail__content-detail-generate')}>{blogDetails.blogContent}</p>
                                <Image
                                    src={blogDetails.blogImage}
                                    className={cx('blog-detail__content-detail-image')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
