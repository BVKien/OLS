// libs
import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import PropTypes from 'prop-types';

// layouts
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFunction = () => {};

const Menu = ({ children, items = [], hideOnClick = false, onChange = defaultFunction, ...passProps }) => {
    // lấy ra trang nhất có nghĩa lấy ra phần tử cuối của mảng
    const [history, setHistory] = useState([{ data: items }]);
    // phần tử hiện tại - phần tử cuối
    const current = history[history.length - 1];

    const renderItems = () => {
        // render current - lay data
        return current.data.map((item, index) => {
            // !! convert boolean -> true false
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // consolelog test
                            //console.log(item.children);
                            // next page
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // hanldeback menu
    const handleBack = () => {
        // đơn giản là xóa phần tử cuối đi nó sẽ lùi lại 1 cấp
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    // render result
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header
                        title={current.title}
                        // có nghĩa sau khi đi vào menu con của language -> nhấn icon back sẽ quay lại menu cha
                        // tính chất của array [0, 1, 2, ...]
                        onBack={handleBack}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // reset to first page - menu
    // trả về trang đầu tiên - menu
    const hanldeReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            //visible //nếu chọn visible thì có thể hiển thị mặc định
            interactive
            delay={[0, 700]}
            offset={[30, 14]} // căn độ lệch cho menu avatar - chieu ngang, chieu cao
            hideOnClick={hideOnClick} // ẩn khi click - ở đây là menu của avtar
            placement="bottom-end"
            render={renderResult}
            // set về phần tử đầu tiên -> khi bỏ hover sẽ trả về
            // khi hover avatar -> đi vào menu con như language -> bỏ hover -> mất -> quany lại menu cha
            onHide={hanldeReset}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
