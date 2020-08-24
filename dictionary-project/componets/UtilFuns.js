<<<<<<< HEAD
import React from "react";
import SearchContent from "./SearchContent";
import axios from "axios";

//fetching data from api
export const FetchWords = async (val) => {
  const data = await axios({
    method: "get",
    url: `https://owlbot.info/api/v4/dictionary/${val}`,
    headers: {
      Authorization: "Token " + "your token",
    },
  });
  const res = await data;
  return res.data;
};

//setting timer and changing state
export const TimerFun = (thiss, searchInputBoxValue) => {
  thiss.timeoutid = setTimeout(async () => {
    const res = await FetchWords(searchInputBoxValue);
    console.log(res);

    thiss.setState(() => {
      if (searchInputBoxValue != "") {
        return {
          content: (
            <SearchContent
              word={res.word}
              pronunciation={res.pronunciation}
              definitions={res.definitions}
            />
          ),
        };
      } else {
        return {
          onInput: false,
          isLoading: false,
          content: "",
        };
      }
    });
  }, 600);
};
=======
import React from "react";
import SearchContent from "./SearchContent";
import axios from "axios";

//fetching data from api
export const FetchWords = async (val) => {
  const data = await axios({
    method: "get",
    url: `https://owlbot.info/api/v4/dictionary/${val}`,
    headers: {
      Authorization: "Token " + "your token",
    },
  });
  const res = await data;
  return res.data;
};

//setting timer and changing state
export const TimerFun = (thiss, searchInputBoxValue) => {
  thiss.timeoutid = setTimeout(async () => {
    const res = await FetchWords(searchInputBoxValue);
    console.log(res);

    thiss.setState(() => {
      if (searchInputBoxValue != "") {
        return {
          content: (
            <SearchContent
              word={res.word}
              pronunciation={res.pronunciation}
              definitions={res.definitions}
            />
          ),
        };
      } else {
        return {
          onInput: false,
          isLoading: false,
          content: "",
        };
      }
    });
  }, 600);
};
>>>>>>> c74eb05692d2255ff8abe737d2fce3d1bf8e2f5b
