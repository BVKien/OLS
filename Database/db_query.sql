USE [master]
GO
/****** Object:  Database [OLS_PRN231_V1]    Script Date: 18/6/2024 8:08:00 PM ******/
CREATE DATABASE [OLS_PRN231_V1]

USE [OLS_PRN231_V1]
GO
/****** Object:  Table [dbo].[Answer]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Answer](
	[AnswerID] [int] IDENTITY(1,1) NOT NULL,
	[ContentFor] [nvarchar](max) NULL,
	[Question_QuestionID] [int] NULL,
	[IsTrue] [int] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Answer] PRIMARY KEY CLUSTERED 
(
	[AnswerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AskAndReply]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AskAndReply](
	[AskID] [int] IDENTITY(1,1) NOT NULL,
	[User_UserID] [int] NULL,
	[ReplyForAskID] [int] NULL,
	[ContentFor] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[Discuss_DiscussID] [int] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_AskAndReply] PRIMARY KEY CLUSTERED 
(
	[AskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[BlogID] [int] IDENTITY(1,1) NOT NULL,
	[BlogTitle] [nvarchar](150) NULL,
	[BlogImage] [nvarchar](150) NULL,
	[BlogContent] [text] NULL,
	[PostDate] [datetime] NULL,
	[Status] [int] NULL,
	[ReadTime] [time](7) NULL,
	[BlogTopic_BlogTopicID] [int] NOT NULL,
	[BlogTag_BlogTagID] [int] NOT NULL,
	[User_UserID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED 
(
	[BlogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogComment]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogComment](
	[BlogCommentID] [int] IDENTITY(1,1) NOT NULL,
	[User_UserID] [int] NULL,
	[ReplyForCommentID] [int] NULL,
	[ContentFor] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_BlogComment] PRIMARY KEY CLUSTERED 
(
	[BlogCommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogTag]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogTag](
	[BlogTagID] [int] IDENTITY(1,1) NOT NULL,
	[BlogTagName] [nvarchar](150) NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_BlogTag] PRIMARY KEY CLUSTERED 
(
	[BlogTagID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogTopic]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BlogTopic](
	[BlogTopicID] [int] IDENTITY(1,1) NOT NULL,
	[BlogTopicName] [nvarchar](150) NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_BlogTopic] PRIMARY KEY CLUSTERED 
(
	[BlogTopicID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chapter]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chapter](
	[ChapterID] [int] IDENTITY(1,1) NOT NULL,
	[ChapterName] [nvarchar](150) NULL,
	[Course_CourseID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Chapter] PRIMARY KEY CLUSTERED 
(
	[ChapterID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[CourseID] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [nvarchar](50) NULL,
	[Description] [nvarchar](500) NULL,
	[CourseInfomation] [nvarchar](500) NULL,
	[Image] [nvarchar](150) NULL,
	[VideoIntro] [nvarchar](150) NULL,
	[Fee] [int] NULL,
	[Status] [int] NULL,
	[LearningPath_LearningPathID] [int] NOT NULL,
	[User_UserID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[CourseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseEnrolled]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseEnrolled](
	[CourseEnrolledID] [int] IDENTITY(1,1) NOT NULL,
	[EnrolledDate] [datetime] NULL,
	[Status] [int] NULL,
	[Course_CourseID] [int] NOT NULL,
	[User_UserID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_CourseEnrolled] PRIMARY KEY CLUSTERED 
(
	[CourseEnrolledID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discuss]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discuss](
	[DiscussID] [int] IDENTITY(1,1) NOT NULL,
	[Lesson_LessonID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Discuss] PRIMARY KEY CLUSTERED 
(
	[DiscussID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LearningPath]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LearningPath](
	[LearningPathID] [int] IDENTITY(1,1) NOT NULL,
	[LearningPathName] [nvarchar](100) NULL,
	[Description] [nvarchar](500) NULL,
	[Image] [nvarchar](150) NULL,
	[Status] [int] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_LearningPath] PRIMARY KEY CLUSTERED 
(
	[LearningPathID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lesson]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lesson](
	[LessonID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](150) NULL,
	[Video] [nvarchar](150) NULL,
	[Time] [time](7) NULL,
	[Chapter_ChapterID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Lesson] PRIMARY KEY CLUSTERED 
(
	[LessonID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LikeComment]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LikeComment](
	[User_UserID] [int] NOT NULL,
	[BlogComment_BlogCommentID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Note]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Note](
	[NoteID] [int] IDENTITY(1,1) NOT NULL,
	[ContentFor] [nvarchar](500) NULL,
	[User_UserID] [int] NOT NULL,
	[Lesson_LessonID] [int] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Note] PRIMARY KEY CLUSTERED 
(
	[NoteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notification]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[NotificationID] [int] IDENTITY(1,1) NOT NULL,
	[ContentFor] [nvarchar](500) NULL,
	[Course_CourseID] [int] NOT NULL,
	[User_UserID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[NotificationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[QuestionID] [int] IDENTITY(1,1) NOT NULL,
	[Quiz_QuizID] [int] NOT NULL,
	[QuestionContent] [nvarchar](2000) NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[QuestionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Quiz]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Quiz](
	[QuizID] [int] IDENTITY(1,1) NOT NULL,
	[QuizName] [nvarchar](500) NULL,
	[Lesson_LessonID] [int] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_Quiz] PRIMARY KEY CLUSTERED 
(
	[QuizID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SaveBlog]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SaveBlog](
	[Blog_BlogID] [int] NOT NULL,
	[User_UserID] [int] NOT NULL,
	[SavedDay] [datetime] NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_SaveBlog] PRIMARY KEY CLUSTERED 
(
	[Blog_BlogID] ASC,
	[User_UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NULL,
	[Facebook] [nvarchar](50) NULL,
	[Github] [nvarchar](50) NULL,
	[Phone] [nvarchar](11) NULL,
	[Password] [nvarchar](50) NULL,
	[FullName] [nvarchar](50) NULL,
	[Dob] [datetime] NULL,
	[Address] [nvarchar](100) NULL,
	[Bio] [nvarchar](2500) NULL,
	[Image] [nvarchar](150) NULL,
	[BackgroundImage] [nvarchar](150) NULL,
	[GmailID] [nvarchar](50) NULL,
	[FacebookID] [nvarchar](50) NULL,
	[GithubID] [nvarchar](50) NULL,
	[Status] [int] NULL,
	[CodeVerify] [nvarchar](50) NULL,
	[UserRole_RoleID] [int] NOT NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRole]    Script Date: 18/6/2024 8:08:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRole](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NULL,
	[CreatedAt] [datetime] NULL,
	[UpdatedAt] [datetime] NULL,
 CONSTRAINT [PK_UserRole] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (1, N'Tổng hợp các sản phẩm của học viên tại F8', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png', N'Bài vi?t này nh?m t?ng h?p l?i các d? án mà h?c viên F8 dã hoàn thành và chia s? trên nhóm H?c l?p trình web F8. Các d? án du?i...', CAST(N'2023-11-01T00:00:00.000' AS DateTime), 1, CAST(N'00:15:00' AS Time), 1, 1, 2, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (4, N'Tạo dự án ReactJS với Webpack và Babel', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg', N'T? t?o d? án ReactJS v?i webpack và babel nh?m m?c dích giúp chúng ta hi?u rõ hon v? v? cách create-react-app dã t?o ra d? án ReactJS nhu th? nào và quan...', CAST(N'2023-11-01T00:00:00.000' AS DateTime), 1, CAST(N'00:13:00' AS Time), 1, 1, 2, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (7, N'Cách đưa code lên GitHub và tạo GitHub Pages', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png', N'? bài vi?t này, mình s? hu?ng d?n cách d? dua code lên trên Github và t?o Github Pages d? xem du?c trang web mà các b?n dua lên  nhu th? nào.', CAST(N'2023-11-02T00:00:00.000' AS DateTime), 1, CAST(N'00:25:00' AS Time), 1, 1, 2, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (8, N'Ký sự ngày thứ 25 học ở F8', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png', N'Hí ae, tôi cung tên Son nhung mà là newbie còn ông Son kia thì trùm r?i :))). Tôi cung v?a m?i d?n v?i l?p trình,tôi là sv nam 1....', CAST(N'2023-11-02T11:21:45.843' AS DateTime), 1, CAST(N'00:08:00' AS Time), 1, 1, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Blog] OFF
GO
SET IDENTITY_INSERT [dbo].[BlogTag] ON 

INSERT [dbo].[BlogTag] ([BlogTagID], [BlogTagName], [CreatedAt], [UpdatedAt]) VALUES (1, N'blog tag 1', NULL, NULL)
SET IDENTITY_INSERT [dbo].[BlogTag] OFF
GO
SET IDENTITY_INSERT [dbo].[BlogTopic] ON 

INSERT [dbo].[BlogTopic] ([BlogTopicID], [BlogTopicName], [CreatedAt], [UpdatedAt]) VALUES (1, N'blog topic 1', NULL, NULL)
SET IDENTITY_INSERT [dbo].[BlogTopic] OFF
GO
SET IDENTITY_INSERT [dbo].[Chapter] ON 

INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (3, N'Làm quen với HTML', 8, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (5, N'Làm quen với CSS', 8, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (6, N'Đệm, viền, khoảng lề ', 8, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (7, N'Thuộc tính tạo nền', 8, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (8, N'Dựng bố cục với Flexbox', 32, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (9, N'Quy ước đặt tên class BEM', 32, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (12, N'Xây dựng web Shopee', 32, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (19, N'Làm quen với JavaScript', 39, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (20, N'Xây Dựng Website với ReactJS', 43, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (21, N'Làm quen với Node & ExpressJS', 44, NULL, NULL)
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (22, N'Làm quen với Làm việc với Terminal & Ubuntu', 45, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Chapter] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (8, N'HTML CSS cơ bản', N'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.', N'string', N'https://files.fullstack.edu.vn/f8-prod/courses/2.png', N'R6plN3FvzFY', 0, 1, 1, 2, NULL, NULL)
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (32, N'HTML CSS Pro', N'Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.
', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png', N'R6plN3FvzFY', 1299000, 1, 1, 2, NULL, NULL)
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (39, N'Lập Trình JavaScript Cơ Bản', N'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/1.png', N'0SJE9dYdpps', 0, 1, 1, 2, NULL, NULL)
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (43, N'Xây Dựng Website với ReactJS', N'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png', N'x0fSBAgBrOQ', 0, 1, 1, 2, NULL, NULL)
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (44, N'Node & ExpressJS', N'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/6.png', N'z2f7RHgvddc', 0, 1, 2, 2, NULL, NULL)
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (45, N'Làm việc với Terminal & Ubuntu', N'Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png', N'7ppRSaGT1uw', 0, 1, 2, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[CourseEnrolled] ON 

INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (53, CAST(N'2023-12-29T07:02:23.277' AS DateTime), 1, 39, 2, NULL, NULL)
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (54, CAST(N'2024-02-21T11:34:32.620' AS DateTime), 1, 8, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[CourseEnrolled] OFF
GO
SET IDENTITY_INSERT [dbo].[Discuss] ON 

INSERT [dbo].[Discuss] ([DiscussID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (1, 9, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Discuss] OFF
GO
SET IDENTITY_INSERT [dbo].[LearningPath] ON 

INSERT [dbo].[LearningPath] ([LearningPathID], [LearningPathName], [Description], [Image], [Status], [CreatedAt], [UpdatedAt]) VALUES (1, N'Lộ trình học Front-end', N'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.

', N'https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png', 1, NULL, NULL)
INSERT [dbo].[LearningPath] ([LearningPathID], [LearningPathName], [Description], [Image], [Status], [CreatedAt], [UpdatedAt]) VALUES (2, N'Lộ trình học Back-end', N'Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.

', N'https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png', 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[LearningPath] OFF
GO
SET IDENTITY_INSERT [dbo].[Lesson] ON 

INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (9, N'Cấu trúc 1 file HTML', N'LYnrFSGLCl8', CAST(N'00:01:00' AS Time), 3, NULL, NULL)
INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (10, N'Comment trong HTML', N'JG0pdfdKjgQ', CAST(N'00:01:00' AS Time), 3, NULL, NULL)
INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (11, N'Attribute trong HTML là gì', N'UYpIh5pIkSA', CAST(N'00:01:00' AS Time), 3, NULL, NULL)
INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (12, N'Cách quản lý thư mục dự án', N'TkPppGzB9ZA', CAST(N'00:01:00' AS Time), 3, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Lesson] OFF
GO
SET IDENTITY_INSERT [dbo].[Notification] ON 

INSERT [dbo].[Notification] ([NotificationID], [ContentFor], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (1, N'Admin da them moi khoa hoc moi', 8, 2, NULL, NULL)
INSERT [dbo].[Notification] ([NotificationID], [ContentFor], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (3, N'Admin da them 2 khoa hoc moi', 8, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Notification] OFF
GO
SET IDENTITY_INSERT [dbo].[Question] ON 

INSERT [dbo].[Question] ([QuestionID], [Quiz_QuizID], [QuestionContent], [CreatedAt], [UpdatedAt]) VALUES (4, 2, N'API la gi?', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Question] OFF
GO
SET IDENTITY_INSERT [dbo].[Quiz] ON 

INSERT [dbo].[Quiz] ([QuizID], [QuizName], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (2, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Quiz] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (2, N'kien@gmail.com', N'1', N'1', N'0961498125', N'f7d63bbdc0fda6d3c6ae9c061a86910d', N'Bùi Văn Kiên', CAST(N'2002-12-02T00:00:00.000' AS DateTime), N'Hai Duong', N'ok', N'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96', N'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96', N'0212', N'0212', N'0212', 1, N'0212', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (16, N'kbui0212@gmail.com', N'string', N'string', N'string', N'string', N'Sơn Đặng', CAST(N'2023-11-11T08:31:30.383' AS DateTime), N'string', N'string', N'https://fullstack.edu.vn/landing/htmlcss/assets/img/mentor.jpg', N'string', N'string', N'string', N'string', 0, N'5975', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (28, N'string', N'string', N'string', N'string', N'string', N'string', CAST(N'2023-11-11T10:19:50.507' AS DateTime), N'string', N'string', N'string', N'string', N'string', N'string', N'string', 0, N'string', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (33, N'kbui0212@gmail.com', NULL, NULL, NULL, N'0212', N'bui van kien', NULL, NULL, NULL, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3soCFOykRkna19q2B2el-kRpnKVkjSupKsMWFpLVsASz4zBEwPlex20NgtxCviYU-BkE&usqp=CAU', NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (34, N'tiendat320@gmail.com', NULL, NULL, NULL, N'e10adc3949ba59abbe56e057f20f883e', N'Nguyen Tien Dat', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, N'4618', 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (35, N'kb0212@gmail.com', NULL, NULL, NULL, N'4ba29b9f9e5732ed33761840f4ba6c53', N'Kien vanbui', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (36, N'k2@gmail.com', NULL, NULL, NULL, N'81dc9bdb52d04dc20036dbd8313ed055', N'Bui Van Kien', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (37, N'kienbv02@gmail.com', NULL, NULL, NULL, N'4297f44b13955235245b2497399d7a93', N'KienBV', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
SET IDENTITY_INSERT [dbo].[UserRole] ON 

INSERT [dbo].[UserRole] ([RoleID], [RoleName], [CreatedAt], [UpdatedAt]) VALUES (1, N'Admin', NULL, NULL)
INSERT [dbo].[UserRole] ([RoleID], [RoleName], [CreatedAt], [UpdatedAt]) VALUES (2, N'Customer', NULL, NULL)
SET IDENTITY_INSERT [dbo].[UserRole] OFF
GO
ALTER TABLE [dbo].[Answer] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Answer] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[AskAndReply] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[AskAndReply] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Blog] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Blog] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[BlogComment] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[BlogComment] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[BlogTag] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[BlogTag] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[BlogTopic] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[BlogTopic] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Chapter] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Chapter] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Course] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Course] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[CourseEnrolled] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[CourseEnrolled] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Discuss] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Discuss] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[LearningPath] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[LearningPath] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Lesson] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Lesson] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[LikeComment] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[LikeComment] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Note] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Note] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Notification] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Notification] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Question] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Question] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Quiz] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[Quiz] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[SaveBlog] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[SaveBlog] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[UserRole] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[UserRole] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
GO
ALTER TABLE [dbo].[Answer]  WITH CHECK ADD  CONSTRAINT [FK_Answer_Question] FOREIGN KEY([Question_QuestionID])
REFERENCES [dbo].[Question] ([QuestionID])
GO
ALTER TABLE [dbo].[Answer] CHECK CONSTRAINT [FK_Answer_Question]
GO
ALTER TABLE [dbo].[AskAndReply]  WITH CHECK ADD  CONSTRAINT [FK_AskAndReply_AskAndReply] FOREIGN KEY([ReplyForAskID])
REFERENCES [dbo].[AskAndReply] ([AskID])
GO
ALTER TABLE [dbo].[AskAndReply] CHECK CONSTRAINT [FK_AskAndReply_AskAndReply]
GO
ALTER TABLE [dbo].[AskAndReply]  WITH CHECK ADD  CONSTRAINT [FK_AskAndReply_Discuss] FOREIGN KEY([Discuss_DiscussID])
REFERENCES [dbo].[Discuss] ([DiscussID])
GO
ALTER TABLE [dbo].[AskAndReply] CHECK CONSTRAINT [FK_AskAndReply_Discuss]
GO
ALTER TABLE [dbo].[AskAndReply]  WITH CHECK ADD  CONSTRAINT [FK_AskAndReply_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[AskAndReply] CHECK CONSTRAINT [FK_AskAndReply_User]
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD  CONSTRAINT [FK_Blog_BlogTag] FOREIGN KEY([BlogTag_BlogTagID])
REFERENCES [dbo].[BlogTag] ([BlogTagID])
GO
ALTER TABLE [dbo].[Blog] CHECK CONSTRAINT [FK_Blog_BlogTag]
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD  CONSTRAINT [FK_Blog_BlogTopic] FOREIGN KEY([BlogTopic_BlogTopicID])
REFERENCES [dbo].[BlogTopic] ([BlogTopicID])
GO
ALTER TABLE [dbo].[Blog] CHECK CONSTRAINT [FK_Blog_BlogTopic]
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD  CONSTRAINT [FK_Blog_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Blog] CHECK CONSTRAINT [FK_Blog_User]
GO
ALTER TABLE [dbo].[BlogComment]  WITH CHECK ADD  CONSTRAINT [FK_BlogComment_BlogComment] FOREIGN KEY([ReplyForCommentID])
REFERENCES [dbo].[BlogComment] ([BlogCommentID])
GO
ALTER TABLE [dbo].[BlogComment] CHECK CONSTRAINT [FK_BlogComment_BlogComment]
GO
ALTER TABLE [dbo].[BlogComment]  WITH CHECK ADD  CONSTRAINT [FK_BlogComment_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[BlogComment] CHECK CONSTRAINT [FK_BlogComment_User]
GO
ALTER TABLE [dbo].[Chapter]  WITH CHECK ADD  CONSTRAINT [FK_Chapter_Course] FOREIGN KEY([Course_CourseID])
REFERENCES [dbo].[Course] ([CourseID])
GO
ALTER TABLE [dbo].[Chapter] CHECK CONSTRAINT [FK_Chapter_Course]
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [FK_Course_LearningPath] FOREIGN KEY([LearningPath_LearningPathID])
REFERENCES [dbo].[LearningPath] ([LearningPathID])
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [FK_Course_LearningPath]
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [FK_Course_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [FK_Course_User]
GO
ALTER TABLE [dbo].[CourseEnrolled]  WITH CHECK ADD  CONSTRAINT [FK_CourseEnrolled_Course] FOREIGN KEY([Course_CourseID])
REFERENCES [dbo].[Course] ([CourseID])
GO
ALTER TABLE [dbo].[CourseEnrolled] CHECK CONSTRAINT [FK_CourseEnrolled_Course]
GO
ALTER TABLE [dbo].[CourseEnrolled]  WITH CHECK ADD  CONSTRAINT [FK_CourseEnrolled_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[CourseEnrolled] CHECK CONSTRAINT [FK_CourseEnrolled_User]
GO
ALTER TABLE [dbo].[Discuss]  WITH CHECK ADD  CONSTRAINT [FK_Discuss_Lesson] FOREIGN KEY([Lesson_LessonID])
REFERENCES [dbo].[Lesson] ([LessonID])
GO
ALTER TABLE [dbo].[Discuss] CHECK CONSTRAINT [FK_Discuss_Lesson]
GO
ALTER TABLE [dbo].[Lesson]  WITH CHECK ADD  CONSTRAINT [FK_Lesson_Chapter] FOREIGN KEY([Chapter_ChapterID])
REFERENCES [dbo].[Chapter] ([ChapterID])
GO
ALTER TABLE [dbo].[Lesson] CHECK CONSTRAINT [FK_Lesson_Chapter]
GO
ALTER TABLE [dbo].[LikeComment]  WITH CHECK ADD  CONSTRAINT [FK_LikeComment_BlogComment] FOREIGN KEY([BlogComment_BlogCommentID])
REFERENCES [dbo].[BlogComment] ([BlogCommentID])
GO
ALTER TABLE [dbo].[LikeComment] CHECK CONSTRAINT [FK_LikeComment_BlogComment]
GO
ALTER TABLE [dbo].[LikeComment]  WITH CHECK ADD  CONSTRAINT [FK_LikeComment_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[LikeComment] CHECK CONSTRAINT [FK_LikeComment_User]
GO
ALTER TABLE [dbo].[Note]  WITH CHECK ADD  CONSTRAINT [FK_Note_Lesson] FOREIGN KEY([Lesson_LessonID])
REFERENCES [dbo].[Lesson] ([LessonID])
GO
ALTER TABLE [dbo].[Note] CHECK CONSTRAINT [FK_Note_Lesson]
GO
ALTER TABLE [dbo].[Note]  WITH CHECK ADD  CONSTRAINT [FK_Note_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Note] CHECK CONSTRAINT [FK_Note_User]
GO
ALTER TABLE [dbo].[Notification]  WITH CHECK ADD  CONSTRAINT [FK_Notification_Course] FOREIGN KEY([Course_CourseID])
REFERENCES [dbo].[Course] ([CourseID])
GO
ALTER TABLE [dbo].[Notification] CHECK CONSTRAINT [FK_Notification_Course]
GO
ALTER TABLE [dbo].[Notification]  WITH CHECK ADD  CONSTRAINT [FK_Notification_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Notification] CHECK CONSTRAINT [FK_Notification_User]
GO
ALTER TABLE [dbo].[Question]  WITH CHECK ADD  CONSTRAINT [FK_Question_Quiz] FOREIGN KEY([Quiz_QuizID])
REFERENCES [dbo].[Quiz] ([QuizID])
GO
ALTER TABLE [dbo].[Question] CHECK CONSTRAINT [FK_Question_Quiz]
GO
ALTER TABLE [dbo].[Quiz]  WITH CHECK ADD  CONSTRAINT [FK_Quiz_Lesson] FOREIGN KEY([Lesson_LessonID])
REFERENCES [dbo].[Lesson] ([LessonID])
GO
ALTER TABLE [dbo].[Quiz] CHECK CONSTRAINT [FK_Quiz_Lesson]
GO
ALTER TABLE [dbo].[SaveBlog]  WITH CHECK ADD  CONSTRAINT [FK_SaveBlog_Blog] FOREIGN KEY([Blog_BlogID])
REFERENCES [dbo].[Blog] ([BlogID])
GO
ALTER TABLE [dbo].[SaveBlog] CHECK CONSTRAINT [FK_SaveBlog_Blog]
GO
ALTER TABLE [dbo].[SaveBlog]  WITH CHECK ADD  CONSTRAINT [FK_SaveBlog_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[SaveBlog] CHECK CONSTRAINT [FK_SaveBlog_User]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_UserRole] FOREIGN KEY([UserRole_RoleID])
REFERENCES [dbo].[UserRole] ([RoleID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_UserRole]
GO
USE [master]
GO
ALTER DATABASE [OLS_PRN231] SET  READ_WRITE 
GO
