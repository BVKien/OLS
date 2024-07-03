alter table FeedBack
add CreatedAt datetime default getdate() not null, 
UpdatedAt datetime default getdate() not null; 