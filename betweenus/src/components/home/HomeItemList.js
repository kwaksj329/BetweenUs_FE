import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import { GetOrderOfLargePeopleApi } from "../../modules/api/home/GetOrderOfLargePeopleApi";

export default function HomeItemList() {
  const [list, setData] = useState({});
  const { option } = useStoreDropdownMenu();
  let data = {};
  // console.log(option);

  const getList = async () => {
    // console.log(option);
    if (option === "최신순") {
      // console.log(option);
      data = await GetJoinableGroupBuyingApi();
      // console.log(data);
    } else if (option === "모집인원 많은 순") {
      // console.log(option);
      data = await GetOrderOfLargePeopleApi();
      // console.log(data);
    }
    setData(data);
  };

  useEffect(() => {
    getList();
  }, [list, option]);

  return (
    <>
      <ol className="list-item">
        {list.resultCount > 0 ? (
          list.groupBuyingPostList.map((item, idx) => (
            <HomeItem
              key={idx}
              index={item.postIdx}
              title={item.title}
              place={item.storeName}
              time={item.timeToOrder}
              price={item.expectedDeliveryFee}
              participant={item.currentParticipant}
              distance={item.timeToOrder}
            />
          ))
        ) : (
          <NoRoomNotice />
        )}
      </ol>
    </>
  );
}
