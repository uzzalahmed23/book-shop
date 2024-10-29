const books = [

    {
        "id": crypto.randomUUID(),
        cover: 'history-of-h.webp',
        name: 'হাদিস সংকলনের ইতিহাস',
        author: 'মুফতি মুহাম্মদ রাফী উসমানী',
        ratings: 3,
        price: 235,
        dprice: '২৩৫'
    },
    {
        "id": crypto.randomUUID(),
        cover: 'muhsonin.jpg',
        name: 'মুহসনিন',
        author: 'আব্দুল্লাহ্ ইবনে জাফর',
        ratings: 5,
        price: 255,
        dprice: '২৫৫'
    },
    {
        "id": crypto.randomUUID(),
        cover: 'asroy-kamona.webp',
        name: 'আশ্রয় কামনা করুন',
        author: 'সাদিক ফারহান',
        ratings: 4,
        price: 285,
        dprice: '২৮৫'
    },
    {
        "id": crypto.randomUUID(),
        cover: 'asroy-kamona.webp',
        name: 'আশ্রয় কামনা করুন',
        author: 'সাদিক ফারহান',
        ratings: 4,
        price: 285,
        dprice: '২৮৫'

    },
    {
        "id": crypto.randomUUID(),
        cover: 'asroy-kamona.webp',
        name: 'আশ্রয় কামনা করুন',
        author: 'সাদিক ফারহান',
        ratings: 4,
        price: 285,
        dprice: '২৮৫'
    },

]

function getAllBooks() {
    return books;
}
export { getAllBooks }