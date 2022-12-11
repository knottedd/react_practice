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
            <Input id={"logid"} text={"ID"} ph={"아이디를 입력해주세요"} />
          </div>
          <div className={styles.smalldiv}>
            <Input id={"logpw"} text={"PW"} ph={"비밀번호를 입력해주세요"} />
          </div>
          <div className={styles.smalldiv}>
            <Button
              text={"로그인"}
              click={alertLogin}
              bcolor={"#E46C0A"}
              id={"btn1"}
            />
            <Button text={"회원가입"} click={logJoin} id={"btn2"} bcolor={"#92D050"} />
          </div>
        </div>
      </div>

      <div className={styles.modal}>
        <div className={styles.title}>
          <h1>회원가입</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.smalldiv}>
            <Input id={"joinid"} text={"ID"} ph={"아이디를 입력해주세요"} width={230}/>
            <Button text={value} click={idCheck} id={"btn3"} bcolor={"#FF0000"} width={"100px;"} height={"40px;"}/>
          </div>
          <div className={styles.smalldiv}>
            <Input id={"joinpw"} text={"PW"} ph={"비밀번호를 입력해주세요"} width={337}/>
          </div>
          <div className={styles.smalldiv}>
            <Input
              id={"joinpwck"}
              text={"PW체크"}
              ph={"비밀번호를 다시 입력해주세요"}
              width={337}
            />
          </div>
          <div className={styles.smalldiv}>
            <Input id={"joinem"} text={"Email"} ph={"이메일을 입력해주세요"} width={130}/>
            <span>@</span>
            <select>
              <option checked>devrock.co.kr</option>
              <option>naver.com</option>
              <option>gmail.com</option>
            </select>
          </div>
          <div className={styles.smalldiv}>
            <Button text={"로그인"} click={checkId} id={"btn4"} bcolor={"#4F81BD"} />
            <Button text={"회원가입"} click={checkJoin} id={"btn5"} bcolor={"#C4BD97"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
