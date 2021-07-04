
class NewsController{

    index(req,res) {
        res.render('news');
    }
}

// xuat ra ngoai
module.exports = new NewsController

