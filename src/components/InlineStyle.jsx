export const InlineStyle = () => {
  const containerStyle = {
    // プロパティ名:値は""で文字列にする
    // プロパティはキャメルケースで記述
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const titleStyle = {
    margin: "0",
    color: "#3d84a8"
  };

  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline-style -</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
  );
};
