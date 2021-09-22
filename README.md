# react-practice2

# CSS の当てかたについて

\*InlineStyle.jsx を参照

①div 等に直接スタイルを記述
②node-sass ライブラリを使用して、CSS モジュールを作成 ③styled-jsx ライブラリを使用
④styled-components ライブラリを使用
⑤Emotion を使用

## ②node-sass ライブラリを使用して CSS モジュールを作成

\*CssModules.jsx を参照

// css モジュールの使い方
// ファイル名
// ◯◯.module.scss を作成し、記述
// コンポーネントでモジュールファイルをインポートし変数へ割り当てる (classes)
// className で変数名.クラス名でモジュールの css を適用できる

## ③styled-jsx ライブラリを使用

\*StyledJsx.jsx を参照
// コンポーネントの中で style タグを書き css を記述
// 各クラス名を当てて css を適用
// 基本的に擬似要素は使えない

## ④styled-components ライブラリを使用

\*StyledComponents.jsx を参照

## ⑤Emotion ライブラリを使用

\*Emotion.jsx.jsx を参照

// @emotion/ract ライブラリをインポート
// @emotion/styled ライブラリをインポート
(packege.json 参考)
