// from react and libs
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import styles from './UserManager.module.scss';
import { faEye, faPen, faTrash, faBan } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// admin api
import adminApi from '~/services/apis/adminApi';

const cx = classNames.bind(styles);

const UserManager = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [showBan, setShowBan] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // -- User --
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleToggleEdit = (userId) => {
        if (!showEdit) {
            fetchUserDetails(userId);
        }
        setShowEdit((prevShowEdit) => !prevShowEdit);
    };

    const handleToggleBan = (userId) => {
        setSelectedUser(userId);
        setShowBan((prevShowBan) => !prevShowBan);
    };

    const handleToggleDelete = () => {
        setShowDelete((prevShowDelete) => !prevShowDelete);
    };

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        try {
            const response = await axios.get(adminApi.user.get_all_user);
            if (response.status !== 200) {
                throw new Error('Network is not ok. Cannot connect to API.');
            }
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUserDetails = async (userId) => {
        try {
            const response = await axios.get(`${adminApi.user.get_user_detail}/${userId}`);
            if (response.status === 200) {
                setSelectedUser(response.data);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const updateUser = async (userId, updatedData) => {
        try {
            const response = await axios.put(adminApi.user.update_user + '/' + userId, updatedData);
            if (response.status !== 200) {
                throw new Error('Network is not ok. Cannot connect to API.');
            }
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw new Error(error);
        }
    };

    // Hàm xử lý cập nhật thông tin người dùng khi nhấn nút Lưu
    const handleSave = async () => {
        await updateUser(selectedUser.userId, selectedUser);
        setShowEdit(false);
        getAllUser();
    };

    const banUser = async () => {
        try {
            const response = await axios.post(`${adminApi.user.ban_user}/${selectedUser}`);
            if (response.status === 200) {
                getAllUser();
                setShowBan(false);
            }
        } catch (error) {
            console.error('Error banning user:', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
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
                                            <th className={cx('user-manager-list__table-head__content__item')}>#ID</th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Ảnh đại diện
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Họ tên
                                            </th>
                                            <th className={cx('user-manager-list__table-head__content__item')}>
                                                Ngày sinh
                                            </th>
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
                                        {users.map((user) => (
                                            <tr className={cx('user-manager-list__table-body__content')}>
                                                <th className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-stt',
                                                        )}
                                                    >
                                                        {user.userId}
                                                    </span>
                                                </th>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <Image
                                                        src={user.image}
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
                                                        {user.fullName}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-age',
                                                        )}
                                                    >
                                                        {formatDate(user.dob)}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-role',
                                                        )}
                                                    >
                                                        {user.roleName}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <span
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-status',
                                                            { active: user.status === 1, inactive: user.status !== 1 },
                                                        )}
                                                    >
                                                        {user.status === 1 ? 'Hoạt động' : 'Cấm'}
                                                    </span>
                                                </td>
                                                <td className={cx('user-manager-list__table-body__content__item')}>
                                                    <FontAwesomeIcon
                                                        icon={faPen}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-icon-edit',
                                                        )}
                                                        onClick={() => handleToggleEdit(user.userId)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faBan}
                                                        className={cx(
                                                            'user-manager-list__table-body__content__item-icon-ban',
                                                        )}
                                                        onClick={() => handleToggleBan(user.userId)}
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
                    <div className={cx('col-12')}></div>
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
                                {selectedUser && (
                                    <div>
                                        <div className={cx('edit-content__info-wrap')}>
                                            <div className={cx('edit-content__info-email')}>
                                                <label className={cx('edit-content__info-title')}>Email: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text"
                                                    placeholder="Your Email"
                                                    value={selectedUser.email}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, email: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-phone')}>
                                                <label className={cx('edit-content__info-title')}>
                                                    Số điện thoại:{' '}
                                                </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="number"
                                                    placeholder="Your Phone Number"
                                                    value={selectedUser.phoneNumber}
                                                    onChange={(e) =>
                                                        setSelectedUser({
                                                            ...selectedUser,
                                                            phoneNumber: e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-full-name')}>
                                                <label className={cx('edit-content__info-title')}>Họ tên: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text"
                                                    placeholder="Your Full Name"
                                                    value={selectedUser.fullName}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, fullName: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-dob')}>
                                                <label className={cx('edit-content__info-title')}>Ngày sinh: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text" // date
                                                    placeholder="Your DOB"
                                                    value={formatDate(selectedUser.dob)}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, dob: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-address')}>
                                                <label className={cx('edit-content__info-title')}>Địa chỉ: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text"
                                                    placeholder="Your Address"
                                                    value={selectedUser.address}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, address: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-role')}>
                                                <label className={cx('edit-content__info-title')}>Phân quyền: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text"
                                                    placeholder="Your Role"
                                                    value={selectedUser.roleName}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, roleName: e.target.value })
                                                    }
                                                />
                                            </div>
                                            <div className={cx('edit-content__info-status')}>
                                                <label className={cx('edit-content__info-title')}>Trạng thái: </label>
                                                <input
                                                    className={cx('edit-content__info-input')}
                                                    type="text"
                                                    placeholder="Your Status"
                                                    value={selectedUser.status}
                                                    onChange={(e) =>
                                                        setSelectedUser({ ...selectedUser, status: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('edit-content__save')}>
                                            <button className={cx('edit-content__save-btn')} onClick={handleSave}>
                                                Lưu
                                            </button>
                                        </div>
                                    </div>
                                )}
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

export default UserManager;
