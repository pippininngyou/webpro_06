const express = require("express");
const app = express();

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

// POSTリクエストのデータ（フォームの内容）を受け取るための設定
app.use(express.urlencoded({ extended: true }));

// 静的ファイル（HTMLや画像など）を置くフォルダの設定
app.use("/public", express.static(__dirname + "/public"));

let nintendou = [
  { id:1,kind:"ゲーム機", name:"カラーテレビゲーム6", day:"1977年6月1日", price:"9,800円", people:"２人"},
  { id:2,kind:"ゲーム機", name:"カラーテレビゲーム15", day:"1977年6月8日", price:"15,000円", people:"２人"},
  { id:3,kind:"ゲーム機", name:"レーシング112", day:"1978年6月8日", price:"18,000円", people:"1人"},
  { id:4,kind:"ゲーム機", name:"ブロック崩し", day:"1979年4月23日", price:"13,500円", people:"1人"},
  { id:5,kind:"ゲーム機", name:"コンピュータTVゲーム", day:"1980年", price:"48,000円", people:"2人"},
  { id:6,kind:"ゲーム機", name:"ゲーム＆ウオッチ", day:"1980年4月28日", price:"5,800円", people:"1人"},
  { id:7,kind:"ゲーム機", name:"ファミリーコンピュータ", day:"1983年7月15日", price:"14,800円", people:"2人"},
  { id:8,kind:"ゲーム機", name:"Nintendo Entertainment System", day:"1985年10月18日", price:"199ドル（約5.8万円相当，当時）", people:"2人"},
  { id:9,kind:"周辺機器", name:"ファミリーコンピュータ ディスクシステム", day:"1986年2月21日", price:"15,000円", people:""},
  { id:10,kind:"ゲーム機", name:"ゲームボーイ", day:"1989年4月21日", price:"12,500円", people:"1人"},
  { id:11,kind:"ゲーム機", name:"スーパーファミコン", day:"1990年11月21日", price:"25,000円", people:"2人"},
  { id:12,kind:"周辺機器", name:"スーパーゲームボーイ", day:"1994年6月14日", price:"6,800円", people:""},
  { id:13,kind:"ゲーム機", name:"バーチャルボーイ", day:"1995年7月21日", price:"15,000円", people:"1人"},
  { id:14,kind:"周辺機器", name:"サテラビュー", day:"1995年11月1日", price:"18,000円", people:""},
  { id:15,kind:"ゲーム機", name:"NINTENDOU64", day:"1996年6月23日", price:"25,000円", people:"4人"},
  { id:16,kind:"ゲーム機", name:"ゲームボーイポケット", day:"1996年7月21日", price:"6,800円", people:"1人"},
  { id:17,kind:"周辺機器", name:"NINTENDOU64 振動パック", day:"1997年4月27日", price:"1,400円", people:""},
  { id:18,kind:"周辺機器", name:"スーパーゲームボーイ 2", day:"1998年1月30日", price:"5,800円", people:""},
  { id:19,kind:"周辺機器", name:"ポケットカメラ", day:"1998年2月21日", price:"5,500円", people:""},
  { id:20,kind:"ゲーム機", name:"ゲームボーイライト", day:"1998年4月14日", price:"6,800円", people:"1人"},
  { id:21,kind:"周辺機器", name:"NINTENDO64 64GBパック", day:"1998年8月1日", price:"1,400円", people:""},
  { id:22,kind:"ゲーム機", name:"ゲームボーイカラー", day:"1998年10月21日", price:"8,900円", people:"1人"},
  { id:23,kind:"ゲーム機", name:"ポケットピカチュウ", day:"1998年3月27日", price:"2,500円", people:"1人"},
  { id:24,kind:"ゲーム機", name:"ポケットハローキティ", day:"1998年8月21日", price:"2,500円", people:"1人"},
  { id:25,kind:"ゲーム機", name:"ポケットピカチュウカラー", day:"1999年11月21日", price:"3,000円", people:"1人"},
  { id:26,kind:"周辺機器", name:"64DD", day:"1999年12月11日", price:"30,000円", people:""},
  { id:27,kind:"ゲーム機", name:"ニンテンドーゲームキューブ", day:"2001年9月14日", price:"25,000円", people:"4人"},
  { id:28,kind:"ゲーム機", name:"ゲームボーイアドバンス", day:"2001年3月21日", price:"9,800円", people:"1人"},
  { id:29,kind:"ゲーム機", name:"ポケモンミニ", day:"2001年12月14日", price:"4,800円", people:"1人"},
  { id:30,kind:"周辺機器", name:"ウェーブバード", day:"2002年12月5日", price:"4,500円", people:""},
  { id:31,kind:"ゲーム機", name:"ゲームボーイアドバンスSP", day:"2003年2月14日", price:"12,500円", people:"1人"},
  { id:32,kind:"周辺機器", name:"ニンテンドーゲームキューブ ゲームボーイプレイヤー", day:"2003年3月21日", price:"5,000円", people:""},
  { id:33,kind:"周辺機器", name:"タルコンガ", day:"2003年12月12日", price:"3,000円", people:""},
  { id:34,kind:"ゲーム機", name:"ニンテンドーDS", day:"2004年12月2日", price:"15,000円", people:"1人"},
  { id:35,kind:"ゲーム機", name:"ゲームボーイミクロ", day:"2005年9月13日", price:"11,429円", people:"1人"},
  { id:36,kind:"ゲーム機", name:"ニンテンドーDS Lite", day:"2006年3月2日", price:"16,800円", people:"1人"},
  { id:37,kind:"ゲーム機", name:"Wii", day:"2006年11月19日", price:"25,000円", people:"4人"},
  { id:38,kind:"周辺機器", name:"ヌンチャク", day:"2006年12月2日", price:"1,714円", people:""},
  { id:39,kind:"周辺機器", name:"クラシックコントローラー", day:"2006年12月2日", price:"1,714円", people:""},
  { id:40,kind:"周辺機器", name:"Wiiザッパー", day:"2007年10月25日", price:"1,429円", people:""},
  { id:41,kind:"周辺機器", name:"Wiiハンドル", day:"2008年4月10日", price:"1,143円", people:""},
  { id:42,kind:"周辺機器", name:"ニンテンドーニンテンドーゲームキューブコントローラー", day:"2008年4月", price:"1,905円", people:""},
  { id:43,kind:"ゲーム機", name:"ニンテンドーDSi", day:"2008年11月1日", price:"18,900円", people:"1人"},
  { id:44,kind:"周辺機器", name:"Wiiスピーク", day:"2008年12月4日", price:"3,333円", people:""},
  { id:45,kind:"周辺機器", name:"Wiiモーションプラス", day:"2009年6月25日", price:"1,429円", people:""},
  { id:46,kind:"周辺機器", name:"クラシックコントローラー PRO", day:"2009年8月1日", price:"1,429円", people:""},
  { id:47,kind:"ゲーム機", name:"ニンテンドーDSi LL", day:"2009年11月21日", price:"18,000円", people:"1人"},
  { id:48,kind:"ゲーム機", name:"ニンテンドー3DS", day:"2011年2月26日", price:"25,000円", people:"1人"},
  { id:49,kind:"ゲーム機", name:"Wii U", day:"2012年11月18日", price:"26,250円", people:"4人"},
  { id:50,kind:"ゲーム機", name:"ニンテンドー3DS LL", day:"2014年10月11日", price:"18,800円", people:"1人"},
  { id:51,kind:"ゲーム機", name:"Newニンテンドー3DS", day:"2014年10月11日", price:"16,000円", people:"1人"},
  { id:52,kind:"ゲーム機", name:"Newニンテンドー3DS LL", day:"2014年10月11日", price:"18,800円", people:"1人"},
  { id:53,kind:"ゲーム機", name:"ニンテンドー2DS", day:"2016年2月27日", price:"9,800円", people:"1人"},
  { id:54,kind:"ゲーム機", name:"Nintendo Switch", day:"2017年3月3日", price:"29,980円", people:"8人"},
  { id:55,kind:"周辺機器", name:"Nintendo Switch Proコントローラー", day:"2017年3月3日", price:"7,678円", people:""},
  { id:56,kind:"ゲーム機", name:"Newニンテンドー2DS LL", day:"2018年3月", price:"14,980円", people:"1人"},
  { id:57,kind:"周辺機器", name:"ニンテンドーUSBマイク", day:"2018年12月", price:"3,278円", people:""},
  { id:58,kind:"周辺機器", name:"ニンテンドーUSBワイヤレスマイク", day:"2017年7月13日", price:"5,478円", people:""},
  { id:59,kind:"周辺機器", name:"ニンテンドー ゲームキューブ コントローラ", day:"2018年11月16日", price:"2,200円", people:""},
  { id:60,kind:"周辺機器", name:"ニンテンドー ゲームキューブ コントローラ 接続タップ", day:"2018年11月16日", price:"2,750円", people:""},
  { id:61,kind:"ゲーム機", name:"Nintendo Switch Lite", day:"2019年9月20日", price:"21,978円", people:"2人"},
  { id:62,kind:"周辺機器", name:"ファミリーコンピュータ コントローラー", day:"2024年7月18日", price:"6,578円", people:""},
  { id:63,kind:"ゲーム機", name:"Nintendo Switch 2", day:"2025年6月5日", price:"49,980円", people:"8人"},
  { id:64,kind:"周辺機器", name:"Nintendo Switch 2 Proコントローラー", day:"2025年6月5日", price:"9,980円", people:""},
];

