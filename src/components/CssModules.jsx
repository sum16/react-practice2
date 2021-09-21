import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Css Modules</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};

//cssモジュールの使い方
// ファイル名
// ◯◯.module.scssを作成し、記述
// コンポーネントでモジュールファイルをインポートし変数へ割り当てる (classes)
// classNameで変数名.クラス名でモジュールのcssを適用できる
