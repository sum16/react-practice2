// ライブラリstyled-componentsをインポート
// importの変数名はなんでも良い
import componentStyled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <div>
        <STitle>
          <p>- Styled Components -</p>
        </STitle>

        <SButton>
          <button>FiGHT!</button>
        </SButton>
      </div>
    </SContainer>
  );
};

//バッククォートで囲う
const SContainer = componentStyled.div`
border: solid 2px #392eff;
border-radius: 20px;
padding: 8px;
margin: 8px;
display: flex;
justify-content: space-around;
align-items: center;
`;

const STitle = componentStyled.p`
margin: 0;
color: #3d84a8;
`;

const SButton = componentStyled.button`
background-color: #abedd8;
border: none;
padding: 8px;
border-radius: 8px;
&:hover {
  background-color: #46cdcf;
  color: #fff;
  cursor: pointer;
`;
