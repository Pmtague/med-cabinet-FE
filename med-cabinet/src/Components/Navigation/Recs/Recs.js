import React from 'react';

const Recs = (props) => {

    return (
        <div>
            <h3>Recommendations *Testing*</h3>
            {props.userData.map(datas => (
                <div>{datas.username}</div>
            ))}
        </div>
    );
};

export default Recs;