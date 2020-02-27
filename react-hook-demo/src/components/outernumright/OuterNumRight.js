
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { numAdd, numDis } from '../../redux/action/num-action'


function Left(props) {
    useEffect(() => {
        console.log(props);
    });
    return (
        <div>
            <div></div>
            <div onClick={props.decrement}>-1</div>
        </div>
    )
}
//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        count: state.num.count
    }
};
//将action的所有方法绑定到props上，加上connect就能传递下去
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (diff) => {
            // 记得监测diff的类型和数值，不对就设置默认值
            // if (typeof ('diff') != Number) diff = 10;
            dispatch(numAdd(diff, ownProps));
        },
        decrement: (diff) => {
            // 记得监测diff的类型和数值，不对就设置默认值
            if (typeof ('diff') != Number) diff = 1;
            dispatch(numDis(diff, ownProps));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Left);