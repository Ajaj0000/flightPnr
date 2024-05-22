import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        child: 0,
        adults: 1,
        chilgAge: [],
        infant: 0,
        classs: "Economy",
        departureDate: '',
        arrivalDate: '',
    }
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value.adults > 6) {
                alert("reach maximum member")
            } else {
                state.value.adults += 1
            }
        },
        decrement: (state) => {
            if (state.value.adults < 1) {
                alert("atleast one")
            } else {
                state.value.adults -= 1
            }
        },
        addChild: (state) => {
            if (state.value.child > 2) {
                alert("Reach maximum")
            } else {
                state.value.child += 1
            }
        },
        subChild: (state) => {
            if (state.value.child < 1) {
                state.value.child = 0
            } else {
                state.value.child -= 1
                state.value.chilgAge.pop()
            }
        },
        ageChild: (state, actions) => {
            const index = actions.payload.index
            const data = actions.payload.data
            state.value.chilgAge[index] = data
        },
        addInfant: (state) => {
            if (state.value.infant > 3) {
                alert("maximun")
            } else {
                state.value.infant += 1
            }
        },
        subInfant: (state) => {
            if (state.value.infant < 1) {
                state.value.infant = 0
            } else {
                state.value.infant -= 1
            }
        },
        selectClass: (state, actions) => {
            state.value.classs = actions.payload
        },
        setDeparture: (state, actions) => {
           state.value.departureDate = actions.payload
        },
        setArrinal: (state, actions) => {
            state.value.arrivalDate = actions.payload
        }
    }
})

export const { increment,
    decrement,
    addChild,
    subChild,
    addInfant,
    subInfant,
    ageChild,
    selectClass,
    setArrinal,
    setDeparture
} = counterSlice.actions
export default counterSlice.reducer