import { firestore } from "../../firebase";

const word_db = firestore.collection("word_list");

//Action
const LOAD = "dict/LOAD";
const ADD = "dict/ADD";

//IntialState
const initialState = {
  list: [
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
    {
      word: "ㅎ1ㅎ1",
      mean: '히히를 변형한 단어 숫자 1을 " | "로 쓴다',
      ex: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.",
    },
  ],
};

// Action Creators
export const loadWordList = (list) => {
  return { type: LOAD, list };
};

export const addWordList = (word) => {
  return { type: ADD, word };
};

//firebase랑 통신하는 함수
export const loadWordListFB = () => {
  return function (dispatch) {
    word_db.get().then((docs) => {
      let word_list_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          word_list_data = [...word_list_data, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(loadWordList(word_list_data));
    });
  };
};

export const addWordListFB = (word) => {
  return function (dispatch) {
    let word_data = word;

    word_db.add(word_data).then((docRef) => {
      word_data = { ...word_data, id: docRef.id };
      dispatch(addWordList(word_data));
    });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dict/LOAD": {
      if (action.list.length > 0) {
        return { list: action.list };
      }
      return state;
    }
    case "dict/ADD": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }

    default:
      return state;
  }
}
