import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
// 아래에 전역 스타일을 추가

@font-face {
    font-family: 'NEXONLv1Gothic';
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff') format('woff');
    font-style: normal;
}
@font-face {
    font-family: 'NEXONLv1Gothic';
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-style: normal;
}

/* 가운데 영역 */
.container {position: relative; width: 1280px; margin: 0 auto; background: rgb(0, 0, 0, 0);}

/* 로우 영역 */
.row {padding: 0 28px;}

/* 여백 초기화 */
body, div, ul, li, dl, dd, dt, ol, h1, h2, h3, h4, h5, h6, input, fieldset, legend, p, select, table, th, td, tr, textarea, button, form, figure, figcaption {margin:0; padding:0;}

/* a 링크 초기화 */
a {color: #fff; text-decoration: none;}
a:hover {color: #390;}

/* 폰트 초기화 */
body, input, textarea, select, button, table{  font-family:'NEXON Lv1 Gothic OTF', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; 
    color: #fff; font-size: 13px; line-height: 1.5;}

/* 폰트 스타일 초기화 */
em, address {font-style: normal;}

/* 블릿기호 초기화 */
dl,ul,li,ol,menu {list-style: none;}

/* 제목 태그 초기화 */
h1,h2,h3,h4,h5,h6{font-size: 13px; color: #fff; font-weight: normal;}

/* 테두리 초기화 */
img, fieldset {border: 0 none;}

/* 버튼 초기화 */
button {border: 0;}

/* 반응형 이미지 */
img, video {width: 100%;}

/* clearfix */
.clearfix{*zoom:1;}
.clearfix:before, .clearfix:after {display: block; content: ''; line-height: 0;}
.clearfix:after {clear: both;}

/* IR 효과 */
/* 의미있는 이미지의 대체 텍스트를 제공하는 경우 */
.ir_pm {display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;}
/* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 태체 텍스트를 보여주고자 할 때 */
.ir_wa {display: block; overflow: hidden; position: relative; z-index: -1; width: 100%; height: 100%;}
/* 대체 텍스트가 아니 접근성을 위한 숨김 텍스트를 제공할 때 */
.ir_so {overflow: hidden; position: absolute; width: 0; height: 0; line-height: 0; text-indent: -9999px;}

/* margin, padding */
.mt10 {margin-top: 10px !important;}
.mt15 {margin-top: 15px !important;}
.mt20 {margin-top: 20px !important;}
.mt25 {margin-top: 25px !important;}
.mt30 {margin-top: 30px !important;}
.mt35 {margin-top: 35px !important;}
.mt40 {margin-top: 40px !important;}
.mt45 {margin-top: 45px !important;}
.mt50 {margin-top: 50px !important;}
`;

export default GlobalStyles;