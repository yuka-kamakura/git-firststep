async function getRequest() {
  let response;
  try {
    response = await axios.get('https://transit.yahoo.co.jp/traininfo/detail/21/0/');
    let html = response.data;
    html = html.replace(/\r?\n/g,""); //整形1: 改行などを削除して整形しやすくする
    let unko = html.match(/id="mdServiceStatus">(.*?)<\/div>/)[1];
    console.log(unko);

    await updateData({msg: unko}); //データ更新関数を実行
  } catch (error) {
    console.error(error);
  }
}