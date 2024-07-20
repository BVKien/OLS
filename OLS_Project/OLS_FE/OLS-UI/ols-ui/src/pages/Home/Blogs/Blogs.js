// from react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

// components
import styles from './Blogs.module.scss';
import config from '~/config';
import Image from '~/components/Image';

// customer api
import customerApi from '~/services/apis/customerApi';

const cx = classNames.bind(styles);

const Blogs = () => {
    // -- Blog --
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllBlog();
    }, []);

    const getAllBlog = async () => {
        try {
            const response = await axios.get(customerApi.blog.get_all_blog);

            if (!response.status === 200) {
                throw new Error('Network is not ok. Cannot connect to API.');
            }

            setBlogs(response.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    return (
        <div className={cx('wrapper')}>
            {/* Grid */}
            <div className={cx('grid')}>
                <h1 className={cx('blog-heading')}>Danh sách các bài viết</h1>
                {/* Row */}
                <div className={cx('row')}>
                    {/* Col */}
                    {blogs.map((blog) => (
                        <div className={cx('col-9')}>
                            <Link to={'http://localhost:3003' + config.routes.blogdetails + '?blogId=' + blog.blogId}>
                                <div className={cx('blog-content')}>
                                    <div className={cx('blog-content__info')}>
                                        <div className={cx('blog-content__info-user')}>
                                            <Image
                                                src={blog.userImage}
                                                className={cx('blog-content__info-user-avatar')}
                                            />
                                            <span className={cx('blog-content__info-user-name')}>{blog.userName}</span>
                                        </div>
                                        <div className={cx('blog-content__info-blog')}>
                                            <div className={cx('blog-content__info-blog__title')}>{blog.blogTitle}</div>
                                            <div className={cx('blog-content__info-blog__des')}>{blog.blogContent}</div>
                                        </div>
                                    </div>
                                    <div className={cx('blog-content__image')}>
                                        <div className={cx('blog-function')}>
                                            <FontAwesomeIcon className={cx('blog-function__save')} icon={faBookmark} />
                                        </div>
                                        <div className={cx('blog-content__image-wrap')}>
                                            <Image src={blog.blogImage} className={cx('blog-content__image-main')} />
                                        </div>
                                    </div>
                                    <div className={cx('blog-content__info-blog__post-date')}>
                                        Ngày đăng: {formatDate(blog.postDate)}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* Col */}
                    {/* <div className={cx('col-3')}>
                        <div className={cx('topic-content')}>
                            <div className={cx('topic-content__item')}>
                                <span className={cx('topic-content__item-name')}>Topic 1</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
