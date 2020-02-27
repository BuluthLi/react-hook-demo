import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
function InnerNum(props) {
    console.log('页内数据：', props.count);
    const [count, setCount] = useState(props.count);
    return (
        <div className="innernum">
            <div>页面内的{count}区别于全局状态的{props.count}</div>{count}
            <div onClick={() => setCount(count + 1)}>页内+1</div>
        </div>
    );
}

//将state.num.count绑定到props
const mapStateToProps = (state) => {
    return {
        count: state.num.count
    }
};

export default connect(mapStateToProps)(InnerNum);;