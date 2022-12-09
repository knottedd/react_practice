import Button from "./Button";
import Input from "./Input";
import styles from "./App.module.css";
import React from "react";

function App() {
  const alertLogin = () => alert("로그인 되었습니다!");
  const logJoin = () => console.log("회원가입 창으로 이동합니다.");
  const [value, setValue] = React.useState("중복체크");
  const idCheck = () => setValue("성공:)");
  const checkJoin = () => prompt("인생이란 무엇일까?");
  const checkId = () => window.confirm("로그인 하시겠습니까?!!?!?");

  return (
    <div className={styles.main}>
      <div className={styles.modal2}>
        <div className={styles.title}>
          <h1>로그인</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.smalldiv}>
            <Input id={"logid"} text={"id"} ph={"아이디를 입력해주세요"} />
          </div>
          <div className={styles.smalldiv}>
            <Input id={"logpw"} text={"pw"} ph={"비밀번호를 입력해주세요"} />
          </div>
          <div className={styles.smalldiv}>
            <Button
              text={"로그인"}
              click={alertLogin}
              color={"tomato"}
              id={"btn1"}
            />
            <Button text={"회원가입"} click={logJoin} id={"btn2"} />
          </div>
        </div>
      </div>

      <div className={styles.modal}>
        <div className={styles.title}>
          <h1>회원가입</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.smalldiv}>
            <Input id={123} text={"id"} ph={"아이디를 입력해주세요"} />
            <Button text={value} click={idCheck} id={"btn3"} />
          </div>
          <div className={styles.smalldiv}>
            <Input id={456} text={"pw"} ph={"비밀번호를 입력해주세요"} />
          </div>
          <div className={styles.smalldiv}>
            <Input
              id={456}
              text={"pw체크"}
              ph={"비밀번호를 다시 입력해주세요"}
            />
          </div>
          <div className={styles.smalldiv}>
            <Input id={456} text={"email"} ph={"이메일을 입력해주세요"} />
            <span>@</span>
            <select>
              <option checked>devrock.co.kr</option>
              <option>naver.com</option>
              <option>gmail.com</option>
            </select>
          </div>
          <div className={styles.smalldiv}>
            <Button text={"로그인"} click={checkId} id={"btn4"} />
            <Button text={"회원가입"} click={checkJoin} id={"btn5"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
