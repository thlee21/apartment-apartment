import { useState } from 'react';

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>홈</button>
        <button onClick={() => setPage("register")}>매물 등록</button>
        <button onClick={() => setPage("list")}>매물 리스트</button>
        <button onClick={() => setPage("board")}>게시판</button>
        <button onClick={() => setPage("lawyer")}>법무사 선택</button>
      </div>

      {page === "home" && <div><h2>아파트아파트</h2><p>실명 기반 200세대 이상 아파트 직거래 플랫폼</p></div>}
      {page === "register" && <div><h3>매물 등록</h3><input placeholder="주소" /><br /><input placeholder="평수" /></div>}
      {page === "list" && <div><h3>매물 리스트</h3><ul><li>강남구 도곡동 - 전세 5억</li></ul></div>}
      {page === "board" && <div><h3>게시판</h3><p>서울 84㎡ 전세 6억 이하 - 홍길동</p></div>}
      {page === "lawyer" && <div><h3>법무사 선택</h3><ul><li>이성재 (도곡역)</li></ul></div>}
    </div>
  );
}

export default App;
