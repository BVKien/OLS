import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import Button from '../Button';
import Image from '../Image';
import styles from './AddImg.module.scss';

const AddImg = ({ userDetails, userId, discussDetails }) => {
    const [userAskInput, setUserAskInput] = useState({
        contentFor: '',
        image: null,
        userUserId: userId,
        discussDiscussId: discussDetails.discussId
    });
    const [selectedAskImage, setSelectedAskImage] = useState(null);

    const handleUserAskInputChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedAskImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
            setUserAskInput({
                ...userAskInput,
                [name]: files[0],
                userUserId: userId,
                discussDiscussId: discussDetails.discussId,
            });
        } else {
            setUserAskInput({
                ...userAskInput,
                [name]: value,
                userUserId: userId,
                discussDiscussId: discussDetails.discussId,
            });
        }
    };

    const handleSubmitAskInput = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('contentFor', userAskInput.contentFor);
        if (userAskInput.image) {
            formData.append('image', userAskInput.image);
        }
        formData.append('userUserId', userId);
        formData.append('discussDiscussId', discussDetails.discussId);

        try {
            const response = await fetch('/api/customer/conversation/create_ask_or_reply', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log('Success:', result);
            setUserAskInput({ contentFor: '', image: null, userUserId: userId, discussDiscussId: discussDetails.discussId });
            setSelectedAskImage(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAskCancel = () => {
        setUserAskInput({ contentFor: '', image: null, userUserId: userId, discussDiscussId: discussDetails.discussId });
        setSelectedAskImage(null);
    };

    const handleRemoveAskImage = () => {
        setSelectedAskImage(null);
        setUserAskInput({ ...userAskInput, image: null });
    };

    return (
        <form onSubmit={handleSubmitAskInput}>
            <div className={cx('discuss-input')}>
                <Image src={userDetails.image} className={cx('user-avatar')} />
                <textarea
                    placeholder="Đặt câu hỏi"
                    className={cx('discuss-input__user-input__text')}
                    name="contentFor"
                    value={userAskInput.contentFor}
                    onChange={handleUserAskInputChange}
                ></textarea>
                <label className={cx('custom-file-upload')}>
                    <input
                        id="askImageInput"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleUserAskInputChange}
                    />
                    <FontAwesomeIcon icon={faImage} />
                </label>
                {selectedAskImage && (
                    <div>
                        <div className={cx('image-preview__icon-wrap')}>
                            <button type="button" onClick={handleRemoveAskImage}>
                                <FontAwesomeIcon icon={faTimes} className={cx('image-preview__icon')} />
                            </button>
                        </div>
                        <Image src={selectedAskImage} alt="Preview" className={cx('image-preview')} />
                    </div>
                )}
                <div className={cx('discuss-input__button')}>
                    {(userAskInput.contentFor !== '' || selectedAskImage !== null) && (
                        <>
                            <Button primary small type="submit" className={cx('discuss-input__button-ask')}>
                                Bình luận
                            </Button>
                            <Button outline small onClick={handleAskCancel} className={cx('discuss-input__button-cancel')}>
                                Hủy
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
};

export default AddImg;
