class Comment {
  constructor(userId, comment) {
    this.userId = userId;
    this.comment = comment;
  }
}

class Post {
  constructor(
    postId,
    userId,
    title,
    description,
    postedOn,
    tags,
    userType,
    comments
  ) {
    this.postId = postId;
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.postedOn = postedOn;
    this.tags = tags;
    this.userType = userType;
    this.comments = comments || [];
  }

  addComment(userId, comment) {
    this.comments.push(new Comment(userId, comment));
  }
}

module.exports = { Post, Comment };
