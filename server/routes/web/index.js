module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Category = require('../../models/Category')
    // const Article = require('../../models/Article')
    // 由于mongoose已经在入口index加载了模型，以如下方式直接使用
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    // 一个批量导入的口，开发用
    router.get('/news/init', async (req, res) => {
        // 找到新闻分类整个对象
        const parent = await Category.findOne({
            name: '新闻分类'
        })

        // lean表示返回纯js对象
        const cats = await Category.find().where({
            // 找到Category下parent字段为新闻分类的子分类
            parent
        }).lean()
        // 在浏览器用$$('.class-name ...').map(el=>el.innerHTML)找到的title数组
        const newsTitles = ['促进企业文化建设，王者荣耀行业赛成各企业内部交流热门选择', '“这真的是蛋糕界的王者”，幸福西饼x王者荣耀 主题蛋糕来啦', '王者赛宝“赛事主理人计划”发布，快来办场属于玩家自己的赛事吧！', '王者荣耀携手京东千县名品助力乡村振兴，为新农人加油', '周年庆头像框新鲜出炉！', '11月9日外挂专项打击公告', '11月9日游戏内违规签名、攻略信息处罚公告', '11月9日挂车行为专项违规处罚公告', '11月8日体验服停机更新公告', '11月8日全服不停机更新公告', '王者荣耀皮肤实体礼品卡预售开启公告', '《为我们的星空梦喝彩》活动开启公告', '盾山-梦圆繁星上架！七周年荣耀播报等你兑换', '《梦圆繁星》活动开启公告', '《很高兴遇见你》活动开启公告', '2022年王者荣耀世界冠军杯介绍', '总决赛一触即发！谁能成为KIC2022巴西区域选拔赛冠军？', '总决赛大比分获胜！恭喜Isurus获得KIC2022拉美区域选拔赛冠军', 'Gen.G牵手腾讯天美电竞，正式进军王者荣耀国际赛道', '武汉eStarPro勇夺2022年王者荣耀挑战者杯']
        const newsList = newsTitles.map(title => {
            // 将cats数组从下标为0开始提取到数组最后一项，随机排序如果大于 0 则b被放到a前，反之则a放到b前， 这样依次排到最后一项(就是返回一串随机打乱子分类的数组)
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2), // 取子分类数组的前两个
                title
            }
        })
        await Article.deleteMany({}) // 以任意条件查询，并删除
        await Article.insertMany(newsList) // 批量插入
        res.send(newsList)
    })


    router.get('/news/list', async (req, res) => {
        // 找到新闻分类category，


        // 填充一个属性名为children的虚拟类
        // 用新闻分类category的_id值去匹配Category模型parent的值
        // 匹配上了就把category填充到children字段


        // 再根据每个children对象的_id值去匹配Article模型的categories的值
        // 匹配上了就把article填充到newsList字段

        // const parent = await Category.findOne({
        //     name: '新闻分类'
        // }).populate({
        //     path: 'children',
        //     populate: {
        //         path: 'newsList'
        //     }
        // }).lean()



        const parent = await Category.findOne({
            name: '新闻分类'
        })
        // 聚合查询,接收一个数组叫聚合管道，里面可以定义多种操作
        const cats = await Category.aggregate([
            // 用新闻分类的_id值去匹配Category模型的parent值
            { $match: { parent: parent._id } },
            {
                // 根据$match找到的categories的_id，
                // 去跟articles集合里的每一项的categories做匹配
                // 把匹配上的categories放到$match找到的categories的newsList字段里
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                // 在$match找到的categories里添加字段
                $addFields: {
                    // 添加一个名为newsList的字段(实际上是覆盖)
                    // 取newsList字段下的5项，覆盖到newsList里
                    newsList: { $slice: ['$newsList', 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        // 给cats的第一项增加热门分类
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                // 找到Article里categories字段(数组)匹配上subCats数组(新闻分类下的四个分类数组的_id)的子项，插入5条到newsList
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })
        // newList 每项加上categoryName
        cats.map(cat => {
            cat.newsList.map(news => {
                // 给热门分类的categoryName改名
                news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })


    app.use('/web/api', router)
}