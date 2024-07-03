// From react and libs
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { saveUserToLocalStorage } from '~/utils/auth';

// Components
import styles from './Register.module.scss';
import Image from '~/components/Image';
import OLSLogo from '~/assets/images/logo.svg';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleRegister = async () => {
        try {
            if (!fullName || !email || !password) {
                setErrorMessage('Please fill in all required fields.');
                return;
            }
            const response = await axios.post('https://localhost:7158/api/User/registerbyemail', {
                fullName,
                email,
                password,
            });
            if (response.data.message) {
                saveUserToLocalStorage(response.data.user, 3600);
                navigate('/');
            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        <div className={cx('register-wrap')}>
                            <div className={cx('register-header')}>
                                <Image src={OLSLogo} className={cx('register-header__logo')} />
                                <span className={cx('register-header__title')}>Đăng ký tài khoản</span>
                            </div>
                            <div className={cx('register-content')}>
                                <div className={cx('register-content__full-name')}>
                                    <label className={cx('register-content__full-name-title')}>
                                        Họ tên <span className={cx('register-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ tên"
                                        required
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className={cx('register-content__full-name-input')}
                                    />
                                </div>
                                <div className={cx('register-content__email')}>
                                    <label className={cx('register-content__email-title')}>
                                        Email <span className={cx('register-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Nhập email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={cx('register-content__email-input')}
                                    />
                                </div>
                                <div className={cx('register-content__password')}>
                                    <label className={cx('register-content__password-title')}>
                                        Mật khẩu <span className={cx('register-content__required')}>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={cx('register-content__password-input')}
                                    />
                                </div>
                                {errorMessage && <div>{errorMessage}</div>}
                                {/* Xử lý logic ở đây */}
                                <div className={cx('register-content__login')}>
                                    <Link to={'#'}>
                                        <Button
                                            large
                                            primary
                                            onClick={handleRegister}
                                            className={cx('register-content__register-button')}
                                        >
                                            <span className={cx('register-content__register-button__title')}>
                                                Đăng ký
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                                <div className={cx('register-content__register')}>
                                    Đã có tài khoản?
                                    <Link to={config.routes.login} className={cx('register-content__register-link')}>
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
