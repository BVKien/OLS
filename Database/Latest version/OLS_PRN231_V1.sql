USE [master]
GO
/****** Object:  Database [OLS_PRN231_V1]    Script Date: 20/7/2024 12:24:22 PM ******/
CREATE DATABASE [OLS_PRN231_V1]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'OLS_PRN231_V1', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\OLS_PRN231_V1.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'OLS_PRN231_V1_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\OLS_PRN231_V1_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [OLS_PRN231_V1] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [OLS_PRN231_V1].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [OLS_PRN231_V1] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ARITHABORT OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [OLS_PRN231_V1] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [OLS_PRN231_V1] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [OLS_PRN231_V1] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET  ENABLE_BROKER 
GO
ALTER DATABASE [OLS_PRN231_V1] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [OLS_PRN231_V1] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [OLS_PRN231_V1] SET  MULTI_USER 
GO
ALTER DATABASE [OLS_PRN231_V1] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [OLS_PRN231_V1] SET DB_CHAINING OFF 
GO
ALTER DATABASE [OLS_PRN231_V1] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [OLS_PRN231_V1] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [OLS_PRN231_V1] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [OLS_PRN231_V1] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [OLS_PRN231_V1] SET QUERY_STORE = ON
GO
ALTER DATABASE [OLS_PRN231_V1] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [OLS_PRN231_V1]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 20/7/2024 12:24:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Answer]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[AskAndReply]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Blog]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[BlogComment]    Script Date: 20/7/2024 12:24:22 PM ******/
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
	[Blog_BlogID] [int] NULL,
 CONSTRAINT [PK_BlogComment] PRIMARY KEY CLUSTERED 
(
	[BlogCommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BlogTag]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[BlogTopic]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Chapter]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Course]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[CourseEnrolled]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Discuss]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[FeedBack]    Script Date: 20/7/2024 12:24:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FeedBack](
	[FeedbackID] [int] IDENTITY(1,1) NOT NULL,
	[FeedbackContent] [text] NULL,
	[RateStar] [nvarchar](5) NULL,
	[User_UserID] [int] NULL,
	[Course_CourseID] [int] NULL,
	[CreatedAt] [datetime] NOT NULL,
	[UpdatedAt] [datetime] NOT NULL,
 CONSTRAINT [PK_FeedBack] PRIMARY KEY CLUSTERED 
(
	[FeedbackID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LearningPath]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Lesson]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[LikeComment]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Note]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Notification]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Question]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[Quiz]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[SaveBlog]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[User]    Script Date: 20/7/2024 12:24:22 PM ******/
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
/****** Object:  Table [dbo].[UserRole]    Script Date: 20/7/2024 12:24:22 PM ******/
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
SET IDENTITY_INSERT [dbo].[Answer] ON 

INSERT [dbo].[Answer] ([AnswerID], [ContentFor], [Question_QuestionID], [IsTrue], [CreatedAt], [UpdatedAt]) VALUES (5, N'answer question 5', 5, 0, CAST(N'2024-07-02T09:21:06.897' AS DateTime), CAST(N'2024-07-02T09:21:48.170' AS DateTime))
INSERT [dbo].[Answer] ([AnswerID], [ContentFor], [Question_QuestionID], [IsTrue], [CreatedAt], [UpdatedAt]) VALUES (6, N'answer question 5', 5, 0, CAST(N'2024-07-16T09:23:31.567' AS DateTime), CAST(N'2024-07-16T09:23:31.567' AS DateTime))
INSERT [dbo].[Answer] ([AnswerID], [ContentFor], [Question_QuestionID], [IsTrue], [CreatedAt], [UpdatedAt]) VALUES (7, N'answer question 5', 5, 1, CAST(N'2024-07-16T09:23:41.893' AS DateTime), CAST(N'2024-07-16T09:23:41.893' AS DateTime))
INSERT [dbo].[Answer] ([AnswerID], [ContentFor], [Question_QuestionID], [IsTrue], [CreatedAt], [UpdatedAt]) VALUES (8, N'a1', 6, 1, CAST(N'2024-07-17T00:28:30.167' AS DateTime), CAST(N'2024-07-17T00:28:30.167' AS DateTime))
INSERT [dbo].[Answer] ([AnswerID], [ContentFor], [Question_QuestionID], [IsTrue], [CreatedAt], [UpdatedAt]) VALUES (9, N'a2', 7, 1, CAST(N'2024-07-17T00:28:33.930' AS DateTime), CAST(N'2024-07-17T00:28:33.930' AS DateTime))
SET IDENTITY_INSERT [dbo].[Answer] OFF
GO
SET IDENTITY_INSERT [dbo].[AskAndReply] ON 

INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (1, 46, NULL, N'update comment again', N'', 2, CAST(N'2024-07-05T10:39:32.633' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (2, 46, 1, N'update lan 11', N'', 2, CAST(N'2024-07-05T10:39:51.017' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (3, 46, 1, N'reply 2 for user 46 ask id 1', NULL, 2, CAST(N'2024-07-05T11:31:55.857' AS DateTime), CAST(N'2024-07-05T11:31:55.857' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (7, 46, NULL, N'test new ask 02', NULL, 2, CAST(N'2024-07-05T12:04:02.110' AS DateTime), CAST(N'2024-07-05T12:04:02.110' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (8, 46, NULL, N'test new ask 03', N'', 2, CAST(N'2024-07-05T12:04:42.280' AS DateTime), CAST(N'2024-07-05T12:04:42.280' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (16, 46, NULL, NULL, N'', NULL, CAST(N'2024-07-08T15:26:59.437' AS DateTime), CAST(N'2024-07-08T15:26:59.437' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (17, 46, NULL, N'test reply 2', N'', NULL, CAST(N'2024-07-08T15:46:38.760' AS DateTime), CAST(N'2024-07-08T15:46:38.760' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (20, 46, NULL, N'new comment', N'', 2, CAST(N'2024-07-08T16:26:33.340' AS DateTime), CAST(N'2024-07-08T16:26:33.340' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (22, 46, 1, N'update hihi', N'', 2, CAST(N'2024-07-08T16:30:07.783' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (26, 46, NULL, N'new new update 01', N'', 2, CAST(N'2024-07-08T09:40:24.347' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (28, 46, 2, N'update lan 11', N'', 2, CAST(N'2024-07-08T16:47:15.003' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (29, 46, 2, N'', N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', 2, CAST(N'2024-07-08T16:47:41.800' AS DateTime), CAST(N'2024-07-08T16:47:41.800' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (30, 46, NULL, N'new comment', N'', 2, CAST(N'2024-07-08T16:53:19.360' AS DateTime), CAST(N'2024-07-08T16:53:19.360' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (31, 46, 1, N'mtp', N'', 2, CAST(N'2024-07-09T15:29:21.080' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (32, 46, 31, N'update lần 1 cho bình luận đầu tiên', N'', 2, CAST(N'2024-07-10T16:54:12.683' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (33, 46, 32, N'reply bình luận 1', N'', 2, CAST(N'2024-07-10T17:02:18.250' AS DateTime), CAST(N'2024-07-10T17:02:18.250' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (34, 46, 30, N'update lan 11', N'', 2, CAST(N'2024-07-10T17:06:54.703' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (36, 46, 30, N'reply lần 2 bình luận 1', N'', 2, CAST(N'2024-07-10T17:12:23.767' AS DateTime), CAST(N'2024-07-10T17:12:23.767' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (41, 46, 30, N'reply l', N'', 2, CAST(N'2024-07-11T10:08:46.337' AS DateTime), CAST(N'2024-07-11T10:08:46.337' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (42, 46, 30, N'', N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', 2, CAST(N'2024-07-11T10:09:05.157' AS DateTime), CAST(N'2024-07-11T10:09:05.157' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (43, 46, NULL, N'', N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', 2, CAST(N'2024-07-11T10:11:05.123' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (46, 46, NULL, N'', N'', 2, CAST(N'2024-07-18T23:50:54.497' AS DateTime), CAST(N'2024-07-18T23:50:54.497' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (47, 46, NULL, N'', N'', 2, CAST(N'2024-07-18T23:51:57.317' AS DateTime), CAST(N'2024-07-18T23:51:57.317' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (48, 46, NULL, N'', N'https://localhost:7003/images/uploads/0cd949ec-682f-4165-8c19-f69686de5bec_8f62e804-8068-4c51-a98b-7f419aaf1435.jpg', 2, CAST(N'2024-07-19T00:01:18.343' AS DateTime), CAST(N'2024-07-19T00:01:18.343' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (49, 46, NULL, N'aaa', N'', 2, CAST(N'2024-07-19T01:03:01.630' AS DateTime), CAST(N'2024-07-19T01:03:01.630' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (50, 46, NULL, N'', N'C:\fakepath\corgi2.jpg', 2, CAST(N'2024-07-19T01:30:03.653' AS DateTime), CAST(N'2024-07-19T01:30:03.653' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (51, 46, NULL, N'', N'https://localhost:7003/images/payment/cbecc706-8367-4476-a787-e5c3b3a9975f_corgi2.jpg', 2, CAST(N'2024-07-19T01:44:43.307' AS DateTime), CAST(N'2024-07-19T01:44:43.307' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (52, 46, NULL, N'', N'https://localhost:7003/images/payment/46a1a6b6-1dbe-49a0-957b-b4695e559f0f_golden.jpg', 2, CAST(N'2024-07-19T01:44:58.300' AS DateTime), CAST(N'2024-07-19T01:44:58.300' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (53, 46, NULL, N'qr code ', N'https://localhost:7003/images/payment/f13b4d8d-0fe4-42bf-9322-2102177ed92c_qr.jpg', 2, CAST(N'2024-07-19T01:55:53.363' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (54, 46, NULL, N'', N'https://localhost:7003/images/payment/f9ba8aeb-183d-4cb5-a16e-892a9eccd8c9_dogdude.jpg', 2, CAST(N'2024-07-19T02:01:32.867' AS DateTime), CAST(N'2024-07-19T02:01:32.867' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (55, 46, NULL, N'', N'https://localhost:7003/images/payment/448d5b91-8f70-4c2a-b7fb-9e1c4c814f08_golden.jpg', 2, CAST(N'2024-07-19T02:03:16.503' AS DateTime), NULL)
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (56, 46, NULL, N'', N'https://localhost:7003/images/payment/329a2f9f-88ea-4323-b859-f4daf7d620e0__G5 Foods - Page 4.png', 2, CAST(N'2024-07-19T02:03:31.717' AS DateTime), CAST(N'2024-07-19T02:03:31.717' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (57, 46, NULL, N'', N'https://localhost:7003/images/payment/b9ee7844-f73b-44cb-bab7-0f31b81a85ef_SWD - G5 - Function - Job Searching System - Kiên 2 (22).png', 2, CAST(N'2024-07-19T02:03:47.780' AS DateTime), CAST(N'2024-07-19T02:03:47.780' AS DateTime))
INSERT [dbo].[AskAndReply] ([AskID], [User_UserID], [ReplyForAskID], [ContentFor], [Image], [Discuss_DiscussID], [CreatedAt], [UpdatedAt]) VALUES (58, 46, 53, N'', N'https://localhost:7003/images/payment/6517ee4b-4957-4c97-b929-7ff7d1e89784_corgi2.jpg', 2, CAST(N'2024-07-20T08:49:02.230' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[AskAndReply] OFF
GO
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (1, N'Tổng hợp các sản phẩm của học viên tại F8', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png', N'Bài vi?t này nh?m t?ng h?p l?i các d? án mà h?c viên F8 dã hoàn thành và chia s? trên nhóm H?c l?p trình web F8. Các d? án du?i...', CAST(N'2023-11-01T00:00:00.000' AS DateTime), 1, CAST(N'15:15:15' AS Time), 1, 1, 46, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (4, N'Tạo dự án ReactJS với Webpack và Babel', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg', N'T? t?o d? án ReactJS v?i webpack và babel nh?m m?c dích giúp chúng ta hi?u rõ hon v? v? cách create-react-app dã t?o ra d? án ReactJS nhu th? nào và quan...', CAST(N'2023-11-01T00:00:00.000' AS DateTime), 1, CAST(N'00:13:00' AS Time), 1, 1, 46, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (7, N'Cách đưa code lên GitHub và tạo GitHub Pages', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/677/615436b218d0a.png', N'? bài vi?t này, mình s? hu?ng d?n cách d? dua code lên trên Github và t?o Github Pages d? xem du?c trang web mà các b?n dua lên  nhu th? nào.', CAST(N'2023-11-02T00:00:00.000' AS DateTime), 1, CAST(N'00:25:00' AS Time), 1, 1, 46, NULL, NULL)
INSERT [dbo].[Blog] ([BlogID], [BlogTitle], [BlogImage], [BlogContent], [PostDate], [Status], [ReadTime], [BlogTopic_BlogTopicID], [BlogTag_BlogTagID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (8, N'Ký sự ngày thứ 25 học ở F8', N'https://files.fullstack.edu.vn/f8-prod/blog_posts/51/6139c6453456e.png', N'Hí ae, tôi cung tên Son nhung mà là newbie còn ông Son kia thì trùm r?i :))). Tôi cung v?a m?i d?n v?i l?p trình,tôi là sv nam 1....', CAST(N'2023-11-02T11:21:45.843' AS DateTime), 1, CAST(N'00:08:00' AS Time), 1, 1, 46, NULL, NULL)
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
INSERT [dbo].[Chapter] ([ChapterID], [ChapterName], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (23, N'test new chapter', 48, CAST(N'2024-07-05T10:25:27.260' AS DateTime), CAST(N'2024-07-05T10:25:27.260' AS DateTime))
SET IDENTITY_INSERT [dbo].[Chapter] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (8, N'HTML CSS cơ bản', N'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.', N'string', N'https://files.fullstack.edu.vn/f8-prod/courses/2.png', N'R6plN3FvzFY', 0, 1, 1, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (32, N'HTML CSS Pro', N'Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.
', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png', N'R6plN3FvzFY', 1299000, 1, 1, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (39, N'Lập Trình JavaScript Cơ Bản', N'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/1.png', N'0SJE9dYdpps', 0, 1, 1, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (43, N'Xây Dựng Website với ReactJS', N'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png', N'x0fSBAgBrOQ', 0, 1, 1, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (44, N'Node & ExpressJS', N'Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/6.png', N'z2f7RHgvddc', 0, 1, 2, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (45, N'Làm việc với Terminal & Ubuntu', N'Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.', NULL, N'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png', N'7ppRSaGT1uw', 0, 1, 2, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (47, N'string', N'string', N'string', N'string', N'string', 0, 0, 2, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (48, N'course fee 48', N'string', N'string', N'string', N'string', 0, 0, 2, 2, CAST(N'2024-06-29T19:28:40.557' AS DateTime), CAST(N'2024-06-29T19:28:40.557' AS DateTime))
INSERT [dbo].[Course] ([CourseID], [CourseName], [Description], [CourseInfomation], [Image], [VideoIntro], [Fee], [Status], [LearningPath_LearningPathID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (49, N'course free 49', N'update', N'update', N'update', N'update', NULL, 1, 2, 2, CAST(N'2024-06-29T19:30:56.533' AS DateTime), CAST(N'2024-06-29T19:40:01.953' AS DateTime))
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[CourseEnrolled] ON 

INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (53, CAST(N'2023-12-29T07:02:23.277' AS DateTime), 1, 39, 2, NULL, NULL)
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (54, CAST(N'2024-02-21T11:34:32.620' AS DateTime), 1, 8, 2, NULL, NULL)
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (55, NULL, NULL, 39, 50, CAST(N'2024-07-01T09:49:41.250' AS DateTime), CAST(N'2024-07-01T09:49:41.250' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (56, NULL, NULL, 39, 48, CAST(N'2024-07-01T09:49:50.093' AS DateTime), CAST(N'2024-07-01T09:49:50.093' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (60, CAST(N'2024-07-01T06:58:24.597' AS DateTime), 0, 39, 49, CAST(N'2024-07-01T06:58:24.597' AS DateTime), CAST(N'2024-07-01T06:58:24.597' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (61, CAST(N'2024-07-01T06:58:24.597' AS DateTime), 0, 39, 49, CAST(N'2024-07-01T06:58:24.597' AS DateTime), CAST(N'2024-07-01T06:58:24.597' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (62, CAST(N'2024-07-01T07:12:27.347' AS DateTime), 0, 39, 45, CAST(N'2024-07-01T07:12:27.347' AS DateTime), CAST(N'2024-07-01T07:12:27.347' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (63, CAST(N'2024-07-01T07:12:27.347' AS DateTime), 0, 39, 46, CAST(N'2024-07-01T07:12:27.347' AS DateTime), CAST(N'2024-07-01T07:12:27.347' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (64, CAST(N'2024-07-05T02:58:50.507' AS DateTime), 1, 48, 46, CAST(N'2024-07-05T09:58:52.293' AS DateTime), CAST(N'2024-07-05T09:58:52.293' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (65, CAST(N'2024-07-05T03:35:45.473' AS DateTime), 1, 8, 46, CAST(N'2024-07-05T10:35:45.637' AS DateTime), CAST(N'2024-07-05T10:35:45.637' AS DateTime))
INSERT [dbo].[CourseEnrolled] ([CourseEnrolledID], [EnrolledDate], [Status], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (66, CAST(N'2024-07-10T12:44:43.187' AS DateTime), 1, 47, 46, CAST(N'2024-07-10T19:44:43.237' AS DateTime), CAST(N'2024-07-10T19:44:43.237' AS DateTime))
SET IDENTITY_INSERT [dbo].[CourseEnrolled] OFF
GO
SET IDENTITY_INSERT [dbo].[Discuss] ON 

INSERT [dbo].[Discuss] ([DiscussID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (1, 9, NULL, NULL)
INSERT [dbo].[Discuss] ([DiscussID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (2, 13, CAST(N'2024-07-05T10:26:04.373' AS DateTime), CAST(N'2024-07-05T10:26:04.373' AS DateTime))
SET IDENTITY_INSERT [dbo].[Discuss] OFF
GO
SET IDENTITY_INSERT [dbo].[FeedBack] ON 

INSERT [dbo].[FeedBack] ([FeedbackID], [FeedbackContent], [RateStar], [User_UserID], [Course_CourseID], [CreatedAt], [UpdatedAt]) VALUES (1, N'new feedback', N'05', 49, 49, CAST(N'2024-07-01T16:22:52.827' AS DateTime), CAST(N'2024-07-01T16:22:52.827' AS DateTime))
SET IDENTITY_INSERT [dbo].[FeedBack] OFF
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
INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (13, N'tesst', N'TkPppGzB9ZA', CAST(N'00:01:00' AS Time), 23, CAST(N'2024-07-01T17:09:47.037' AS DateTime), CAST(N'2024-07-01T17:09:47.037' AS DateTime))
INSERT [dbo].[Lesson] ([LessonID], [Title], [Video], [Time], [Chapter_ChapterID], [CreatedAt], [UpdatedAt]) VALUES (15, N'test2 ', N'UYpIh5pIkSA', NULL, 23, CAST(N'2024-07-15T17:12:51.470' AS DateTime), CAST(N'2024-07-15T17:12:51.470' AS DateTime))
SET IDENTITY_INSERT [dbo].[Lesson] OFF
GO
SET IDENTITY_INSERT [dbo].[Note] ON 

INSERT [dbo].[Note] ([NoteID], [ContentFor], [User_UserID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (1, N'- Kết luận Hội nghị sơ kết 01 năm thực hiện chỉ đạo của Thủ tướng Chính phủ về việc tháo gỡ "Điểm nghẽn" Đề án 06 và đẩy mạnh kết nối, chia sẻ dữ liệu phục vụ phát triển thương mại điện tử, nâng cao hiệu quả công tác quản lý thuế. ', 46, 13, CAST(N'2024-07-01T10:11:03.697' AS DateTime), CAST(N'2024-07-01T10:13:04.600' AS DateTime))
INSERT [dbo].[Note] ([NoteID], [ContentFor], [User_UserID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (4, N'Kết luận Hội nghị sơ kết 01 năm thực hiện chỉ đạo của Thủ tướng Chính phủ về việc tháo gỡ "Điểm nghẽn" Đề án 06 và đẩy mạnh kết nối, chia sẻ dữ liệu phục vụ phát triển thương mại điện tử, nâng cao hiệu quả công tác quản lý thuế', 46, 13, CAST(N'2024-07-15T13:48:10.763' AS DateTime), CAST(N'2024-07-15T13:48:10.763' AS DateTime))
INSERT [dbo].[Note] ([NoteID], [ContentFor], [User_UserID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (5, N'Kết luận Hội nghị sơ kết 01 năm thực hiện chỉ đạo của Thủ tướng Chính phủ về việc tháo gỡ "Điểm nghẽn" Đề án 06 và đẩy mạnh kết nối, chia sẻ dữ liệu phục vụ phát triển thương mại điện tử, nâng cao hiệu quả công tác quản lý thuế', 46, 13, CAST(N'2024-07-15T14:22:51.913' AS DateTime), CAST(N'2024-07-15T14:22:51.913' AS DateTime))
INSERT [dbo].[Note] ([NoteID], [ContentFor], [User_UserID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (6, N'update lan 3', 46, 13, CAST(N'2024-07-15T14:45:20.237' AS DateTime), NULL)
INSERT [dbo].[Note] ([NoteID], [ContentFor], [User_UserID], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (11, N'kết luận hội nghị sơ kết 01 năm thực hiện
của Thủ tướng chính phủ về việc tháo gỡ "Điểm nghẽn"', 46, 13, CAST(N'2024-07-15T14:59:20.393' AS DateTime), CAST(N'2024-07-15T14:59:20.393' AS DateTime))
SET IDENTITY_INSERT [dbo].[Note] OFF
GO
SET IDENTITY_INSERT [dbo].[Notification] ON 

INSERT [dbo].[Notification] ([NotificationID], [ContentFor], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (1, N'Admin da them moi khoa hoc moi', 8, 2, NULL, NULL)
INSERT [dbo].[Notification] ([NotificationID], [ContentFor], [Course_CourseID], [User_UserID], [CreatedAt], [UpdatedAt]) VALUES (3, N'Admin da them 2 khoa hoc moi', 8, 2, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Notification] OFF
GO
SET IDENTITY_INSERT [dbo].[Question] ON 

INSERT [dbo].[Question] ([QuestionID], [Quiz_QuizID], [QuestionContent], [CreatedAt], [UpdatedAt]) VALUES (5, 2, N'question for quiz 1', CAST(N'2024-07-02T07:56:42.367' AS DateTime), CAST(N'2024-07-02T07:58:33.083' AS DateTime))
INSERT [dbo].[Question] ([QuestionID], [Quiz_QuizID], [QuestionContent], [CreatedAt], [UpdatedAt]) VALUES (6, 3, N'question 1 for quiz 2', CAST(N'2024-07-16T09:22:18.360' AS DateTime), CAST(N'2024-07-16T09:22:18.360' AS DateTime))
INSERT [dbo].[Question] ([QuestionID], [Quiz_QuizID], [QuestionContent], [CreatedAt], [UpdatedAt]) VALUES (7, 4, N'question 2 for quiz 2', CAST(N'2024-07-16T09:22:37.657' AS DateTime), CAST(N'2024-07-16T09:22:37.657' AS DateTime))
SET IDENTITY_INSERT [dbo].[Question] OFF
GO
SET IDENTITY_INSERT [dbo].[Quiz] ON 

INSERT [dbo].[Quiz] ([QuizID], [QuizName], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (2, N'quiz test lesson 13', 13, CAST(N'2024-07-01T17:44:13.563' AS DateTime), CAST(N'2024-07-02T01:48:14.083' AS DateTime))
INSERT [dbo].[Quiz] ([QuizID], [QuizName], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (3, N'quiz test lesson 15', 15, CAST(N'2024-07-01T17:44:13.563' AS DateTime), CAST(N'2024-07-02T01:52:01.697' AS DateTime))
INSERT [dbo].[Quiz] ([QuizID], [QuizName], [Lesson_LessonID], [CreatedAt], [UpdatedAt]) VALUES (4, N'quiz test lesson 15', 15, CAST(N'2024-07-15T16:37:10.277' AS DateTime), CAST(N'2024-07-15T16:37:10.277' AS DateTime))
SET IDENTITY_INSERT [dbo].[Quiz] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (2, N'kien@gmail.com', N'1', N'1', N'0961498125', N'f7d63bbdc0fda6d3c6ae9c061a86910d', N'Bùi Văn Kiên', CAST(N'2002-12-02T00:00:00.000' AS DateTime), N'Hai Duong', N'ok', N'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96', N'https://gitlab.com/uploads/-/system/user/avatar/14507009/avatar.png?width=96', N'0212', N'0212', N'0212', 1, N'0212', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (16, N'kbui0212111@gmail.com', N'string', N'string', N'string', N'string', N'Sơn Đặng', CAST(N'2023-11-11T08:31:30.383' AS DateTime), N'string', N'string', N'https://fullstack.edu.vn/landing/htmlcss/assets/img/mentor.jpg', N'string', N'string', N'string', N'string', 0, N'5975', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (28, N'string', N'string', N'string', N'string', N'string', N'string', CAST(N'2023-11-11T10:19:50.507' AS DateTime), N'string', N'string', N'string', N'string', N'string', N'string', N'string', 0, N'12f499', 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (33, N'kbui021222@gmail.com', NULL, NULL, NULL, N'0212', N'bui van kien', NULL, NULL, NULL, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3soCFOykRkna19q2B2el-kRpnKVkjSupKsMWFpLVsASz4zBEwPlex20NgtxCviYU-BkE&usqp=CAU', NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (34, N'tiendat320@gmail.com', NULL, NULL, NULL, N'e10adc3949ba59abbe56e057f20f883e', N'Nguyen Tien Dat', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, N'4618', 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (35, N'kb0212@gmail.com', NULL, NULL, NULL, N'4ba29b9f9e5732ed33761840f4ba6c53', N'Kien vanbui', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (36, N'k2@gmail.com', NULL, NULL, NULL, N'81dc9bdb52d04dc20036dbd8313ed055', N'Bui Van Kien', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (37, N'kienbv02@gmail.com', NULL, NULL, NULL, N'4297f44b13955235245b2497399d7a93', N'KienBV', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 2, NULL, NULL)
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (38, N'new', NULL, NULL, NULL, N'22AF645D1859CB5CA6DA0C484F1F37EA', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T18:52:22.633' AS DateTime), CAST(N'2024-06-30T18:52:22.633' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (39, N'new 2', NULL, NULL, NULL, N'a957a70c8ab21c89385c1386020d3b1c', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T18:54:38.320' AS DateTime), CAST(N'2024-06-30T18:54:38.320' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (40, N'new2', NULL, NULL, NULL, N'82f2ec5f5ed4dfed2b55c68496d7bac4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:16:40.110' AS DateTime), CAST(N'2024-06-30T21:16:40.110' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (41, N'new3', NULL, NULL, NULL, N'51bb788eb8fe3a72ca7a3cdb276b4cb7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:18:53.587' AS DateTime), CAST(N'2024-06-30T21:18:53.587' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (42, N'new4', NULL, NULL, NULL, N'e24bf4ad25eeeb679f6faaab4efc540f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:20:53.737' AS DateTime), CAST(N'2024-06-30T21:20:53.737' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (43, N'new5', NULL, NULL, NULL, N'86823063554cbd22d1cc7e8e0a9fcea7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:22:49.610' AS DateTime), CAST(N'2024-06-30T21:22:49.610' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (44, N'new6', NULL, NULL, NULL, N'945558784ad9bbcd3486d90d1379e115', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:26:34.900' AS DateTime), CAST(N'2024-06-30T21:26:34.900' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (45, N'new7', NULL, NULL, NULL, N'ab68f82f208810b90393609d4ab86aec', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:30:14.860' AS DateTime), CAST(N'2024-06-30T21:30:14.860' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (46, N'user46@gmail.com', NULL, NULL, N'0961498125', N'e0be2d0eb4c83c73d37c07f69b415ea1', N'Sơn Tùng Mtp', NULL, NULL, NULL, N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:31:54.300' AS DateTime), CAST(N'2024-06-30T21:31:54.300' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (47, N'new9', NULL, NULL, NULL, N'f44760241e634a581aa3ae08ef66db7b', NULL, NULL, NULL, NULL, N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:35:00.003' AS DateTime), CAST(N'2024-06-30T21:35:00.003' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (48, N'new10', NULL, NULL, NULL, N'cac52e6b80c5fc42ed85e97847855916', N'new10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T21:39:55.550' AS DateTime), CAST(N'2024-06-30T21:39:55.550' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (49, N'new11', NULL, NULL, NULL, N'5d804d74d4e9e75ea28ab168055b4651', N'new11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-06-30T22:42:37.197' AS DateTime), CAST(N'2024-06-30T22:42:37.197' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (50, N'kbui0212@gmail.com', NULL, NULL, NULL, N'e0be2d0eb4c83c73d37c07f69b415ea1', N'Bui Van Kien', NULL, NULL, NULL, N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', NULL, NULL, NULL, NULL, NULL, N'352261', 1, CAST(N'2024-06-30T22:45:08.157' AS DateTime), CAST(N'2024-06-30T22:45:08.157' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (51, N'jinchuriki18plus@gmail.com', NULL, NULL, NULL, N'5ac4c14c636e9162ef74faf99a0840dd', N'Trinh Dang Quang', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'bf6f94', 2, CAST(N'2024-07-01T01:45:51.327' AS DateTime), CAST(N'2024-07-01T01:45:51.327' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (52, N'customer01@gmail.com', NULL, NULL, NULL, N'96a3be3cf272e017046d1b2674a52bd3', N'Customer 01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-07-17T15:44:02.193' AS DateTime), CAST(N'2024-07-17T15:44:02.193' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (53, N'customer02@gmail.com', NULL, NULL, NULL, N'b3104f7d3e375cdb09477e25b07c9d38', N'Customer 02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-07-17T15:46:29.513' AS DateTime), CAST(N'2024-07-17T15:46:29.513' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (54, N'customer03@gmail.com', NULL, NULL, NULL, N'ec50882101c9fa6e1de89bd73a0901f8', N'Customer 03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-07-17T15:53:39.227' AS DateTime), CAST(N'2024-07-17T15:53:39.227' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (55, N'customer04@gmail.com', NULL, NULL, NULL, N'10e44382b2328bbc11cd60d0488783a0', N'customer04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-07-17T15:55:46.117' AS DateTime), CAST(N'2024-07-17T15:55:46.117' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (56, N'customer05@gmail.com', NULL, NULL, NULL, N'3013c81c3e84299258557db73dfcc8a5', N'customer05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, CAST(N'2024-07-17T16:01:48.853' AS DateTime), CAST(N'2024-07-17T16:01:48.853' AS DateTime))
INSERT [dbo].[User] ([UserID], [Email], [Facebook], [Github], [Phone], [Password], [FullName], [Dob], [Address], [Bio], [Image], [BackgroundImage], [GmailID], [FacebookID], [GithubID], [Status], [CodeVerify], [UserRole_RoleID], [CreatedAt], [UpdatedAt]) VALUES (57, N'expert@gmail.com', NULL, NULL, NULL, N'b0f94cebc20bf285475478a1c26ca4c1', N'customer07', NULL, NULL, NULL, N'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/22/966458/Son-Tung-1.jpg', NULL, NULL, NULL, NULL, NULL, NULL, 3, CAST(N'2024-07-17T16:02:42.013' AS DateTime), CAST(N'2024-07-17T16:02:42.013' AS DateTime))
SET IDENTITY_INSERT [dbo].[User] OFF
GO
SET IDENTITY_INSERT [dbo].[UserRole] ON 

INSERT [dbo].[UserRole] ([RoleID], [RoleName], [CreatedAt], [UpdatedAt]) VALUES (1, N'Admin', NULL, NULL)
INSERT [dbo].[UserRole] ([RoleID], [RoleName], [CreatedAt], [UpdatedAt]) VALUES (2, N'Customer', NULL, NULL)
INSERT [dbo].[UserRole] ([RoleID], [RoleName], [CreatedAt], [UpdatedAt]) VALUES (3, N'Expert', CAST(N'2024-07-20T12:07:39.100' AS DateTime), CAST(N'2024-07-20T12:07:39.100' AS DateTime))
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
ALTER TABLE [dbo].[FeedBack] ADD  DEFAULT (getdate()) FOR [CreatedAt]
GO
ALTER TABLE [dbo].[FeedBack] ADD  DEFAULT (getdate()) FOR [UpdatedAt]
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
ALTER TABLE [dbo].[BlogComment]  WITH CHECK ADD  CONSTRAINT [FK_BlogComment_Blog] FOREIGN KEY([Blog_BlogID])
REFERENCES [dbo].[Blog] ([BlogID])
GO
ALTER TABLE [dbo].[BlogComment] CHECK CONSTRAINT [FK_BlogComment_Blog]
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
ALTER TABLE [dbo].[FeedBack]  WITH CHECK ADD  CONSTRAINT [FK_FeedBack_Course] FOREIGN KEY([Course_CourseID])
REFERENCES [dbo].[Course] ([CourseID])
GO
ALTER TABLE [dbo].[FeedBack] CHECK CONSTRAINT [FK_FeedBack_Course]
GO
ALTER TABLE [dbo].[FeedBack]  WITH CHECK ADD  CONSTRAINT [FK_FeedBack_User] FOREIGN KEY([User_UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[FeedBack] CHECK CONSTRAINT [FK_FeedBack_User]
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
ALTER DATABASE [OLS_PRN231_V1] SET  READ_WRITE 
GO
