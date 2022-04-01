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

    findBoardByName(Name) {
        this.boards.find(element => element===Name)
        return this.boards[0]
    }   
}

class Board {
    constructor(name) {
        this.name = name
        if (this.name === '' || this.name === null) {
            throw new Error();
        }
    }

    publish(article) {
        // site에 추가된 Board가 아니면 throw

        // if(this.name.find((아무거나) => 아무거나)) {
        //     throw new Error();
        // }

        
        // site에 추가된 Board면 publish
    }
}

class Article {}

class Comment {}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
