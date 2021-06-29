import { firestore } from "../../firebase";

const word_db = firestore.collection("word_list");

//Action
const LOAD = "dict/LOAD";
const LOADMORE = "dict/LOADMORE";
const ADD = "dict/ADD";
const UPDATE = "dict/UPDATE";
const DELETE = "dict/DELETE";

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

export const loadMore = (list) => {
  return { type: LOADMORE, list };
};

export const addWordList = (word) => {
  return { type: ADD, word };
};

export const updateWordList = (index, word) => {
  return { type: UPDATE, index, word };
};

export const deleteWordList = (index) => {
  return { type: DELETE, index };
};

//firebase랑 통신하는 함수

export const loadWordListFB = () => {
  return function (dispatch) {
    word_db
      .orderBy("word")
      .limit(6)
      .get()
      .then((docs) => {
        let word_list_data = [];
        docs.forEach((doc) => {
          if (doc.exists) {
            word_list_data = [...word_list_data, { id: doc.id, ...doc.data() }];
            console.log(word_list_data);
          }
        });
        dispatch(loadWordList(word_list_data));
      });
  };
};

export const loadMoreFB = (last) => {
  return function (dispatch, getState) {
    console.log(last);
    word_db
      .orderBy("word", "asc")
      .startAfter(last)
      .limit(6)
      .get()
      .then((docs) => {
        let word_list_data = getState().dictionary.list;
        console.log(docs);
        docs.forEach((doc) => {
          if (doc.exists) {
            word_list_data = [...word_list_data, { id: doc.id, ...doc.data() }];
          }
        });
        dispatch(loadMore(word_list_data));
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

export const updateWordListFB = (index, wordSet) => {
  return function (dispatch, getState) {
    const old_data = getState().dictionary.list[index];

    let new_data = {
      ...old_data,
      word: wordSet.word,
      mean: wordSet.mean,
      ex: wordSet.ex,
    };

    if (!new_data.id) {
      return;
    }
    word_db
      .doc(new_data.id)
      .update(new_data)
      .then((docRef) => {
        dispatch(updateWordList(index, wordSet));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteWordListFB = (index) => {
  return function (dispatch, getState) {
    const old_data = getState().dictionary.list[index];

    if (!old_data.id) {
      return;
    }

    word_db
      .doc(old_data.id)
      .delete()
      .then((docRef) => {
        dispatch(deleteWordList(index));
      })
      .catch((error) => {
        console.log(error);
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

    case "dict/LOADMORE": {
      if (action.list.length > 0) {
        return { list: action.list };
      }
      return state;
    }

    case "dict/ADD": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }

    case "dict/UPDATE": {
      const new_word_list = state.list.map((l, idx) => {
        if (idx === action.index) {
          return {
            ...l,
            word: action.word.word,
            mean: action.word.mean,
            ex: action.word.ex,
          };
        } else {
          return l;
        }
      });
      return { list: new_word_list };
    }

    case "dict/DELETE": {
      const new_word_list = state.list.filter((l, idx) => idx !== action.index);
      return { list: new_word_list };
    }

    default:
      return state;
  }
}
