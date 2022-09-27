import * as React from "react";
import MenuOptionGroup from "./MenuOptionGroup";
import { useState, useEffect } from "react";

export default function MenuOption({ menuData, open, onPopupBackBtnClick }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (menuData.name) {
      menuData.subchoices.forEach((subChoiceGroup) => {
        setSelectedOptions((prevState) => {
          return { ...prevState, [subChoiceGroup.name]: [] };
        });
      });
    } else {
      setSelectedOptions({});
    }
  }, [menuData]);

  const onAddOrder = () => {
    let temp = [];
    for (const key in selectedOptions) {
      temp = [...temp, ...selectedOptions[key]];
    }
  };

  const onPlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const onMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {Object.keys(menuData).length !== 0 ? (
        <div className={`dim-layer js-modal` + (open ? ` dim-layer-on` : "")}>
          <div className="menu-popup">
            <div className="header">
              <div className="hd">
                <div className="hd-tit">
                  <button
                    type="button"
                    className="hd-back"
                    onClick={onPopupBackBtnClick}
                  ></button>
                  {menuData.name}
                </div>
              </div>
            </div>
            <section className="menu-option">
              <div className="wrap">
                <div className="menu-img">
                  <img src={menuData.image} className="thumb" alt="썸네일" />
                </div>
                <div className="menu-detail">
                  <strong className="menu-title">{menuData.name}</strong>
                  <div className="menu-desc">{menuData.description}</div>
                </div>
                <div className="menu-price">
                  <strong>가격</strong>
                  <div>{Number(menuData.price).toLocaleString()}원</div>
                </div>
                {menuData.subchoices.map((subChoiceGroup, idx) => (
                  <MenuOptionGroup
                    key={idx}
                    subChoiceGroup={subChoiceGroup}
                    setSelectedOptions={setSelectedOptions}
                  />
                ))}
                <div className="amount-select">
                  <strong>수량</strong>
                  <div className="order-count">
                    <button
                      type="button"
                      className="btn-minus"
                      onClick={onMinusQuantity}
                    ></button>
                    <div className="num">{quantity}개</div>
                    <button
                      type="button"
                      className="btn-plus"
                      onClick={onPlusQuantity}
                    ></button>
                  </div>
                </div>
              </div>
              <div className="detail-total-price">
                <strong>총 주문금액</strong>
                <div>29,900원</div>
              </div>
              <div className="btn-group-bottom">
                <button className="btn-custom" onClick={onAddOrder}>
                  장바구니에 추가
                </button>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}