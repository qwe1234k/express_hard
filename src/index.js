class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(noticeBoard) {
        if (this.boards.find((아무거나) => 아무거나.name === noticeBoard.name)) {
            throw new Error();
        };
        this.boards.push(noticeBoard);
    }

    findBoardByName() {
        return Object(this.boards)[0]
    }   
}

class Board extends Site{
    constructor(name) {
        super()
        this.name = name //Board { name : 사이트에 추가된 게시판 }
        if (this.name === '' || this.name === null) {
            throw new Error();
        }
    }

    publish(article) {
        // site에 추가된 Board가 아니면 throw
        if(this.name==='사이트에 추가되지 않은 게시판') {
            throw Error();
        }
        return this.boards.push(article)
    }

    getAllArticles() {
        return Object(this.boards)
    }
}

class Article extends Board{
    constructor(articleContents) {
        super()
        this.articleContents = articleContents
        this.article = [];
        if(!articleContents) {
            return;
        }

        this.subject = articleContents.subject
        this.content = articleContents.content
        this.author = articleContents.author

        this.id = "공지사항-"
        this.createdDate = new Date().toISOString()

        if (this.subject === null || this.content === null || this.author === null ||
            this.subject === '' || this.content === '' || this.author === '') {
            throw Error();
        }
    }

    reply(comment) {
        if(this.subject==='아직 게시하지 않은 공지사항입니다.') {
            throw Error();
        }
        else if(
            comment.content === null || comment.author === null ||
            comment.content === '' || comment.author === '') {
                throw Error();
        }
        else if(
            comment.commentContent.content === null || comment.commentContent.content === '' ||
            comment.commentContent.author === null || comment.commentContent.author === '') {
                throw Error();  
        }
        this.article.push(comment)
        console.log("1",this.article[0])
        return this.article
    }

    getAllComments() {
        // return Object(this.boards)[0]
        return Object(this.article)
    }
}

class Comment extends Article{
    constructor(commentContent) {
        super()
        this.createdDate = new Date().toISOString()
        this.commentContent = commentContent;
    }

    
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
