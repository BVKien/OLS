// from react and libs
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import styles from './UserManager.module.scss';
import { faEye, faPen, faTrash, faBan } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { faX } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const UserManager = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [showBan, setShowBan] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleToggleEdit = () => {
        setShowEdit((prevShowEdit) => !prevShowEdit);
    };

    const handleToggleBan = () => {
        setShowBan((prevShowBan) => !prevShowBan);
    };

    const handleToggleDelete = () => {
        setShowDelete((prevShowDelete) => !prevShowDelete);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('user-manager-heading')}>
                            <h1 className={cx('user-manager-heading__title')}>Danh sách ngườI dùng</h1>
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
                                            <th className={cx('user-manager-list__table-head__content__item')}>STT</th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Avatar
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Họ tên
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>Tuổi</th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Phân quyền
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
                                        <tr className={cx('user-manager-list__table-body__content')}>
                                            <th className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-stt')}
                                                >
                                                    1
                                                </span>
                                            </th>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <Image
                                                    src={
                                                        'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96'
                                                    }
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-user-avatar',
                                                    )}
                                                />
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-name')}
                                                >
                                                    Bui Van Kien
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-age')}
                                                >
                                                    18
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-role')}
                                                >
                                                    Admin
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-status',
                                                    )}
                                                >
                                                    Active
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                {/* <FontAwesomeIcon
                                                    icon={faEye}
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-icon-view',
                                                    )}
                                                /> */}
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

                                        <tr className={cx('user-manager-list__table-body__content')}>
                                            <th className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-stt')}
                                                >
                                                    2
                                                </span>
                                            </th>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <Image
                                                    src={
                                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJj8ZYkQAM7tca17i8SGczxppRZ_20CqGaw&usqp=CAU'
                                                    }
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-user-avatar',
                                                    )}
                                                />
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-name')}
                                                >
                                                    Nguyen Van A
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-age')}
                                                >
                                                    24
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx('user-manager-list__table-body__content__item-role')}
                                                >
                                                    Customer
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                <span
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-status-inactive',
                                                    )}
                                                >
                                                    Inactive
                                                </span>
                                            </td>
                                            <td className={cx('user-manager-list__table-body__content__item')}>
                                                {/* <FontAwesomeIcon
                                                    icon={faEye}
                                                    className={cx(
                                                        'user-manager-list__table-body__content__item-icon-view',
                                                    )}
                                                /> */}
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
                                    </tbody>
                                </table>
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
                                        <h1 className={cx('edit-heading__title')}>Thông tin chi tiết</h1>
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
                                                    src={cx(
                                                        'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96',
                                                    )}
                                                    className={cx('edit-content__avatar-image')}
                                                />
                                                <p className={cx('edit-content__avatar-image__title')}>Avatar</p>
                                            </div>
                                            <div className={cx('edit-content__avatar__preview')}>
                                                <Image
                                                    src={cx(
                                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJj8ZYkQAM7tca17i8SGczxppRZ_20CqGaw&usqp=CAU',
                                                    )}
                                                    className={cx('edit-content__avatar-image')}
                                                />
                                                <p className={cx('edit-content__avatar-image__title')}>Xem trước</p>
                                            </div>
                                            <div className={cx('edit-content__avatar-details')}>
                                                <h1 className={cx('edit-content__avatar-details___heading')}>
                                                    Tải ảnh của bạn
                                                </h1>
                                                <p className={cx('edit-content__avatar-details_info')}>
                                                    Để có kết quả tốt nhất, hãy sử dụng ít nhất một hình ảnh <br />
                                                    256px x 256px ở định dạng .jpg hoặc .png
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
                                                Tải lên
                                            </Button>
                                            <Button outline className={cx('edit-content__avatar-button__title')}>
                                                Xóa
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
                                                value={'kbui0212@gmail.com'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-phone')}>
                                            <label className={cx('edit-content__info-title')}>Số điện thoại: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="number"
                                                placeholder="Your Phone Number"
                                                value={'0961498113'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-full-name')}>
                                            <label className={cx('edit-content__info-title')}>Họ tên: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Full Name"
                                                value={'Bùi Văn Kiên'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-dob')}>
                                            <label className={cx('edit-content__info-title')}>Ngày sinh: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text" // date
                                                placeholder="Your DOB"
                                                value={'02/12/2002'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-address')}>
                                            <label className={cx('edit-content__info-title')}>Địa chỉ: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Address"
                                                value={'Hải Dương quê tôi'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-role')}>
                                            <label className={cx('edit-content__info-title')}>Phân quyền: </label>
                                            <input
                                                className={cx('edit-content__info-input')}
                                                type="text"
                                                placeholder="Your Role"
                                                value={'Admin'}
                                            />
                                        </div>
                                        <div className={cx('edit-content__info-status')}>
                                            <label className={cx('edit-content__info-title')}>Trạng thái: </label>
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
                                                Lưu
                                            </Button>
                                            <Button
                                                outline
                                                onClick={handleToggleEdit}
                                                className={cx('edit-content__action-button__title')}
                                            >
                                                Hủy
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
                                    <p className={cx('ban-content__title')}>Xác nhận cấm người dùng này?</p>
                                    <div className={cx('ban-wrap__button')}>
                                        <Button primary className={cx('ban-wrap__button-ban')}>
                                            Cấm
                                        </Button>
                                        <Button
                                            outline
                                            onClick={handleToggleBan}
                                            className={cx('ban-wrap__button-cancel')}
                                        >
                                            Hủy
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
                                    <p className={cx('delete-content__title')}>Xác nhận xóa người dùng này?</p>
                                    <div className={cx('delete-wrap__button')}>
                                        <Button primary className={cx('delete-wrap__button-delete')}>
                                            Xóa
                                        </Button>
                                        <Button
                                            outline
                                            onClick={handleToggleDelete}
                                            className={cx('delete-wrap__button-cancel')}
                                        >
                                            Hủy
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
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
                </div>
            </div>
        </div>
    );
};

export default UserManager;
