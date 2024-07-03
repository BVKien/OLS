// ctrl + shift + L: chọn nhiều select trùng nhau
export const UploadIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        /*
        cách dùng 
        className={className}
        widths={width}
        height={height}*/

        aria-label="Upload"
        className={'x1lliihq x1n2onr6 x5n08af'}
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
    >
        <path
            d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="6.545"
            x2="17.455"
            y1="12.001"
            y2="12.001"
        ></line>
        <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12.003"
            x2="12.003"
            y1="6.545"
            y2="17.455"
        ></line>
    </svg>
);

export const NotificationIcon = ({ width = '', height = '', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        className={'css-crjo1b'}
        id="cds-react-aria-8"
    >
        <path
            d="M12 .4a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5"
            fill="none"
            stroke="currentColor" // màu viền
            strokeWidth="1" // độ dày viền
        ></path>
        <path
            d="M9.96 19.4h4.07l.145.253a2.5 2.5 0 01-.388 2.987 2.503 2.503 0 01-3.976-3.04l.15-.2"
            fill="none"
            stroke="currentColor" // màu viền
            strokeWidth="1" // độ dày viền
        ></path>
        <path
            d="M12 3.4a5.35 5.35 0 015.5 5.508V11.9c0 .934.54 1.528 1.282 2.342l.088.097c.76.836 1.63 1.86 1.63 3.561v2.5h-17v-2.5c0-1.702.87-2.725 1.63-3.561l.088-.097C5.959 13.428 6.5 12.834 6.5 11.9V8.908A5.35 5.35 0 0112 3.4"
            fill="none"
            stroke="currentColor" // màu viền
            strokeWidth="1" // độ dày viền
        ></path>
        <path
            d="M11.984 4.4A4.35 4.35 0 007.5 8.884V11.9c0 1.334-.798 2.204-1.485 2.953-.05.053-.098.106-.145.158-.74.814-1.37 1.59-1.37 2.889v1.5h15v-1.5c0-1.298-.63-2.075-1.37-2.889a42.018 42.018 0 00-.145-.158c-.687-.748-1.485-1.619-1.485-2.953V8.884A4.349 4.349 0 0011.984 4.4"
            fill="none"
            stroke="currentColor" // màu viền
            strokeWidth="1" // độ dày viền
        ></path>
    </svg>
);

export const SearchIcon = ({ width = '', height = '', className }) => (
    <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
        ></path>
    </svg>
);

// Header
// loading icon
// clear icon

// Sidebar
export const HomeIcon = ({ width = '27px', height = '27px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <path d="M50 8 L20 40 L20 75 L80 75 L80 40 Z" fill="none" stroke="#000" strokeWidth="4" />
    </svg>
);

export const LearningPathsIcon = ({ width = '27px', height = '27px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <rect x="20" y="10" width="60" height="80" rx="8" ry="8" fill="none" stroke="#000" strokeWidth="4" />
        <line x1="20" y1="10" x2="50" y2="40" stroke="#000" strokeWidth="4" />
    </svg>
);
