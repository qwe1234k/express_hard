const noticeBoard = new Object('공지사항');

const article = new Object({
    subject: '첫번째 공지사항입니다.',
    content: '테스트 코드는 수정하면 안됩니다.',
    author: '강승현',
});

const article2 = new Object({
    subject: '두번째 공지사항입니다.',
    content: 'DB나 웹서버를 이용할 필요는 없습니다.',
    author: '강승현',
});

function getAllArticles() {
    return Object
}

console.log(noticeBoard.getAllArticles())
