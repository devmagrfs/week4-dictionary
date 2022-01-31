import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const initialState = {
    list: []
}

// Actions
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';


// Action Creators
export function loadWord(word_list) {
    return { type: LOAD, word_list };
}

export function createWord(newWord) {
    return { type: CREATE, newWord };
}


// middlewares
export function loadWordFB() {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "words"));
        let word_list = [];
        word_data.forEach((doc) => {
            word_list.push({ id: doc.id, ...doc.data() });
        })
        dispatch(loadWord(word_list));
    }
}

export function createWordFB(word) {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "words"), word);
        const word_data = { id: docRef.id, ...word };
        dispatch(createWord(word_data));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "words/LOAD":
            return { list: action.word_list };

        case "words/CREATE": {
            const new_word_list = [...state.list, action.newWord];
            return { list: new_word_list };
        }
        default: return state;
    }
}