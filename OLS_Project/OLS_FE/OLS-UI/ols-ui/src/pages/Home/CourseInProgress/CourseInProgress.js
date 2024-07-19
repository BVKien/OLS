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
import QRCode from '~/assets/images/payment/QRCode.jpg';
import config from '~/config';

// customer api
import customerApi from '~/services/apis/customerApi';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CourseInProgress = () => {
    // == States to track ==
    // -- User --
    const [userDetails, setUserDetails] = useState('');

    // -- Chapter --

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
    const createAskApiUrl = customerApi.conversation.create_ask_or_reply;
    const createAskData = {
        userUserId: '',
        contentFor: '',
        image: '',
        discussDiscussId: '',
    };
    const [userAskInput, setUserAskInput] = useState(createAskData);
    const [selectedAskImage, setSelectedAskImage] = useState(null);
    const [selectedAskUpdateImage, setSelectedAskUpdateImage] = useState(null);

    const [askDetails, setAskDetails] = useState('');
    const updateAskData = {
        userUserId: '',
        contentFor: '',
        image: '',
    };
    const [userUpdateAskInput, setUserUpdateAskInput] = useState(updateAskData);

    // -- Reply --
    const [replyDetails, setReplyDetails] = useState('');
    const updateReplyData = {
        userUserId: '',
        contentFor: '',
        image: '',
    };
    const [userUpdateReplyInput, setUserUpdateReplyInput] = useState(updateReplyData);
    const [selectedReplyUpdateImage, setSelectedReplyUpdateImage] = useState(null);

    const createReplyApiUrl = customerApi.conversation.create_ask_or_reply;
    const createReplyData = {
        contentFor: '',
        image: '',
    };
    const [userReplyInput, setUserReplyInput] = useState(createReplyData);
    const [selectedReplyImage, setSelectedReplyImage] = useState(null);

    const [selectedAskIdForActions, setSelectedAskIdForActions] = useState(null);
    const [selectedAskIdForActionEdit, setSelectedAskIdForActionEdit] = useState(null);
    const [selectedAskIdForActionDelete, setSelectedAskIdForActionDelete] = useState(null);

    // -- Reply --
    const [selectedReplyIdForActions, setSelectedReplyIdForActions] = useState(null);
    const [selectedReplyIdForActionEdit, setSelectedReplyIdForActionEdit] = useState(null);
    const [selectedReplyIdForActionDelete, setSelectedReplyIdForActionDelete] = useState(null);

    // -- Note --
    const [showNote, setShowNote] = useState(false);
    const [notes, setNotes] = useState([]);
    const createNoteApiUrl = customerApi.note.create_note;
    const createNoteData = {
        userUserId: '',
        contentFor: '',
        lessonLessonId: '',
    };
    const [userNoteInput, setUserNoteInput] = useState(createNoteData);

    const updateNoteData = {
        contentFor: '',
    };
    const [userUpdateNoteInput, setUserUpdateNoteInput] = useState(updateNoteData);
    const [selectedNoteIdForActionEdit, setSelectedNoteIdForActionEdit] = useState(null);
    const [selectedNoteIdForActionDelete, setSelectedNoteIdForActionDelete] = useState(null);

    // -- Quiz --
    const [quizzes, setQuizzes] = useState([]);
    const [selectedLessonId, setSelectedLessonId] = useState(null);
    const [selectedQuizIdForQuestionAndAnswer, setSelectedQuizIdForQuestionAndAnswer] = useState(null);

    // -- Question --
    const [questions, setQuestions] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState(null);

    // -- Answer --
    const [answers, setAnswers] = useState([]);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerStatus, setAnswerStatus] = useState(null);

    // -- Others --
    const [loading, setLoading] = useState(true);
    const [clickCount, setClickCount] = useState(1);

    // Extracting courseId from URLs
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    const lessonId = urlParams.get('lessonId');

    // Self defined
    const userId = 46; // hard code
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

    // Toggle discuss reply action delete
    const handleToggleReplyActionDelete = (askId, replyForAskId) => {
        setSelectedReplyIdForActionDelete((prevId) => (prevId === askId ? null : askId));
    };

    // Toggle discuss reply action delete cancel
    const handleToggleReplyActionDeleteCancel = () => {
        setSelectedReplyIdForActionDelete(null);
    };

    // Toggle discuss reply actions
    const handleToggleReplyActions = (askId) => {
        setSelectedReplyIdForActions((prevId) => (prevId === askId ? null : askId));
    };

    // Toggle discuss ask action edit
    const handleToggleReplyActionEdit = (askId, replyForAskId) => {
        setSelectedReplyIdForActionEdit((prevId) => (prevId === askId ? null : askId));
    };

    // -- Note --
    // Toggle note
    const handleToggleNote = () => {
        setShowNote((prevShowNote) => !prevShowNote);
    };

    // Toggle discuss note action delete
    const handleToggleNoteActionDelete = (noteId) => {
        setSelectedNoteIdForActionDelete((prevId) => (prevId === noteId ? null : noteId));
    };

    // Toggle discuss note action delete cancel
    const handleToggleNoteActionDeleteCancel = () => {
        setSelectedNoteIdForActionDelete(null);
    };

    // Toggle discuss note action edit
    const handleToggleNoteActionEdit = (noteId) => {
        setSelectedNoteIdForActionEdit((prevId) => (prevId === noteId ? null : noteId));
    };

    // -- Quiz --
    // Toggle quiz to show questions and answers
    const handleToggleQuiz = (quizId) => {
        setSelectedQuizIdForQuestionAndAnswer((prevId) => (prevId === quizId ? null : quizId));
    };

    // Toggle discuss note action delete cancel
    const handleToggleQuizCancel = () => {
        setSelectedQuizIdForQuestionAndAnswer(null);
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
                const responseUser = await axios.get(customerApi.user.get_user_info + '/' + userId);
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
                const responseCourse = await axios.get(customerApi.course.get_course_detail + '/' + courseId);
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
                const responseChapters = await axios.get(
                    customerApi.chapter.get_all_chapter_in_course + '/' + courseId,
                );
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
                        customerApi.lesson.get_all_lesson_in_chapter + '/' + activeChapter,
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
                const responseLesson = await axios.get(customerApi.lesson.get_lesson_detail + '/' + lessonId);
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
                const responseDiscuss = await axios.get(customerApi.discuss.get_discussion_detail + '/' + lessonId);
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
                        customerApi.conversation.get_all_conversation_in_discussion + '/' + discussDetails.discussId,
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
    const handleFetchRepliesByAskId = async (discussId, askId) => {
        try {
            // If the selectedAskId is the same as the current askId, set it to null --> close the replies
            setSelectedAskId((prevSelectedAskId) => (prevSelectedAskId === askId ? null : askId));

            // Fetch replies only if the selectedAskId is not the same as the current askId
            if (selectedAskId !== askId) {
                const responseReplies = await axios.get(
                    customerApi.conversation.get_all_reply_of_asker_in_discussion + '/' + discussId + '/' + askId,
                );
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
            const response = await axios.get(
                customerApi.conversation.count_all_reply_of_asker_in_discussion +
                    '/' +
                    discussDetails.discussId +
                    '/' +
                    askId,
            );
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

    const handleUserAskInputChange = async (event) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            const formData = new FormData();
            formData.append('image', files[0]);

            try {
                const response = await axios.post('https://localhost:7003/api/Upload/UploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Response:', response.data);

                if (response.data && response.data.imageUrl) {
                    const imageUrl = response.data.imageUrl;

                    setUserAskInput((prevInput) => ({
                        ...prevInput,
                        image: imageUrl,
                        userUserId: userId,
                        discussDiscussId: discussDetails.discussId,
                    }));

                    setSelectedAskImage(imageUrl);
                    console.log('Image uploaded:', imageUrl);
                } else {
                    console.error('Invalid response data:', response.data);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            setUserAskInput((prevInput) => ({
                ...prevInput,
                [name]: value,
                userUserId: userId,
                discussDiscussId: discussDetails.discussId,
            }));
        }
    };

    const handleSubmitAskInput = async (event) => {
        event.preventDefault();

        try {
            await axios.post(createAskApiUrl, userAskInput);
            console.log('Create ask success', userAskInput);

            // Recall Api after create ask success
            const responseAsks = await axios.get(
                `${customerApi.conversation.get_all_conversation_in_discussion}/${discussDetails.discussId}`,
            );
            setAsks(responseAsks.data);
            setUserAskInput({
                image: '',
                userUserId: '',
                discussDiscussId: '',
                contentFor: '',
            });
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

    // Fetch ask details by ask id, reply for ask id, discuss id
    useEffect(() => {
        const fetchAskDetailsByAskId = async () => {
            try {
                const responseAskDetails = await axios.get(
                    customerApi.conversation.get_ask_detail +
                        '/' +
                        selectedAskIdForActionEdit +
                        '/' +
                        discussDetails.discussId,
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
                customerApi.conversation.update_ask_or_reply +
                    '/' +
                    selectedAskIdForActionEdit +
                    '/' +
                    userId +
                    '/' +
                    discussDetails.discussId,
                userUpdateAskInput,
            );
            console.log('Ask update success', userUpdateAskInput);
            // Recall Api after create update success
            const responseAsks = await axios.get(
                customerApi.conversation.get_all_conversation_in_discussion + '/' + discussDetails.discussId,
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
            await axios.delete(
                customerApi.conversation.delete_ask_or_reply +
                    '/' +
                    selectedAskIdForActionDelete +
                    '/' +
                    userId +
                    '/' +
                    discussDetails.discussId,
            );
            console.log('Delete ask success');
            const responseAsks = await axios.get(
                customerApi.conversation.get_all_conversation_in_discussion + '/' + discussDetails.discussId,
            );
            setAsks(responseAsks.data);
            setSelectedAskIdForActionDelete(null);
        } catch (error) {
            console.error('Error deleting ask:', error);
        } finally {
            setLoading(false);
        }
    };

    // == Reply ==
    // get_reply_detail
    useEffect(() => {
        const fetchReplyDetailsByAskId = async () => {
            try {
                const responseReplyDetails = await axios.get(
                    customerApi.conversation.get_reply_detail +
                        '/' +
                        selectedReplyIdForActionEdit +
                        '/' +
                        discussDetails.discussId,
                );

                console.log(responseReplyDetails);
                setReplyDetails(responseReplyDetails.data);
            } catch (error) {
                console.error('Error fetching ask:', error);
            } finally {
                setLoading(false);
            }
        };

        if (selectedReplyIdForActionEdit) {
            fetchReplyDetailsByAskId();
        }
    }, [selectedReplyIdForActionEdit]);

    // Handle change value of user update input - Reply
    const handleUpdateReplyInputChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image' && files && files[0]) {
            // Read image and update state preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedReplyUpdateImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }

        setUserUpdateReplyInput({
            ...userUpdateReplyInput,
            [name]: value,
        });
    };

    // Handle update reply by arId
    const handleUpdateReply = async (event) => {
        event.preventDefault();

        try {
            await axios.put(
                customerApi.conversation.update_ask_or_reply +
                    '/' +
                    selectedReplyIdForActionEdit +
                    '/' +
                    userId +
                    '/' +
                    discussDetails.discussId,
                userUpdateReplyInput,
            );
            console.log('Reply update success', userUpdateReplyInput);
            // Recall Api after update success
            const responseReplies = await axios.get(
                customerApi.conversation.get_all_reply_of_asker_in_discussion +
                    '/' +
                    discussDetails.discussId +
                    '/' +
                    replyDetails.replyForAskId,
            );
            setReplies(responseReplies.data);

            setSelectedReplyIdForActionEdit(null);
            setSelectedReplyIdForActions(null);
        } catch (error) {
            console.error('Error updating ask:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle delete reply after confirmation
    const handleDeleteReplyByReplyId = async () => {
        try {
            await axios.delete(
                customerApi.conversation.delete_ask_or_reply +
                    '/' +
                    selectedReplyIdForActionDelete +
                    '/' +
                    userId +
                    '/' +
                    discussDetails.discussId,
            );
            console.log('Delete reply success');
            // Recall Api after update success
            const responseReplies = await axios.get(
                customerApi.conversation.get_all_reply_of_asker_in_discussion +
                    '/' +
                    discussDetails.discussId +
                    '/' +
                    replyDetails.replyForAskId,
            );
            setReplies(responseReplies.data);
            setSelectedReplyIdForActionDelete(null);
            setSelectedReplyIdForActions(null);
        } catch (error) {
            console.error('Error deleting reply:', error);
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
            replyForAskId: askId, // Use the provided askId
            userUserId: userDetails.userId,
            discussDiscussId: discussDetails.discussId,
            [name]: value,
        });
    };

    // Handle submit reply input - Create reply
    const handleSubmitReplyInput = async (event) => {
        event.preventDefault();

        try {
            await axios.post(createReplyApiUrl, userReplyInput);
            console.log('Create reply success', userReplyInput);
            // Recall Api after update success
            const responseReplies = await axios.get(
                customerApi.conversation.get_all_reply_of_asker_in_discussion +
                    '/' +
                    discussDetails.discussId +
                    '/' +
                    userReplyInput.replyForAskId,
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

    // -- Note --
    // Fetch notes when lessonId, userId changes
    useEffect(() => {
        const fetchNotesByLessonIdAndUserId = async () => {
            try {
                const responseNotes = await axios.get(
                    customerApi.note.get_all_note_in_lesson_of_user + '/' + lessonDetails.lessonId + '/' + userId,
                );
                setNotes(responseNotes.data);
            } catch (error) {
                console.error('Error fetching:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotesByLessonIdAndUserId();
    }, [lessonDetails.lessonId, userDetails.userId]);

    // Handle submit note input
    const handleSubmitNoteInput = async (event) => {
        event.preventDefault();

        try {
            await axios.post(createNoteApiUrl, userNoteInput);
            console.log('Create note success', userNoteInput);
            // Recall Api after create success
            const responseNotes = await axios.get(
                customerApi.note.get_all_note_in_lesson_of_user + '/' + lessonDetails.lessonId + '/' + userId,
            );
            setNotes(responseNotes.data);
            setUserNoteInput(createNoteData);
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

    // Handle change value of user note input
    const handleUserNoteInputChange = (event) => {
        const { name, value } = event.target;

        setUserNoteInput({
            ...userNoteInput,
            [name]: value,
            userUserId: userId,
            lessonLessonId: lessonDetails.lessonId,
        });
    };

    // Handle delete note after confirmation
    const handleDeleteNoteByNoteId = async () => {
        try {
            await axios.delete(customerApi.note.delete_note + '/' + selectedNoteIdForActionDelete);
            console.log('Delete note success');
            // Recall Api after delete success
            const response = await axios.get(
                customerApi.note.get_all_note_in_lesson_of_user + '/' + lessonDetails.lessonId + '/' + userId,
            );
            setNotes(response.data);
            setSelectedNoteIdForActionDelete(null);
        } catch (error) {
            console.error('Error deleting note:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle change value of user note input
    const handleUpdateNoteInputChange = (event) => {
        const { name, value } = event.target;
        setUserUpdateNoteInput({
            ...userUpdateNoteInput,
            [name]: value,
        });
    };

    // Handle update reply by arId
    const handleUpdateNote = async (event) => {
        event.preventDefault();

        try {
            await axios.put(customerApi.note.update_note + '/' + selectedNoteIdForActionEdit, userUpdateNoteInput);
            console.log('Note update success', userUpdateNoteInput);
            // Recall Api after update success
            const response = await axios.get(
                customerApi.note.get_all_note_in_lesson_of_user + '/' + lessonDetails.lessonId + '/' + userId,
            );
            setNotes(response.data);

            setSelectedNoteIdForActionEdit(null);
        } catch (error) {
            console.error('Error updating note:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle note cancel
    const handleNoteCancel = () => {
        setUserNoteInput('');
    };

    // -- Quiz --
    // Fetch quizzes when lessonId changes
    useEffect(() => {
        const fetchQuizzesByLessonId = async () => {
            try {
                const response = await axios.get(
                    customerApi.quiz.get_all_quiz_in_lesson + '/' + lessonDetails.lessonId,
                );
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzesByLessonId();
    }, [lessonDetails.lessonId]);

    // Function handle fetch quizzes when lessonId changes
    const handleFetchGetAllQuizByLessonId = async (lessonId) => {
        try {
            // If the selectedAskId is the same as the current askId, set it to null --> close the replies
            setSelectedLessonId((prevSelectedLessonId) => (prevSelectedLessonId === lessonId ? null : lessonId));

            // Fetch quizzes only if the selectedLessonId is not the same as the current lessonId
            if (selectedLessonId !== lessonId) {
                const response = await axios.get(customerApi.quiz.get_all_quiz_in_lesson + '/' + lessonId);
                setQuizzes(response.data);
            }
        } catch (error) {
            console.error('Error fetching quizzes:', error);
        } finally {
            setLoading(false);
        }
    };

    // -- Question --
    // Fetch questions when quizId changes
    const handleFetchGetAllQuestionByQuizId = async (quizId) => {
        try {
            // If the selectedAskId is the same as the current askId, set it to null --> close the replies
            setSelectedQuizId((prevSelectedQuizId) => (prevSelectedQuizId === quizId ? null : quizId));

            // Fetch quizzes only if the selectedLessonId is not the same as the current lessonId
            if (selectedQuizId !== quizId) {
                const response = await axios.get(customerApi.question.get_all_question_in_quiz + '/' + quizId);
                setQuestions(response.data);
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        } finally {
            setLoading(false);
        }
    };

    // -- Answer --
    // Fetch answers when questionId changes
    const handleFetchGetAllAnswersByQuestionId = async (questionId) => {
        try {
            // If the Id is the same as the current Id, set it to null --> close
            setSelectedQuestionId((prevSelectedId) => (prevSelectedId === questionId ? null : questionId));

            // Fetch only if the selectedId is not the same as the current Id
            if (selectedQuestionId !== questionId) {
                const response = await axios.get(customerApi.answer.get_all_answer_of_question + '/' + questionId);
                setAnswers(response.data);
            }
        } catch (error) {
            console.error('Error fetching answers:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAnswersForQuestion = async (questionId) => {
        try {
            const response = await axios.get(customerApi.answer.get_all_answer_of_question + '/' + questionId);
            return response.data;
        } catch (error) {
            console.error('Error fetching answers:', error);
            return [];
        }
    };

    useEffect(() => {
        const fetchAllAnswers = async () => {
            const answersMap = {};
            await Promise.all(
                questions.map(async (question) => {
                    const answers = await fetchAnswersForQuestion(question.questionId);
                    answersMap[question.questionId] = answers;
                }),
            );
            setAnswers(answersMap);
            setLoading(false);
        };

        fetchAllAnswers();
    }, [questions]);

    const handleAnswerClick = async () => {
        if (!selectedAnswer) return;
        const { answerId, questionId } = selectedAnswer;
        try {
            const response = await axios.get(customerApi.answer.choose_answer + '/' + answerId + '/' + questionId);
            setAnswerStatus(response.data);
        } catch (error) {
            console.error('Error selecting answer:', error);
        }
    };

    useEffect(() => {
        const fetchAllAnswers = async () => {
            const answersMap = {};
            await Promise.all(
                questions.map(async (question) => {
                    const answers = await fetchAnswersForQuestion(question.questionId);
                    answersMap[question.questionId] = answers;
                }),
            );
            setAnswers(answersMap);
            setLoading(false);
        };

        fetchAllAnswers();
    }, [questions]);

    const handleSelectAnswer = (answerId, questionId) => {
        setSelectedAnswer({ answerId, questionId });
        setAnswerStatus(null); // Reset the status when a new answer is selected
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
                                    {/* <span>Bài tiếp theo</span> <FontAwesomeIcon icon={faArrowRight} /> */}
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
                                            className={cx('lesson-item', {
                                                active: activeChapter === chapter.chapterId,
                                            })}
                                        >
                                            <span
                                                className={cx('chapter-item__name')}
                                                onClick={() => handleToggleChapter(chapter.chapterId)}
                                            >
                                                {chapter.chapterName}
                                            </span>
                                            {activeChapter === chapter.chapterId && (
                                                <div className={cx('lesson-item__wrap')}>
                                                    {lessons.map((lesson) => (
                                                        <span key={lesson.lessonId} className={cx('lesson-item__name')}>
                                                            <Link
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    window.location.href =
                                                                        'http://localhost:3003' +
                                                                        config.routes.courseinprogress +
                                                                        `?courseId=${courseId}&lessonId=${lesson.lessonId}`;
                                                                }}
                                                            >
                                                                <p>{lesson.title}</p>
                                                            </Link>
                                                            <span
                                                                className={cx('lesson-item__quiz')}
                                                                onClick={() =>
                                                                    handleFetchGetAllQuizByLessonId(lesson.lessonId)
                                                                }
                                                            >
                                                                <FontAwesomeIcon icon={faPen} />
                                                            </span>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        selectedLessonId === lesson.lessonId
                                                                            ? 'block'
                                                                            : 'none',
                                                                }}
                                                            >
                                                                {quizzes.map((quiz) => (
                                                                    <span key={quiz.quizId}>
                                                                        <p
                                                                            onClick={() =>
                                                                                handleToggleQuiz(quiz.quizId)
                                                                            }
                                                                            className={cx('lesson-item__quiz-title')}
                                                                        >
                                                                            <span
                                                                                onClick={() =>
                                                                                    handleFetchGetAllQuestionByQuizId(
                                                                                        quiz.quizId,
                                                                                    )
                                                                                }
                                                                            >
                                                                                {quiz.quizName}
                                                                            </span>
                                                                        </p>
                                                                        {/* Show quiz content - Questions and Answers */}
                                                                        <div
                                                                            className={cx('lesson-item__quiz-content')}
                                                                        >
                                                                            <div className={cx('row')}>
                                                                                <div className={cx('col-12')}>
                                                                                    <div
                                                                                        className={cx('quiz')}
                                                                                        style={{
                                                                                            display:
                                                                                                selectedQuizIdForQuestionAndAnswer ===
                                                                                                quiz.quizId
                                                                                                    ? 'block'
                                                                                                    : 'none',
                                                                                        }}
                                                                                    >
                                                                                        {questions.map((question) => (
                                                                                            <div
                                                                                                key={
                                                                                                    question.questionId
                                                                                                }
                                                                                                className={cx(
                                                                                                    'quiz-wrap',
                                                                                                )}
                                                                                            >
                                                                                                <div
                                                                                                    className={cx(
                                                                                                        'quiz-content',
                                                                                                    )}
                                                                                                >
                                                                                                    <p
                                                                                                        className={cx(
                                                                                                            'question__title',
                                                                                                        )}
                                                                                                    >
                                                                                                        <strong>
                                                                                                            Câu hỏi:
                                                                                                        </strong>{' '}
                                                                                                        {
                                                                                                            question.questionContent
                                                                                                        }
                                                                                                    </p>

                                                                                                    {answers[
                                                                                                        question
                                                                                                            .questionId
                                                                                                    ] &&
                                                                                                        answers[
                                                                                                            question
                                                                                                                .questionId
                                                                                                        ].map(
                                                                                                            (
                                                                                                                answer,
                                                                                                            ) => (
                                                                                                                <div
                                                                                                                    key={
                                                                                                                        answer.answerId
                                                                                                                    }
                                                                                                                    className={cx(
                                                                                                                        'question-answer__wrap',
                                                                                                                        {
                                                                                                                            'answer-selected':
                                                                                                                                selectedAnswer &&
                                                                                                                                selectedAnswer.answerId ===
                                                                                                                                    answer.answerId,
                                                                                                                            'answer-true':
                                                                                                                                selectedAnswer &&
                                                                                                                                selectedAnswer.answerId ===
                                                                                                                                    answer.answerId &&
                                                                                                                                answerStatus ===
                                                                                                                                    true,
                                                                                                                            'answer-false':
                                                                                                                                selectedAnswer &&
                                                                                                                                selectedAnswer.answerId ===
                                                                                                                                    answer.answerId &&
                                                                                                                                answerStatus ===
                                                                                                                                    false,
                                                                                                                        },
                                                                                                                    )}
                                                                                                                    style={{
                                                                                                                        backgroundColor:
                                                                                                                            selectedAnswer &&
                                                                                                                            selectedAnswer.answerId ===
                                                                                                                                answer.answerId
                                                                                                                                ? '#e8f0fe'
                                                                                                                                : 'transparent',
                                                                                                                        border:
                                                                                                                            selectedAnswer &&
                                                                                                                            selectedAnswer.answerId ===
                                                                                                                                answer.answerId
                                                                                                                                ? answerStatus ===
                                                                                                                                  true
                                                                                                                                    ? '2px solid green'
                                                                                                                                    : answerStatus ===
                                                                                                                                      false
                                                                                                                                    ? '2px solid red'
                                                                                                                                    : 'none'
                                                                                                                                : 'none',
                                                                                                                    }}
                                                                                                                    onClick={() =>
                                                                                                                        handleSelectAnswer(
                                                                                                                            answer.answerId,
                                                                                                                            question.questionId,
                                                                                                                        )
                                                                                                                    }
                                                                                                                >
                                                                                                                    <p
                                                                                                                        className={cx(
                                                                                                                            'answer__title',
                                                                                                                        )}
                                                                                                                    >
                                                                                                                        {
                                                                                                                            answer.contentFor
                                                                                                                        }
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            ),
                                                                                                        )}

                                                                                                    <div
                                                                                                        className={cx(
                                                                                                            'answer-wrap__button',
                                                                                                        )}
                                                                                                    >
                                                                                                        <Button
                                                                                                            outline
                                                                                                            onClick={
                                                                                                                handleToggleQuizCancel
                                                                                                            }
                                                                                                            className={cx(
                                                                                                                'answer-wrap__button-cancel',
                                                                                                            )}
                                                                                                        >
                                                                                                            Hủy
                                                                                                        </Button>
                                                                                                        <Button
                                                                                                            primary
                                                                                                            onClick={
                                                                                                                handleAnswerClick
                                                                                                            }
                                                                                                            className={cx(
                                                                                                                'answer-wrap__button-answer',
                                                                                                            )}
                                                                                                        >
                                                                                                            Trả lời
                                                                                                        </Button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                ))}
                                                            </div>
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
                                                    <button onClick={() => setSelectedAskImage(null)}>
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
                                            {(userAskInput.contentFor !== '' || selectedAskImage !== null) && (
                                                <>
                                                    <Button
                                                        primary
                                                        small
                                                        type="submit"
                                                        className={cx('discuss-input__button-ask')}
                                                    >
                                                        Bình luận
                                                    </Button>
                                                    <Button
                                                        outline
                                                        small
                                                        onClick={() => setUserAskInput(createAskData)}
                                                        className={cx('discuss-input__button-cancel')}
                                                    >
                                                        Hủy
                                                    </Button>
                                                </>
                                            )}
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
                                                            // QRCode {ask.image}
                                                            className={cx('discuss-ask-content__image')}
                                                        />
                                                    )}
                                                    {ask.contentFor && (
                                                        <p className={cx('discuss-ask-content__detail')}>
                                                            {ask.contentFor}
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
                                                        onClick={() =>
                                                            handleFetchRepliesByAskId(
                                                                discussDetails.discussId,
                                                                ask.askId,
                                                            )
                                                        }
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
                                                            name="contentFor"
                                                            value={userUpdateAskInput.contentFor}
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
                                        <div className={cx('discuss-reply')}>
                                            <form onSubmit={(e) => handleSubmitReplyInput(e, ask.askId)}>
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
                                                        name={'contentFor'}
                                                        value={userReplyInput.contentFor}
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
                                                        {(userReplyInput.contentFor !== '' && (
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
                                                            (userReplyInput.contentFor !== '' &&
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
                                            </form>
                                            {/* User reply */}
                                            {selectedAskId === ask.askId &&
                                                replies &&
                                                replies.length > 0 &&
                                                replies.map((ask) => (
                                                    <div key={ask.askId} className={cx('discuss-reply__content-wrap')}>
                                                        {/* User reply details */}
                                                        <div className={cx('discuss-reply__image')}>
                                                            <Image src={ask.avatar} className={cx('user-avatar')} />
                                                        </div>
                                                        <div className={cx('discuss-reply__list')}>
                                                            <span className={cx('user-name')}>{ask.fullName}</span>
                                                            <div className={cx('discuss-reply__item')}>
                                                                {ask.image && (
                                                                    <Image
                                                                        src={ask.image}
                                                                        className={cx('discuss-ask-content__image')}
                                                                    />
                                                                )}
                                                                {ask.contentFor && (
                                                                    <div
                                                                        className={cx('discuss-reply__content-details')}
                                                                    >
                                                                        <div className={cx('discuss-reply__user-tag')}>
                                                                            <span
                                                                                className={cx('discuss-reply__content')}
                                                                            >
                                                                                {ask.contentFor}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {/* Reply, view all answers, actions */}
                                                                <div
                                                                    className={cx(
                                                                        'discuss-ask__reply-title-details-wrap',
                                                                    )}
                                                                >
                                                                    {/* Icon open reply actions */}
                                                                    <span className={cx('discuss-reply__reply-title')}>
                                                                        Tùy chọn
                                                                    </span>
                                                                    <span
                                                                        className={cx('discuss-reply__reply-actions')}
                                                                        onClick={() =>
                                                                            handleToggleReplyActions(ask.askId)
                                                                        }
                                                                    >
                                                                        <FontAwesomeIcon icon={faEllipsis} />
                                                                    </span>
                                                                    <div
                                                                        className={cx(
                                                                            'discuss-ask__reply-actions-details',
                                                                        )}
                                                                        style={{
                                                                            display:
                                                                                selectedReplyIdForActions === ask.askId
                                                                                    ? 'block'
                                                                                    : 'none',
                                                                        }}
                                                                    >
                                                                        {/* Reply - Actions */}
                                                                        <div
                                                                            className={cx(
                                                                                'discuss-ask__reply-actions-details-content',
                                                                            )}
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
                                                                                    onClick={() =>
                                                                                        handleToggleReplyActionEdit(
                                                                                            ask.askId,
                                                                                            ask.replyForAskId,
                                                                                        )
                                                                                    }
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
                                                                                        handleToggleReplyActionDelete(
                                                                                            ask.askId,
                                                                                            ask.replyForAskId,
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Xóa
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* Reply - Update */}
                                                                <form onSubmit={handleUpdateReply}>
                                                                    <div
                                                                        className={cx('discuss-ask__actions-edit')}
                                                                        style={{
                                                                            display:
                                                                                selectedReplyIdForActionEdit ===
                                                                                ask.askId
                                                                                    ? 'block'
                                                                                    : 'none',
                                                                        }}
                                                                    >
                                                                        <Image
                                                                            src={userDetails.image}
                                                                            className={cx('user-avatar')}
                                                                        />
                                                                        <textarea
                                                                            placeholder="Chỉnh sửa"
                                                                            className={cx(
                                                                                'discuss-input__user-input__text',
                                                                            )}
                                                                            name="contentFor"
                                                                            value={userUpdateReplyInput.contentFor}
                                                                            onChange={handleUpdateReplyInputChange}
                                                                        ></textarea>
                                                                        <label className={cx('custom-file-upload')}>
                                                                            <input
                                                                                id="replyImageInput"
                                                                                type="file"
                                                                                accept="image/*"
                                                                                name="image"
                                                                                onChange={handleUpdateReplyInputChange}
                                                                            />
                                                                            <FontAwesomeIcon icon={faImage} />
                                                                        </label>
                                                                        {/* Curent image */}
                                                                        {replyDetails.image && (
                                                                            <div>
                                                                                <div
                                                                                    className={cx(
                                                                                        'image-preview__icon-wrap',
                                                                                    )}
                                                                                >
                                                                                    <button
                                                                                        onClick={
                                                                                            handleRemoveAskUpdateImage
                                                                                        }
                                                                                    >
                                                                                        <FontAwesomeIcon
                                                                                            icon={faX}
                                                                                            className={cx(
                                                                                                'image-preview__icon',
                                                                                            )}
                                                                                        />
                                                                                    </button>
                                                                                </div>
                                                                                <Image
                                                                                    src={replyDetails.image}
                                                                                    alt="Preview"
                                                                                    className={cx('image-preview')}
                                                                                />
                                                                            </div>
                                                                        )}

                                                                        {/* Preview */}
                                                                        {selectedReplyUpdateImage && (
                                                                            <div>
                                                                                <div
                                                                                    className={cx(
                                                                                        'image-preview__icon-wrap',
                                                                                    )}
                                                                                >
                                                                                    <button
                                                                                        onClick={
                                                                                            handleRemoveAskUpdateImage
                                                                                        }
                                                                                    >
                                                                                        <FontAwesomeIcon
                                                                                            icon={faX}
                                                                                            className={cx(
                                                                                                'image-preview__icon',
                                                                                            )}
                                                                                        />
                                                                                    </button>
                                                                                </div>
                                                                                <Image
                                                                                    src={selectedReplyUpdateImage}
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
                                                                                className={cx(
                                                                                    'discuss-input__button-edit',
                                                                                )}
                                                                            >
                                                                                Lưu
                                                                            </Button>
                                                                            <Button
                                                                                outline
                                                                                small
                                                                                onClick={() =>
                                                                                    handleToggleReplyActionEdit(
                                                                                        ask.askId,
                                                                                        ask.replyForAskId,
                                                                                    )
                                                                                }
                                                                                className={cx(
                                                                                    'discuss-input__button-cancel',
                                                                                )}
                                                                            >
                                                                                Hủy
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                                {/* Reply - Delete */}
                                                                <div className={cx('discuss-ask__actions-delete')}>
                                                                    <div className={cx('row')}>
                                                                        <div className={cx('col-12')}>
                                                                            <div
                                                                                className={cx('delete')}
                                                                                style={{
                                                                                    display:
                                                                                        selectedReplyIdForActionDelete ===
                                                                                        ask.askId
                                                                                            ? 'block'
                                                                                            : 'none',
                                                                                }}
                                                                            >
                                                                                <div className={cx('delete-wrap')}>
                                                                                    <div
                                                                                        className={cx('delete-content')}
                                                                                    >
                                                                                        <Image
                                                                                            src={
                                                                                                'https://static.vecteezy.com/system/resources/previews/016/964/110/non_2x/eps10-red-garbage-or-trash-can-solid-icon-or-logo-isolated-on-white-background-delete-or-rubbish-basket-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg'
                                                                                            }
                                                                                            className={cx(
                                                                                                'delete-content__image',
                                                                                            )}
                                                                                        />
                                                                                        <p
                                                                                            className={cx(
                                                                                                'delete-content__title',
                                                                                            )}
                                                                                        >
                                                                                            Xác nhận xóa bình luận này?
                                                                                        </p>
                                                                                        <div
                                                                                            className={cx(
                                                                                                'delete-wrap__button',
                                                                                            )}
                                                                                        >
                                                                                            <Button
                                                                                                primary
                                                                                                onClick={
                                                                                                    handleDeleteReplyByReplyId
                                                                                                }
                                                                                                className={cx(
                                                                                                    'delete-wrap__button-delete',
                                                                                                )}
                                                                                            >
                                                                                                Xóa
                                                                                            </Button>
                                                                                            <Button
                                                                                                outline
                                                                                                onClick={
                                                                                                    handleToggleReplyActionDeleteCancel
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
                                                                {/* End Reply, view all answers, actions */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
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

                                <form onSubmit={handleSubmitNoteInput}>
                                    <div className={cx('note-content')}>
                                        <textarea
                                            type="text"
                                            placeholder="Nội dung ghi chú"
                                            className={cx('note-content__input')}
                                            name={'contentFor'}
                                            value={userNoteInput.contentFor}
                                            onChange={handleUserNoteInputChange}
                                        />
                                    </div>
                                    <div className={cx('note-input')}>
                                        {userNoteInput.contentFor !== '' && (
                                            <>
                                                <Button
                                                    primary
                                                    small
                                                    type={'submit'}
                                                    className={cx('note-input__button-create')}
                                                >
                                                    Thêm ghi chú
                                                </Button>
                                                <Button
                                                    outline
                                                    small
                                                    onClick={handleNoteCancel}
                                                    className={cx('note-input__button-cancel')}
                                                >
                                                    Hủy
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </form>

                                <div className={cx('note-content-list')}>
                                    <span className={cx('note-content-list__title')}>Danh sách ghi chú</span>
                                    {notes.map((note) => (
                                        <div key={note.noteId} className={cx('note-content-list__wrap')}>
                                            <br />
                                            <p className={cx('note-content-list__item')}>{note.contentFor}</p>
                                            <div className={cx('note-content-list__item-icon')}>
                                                <p
                                                    className={cx('note-content-list__item-icon__edit')}
                                                    onClick={() => handleToggleNoteActionEdit(note.noteId)}
                                                >
                                                    <FontAwesomeIcon icon={faPen} />
                                                </p>
                                                <p
                                                    className={cx('note-content-list__item-icon__delete')}
                                                    onClick={() => handleToggleNoteActionDelete(note.noteId)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </p>
                                            </div>

                                            {/* Note actions */}
                                            {/* Note - Update */}
                                            <form onSubmit={handleUpdateNote}>
                                                <div
                                                    className={cx('note__actions-edit')}
                                                    style={{
                                                        display:
                                                            selectedNoteIdForActionEdit === note.noteId
                                                                ? 'block'
                                                                : 'none',
                                                    }}
                                                >
                                                    <textarea
                                                        placeholder="Chỉnh sửa"
                                                        className={cx('discuss-input__user-input__text')}
                                                        name="contentFor"
                                                        value={userUpdateNoteInput.contentFor}
                                                        onChange={handleUpdateNoteInputChange}
                                                    ></textarea>

                                                    {userUpdateNoteInput.contentFor !== '' && (
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
                                                                onClick={() => handleToggleNoteActionEdit(note.noteId)}
                                                                className={cx('discuss-input__button-cancel')}
                                                            >
                                                                Hủy
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </form>
                                            {/* Note - Delete */}
                                            <div className={cx('discuss-ask__actions-delete')}>
                                                <div className={cx('row')}>
                                                    <div className={cx('col-12')}>
                                                        <div
                                                            className={cx('delete')}
                                                            style={{
                                                                display:
                                                                    selectedNoteIdForActionDelete === note.noteId
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
                                                                        Xác nhận xóa ghi chú này?
                                                                    </p>
                                                                    <div className={cx('delete-wrap__button')}>
                                                                        <Button
                                                                            primary
                                                                            onClick={handleDeleteNoteByNoteId}
                                                                            className={cx('delete-wrap__button-delete')}
                                                                        >
                                                                            Xóa
                                                                        </Button>
                                                                        <Button
                                                                            outline
                                                                            onClick={handleToggleNoteActionDeleteCancel}
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
                                            </div>
                                            {/* End - Note actions */}
                                        </div>
                                    ))}
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
