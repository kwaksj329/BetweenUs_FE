import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";

const ItemView = () => {
  return (
    <div className="ItemView">
      <MetaTag />
      <header class="header">
        <div class="hd">
          <div class="hd-tit">
            <button
              type="button"
              class="hd-back"
              onclick="location.href='javascript:history.back(-1);'"
            ></button>
            모집글 상세정보
          </div>
        </div>
      </header>

      <section class="item-view">
        <div class="wrap">
          <div class="item-info">
            <div class="tit">BBQ 치킨 같이 시켜먹어요!!!</div>
            <div class="group">
              <div class="place">BBQ 치킨 아주대점</div>
              <div class="time">
                <img src="../img/ico_clock1.svg" alt=" " />
                마감 6:00pm
              </div>
            </div>
          </div>

          <div class="delivery-charge">예상배달비: 4000원 / 3명</div>

          <div class="delivery-location">
            상세 픽업 장소: <strong>서울 강남구 테헤란로 311</strong>
          </div>

          <div class="btn-group-util">
            <button type="button" class="btn btn-custom btn-custom-v2">
              주소복사
            </button>
            <button type="button" class="btn btn-custom btn-custom-v2">
              지도보기
            </button>
          </div>

          <div class="add-info">
            <div class="tit">추가정보</div>
            <div class="txt">
              BBQ 치킨 먹고 싶은데 배달비 부담스러우신 분들 같이 시켜먹어요!{" "}
              <br />
              <br />
              너무 멀지 않으면 제가 운동할겸 자전거로 한분씩 가져다 드릴게요
              ㅎㅎ <br />
              <br />
              관심 있으신 분들 참여해주세요!!
            </div>
          </div>

          <div class="btn-group-bottom">
            <button type="button" class="btn-custom">
              주문하러 가기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemView;
