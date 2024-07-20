// from react and libs
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// components
import styles from './BlogManager.module.scss';
import { faEye, faPen, faTrash, faBan } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { faX } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import axios from 'axios';

// api
import expertApi from '~/services/apis/expertApi';

const cx = classNames.bind(styles);

const BlogManager = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [showBan, setShowBan] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [blogs, setBlogs] = useState([]);

    const handleToggleEdit = () => {
        setShowEdit((prevShowEdit) => !prevShowEdit);
    };

    const handleToggleBan = () => {
        setShowBan((prevShowBan) => !prevShowBan);
    };

    const handleToggleDelete = () => {
        setShowDelete((prevShowDelete) => !prevShowDelete);
    };

    useEffect(() => {
        getAllBlog();
    }, []);

    const getAllBlog = async () => {
        try {
            const response = await axios.get(expertApi.blog.get_all_blog);
            if (response.status !== 200) {
                throw new Error('Network is not ok. Cannot connect to API.');
            }
            setBlogs(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('user-manager-heading')}>
                            <h1 className={cx('user-manager-heading__title')}>Danh sách bài viết</h1>
                        </div>
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('user-manager-content')}>
                            <div className={cx('user-manager-list')}>
                                <table className={cx('user-manager-list__table')}>
                                    <thead className={cx('user-manager-list__table-head')}>
                                        <tr className={cx('user-manager-list__table-head__content')}>
                                            <th className={cx('user-manager-list__table-head__content__item')}>#ID</th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Ảnh bài viết
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Tên bài viết
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Trạng thái
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Hành động
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className={cx('user-manager-list__table-body')}>
                                        {blogs.map((blog) => (
                                            <tr
                                                key={blog.blogId}
                                                className={cx('user-manager-list__table-body__content')}
                                            >
                                                <th className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-stt',
                                                        )}
                                                    >
                                                        {blog.blogId}
                                                    </span>
                                                </th>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <Image
                                                        src={blog.blogImage}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-user-avatar',
                                                        )}
                                                    />
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-name',
                                                        )}
                                                    >
                                                        {blog.blogTitle}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-status',
                                                            {
                                                                active: blog.status === 1,
                                                                inactive: blog.status !== 1,
                                                            },
                                                        )}
                                                    >
                                                        {blog.status === 1 ? 'Hoạt động' : 'Cấm'}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <FontAwesomeIcon
                                                        icon={faPen}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-icon-edit',
                                                        )}
                                                        onClick={handleToggleEdit}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faBan}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-icon-ban',
                                                        )}
                                                        onClick={handleToggleBan}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-icon-delete',
                                                        )}
                                                        onClick={handleToggleDelete}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('detail')}>
                            <div className={cx('detail-wrap')}>
                                <div className={cx('detail-content')}>
                                    <span className={cx('detail-content__info')}>Courses amount: 123</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('edit')} style={{ display: showEdit ? 'block' : 'none' }}>
                            <div className={cx('edit-wrap')}>
                                <div className={cx('edit-content')}>
                                    <div className={cx('edit-heading')}>
                                        <h1 className={cx('edit-heading__title')}>Editting</h1>
                                        <FontAwesomeIcon
                                            icon={faX}
                                            className={cx('edit-heading__icon')}
                                            onClick={handleToggleEdit}
                                        />
                                    </div>
                                    <div className={cx('edit-content__avatar-wrap')}>
                                        <div className={cx('edit-content__avatar')}>
                                            <div className={cx('edit-content__avatar__current')}>
                                                <Image
                                                    src={cx('https://avatars.githubusercontent.com/u/108357953?v=4')}
                                                    className={cx('edit-content__avatar-image')}
                                                />
                                                <p className={cx('edit-content__avatar-image__title')}>Avatar</p>
                                            </div>
                                            <div className={cx('edit-content__avatar__preview')}>
                                                <Image
                                                    src={cx(
                                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7EK4uVHpB3ve23SjzruXSHSxXWJgztrCAg&usqp=CAU',
                                                    )}
                                                    className={cx('edit-content__avatar-image')}
                                                />
                                                <p className={cx('edit-content__avatar-image__title')}>Preview</p>
                                            </div>
                                            <div className={cx('edit-content__avatar-details')}>
                                                <h1 className={cx('edit-content__avatar-details___heading')}>
                                                    Upload your picture
                                                </h1>
                                                <p className={cx('edit-content__avatar-details_info')}>
                                                    For best results, use an image at least <br /> 256px by 256px in
                                                    either .jpg or .png format
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx('edit-content__avatar-button')}>
                                            {/* Input tạm thời */}
                                            {/* <input
                                                type="file"
                                                accept="image/*"
                                                className={cx('edit-content__avatar-button-file')}
                                            /> */}
                                            <Button primary className={cx('edit-content__avatar-button__title')}>
                                                Upload
                                            </Button>
                                            <Button outline className={cx('edit-content__avatar-button__title')}>
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('edit-content__info-wrap')}>
                                        <div className={cx('edit-content__info-email')}>
                                            <label className={cx('edit-content__info-title')}>Email: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-phone')}>
                                            <label className={cx('edit-content__info-title')}>Phone Number: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="number"
                                                placeholder="Your Phone Number"
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-full-name')}>
                                            <label className={cx('edit-content__info-title')}>Full Name: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Full Name"
                                                value={'Bui Van Kien'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-full-name')}>
                                            <label className={cx('edit-content__info-title')}>Full Name: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Full Name"
                                                value={'Bui Van Kien'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-dob')}>
                                            <label className={cx('edit-content__info-title')}>DOB: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="date"
                                                placeholder="Your DOB"
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-address')}>
                                            <label className={cx('edit-content__info-title')}>Address: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Address"
                                                value={'Hai Duong'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-role')}>
                                            <label className={cx('edit-content__info-title')}>Role: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Role"
                                                value={'Admin'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-status')}>
                                            <label className={cx('edit-content__info-title')}>Status: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Status"
                                                value={'Active'}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('edit-content__action-wrap')}>
                                        <div className={cx('edit-content__action-button')}>
                                            <Button primary className={cx('edit-content__action-button__title')}>
                                                Save
                                            </Button>
                                            <Button
                                                outline
                                                onClick={handleToggleEdit}
                                                className={cx('edit-content__action-button__title')}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('ban')} style={{ display: showBan ? 'block' : 'none' }}>
                            <div className={cx('ban-wrap')}>
                                <div className={cx('ban-content')}>
                                    <Image
                                        src={
                                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmjT8tnEGnSICrAw94KTUz3XcEmSlsD1fyt0BGShS_rgKd7aydDOEqjWrhEsMwNfiiXc&usqp=CAU'
                                        }
                                        className={cx('ban-content__image')}
                                    />
                                    <p className={cx('ban-content__title')}>Do you decide to ban this user?</p>
                                    <div className={cx('ban-wrap__button')}>
                                        <Button primary className={cx('ban-wrap__button-ban')}>
                                            Ban
                                        </Button>
                                        <Button
                                            outline
                                            onClick={handleToggleBan}
                                            className={cx('ban-wrap__button-cancel')}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('delete')} style={{ display: showDelete ? 'block' : 'none' }}>
                            <div className={cx('delete-wrap')}>
                                <div className={cx('delete-content')}>
                                    <Image
                                        src={
                                            'https://static.vecteezy.com/system/resources/previews/016/964/110/non_2x/eps10-red-garbage-or-trash-can-solid-icon-or-logo-isolated-on-white-background-delete-or-rubbish-basket-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg'
                                        }
                                        className={cx('delete-content__image')}
                                    />
                                    <p className={cx('delete-content__title')}>Do you decide to delete this user?</p>
                                    <div className={cx('delete-wrap__button')}>
                                        <Button primary className={cx('delete-wrap__button-delete')}>
                                            Delete
                                        </Button>
                                        <Button
                                            outline
                                            onClick={handleToggleDelete}
                                            className={cx('delete-wrap__button-cancel')}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('paginate')}>
                            <span className={cx('paginate-prev')}>Trước</span>
                            <span className={cx('paginate-item', 'paginate-active')}>1</span>
                            <span className={cx('paginate-item')}>2</span>
                            <span className={cx('paginate-item')}>3</span>
                            <span className={cx('paginate-item')}>...</span>
                            <span className={cx('paginate-next')}>Tiếp</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default BlogManager;
