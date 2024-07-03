// libs
import { React, useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import styles from './Search.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css'; // optional - cho việc hiển thị tooltip
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    // show khu vuực kết quả Search lên với 2 ddkien, có ký tự và phải đc focus
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    // 1: '' lần đầu tiên component này chạy là 1 chuỗi rỗng
    // 2: 'h'
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    // get api
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        // text input
        setSearchValue('');
        // kết quả tìm kiếm get từ api -> thay thế thành mảng rỗng
        setSearchResult([]);
        inputRef.current.focus(); // mục đích giữ nguyên kết quả cũ trong khi vẫn có thể focus(dấu nháy active nhập text của thanh search) vào nó
    };

    // ẩn danh sách kết quả tìm kiếm khi không focus
    const handleHideResult = () => {
        setShowResult(false);
    };

    // ko đc bắt đầu bằng space
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Fix Tippy warning
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. Specifying `appendTo: document.body` silences this warning, but it assumes you are using a focus management solution to handle keyboard navigation.
        <div>
            {/* Tippy: hỗ trợ hiển thị hiển thị khung list khi hover - tooltip */}
            <HeadlessTippy
                // điều kiện để hiển thị danh sách kết quả tìm kiếm searchResult.length > 0
                interactive
                //appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {/* tối ưu cho trường hợp quá nhiều elements
                            -> gây ảnh hưởng đến hiệu năng */}
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </div>
                    </PopperWrapper>
                )}
                // đọc doc của Tippy
                // onclickOutSide: bấm ra ngoài khu vực Tippy
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef} //?
                        value={searchValue}
                        placeholder="Tìm kiếm các khóa học và bài viết"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {/* khi có searchValue thì hiển thị button clear */}
                    {!!searchValue && !loading && (
                        //button clear -> x
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* button loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    {/* button search */}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
