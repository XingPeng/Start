define(function () {
    'use strict';
    return {
        header: {
            editAd: ['<div class="left back">',
                '<a href="javascript:;"></a>',
                '</div>',
                '<div class="title ad-type">',
                '<div class="ad-bottom"><a href="javascript:;">底部广告<a></div>',
                '<div class="ad-top"><a href="javascript:;">顶部广告</a></div>',
                '</div>',
                '<div class="right save">保存</div>'].join(""),
            common: ['<div class="left back">',
                '<a href="javascript:;"></a>',
                ' </div>',
                '<div class="title edit">',
                ' 编辑广告',
                '</div>',
                '<div class="right share">分享</div>'].join("")
        },
        //首页
        home: {
            main: ['<div class="type slider">',
                '<div class="ad-common" data-item="0" data-moved="false">',
                '<div>通栏广告</div>',
                '</div>',
                '<div class="ad-article" data-item="1" data-moved="false">',
                '<div>图文广告</div>',
                '</div>',
                '<div class="ad-card" data-item="2" data-moved="false">',
                '<div>名片广告</div>',
                '</div>',
                '<div class="ad-qrcode" data-item="3" data-moved="false">',
                '<div>二维码广告</div>',
                '</div>',
                '<div class="ad-qq" data-item="4" data-moved="false">',
                '<div>QQ广告</div>',
                '</div>',
                '</div>',
                '<div class="view">',
                '<div class="view-container">',
                '</div>',
                '</div>'].join(""),
            qq: ['<div class="view-qq">',
                '<div class="ad-title">',
                '<h4>QQ广告</h4>',
                '<div class="title-line"></div>',
                '<div class="ad-type-close"></div>',
                '</div>',
                '<div class="ad-turn"><span class="turn-icon ad-turn-on"> </span><span>显示该广告轮播</span></div>',
                '<div class="ad-content">',
                '<div class="left"><input type="file" id="qqavatar" name="qqavatar"><img class="ad-add" src="images/add.png"></div>',
                '<div class="right">',
                '<input type="text" name="nickname" placeholder="输入昵称" />',
                '<input type="text" name="qqnumber" placeholder="输入QQ号" />',
                '<input type="text" name="description" placeholder="输入描述" />',
                '</div>',
                '</div><br/>',
                '<div class="ad-tip">QQ文字 <a href="javascript:;">查看教程</a></div>',
                '</div>'].join(""),
            card: ["<div class=\"view-card\">",
                "<div class=\"ad-title\">",
                "<h4>名片广告</h4>",
                "<div class=\"title-line\"></div>",
                "<div class=\"ad-type-close\"></div>",
                "</div>",
                "<div class=\"ad-turn\">",
                "<span class=\"turn-icon ad-turn-on\"> </span>",
                "<span>显示该广告轮播</span>",
                "</div>",
                "<div class=\"ad-content\">",
                "<div class=\"left\">",
                "<input type=\"file\" id=\"cardavatar\" name=\"cardavatar\">",
                "<img class=\"ad-add\" src=\"images/add.png\">",
                "</div>",
                "<div class=\"right\">",
                "<input type=\"text\" name=\"fullname\" placeholder=\"输入姓名\" />",
                "<input type=\"text\" name=\"mobile\" placeholder=\"输入手机号码\" />",
                "<input type=\"text\" name=\"address\" placeholder=\"输入联系地址\" />",
                "</div>",
                "</div><br/>",
                "<div class=\"ad-tip\">头像或logo及联系方式等，支持一键拨号。</div>",
                "</div>"].join(""),
            qrcode: ["<div class=\"view-qrcode\">",
                "<div class=\"ad-title\">",
                "<h4>二维码广告</h4>",
                "<div class=\"title-line\"></div>",
                "<div class=\"ad-type-close\"></div>",
                "</div>",
                "<div class=\"ad-turn\">",
                "<span class=\"turn-icon ad-turn-on\"> </span>",
                "<span>显示该广告轮播</span>",
                "</div>",
                "<div class=\"ad-content\">",
                "<div class=\"left\">",
                "<input type=\"file\" id=\"qrcodeavatar\" name=\"qrcodeavatar\">",
                "<img class=\"ad-add\" src=\"images/add.png\">",
                "</div>",
                "<div class=\"right\">",
                "<input type=\"text\" name=\"qrcodetip\" placeholder=\"长按二维码识别\" />",
                "<input type=\"text\" name=\"qrcodedescription\" placeholder=\"输入二维码介绍\" />",
                "</div>",
                "</div><br/>",
                "<div class=\"ad-tip\">可上传APP，个人，微信公众号二维码，支持扫码关注下载等。</div>",
                "</div>"].join(""),
            article: ["<div class=\"view-article\">",
                "<div class=\"ad-title\">",
                "<h4>图文广告</h4>",
                "<div class=\"title-line\"></div>",
                "<div class=\"ad-type-close\"></div>",
                "</div>",
                "<div class=\"ad-turn\">",
                "<span class=\"turn-icon ad-turn-on\"> </span>",
                "<span>显示该广告轮播</span>",
                "</div>",
                "<div class=\"ad-content\">",
                "<div class=\"ad-info\">",
                "<div class=\"left\">",
                "<input type=\"file\" id=\"articleavatar\" name=\"articleavatar\">",
                "<img class=\"ad-add\" src=\"images/add.png\">",
                "</div>",
                "<div class=\"right\">",
                "<input type=\"text\" name=\"articlename\" placeholder=\"输入产品或服务名称\" />",
                "<input type=\"text\" name=\"articledescription\" placeholder=\"输入产品或服务描述\" />",
                "</div>",
                "</div>",
                "<div class=\"ad-link\">",
                "<div class=\"link-icon\"></div> <input type=\"text\" name=\"articledescription\" placeholder=\"输入你的“微店”或移动站点的网址\" />",
                "</div>",
                "<div class=\"linktozone\">",
                "<div><input type=\"checkbox\" name=\"istozone\"> 链接形象空间</div>",
                "</div>",
                "</div>",
                "<div class=\"ad-tip\">产品图或LOGO，链接店铺地址或产品单页等。<a href=\"javascript:;\">查看教程</a></div>",
                "</div>"].join(""),
            common: ["<div class=\"view-common\">",
                " <div class=\"ad-title\">",
                "<h4>通栏广告</h4>",
                "<div class=\"title-line\"></div>",
                "<div class=\"ad-type-close\"></div>",
                "</div>",
                "<div class=\"ad-turn\">",
                "<span class=\"turn-icon ad-turn-on\"> </span>",
                "<span>显示该广告轮播</span>",
                "</div>",
                "<div class=\"ad-content\">",
                "<div class=\"ad-info\">",
                "<input type=\"file\" name=\"adbanner\">",
                "<img class=\"ad-add\" src=\"images/add.png\">",
                "</div>",
                "<div class=\"ad-link\">",
                "<div class=\"link-icon\"></div><input type=\"text\" name=\"articledescription\" placeholder=\"输入你的“微店”或移动站点的网址\" />",
                "</div>",
                "<div class=\"linktozone\">",
                "<div> <input type=\"checkbox\" name=\"istozone\">链接形象空间</div>",
                "</div>",
                "</div>",
                "<div class=\"ad-tip\">可制作480*120像素图片，链接店铺地址或产品单页等。<a href=\"javascript:;\">查看教程</a></div>",
                "</div>"].join("")
        },
        //底部广告
        topad: {
            main: ['<div class="type">',
                '<div class="ad-topad">',
                '<div>顶部广告</div>',
                '</div>',
                '</div>',
                '<div class="view slider">',
                '<div class="view-container slider">                    ',
                '</div>',
                '</div>'].join(""),
            item: ["<div class=\"view-common\">",
                " <div class=\"ad-title\">",
                "<h4>顶部广告</h4>",
                "<div class=\"title-line\"></div>",
                "<div class=\"ad-type-close\"></div>",
                "</div>",
                "<div class=\"ad-turn\">",
                "<span class=\"turn-icon ad-turn-on\"> </span>",
                "<span>显示该广告轮播</span>",
                "</div>",
                "<div class=\"ad-content\">",
                "<div class=\"ad-info\">",
                "<input type=\"file\" name=\"adbanner\">",
                "<img class=\"ad-add\" src=\"images/add.png\">",
                "</div>",
                "<div class=\"ad-link\">",
                "<div class=\"link-icon\"></div><input type=\"text\" name=\"articledescription\" placeholder=\"输入你的“微店”或移动站点的网址\" />",
                "</div>",
                "<div class=\"linktozone\">",
                "<div> <input type=\"checkbox\" name=\"istozone\">链接形象空间</div>",
                "</div>",
                "</div>",
                "<div class=\"ad-tip\">可制作480*120像素图片，链接店铺地址或产品单页等。<a href=\"javascript:;\">查看教程</a></div>",
                "</div>"].join("")
        },
        preview: ['            <div class="top-box">',
            '                <div class="top-ad slider">',
            '                    <div style="background:url(images/no.image.big.jpg) center center / 100% no-repeat;"></div>',
            '                    <div style="background:url(images/no.image.big.jpg) center center / 100% no-repeat;"></div>',
            '                    <div style="background:url(images/no.image.big.jpg) center center / 100% no-repeat;"></div>',
            '                    <div style="background:url(images/no.image.big.jpg) center center / 100% no-repeat;"></div>',
            '                    <div style="background:url(images/no.image.big.jpg) center center / 100% no-repeat;"></div>',
            '                </div>',
            '            </div>',
            '            <div class="article">',
            '                <div class="title">',
            '                    <h2>9.1亿世纪婚礼，谁要迎娶了谁</h2>',
            '                </div>',
            '                <div class="author">',
            '                    <span class="date">2016-08-21</span>',
            '                    <a href="javascript:;" class="name">好想你枣业</a>',
            '                </div>',
            '                <div class="content">',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 25.6px;"><img data-ratio="0.5251798561151079" data-s="300,640" data-src="https://mmbiz.qlogo.cn/mmbiz/OKXzlLlqg4IibNn4x8oFiccQHOoKgOIf8pAT4ib1f2gPQe1ibSOwyko1YYRAbcWwCsDjfZiaicf95ZlOV1cEJAicQsesA/0"',
            '                            data-type="jpeg" data-w="" src="http://mmbiz.qpic.cn/mmbiz/OKXzlLlqg4IibNn4x8oFiccQHOoKgOIf8pAT4ib1f2gPQe1ibSOwyko1YYRAbcWwCsDjfZiaicf95ZlOV1cEJAicQsesA/640?tp=webp&amp;wxfrom=5&amp;wx_lazy=1"',
            '                            style="visibility: visible !important; width: 100%; height: auto !important;" width="auto" _width="auto"><br>',
            '                        <span',
            '                            style="line-height: 25.6px; font-size: 18px; color: rgb(120, 120, 120);">根据你的色彩直</span><span style="line-height: 25.6px; font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">觉</span>',
            '                            <span style="line-height: 25.6px; font-size: 18px; color: rgb(120, 120, 120);">，揭示了你内</span>',
            '                            <span',
            '                                style="font-size: 18px; color: rgb(120, 120, 120);">心的真实年龄是：18岁！</span>',
            '                    </p>',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 25.6px;"><span style="font-size: 18px; color: rgb(120, 120, 120);">你的答案令人印象十分深刻！你看颜色的方式就像18岁的人一样！你</span>',
            '                        <span',
            '                            style="font-size: 18px; color: rgb(120, 120, 120);">眼中的色彩有着不同</span><span style="font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">寻</span>',
            '                            <span style="font-size: 18px; color: rgb(120, 120, 120);">常的</span><span style="font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">细节</span>',
            '                            <span',
            '                                style="font-size: 18px; color: rgb(120, 120, 120);">和清晰度</span>',
            '                                <span style="font-size: 18px; color: rgb(120, 120, 120);">！这个结果预示了</span>',
            '                                <span style="font-size: 18px; color: rgb(120, 120, 120);">你有着极</span><span style="font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">为</span>',
            '                                <span',
            '                                    style="font-size: 18px; color: rgb(120, 120, 120);">出众的</span>',
            '                                    <span style="font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">视</span>',
            '                                    <span style="font-size: 18px; color: rgb(120, 120, 120);">力和非常健康的心</span><span style="font-size: 18px; font-family: SimSun; color: rgb(120, 120, 120);">态</span>',
            '                                    <span',
            '                                        style="font-size: 18px; color: rgb(120, 120, 120);">！</span>',
            '                                        <span style="color: rgb(120, 120, 120); font-size: 18px; line-height: 25.6px;">做的太棒啦！！！</span>',
            '                    </p>',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; white-space: normal; line-height: 25.6px; font-variant-ligatures: normal; font-family: 微软雅黑;">',
            '                        <a href="http://lys2.xmgjkd.com/" style="margin-right: auto; margin-left: auto; padding: 10px; color: rgb(255, 255, 255); line-height: 25.6px; display: block; text-align: center; border-radius: 6px; background-color: rgb(66, 204, 73);"><span style="margin-right: auto; margin-left: auto; padding: 10px; display: block; border-radius: 6px; font-size: 20px;"><strong>开始测试</strong></span></a>',
            '                    </p>',
            '                    <p><br></p>',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 25.6px;"><br></p>',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 25.6px;"><br></p>',
            '                    <p style="margin-top: 0px; margin-bottom: 0px; line-height: 25.6px;"><span style="color: rgb(120, 120, 120); font-size: 18px; line-height: 25.6px;"></span><br></p>',
            '                </div>',
            '            </div>',
            '            <div class="bottom-ad">',
            '                <div class="operation">',
            '                    <a href="javascript:;" class="report">举报</a>',
            '                    <a href="javascript:;" class="edit">编辑广告</a>',
            '                </div>',
            '                <div class="bottom-box slider">',
            '                    <!--通栏广告-->',
            '                    <div class="ad-common" style="background:url(images/no.image.big.jpg) no-repeat center #fff;background-size: 100%;">',
            '                        <a href="javascript:;"></a>',
            '                    </div>',
            '                    <!--图文广告-->',
            '                    <div class="ad-articles">',
            '                        <a href="javascript:;">',
            '                            <div class="imgwrapper">',
            '                                <img src="images/no.image.s.jpg">',
            '                            </div>',
            '                            <div class="article-info">',
            '                                <span class="name">产品名称</span>',
            '                                <span class="description">产品描述</span>',
            '                            </div>',
            '                        </a>',
            '                    </div>',
            '                    <!--名片广告-->',
            '                    <div class="ad-cards">',
            '                        <div class="imgwrapper">',
            '                            <img src="images/no.image.s.jpg">',
            '                        </div>',
            '                        <div class="info">',
            '                            <span class="name">姓名</span>',
            '                            <span class="mobile">电话</span>',
            '                            <span class="address">地址</span>',
            '                        </div>',
            '                        <div class="onekey">',
            '                            <a href="tel:213412443">一键拨号</a>',
            '                        </div>',
            '                    </div>',
            '                    <!--二维码广告-->',
            '                    <div class="ad-qrcodes">',
            '                        <div class="imgwrapper">',
            '                            <img src="images/no.image.s.jpg">',
            '                        </div>',
            '                        <div class="info">',
            '                            <span class="name">名称</span>',
            '                            <span class="description">二维码介绍</span>',
            '                        </div>',
            '                        <div class="onekey">',
            '                            <a href="javascript:;">关注</a>',
            '                        </div>',
            '                    </div>',
            '                    <!--QQ广告-->',
            '                    <div class="ad-qqs">',
            '                        <div class="imgwrapper">',
            '                            <img src="images/no.image.s.jpg">',
            '                        </div>',
            '                        <div class="info">',
            '                            <span class="qqnumber">4525252542535</span>',
            '                            <span class="nickname">昵称</span>',
            '                            <span class="description">描述</span>',
            '                        </div>',
            '                        <div class="onekey">',
            '                            <a href="javascript:;">在线咨询</a>',
            '                        </div>',
            '                    </div>',
            '                </div>',
            '            </div>',
            '            <!--分享模块-->',
            '            <div class="share-panel">',
            '                <div class="container">',
            '                    <div class="wechat"><a href="javascript:;">微信好友</a></div>',
            '                    <div class="quan"><a href="javascript:;">微信朋友圈</a></div>',
            '                    <div class="qq"><a href="javascript:;">QQ</a></div>',
            '                    <div class="qzone"><a href="javascript:;">QQ空间</a></div>',
            '                    <div class="weibo"><a href="javascript:;">新浪微博</a></div>',
            '                    <div class="copy"><a href="javascript:;">复制链接</a></div>',
            '                </div>',
            '                <div class="cancle">取消</div>',
            '            </div>'].join("")
    };
});