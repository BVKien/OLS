// libs
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // handler để thấy được timeout id của setTimeOut trả về
        const handler = setTimeout(() => setDebounceValue(value), delay);

        // mối khi function bị clean up -> clear timeout đi
        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
};

export default useDebounce;
