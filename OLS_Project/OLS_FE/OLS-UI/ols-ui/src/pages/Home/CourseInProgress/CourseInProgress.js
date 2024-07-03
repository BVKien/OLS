// From react and libs
import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import styles from './CourseInProgress.module.scss';
import { faBars, faArrowRight, faPen, faTrash, faX, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faComment, faImage } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const CourseInProgress = () => {
    // == States to track ==
    // -- User --
    const [userDetails, setUserDetails] = useState('');

    // -- Course content --
    const [courseDetails, setCourseDetails] = useState('');
    const [chapters, setChapters] = useState([]);
    const [activeChapter, setActiveChapter] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [lessonDetails, setLessonDetails] = useState('');

    // -- Discuss --
    const [discussDetails, setDiscussDetails] = useState('');
    const [showDiscuss, setShowDiscuss] = useState(false);
    const [asks, setAsks] = useState([]);
    const [selectedAskId, setSelectedAskId] = useState(null);
    const [selectedAskIdForReply, setSelectedAskIdForReply] = useState(null);
    const [replies, setReplies] = useState([]);
    const [replyCount, setReplyCount] = useState(null);

    // Other way to defined an Api --> more clear, more easy to maintain
    const createAskApiUrl = 'https://localhost:7158/createAsk';
    const createAskData = {
        askContent: '',
        userUserId: '',
        image: '',
        discussDiscussId: '',
    };
    const [userAskInput, setUserAskInput] = useState(createAskData);
    const [selectedAskImage, setSelectedAskImage] = useState(null);
    const [selectedAskUpdateImage, setSelectedAskUpdateImage] = useState(null);

    const [askDetails, setAskDetails] = useState('');
    const updateAskData = {
        askContent: '',
        image: '',
    };
    const [userUpdateAskInput, setUserUpdateAskInput] = useState(updateAskData);

    const createReplyApiUrl = 'https://localhost:7158/createReply';
    const createReplyData = {
        replyContent: '',
        askAskId: '',
        userUserId: '',
        image: '',
    };
    const [userReplyInput, setUserReplyInput] = useState(createReplyData);
    const [selectedReplyImage, setSelectedReplyImage] = useState(null);

    const [selectedAskIdForActions, setSelectedAskIdForActions] = useState(null);
    const [selectedAskIdForActionEdit, setSelectedAskIdForActionEdit] = useState(null);
    const [selectedAskIdForActionDelete, setSelectedAskIdForActionDelete] = useState(null);

    // -- Note --
    const [showNote, setShowNote] = useState(false);

    // -- Others --
    const [loading, setLoading] = useState(true);
    const [clickCount, setClickCount] = useState(1);

    // Extracting courseId from URLs
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    const lessonId = urlParams.get('lessonId');

    // Self defined
    const userId = 2; // hard code
    const isCurrentUser = userDetails && userDetails.userId === userId;

    // -- Course content --
    // Toggle chapter
    const handleToggleChapter = (chapterId) => {
        setActiveChapter((prev) => (prev === chapterId ? null : chapterId));
    };

    // -- Discuss --
    // Toggle discuss
    const handleToggleDiscuss = () => {
        setShowDiscuss((prevShowDiscuss) => !prevShowDiscuss);
    };

    // Toggle reply
    const handleToggleReply = (askId) => {
        setSelectedAskIdForReply((prevSelectedAskId) => (prevSelectedAskId === askId ? null : askId));
    };

    // Toggle discuss ask actions
    const handleToggleAskActions = (askId) => {
        setSelectedAskIdForActions((prevId) => (prevId === askId ? null : askId));
    };

    // Toggle discuss ask action edit
    const handleToggleAskActionEdit = (askId) => {
        setSelectedAskIdForActionEdit((prevId) => (prevId === askId ? null : askId));
    };

    // Toggle discuss ask action delete
    const handleToggleAskActionDelete = (askId) => {
        setSelectedAskIdForActionDelete((prevId) => (prevId === askId ? null : askId));
    };

    // Toggle discuss ask action delete cancel
    const handleToggleAskActionDeleteCancel = () => {
        setSelectedAskIdForActionDelete(null);
    };

    // -- Note --
    // Toggle note
    const handleToggleNote = () => {
        setShowNote((prevShowNote) => !prevShowNote);
    };

    // -- Others --
    // Toggle menu
    const handleToggleMenu = () => {
        setClickCount(clickCount + 1);
    };

    // -- User --
    // Fetch user details by userId
    useEffect(() => {
        const fetchUserDetailsByUserId = async () => {
            try {
                const responseUser = await axios.get(`https://localhost:7158/getUserByUserId/${userId}`);
                setUserDetails(responseUser.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetailsByUserId();
    }, [userId]);

    // -- Course content --
    // Fetch course details by courseId
    useEffect(() => {
        const fetchCourseDetailsFromCourseId = async () => {
            try {
                const responseCourse = await axios.get(`https://localhost:7158/getCourseByCourseId_Home/${courseId}`);
                setCourseDetails(responseCourse.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetailsFromCourseId();
    }, [courseId]);

    // Fetch chapters when courseId changes
    useEffect(() => {
        const fetchChaptersFromCourseId = async () => {
            try {
                const responseChapters = await axios.get(`https://localhost:7158/getAllChaptersByCourseId/${courseId}`);
                setChapters(responseChapters.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChaptersFromCourseId();
    }, [courseId]);

    // Fetch lessons when chapterId changes
    useEffect(() => {
        const fetchLessonsByChapterId = async () => {
            try {
                if (activeChapter !== null) {
                    const responseLessons = await axios.get(
                        `https://localhost:7158/getAllLessonsByChapterId/${activeChapter}`,
                    );
                    setLessons(responseLessons.data);
                }
            } catch (error) {
                console.error('Error fetching lessons:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLessonsByChapterId();
    }, [activeChapter]);

    // Fetch lesson details by lessonId
    useEffect(() => {
        const fetchLessonDetailsFromLessonId = async () => {
            try {
                const responseLesson = await axios.get(`https://localhost:7158/getLessonById/${lessonId}`);
                setLessonDetails(responseLesson.data);
            } catch (error) {
                console.error('Error fetching lesson:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLessonDetailsFromLessonId();
    }, [lessonId]);

    // -- Discuss --
    // Fetch discuss details by lessonId
    useEffect(() => {
        const fetchDiscussDetailsFromLessonId = async () => {
            try {
                const responseDiscuss = await axios.get(`https://localhost:7158/getDiscussByLessonId/${lessonId}`);
                setDiscussDetails(responseDiscuss.data);
            } catch (error) {
                console.error('Error fetching discuss:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDiscussDetailsFromLessonId();
    }, [lessonId]);

    // Fetch asks when discussId, askId changes
    useEffect(() => {
        const fetchAsksByDiscussId = async () => {
            try {
                if (discussDetails && discussDetails.discussId) {
                    const responseAsks = await axios.get(
                        `https://localhost:7158/getAllAskByDiscussId/${discussDetails.discussId}`,
                    );
                    setAsks(responseAsks.data);
                }
            } catch (error) {
                console.error('Error fetching:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAsksByDiscussId();
    }, [discussDetails.discussId, asks.askId]);

    // Function handle fetch replies when askId changes
    const handleFetchRepliesByAskId = async (askId) => {
        try {
            // If the selectedAskId is the same as the current askId, set it to null --> close the replies
            setSelectedAskId((prevSelectedAskId) => (prevSelectedAskId === askId ? null : askId));

            // Fetch replies only if the selectedAskId is not the same as the current askId
            if (selectedAskId !== askId) {
                const responseReplies = await axios.get(`https://localhost:7158/getAllRepliesByAskId/${askId}`);
                setReplies(responseReplies.data);
            }
        } catch (error) {
            console.error('Error fetching replies:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function handle fetch count replies by askId
    const handleCountRepliesByAskId = async (askId) => {
        try {
            const response = await axios.get(`https://localhost:7158/countRepliesByAskId/${askId}`);
            const count = response.data; // Amount of replies
            setReplyCount(count);
        } catch (error) {
            console.error('Error counting replies:', error);
        }
    };

    // Effect get amount of replies when askId is selected
    useEffect(() => {
        if (selectedAskId) {
            handleCountRepliesByAskId(selectedAskId);
        }
    }, [selectedAskId]);

    // Handle change value of user ask input
    const handleUserAskInputChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            // Read image and update state preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedAskImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }

        setUserAskInput({
            ...userAskInput,
            [name]: value,
            userUserId: userDetails.userId,
            discussDiscussId: discussDetails.discussId,
        });
    };

    // Handle submit ask input
    const handleSubmitAskInput = async (event) => {
        event.preventDefault();

        try {
            await axios.post(createAskApiUrl, userAskInput);
            console.log('Create ask success', userAskInput);
            // Recall Api after create ask success
            const responseAsks = await axios.get(
                `https://localhost:7158/getAllAskByDiscussId/${discussDetails.discussId}`,
            );
            setAsks(responseAsks.data);
            setUserAskInput(createAskData);
            setSelectedAskImage(null);
        } catch (error) {
            console.error('Error creating ask:', error);
        }
    };

    // Handle remove ask image preview
    const handleRemoveAskImage = () => {
        setSelectedAskImage(null);
    };

    // Handle ask cancel
    const handleAskCancel = () => {
        setUserAskInput('');
        setSelectedAskImage(null);
    };

    // Fetch ask details by askId
    useEffect(() => {
        const fetchAskDetailsByAskId = async () => {
            try {
                const responseAskDetails = await axios.get(
                    `https://localhost:7158/getAskByAskId/${selectedAskIdForActionEdit}`,
                );

                console.log(responseAskDetails);
                setAskDetails(responseAskDetails.data);
            } catch (error) {
                console.error('Error fetching ask:', error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedAskIdForActionEdit) {
            fetchAskDetailsByAskId();
        }
    }, [selectedAskIdForActionEdit]);

    // Handle change value of user update input
    const handleUpdateInputChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            // Read image and update state preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedAskUpdateImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }

        setUserUpdateAskInput({
            ...userUpdateAskInput,
            [name]: value,
        });
    };

    // Handle update ask by askId
    const handleUpdateAskByAskId = async (event) => {
        event.preventDefault();

        try {
            await axios.put(
                `https://localhost:7158/updateAskByAskID/${selectedAskIdForActionEdit}`,
                userUpdateAskInput,
            );
            console.log('Ask update success', userUpdateAskInput);
            // Recall Api after create update success
            const responseAsks = await axios.get(
                `https://localhost:7158/getAllAskByDiscussId/${discussDetails.discussId}`,
            );
            setAsks(responseAsks.data);

            setSelectedAskIdForActionEdit(null);
            setSelectedAskIdForActions(null);
        } catch (error) {
            console.error('Error updating ask:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle remove ask update image preview
    const handleRemoveAskUpdateImage = () => {
        setSelectedAskUpdateImage(null);
    };

    // Handle delete ask by askId after confirmation
    const handleDeleteAskByAskId = async () => {
        try {
            await axios.delete(`https://localhost:7158/deleteAskByAskId/${selectedAskIdForActionDelete}`);
            console.log('Delete ask success');
            const responseAsks = await axios.get(
                `https://localhost:7158/getAllAskByDiscussId/${discussDetails.discussId}`,
            );
            setAsks(responseAsks.data);
            setSelectedAskIdForActionDelete(null);
        } catch (error) {
            console.error('Error deleting ask:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle change value of user reply input
    const handleUserReplyInputChange = (event, askId) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            // Read image and update state preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedReplyImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }

        setUserReplyInput({
            ...userReplyInput,
            askAskId: askId, // Use the provided askId
            userUserId: userDetails.userId,
            [name]: value,
        });
    };

    // Handle submit reply input
    const handleSubmitReplyInput = async (event) => {
        event.preventDefault();

        try {
            await axios.post(createReplyApiUrl, userReplyInput);
            console.log('Create reply success', userReplyInput);
            // Recall Api after create reply success
            const responseReplies = await axios.get(
                `https://localhost:7158/getAllRepliesByAskId/${userReplyInput.askAskId}`,
            );
            setReplies(responseReplies.data);
            setUserReplyInput(createReplyData);
            setSelectedReplyImage(null);
        } catch (error) {
            console.error('Error creating reply:', error);
        }
    };

    // Handle remove reply image preview
    const handleRemoveReplyImage = () => {
        setSelectedReplyImage(null);
    };

    // Handle reply cancel
    const handleReplyCancel = () => {
        setUserReplyInput('');
        setSelectedReplyImage(null);
    };

    // -- Others --
    // Loading when waiting or wrong logic
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    <div className={cx('col-12')}>
                        {/* Sidebar */}
                        <div className={cx('side-bar-wrap')}>
                            <div className={cx('action-wrap')}>
                                <div className={cx('action-menu')} onClick={handleToggleMenu}>
                                    <FontAwesomeIcon icon={faBars} /> <span>Danh sách</span>
                                </div>

                                <div className={cx('action-next')}>
                                    <span>Bài tiếp theo</span> <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                            <nav
                                className={cx('side-bar', {
                                    'menu-open': clickCount % 2 === 1,
                                    'menu-close': clickCount % 2 === 0,
                                })}
                            >
                                <ul className={cx('chapter-list')}>
                                    <h1 className={cx('chapter-list__name')}>Các chương</h1>
                                    {chapters.map((chapter) => (
                                        <li
                                            key={chapter.chapterId}
                                            className={cx(
                                                `lesson-item ${activeChapter === chapter.chapterId ? 'active' : ''}`,
                                            )}
                                            onClick={() => handleToggleChapter(chapter.chapterId)}
                                        >
                                            <p className={cx('chapter-item__name')}>{chapter.chapterName}</p>
                                            {activeChapter === chapter.chapterId && (
                                                <div className={cx('lesson-item__wrap')}>
                                                    {lessons.map((lesson) => (
                                                        <span key={lesson.lessonId} className={cx('lesson-item__name')}>
                                                            <a
                                                                href={`http://localhost:3003/course-in-progress?courseId=${courseId}&lessonId=${lesson.lessonId}`}
                                                                onClick={(e) => {
                                                                    handleToggleChapter(chapter.chapterId);
                                                                    window.location.href = `http://localhost:3003/course-in-progress?courseId=${courseId}&lessonId=${lesson.lessonId}`;
                                                                }}
                                                            >
                                                                <p>{lesson.title}</p>
                                                            </a>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Content */}
                        <section className={cx('content', { 'menu-close': clickCount % 2 === 0 })}>
                            <div className={cx('course-lesson')}>
                                {lessonDetails && lessonDetails.video ? (
                                    <iframe
                                        className={cx('course-lesson__video')}
                                        src={`https://www.youtube.com/embed/${lessonDetails.video}`}
                                        frameBorder="0"
                                        allowFullScreen
                                        name="video"
                                    ></iframe>
                                ) : (
                                    <img
                                        className={cx('course-lesson__video')}
                                        src={courseDetails.image}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></img>
                                )}

                                <div className={cx('course-lesson__name-notes-wrap')}>
                                    {lessonDetails && lessonDetails.video ? (
                                        <span className={cx('course-lesson__name-title')}>{lessonDetails.title}</span>
                                    ) : (
                                        <span className={cx('course-lesson__name-title')}>
                                            {courseDetails.courseName}
                                        </span>
                                    )}

                                    <span className={cx('course-lesson__note-title')} onClick={handleToggleNote}>
                                        <FontAwesomeIcon icon={faPen} /> Ghi chú
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Discuss */}
                        <div className={cx('discuss')} style={{ display: showDiscuss ? 'block' : 'none' }}>
                            <div className={cx('discuss-content-wrap')}>
                                {/* Heading */}
                                <div className={cx('discuss-heading')}>
                                    <span className={cx('discuss-heading__count')}>Thảo luận</span>
                                    <FontAwesomeIcon
                                        icon={faX}
                                        className={cx('discuss-heading__exit')}
                                        onClick={handleToggleDiscuss}
                                    />
                                </div>

                                {/* Input Ask */}
                                <form onSubmit={handleSubmitAskInput}>
                                    <div className={cx('discuss-input')}>
                                        <Image src={userDetails.image} className={cx('user-avatar')} />
                                        <textarea
                                            placeholder="Đặt câu hỏi"
                                            className={cx('discuss-input__user-input__text')}
                                            name={'askContent'}
                                            value={userAskInput.askContent}
                                            onChange={handleUserAskInputChange}
                                        ></textarea>
                                        <label className={cx('custom-file-upload')}>
                                            <input
                                                id="askImageInput"
                                                type="file"
                                                accept="image/*"
                                                name={'image'}
                                                value={userAskInput.image}
                                                onChange={handleUserAskInputChange}
                                            />
                                            <FontAwesomeIcon icon={faImage} />
                                        </label>
                                        {selectedAskImage && (
                                            <div>
                                                <div className={cx('image-preview__icon-wrap')}>
                                                    <button onClick={handleRemoveAskImage}>
                                                        <FontAwesomeIcon
                                                            icon={faX}
                                                            className={cx('image-preview__icon')}
                                                        />
                                                    </button>
                                                </div>
                                                <Image
                                                    src={selectedAskImage}
                                                    alt="Preview"
                                                    className={cx('image-preview')}
                                                />
                                            </div>
                                        )}
                                        <div className={cx('discuss-input__button')}>
                                            {(userAskInput.askContent !== '' && (
                                                <>
                                                    <Button
                                                        primary
                                                        small
                                                        type={'submit'}
                                                        className={cx('discuss-input__button-ask')}
                                                    >
                                                        Bình luận
                                                    </Button>
                                                    <Button
                                                        outline
                                                        small
                                                        onClick={handleAskCancel}
                                                        className={cx('discuss-input__button-cancel')}
                                                    >
                                                        Hủy
                                                    </Button>
                                                </>
                                            )) ||
                                                (selectedAskImage !== null && (
                                                    <>
                                                        <Button
                                                            primary
                                                            small
                                                            type={'submit'}
                                                            className={cx('discuss-input__button-ask')}
                                                        >
                                                            Bình luận
                                                        </Button>
                                                        <Button
                                                            outline
                                                            small
                                                            onClick={handleAskCancel}
                                                            className={cx('discuss-input__button-cancel')}
                                                        >
                                                            Hủy
                                                        </Button>
                                                    </>
                                                )) ||
                                                (userAskInput.askContent !== '' && selectedAskImage !== null && (
                                                    <>
                                                        <Button
                                                            primary
                                                            small
                                                            type={'submit'}
                                                            className={cx('discuss-input__button-ask')}
                                                        >
                                                            Bình luận
                                                        </Button>
                                                        <Button
                                                            outline
                                                            small
                                                            onClick={handleAskCancel}
                                                            className={cx('discuss-input__button-cancel')}
                                                        >
                                                            Hủy
                                                        </Button>
                                                    </>
                                                ))}
                                        </div>
                                    </div>
                                </form>

                                {/* Begin asks and replies */}
                                {/* Asks */}
                                {asks.map((ask) => (
                                    <div key={ask.askId} className={cx('discuss-ask-reply')}>
                                        <div className={cx('discuss-ask')}>
                                            {/* User ask details */}
                                            <div className={cx('discuss-ask__image')}>
                                                <Image src={ask.avatar} className={cx('user-avatar')} />
                                            </div>
                                            <div className={cx('discuss-ask__wrap')}>
                                                <span className={cx('user-name')}>{ask.fullName}</span>
                                                <div className={cx('discuss-ask-content__wrap')}>
                                                    {ask.image && (
                                                        <Image
                                                            src={ask.image}
                                                            className={cx('discuss-ask-content__image')}
                                                        />
                                                    )}
                                                    {ask.askContent && (
                                                        <p className={cx('discuss-ask-content__detail')}>
                                                            {ask.askContent}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Answer, view all answers, actions */}
                                                <div className={cx('discuss-ask__reply-title-details-wrap')}>
                                                    <span
                                                        className={cx('discuss-ask__reply-title')}
                                                        onClick={() => handleToggleReply(ask.askId)}
                                                    >
                                                        Trả lời
                                                    </span>
                                                    <span
                                                        className={cx('discuss-ask__reply-content-details')}
                                                        onClick={() => handleFetchRepliesByAskId(ask.askId)}
                                                    >
                                                        Xem câu trả lời
                                                    </span>

                                                    {/* Logic: appear actions when is current user === true */}
                                                    {/* {isCurrentUser && (
                                                        <span
                                                            className={cx('discuss-ask__reply-actions')}
                                                            onClick={handleToggleReplyActions}
                                                        >
                                                            <FontAwesomeIcon icon={faEllipsis} />
                                                        </span>
                                                    )} */}

                                                    {/* Icon open ask actions */}
                                                    <span
                                                        className={cx('discuss-ask__reply-actions')}
                                                        onClick={() => handleToggleAskActions(ask.askId)}
                                                    >
                                                        <FontAwesomeIcon icon={faEllipsis} />
                                                    </span>
                                                    <div
                                                        className={cx('discuss-ask__reply-actions-details')}
                                                        style={{
                                                            display:
                                                                selectedAskIdForActions === ask.askId
                                                                    ? 'block'
                                                                    : 'none',
                                                        }}
                                                    >
                                                        {/* Ask - Actions */}
                                                        <div
                                                            className={cx('discuss-ask__reply-actions-details-content')}
                                                        >
                                                            <div
                                                                className={cx(
                                                                    'discuss-ask__reply-actions-details-icon-wrap',
                                                                )}
                                                            >
                                                                <span
                                                                    className={cx(
                                                                        'discuss-ask__reply-actions-details-icon',
                                                                    )}
                                                                >
                                                                    <FontAwesomeIcon icon={faPen} />
                                                                </span>
                                                                <span
                                                                    className={cx(
                                                                        'discuss-ask__reply-actions-details-title',
                                                                    )}
                                                                    onClick={() => handleToggleAskActionEdit(ask.askId)}
                                                                >
                                                                    Chỉnh sửa
                                                                </span>
                                                            </div>

                                                            <div
                                                                className={cx(
                                                                    'discuss-ask__reply-actions-details-icon-wrap',
                                                                )}
                                                            >
                                                                <span
                                                                    className={cx(
                                                                        'discuss-ask__reply-actions-details-icon',
                                                                    )}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </span>
                                                                <span
                                                                    className={cx(
                                                                        'discuss-ask__reply-actions-details-title',
                                                                    )}
                                                                    onClick={() =>
                                                                        handleToggleAskActionDelete(ask.askId)
                                                                    }
                                                                >
                                                                    Xóa
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Ask - Update */}
                                                <form onSubmit={handleUpdateAskByAskId}>
                                                    <div
                                                        className={cx('discuss-ask__actions-edit')}
                                                        style={{
                                                            display:
                                                                selectedAskIdForActionEdit === ask.askId
                                                                    ? 'block'
                                                                    : 'none',
                                                        }}
                                                    >
                                                        <Image src={userDetails.image} className={cx('user-avatar')} />
                                                        <textarea
                                                            placeholder="Chỉnh sửa"
                                                            className={cx('discuss-input__user-input__text')}
                                                            name="askContent"
                                                            value={userUpdateAskInput.askContent}
                                                            onChange={handleUpdateInputChange}
                                                        ></textarea>
                                                        <label className={cx('custom-file-upload')}>
                                                            <input
                                                                id="replyImageInput"
                                                                type="file"
                                                                accept="image/*"
                                                                name="image"
                                                                onChange={handleUpdateInputChange}
                                                            />
                                                            <FontAwesomeIcon icon={faImage} />
                                                        </label>
                                                        {/* Curent image */}
                                                        {askDetails.image && (
                                                            <div>
                                                                <div className={cx('image-preview__icon-wrap')}>
                                                                    <button onClick={handleRemoveAskUpdateImage}>
                                                                        <FontAwesomeIcon
                                                                            icon={faX}
                                                                            className={cx('image-preview__icon')}
                                                                        />
                                                                    </button>
                                                                </div>
                                                                <Image
                                                                    src={askDetails.image}
                                                                    alt="Preview"
                                                                    className={cx('image-preview')}
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Preview */}
                                                        {selectedAskUpdateImage && (
                                                            <div>
                                                                <div className={cx('image-preview__icon-wrap')}>
                                                                    <button onClick={handleRemoveAskUpdateImage}>
                                                                        <FontAwesomeIcon
                                                                            icon={faX}
                                                                            className={cx('image-preview__icon')}
                                                                        />
                                                                    </button>
                                                                </div>
                                                                <Image
                                                                    src={selectedAskUpdateImage}
                                                                    alt="Preview"
                                                                    className={cx('image-preview')}
                                                                />
                                                            </div>
                                                        )}
                                                        <div className={cx('discuss-input__button')}>
                                                            <Button
                                                                primary
                                                                small
                                                                type="submit"
                                                                className={cx('discuss-input__button-edit')}
                                                            >
                                                                Lưu
                                                            </Button>
                                                            <Button
                                                                outline
                                                                small
                                                                onClick={() => handleToggleAskActionEdit(ask.askId)}
                                                                className={cx('discuss-input__button-cancel')}
                                                            >
                                                                Hủy
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* Ask - Delete */}
                                                <div className={cx('discuss-ask__actions-delete')}>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col-12')}>
                                                            <div
                                                                className={cx('delete')}
                                                                style={{
                                                                    display:
                                                                        selectedAskIdForActionDelete === ask.askId
                                                                            ? 'block'
                                                                            : 'none',
                                                                }}
                                                            >
                                                                <div className={cx('delete-wrap')}>
                                                                    <div className={cx('delete-content')}>
                                                                        <Image
                                                                            src={
                                                                                'https://static.vecteezy.com/system/resources/previews/016/964/110/non_2x/eps10-red-garbage-or-trash-can-solid-icon-or-logo-isolated-on-white-background-delete-or-rubbish-basket-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg'
                                                                            }
                                                                            className={cx('delete-content__image')}
                                                                        />
                                                                        <p className={cx('delete-content__title')}>
                                                                            Xác nhận xóa bình luận này?
                                                                        </p>
                                                                        <div className={cx('delete-wrap__button')}>
                                                                            <Button
                                                                                primary
                                                                                onClick={handleDeleteAskByAskId}
                                                                                className={cx(
                                                                                    'delete-wrap__button-delete',
                                                                                )}
                                                                            >
                                                                                Xóa
                                                                            </Button>
                                                                            <Button
                                                                                outline
                                                                                onClick={
                                                                                    handleToggleAskActionDeleteCancel
                                                                                }
                                                                                className={cx(
                                                                                    'delete-wrap__button-cancel',
                                                                                )}
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
                                            </div>
                                        </div>

                                        {/* Replies */}
                                        <form onSubmit={(e) => handleSubmitReplyInput(e, ask.askId)}>
                                            <div className={cx('discuss-reply')}>
                                                <div
                                                    className={cx('discuss-reply__input-wrap')}
                                                    style={{
                                                        display: selectedAskIdForReply === ask.askId ? 'block' : 'none',
                                                    }}
                                                >
                                                    <Image src={userDetails.image} className={cx('user-avatar')} />
                                                    <textarea
                                                        placeholder="Trả lời"
                                                        className={cx('discuss-input__user-input__text')}
                                                        name={'replyContent'}
                                                        value={userReplyInput.replyContent}
                                                        onChange={(e) => handleUserReplyInputChange(e, ask.askId)}
                                                    ></textarea>
                                                    <label className={cx('custom-file-upload')}>
                                                        <input
                                                            id="replyImageInput"
                                                            type="file"
                                                            accept="image/*"
                                                            name={'image'}
                                                            onChange={(e) => handleUserReplyInputChange(e, ask.askId)}
                                                        />
                                                        <FontAwesomeIcon icon={faImage} />
                                                    </label>
                                                    {selectedReplyImage && (
                                                        <div>
                                                            <div className={cx('image-preview__icon-wrap')}>
                                                                <button onClick={handleRemoveReplyImage}>
                                                                    <FontAwesomeIcon
                                                                        icon={faX}
                                                                        className={cx('image-preview__icon')}
                                                                    />
                                                                </button>
                                                            </div>
                                                            <Image
                                                                src={selectedReplyImage}
                                                                alt="Preview"
                                                                className={cx('image-preview')}
                                                            />
                                                        </div>
                                                    )}
                                                    <div className={cx('discuss-input__button')}>
                                                        {(userReplyInput.replyContent !== '' && (
                                                            <>
                                                                <Button
                                                                    primary
                                                                    small
                                                                    type={'submit'}
                                                                    className={cx('discuss-input__button-reply')}
                                                                >
                                                                    Bình luận
                                                                </Button>
                                                                <Button
                                                                    outline
                                                                    small
                                                                    onClick={handleReplyCancel}
                                                                    className={cx('discuss-input__button-cancel')}
                                                                >
                                                                    Hủy
                                                                </Button>
                                                            </>
                                                        )) ||
                                                            (selectedReplyImage !== null && (
                                                                <>
                                                                    <Button
                                                                        primary
                                                                        small
                                                                        type={'submit'}
                                                                        className={cx('discuss-input__button-reply')}
                                                                    >
                                                                        Bình luận
                                                                    </Button>
                                                                    <Button
                                                                        outline
                                                                        small
                                                                        onClick={handleReplyCancel}
                                                                        className={cx('discuss-input__button-cancel')}
                                                                    >
                                                                        Hủy
                                                                    </Button>
                                                                </>
                                                            )) ||
                                                            (userReplyInput.replyContent !== '' &&
                                                                selectedReplyImage !== null && (
                                                                    <>
                                                                        <Button
                                                                            primary
                                                                            small
                                                                            type={'submit'}
                                                                            className={cx(
                                                                                'discuss-input__button-reply',
                                                                            )}
                                                                        >
                                                                            Bình luận
                                                                        </Button>
                                                                        <Button
                                                                            outline
                                                                            small
                                                                            onClick={handleReplyCancel}
                                                                            className={cx(
                                                                                'discuss-input__button-cancel',
                                                                            )}
                                                                        >
                                                                            Hủy
                                                                        </Button>
                                                                    </>
                                                                ))}
                                                    </div>
                                                </div>

                                                {/* User reply */}
                                                {selectedAskId === ask.askId &&
                                                    replies &&
                                                    replies.length > 0 &&
                                                    replies.map((reply) => (
                                                        <div
                                                            key={reply.replyId}
                                                            className={cx('discuss-reply__content-wrap')}
                                                        >
                                                            {/* User reply details */}
                                                            <div className={cx('discuss-reply__image')}>
                                                                <Image
                                                                    src={reply.avatar}
                                                                    className={cx('user-avatar')}
                                                                />
                                                            </div>
                                                            <div className={cx('discuss-reply__list')}>
                                                                <span className={cx('user-name')}>
                                                                    {reply.fullName}
                                                                </span>
                                                                <div className={cx('discuss-reply__item')}>
                                                                    {reply.image && (
                                                                        <Image
                                                                            src={reply.image}
                                                                            className={cx('discuss-ask-content__image')}
                                                                        />
                                                                    )}
                                                                    {reply.replyContent && (
                                                                        <div
                                                                            className={cx(
                                                                                'discuss-reply__content-details',
                                                                            )}
                                                                        >
                                                                            <div
                                                                                className={cx(
                                                                                    'discuss-reply__user-tag',
                                                                                )}
                                                                            >
                                                                                <span
                                                                                    className={cx(
                                                                                        'discuss-reply__content',
                                                                                    )}
                                                                                >
                                                                                    {reply.replyContent}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </form>
                                    </div>
                                ))}
                                {/* End asks and replies */}
                            </div>
                        </div>
                        {/* To open discuss */}
                        <div className={cx('course-discuss')} onClick={handleToggleDiscuss}>
                            <FontAwesomeIcon icon={faComment} />
                        </div>

                        {/* Note */}
                        <div className={cx('note')} style={{ display: showNote ? 'block' : 'none' }}>
                            <div className={cx('note-wrap')}>
                                <span className={cx('note-close')} onClick={handleToggleNote}>
                                    <FontAwesomeIcon icon={faX} />
                                </span>
                                <div className={cx('note-heading')}>
                                    <span className={cx('note-heading__title')}>Thêm ghi chú</span>
                                </div>
                                <div className={cx('note-content')}>
                                    <input
                                        type="text"
                                        placeholder="Nội dung ghi chú"
                                        className={cx('note-content__input')}
                                    />
                                </div>
                                <div className={cx('note-content-list')}>
                                    <span className={cx('note-content-list__title')}>Danh sách ghi chú</span>
                                    <div className={cx('note-content-list__wrap')}>
                                        <br />
                                        <p className={cx('note-content-list__item')}>
                                            + OOP là object oriented programming
                                        </p>
                                        <div className={cx('note-content-list__item-icon')}>
                                            <p className={cx('note-content-list__item-icon__edit')}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </p>
                                            <p className={cx('note-content-list__item-icon__delete')}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </p>
                                        </div>
                                    </div>

                                    <div className={cx('note-content-list__wrap')}>
                                        <br />
                                        <p className={cx('note-content-list__item')}>+ HTML là ngôn ngữ đánh dấu</p>
                                        <div className={cx('note-content-list__item-icon')}>
                                            <p className={cx('note-content-list__item-icon__edit')}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </p>
                                            <p className={cx('note-content-list__item-icon__delete')}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </p>
                                        </div>
                                    </div>

                                    <div className={cx('note-content-list__wrap')}>
                                        <br />
                                        <p className={cx('note-content-list__item')}>
                                            + id là duy nhất, nên dùng class trong css
                                        </p>
                                        <div className={cx('note-content-list__item-icon')}>
                                            <p className={cx('note-content-list__item-icon__edit')}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </p>
                                            <p className={cx('note-content-list__item-icon__delete')}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </p>
                                        </div>
                                    </div>

                                    <div className={cx('note-content-list__wrap')}>
                                        <br />
                                        <p className={cx('note-content-list__item')}>
                                            + Sử dụng scss module giúp không bị trùng Css và khi xóa đi theo component
                                            không gây thừa CSS
                                        </p>
                                        <div className={cx('note-content-list__item-icon')}>
                                            <p className={cx('note-content-list__item-icon__edit')}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </p>
                                            <p className={cx('note-content-list__item-icon__delete')}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CourseInProgress;