// 一覧表示
app.get("/nin", (req, res) => {
  res.render('nin', { data: nintendou });
});

// 新規作成画面（public/nin.htmlを表示）
app.get("/nin/create", (req, res) => {
  res.sendFile(__dirname + '/public/nin.html');
});

// 詳細表示
app.get("/nin/:number", (req, res) => {
  const number = req.params.number;
  const detail = nintendou[number];
  if (detail) {
    res.render('nin_detail', { data: detail, id: number });
  } else {
    res.status(404).send("ハードウェアが見つかりません");
  }
});

// 削除（今回はstation2の記述をnintendouに修正）
app.get("/nin/delete/:number", (req, res) => {
  tour.splice(req.params.number, 1);
  res.redirect('/nin');
});

// 新規登録処理（POST）
app.post("/nin", (req, res) => {
  const newId = nintendou.length > 0 ? nintendou[nintendou.length - 1].id + 1 : 1;
  const newNintendou = {
    id: newId,
    kind: req.body.kind,
    name: req.body.name,
    day: req.body.day, // HTML側のname="album"に合わせる
    price: req.body.price,   // HTML側のname="days"に合わせる
    people: req.body.people // HTML側のname="region"に合わせる
  };
  nintendou.push(newNintendou);
  res.redirect('/nin');
});

// 編集画面
app.get("/nin/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = nintendou[number];
  res.render('nin_edit', { id: number, data: detail });
});

// 更新処理（POST）
app.post("/nin/update/:number", (req, res) => {
  const index = req.params.number;
  if (nintendou[index]) {
    nintendou[index].id = req.body.id;
    nintendou[index].kind = req.body.kind;
    nintendou[index].name = req.body.name;
    nintendou[index].day = req.body.day;
    nintendou[index].price = req.body.price;
    nintendou[index].people = req.body.people;
  }
  res.redirect('/nin');
});

app.get("/nin_add", (req, res) => {
  let id = req.query.id;
  let name = req.query.name;
  let newdata = { id: id, name: name };
  station.push( newdata );
  res.redirect('/public/nin_add.html');
});

// ポート8080で待機（エラーが出るなら3000などに変更）
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/nin");
});