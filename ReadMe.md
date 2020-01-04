# Chatter 仕様書
## 機能
- 登録機能
- ログイン機能
- フレンド機能
- 個人チャット
- グループチャット
- mysqlサーバー 

## ページ
- ログイン画面
    - rogin.html

- ユーザーページ
    - トークルーム一覧
    - index.html

- トークルーム画面
    - talkroom.html 

- トークルーム作成画面
    - createtalkroom.html
    > TalkRoomID入力
    >
    > ID入力（プルダウン）
    > 
    > データベースに登録
    
- トークルームフレンド追加

- 登録画面

## memo
- フレンドになると自動的にトークルームを作成
- chatではどのルームで誰が何をいつ発言したかを記録
- サーバーに接続するまでの過去１００件のチャットを表示

## データベース
- UserData
    - UserID
    - password
    - UserName

- TalkRoomList
    - TalkRoomID
    - Name

- TalkRoomMemver
    - TalkRoomID
    - UserID






- Flowlist
    - UserID
    - FollowingID

- Chatdata
    - TalkroomID
    - UserID
    - ChatID
    - chat
    - time
