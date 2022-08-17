import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { GetSendEmailTokenApi } from "../../modules/api/member/GetSendEmailTokenApi";
import { GetSelectMemberApi } from "../../modules/api/member/GetSelectMemberApi";
import Parser from "html-react-parser";

const FindPw = () => {
  const navigate = useNavigate();
  const [guideMS, setGuideMs] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    email: "",
    phoneNumber: "",
    authToken: 0,
  });

  const { name, birth, email, phoneNumber, authToken } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async () => {
    // console.log(inputs);
    const data = await GetSelectMemberApi(
      inputs.name,
      inputs.birth,
      inputs.email,
      inputs.phoneNumber,
      inputs.authToken
    );
    if (data) {
      navigate("pwresult", { state: inputs });
    } else {
      setGuideMs(
        "&nbsp;입력하신 정보와 일치하는 유저가 없습니다.<br/>&nbsp;입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  const onClickEmail = () => {
    GetSendEmailTokenApi(inputs.email);
  };

  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            비밀번호 찾기
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="frm">
            <div className="frm-group">
              <div className="tit-frm">이름</div>
              <input
                type="text"
                name="name"
                className="inp-frm"
                onChange={onChangeInput}
                value={name}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">생년월일</div>
              <input
                type="text"
                placeholder="8자리 숫자 입력"
                name="birth"
                className="inp-frm"
                onChange={onChangeInput}
                value={birth}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">이메일</div>
              <div className="inp-group">
                <input
                  type="text"
                  name="email"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={email}
                />
                <button
                  type="button"
                  className="btn-frm"
                  onClick={onClickEmail}
                >
                  인증요청
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">이메일 인증번호</div>
              <input
                type="number"
                name="authToken"
                className="inp-frm"
                onChange={onChangeInput}
                value={authToken > 0 ? authToken : ""}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <input
                type="text"
                placeholder="‘-’ 없이 입력"
                className="inp-frm"
                name="phoneNumber"
                onChange={onChangeInput}
                value={phoneNumber}
              />
            </div>
            <div className="frm-message">{Parser(guideMS)}</div>
          </div>

          <div className="btn-group-bottom" onClick={onClickButton}>
            <button type="button" className="btn-custom">
              확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindPw;
