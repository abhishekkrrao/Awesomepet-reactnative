import React,{ Component,useReducer,useEffect } from 'react';
import { View,TouchableOpacity } from 'react-native'


// const Test = () => {
//     const [count1,dispatch1] = useReducer(reducer,initialState);
//     const [count2,dispatch2] = useReducer(reducer,initialState);
//     return (
//         <>
//             <View>
//                 {count1}
//                 <TouchableOpacity
//                  onClick={() => dispatch1({ type: 'increment' })}>+1</TouchableOpacity>
//                 <TouchableOpacity onClick={() => dispatch1({ type: 'decrement' })}>-1</TouchableOpacity>
//                 <TouchableOpacity onClick={() => dispatch1({ type: 'set',count: 0 })}>reset</TouchableOpacity>
//             </View>
//             <View>
//                 {count2}
//                 <TouchableOpacity onClick={() => dispatch2({ type: 'increment' })}>+1</TouchableOpacity>
//                 <TouchableOpacity onClick={() => dispatch2({ type: 'decrement' })}>-1</TouchableOpacity>
//                 <TouchableOpacity onClick={() => dispatch2({ type: 'set',count: 0 })}>reset</TouchableOpacity>
//             </View>
//         </>
//     );
// };

class Test extends React.Component {

    componentDidMount() {
        useEffect(() => {

        },[this.setreducer()])
    }

    setreducer() {

    }

     initialState = 0;
     reducer = (state,action) => {
        switch (action.type) {
            case 'increment': return state + 1;
            case 'decrement': return state - 1;
            case 'set': return action.count;
            default: throw new Error('Unexpected action');
        }
    };

    render() {

        return (
            <>
                <View>
                    {count1}
                    <TouchableOpacity
                        onClick={() => dispatch1({ type: 'increment' })}>+1</TouchableOpacity>
                    <TouchableOpacity onClick={() => dispatch1({ type: 'decrement' })}>-1</TouchableOpacity>
                    <TouchableOpacity onClick={() => dispatch1({ type: 'set',count: 0 })}>reset</TouchableOpacity>
                </View>
                <View>
                    {count2}
                    <TouchableOpacity onClick={() => dispatch2({ type: 'increment' })}>+1</TouchableOpacity>
                    <TouchableOpacity onClick={() => dispatch2({ type: 'decrement' })}>-1</TouchableOpacity>
                    <TouchableOpacity onClick={() => dispatch2({ type: 'set',count: 0 })}>reset</TouchableOpacity>
                </View>
            </>
        );
    }
}
export default Test;