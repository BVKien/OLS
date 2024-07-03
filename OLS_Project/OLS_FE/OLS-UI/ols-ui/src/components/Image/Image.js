// libs
import { React, forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// components
import images from '~/assets/images';
import styles from './Image.module.scss';

// custome fallback - truyền fallback từ ngoài vào <=>
// nêu ko truyền từ ngoài vào thì sẽ lấy images.no-image
const Image = forwardRef(({ src, alt, className, fallback: customeFallback = images.noImage, ...props }, ref) => {
    // khi ảnh lỗi sẽ dùng cái  thay thế, cái thay thể ở đây là fallback
    // fallback: img dự phòng
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customeFallback);
    };

    return (
        // mặc định css của Image là wrapper
        // className là tự custome từ bên ngoài
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            // fallback || src: đơn giản là đặt sự ưu tiên
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
