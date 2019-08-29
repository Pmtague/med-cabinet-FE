import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';
import './MandatoryForm.css';

// import Context API 
// import { useContext } from 'react';
// import { LoginContext } from '../contexts/LoginContext.js';

const MandatoryForm = () => {
    // const { condition, setCondition } = useContext(RegisterContext);
    // const { feel, setFeel } = useContext(RegisterContext);
    // const { used, setUsed } = useContext(RegisterContext);
    // const { intake, setIntake } = useContext(RegisterContext);
    // const { times, setTimes } = useContext(RegisterContext);

    const { condition, setCondition } = useState({ value: '' });


    // const handleChange = e => {
    //     setCondition({
    //         ...condition,
    //         [e.target.name]: e.target.value
    //     });
    //     setFeel({
    //         ...feel,
    //         [e.target.name]: e.target.value
    //     });
    //     setUsed({
    //         ...used,
    //         [e.target.name]: e.target.value
    //     });
    //     setIntake({
    //         ...intake,
    //         [e.target.name]: e.target.value
    //     });
    //     setTimes({
    //         ...times,
    //         [e.target.name]: e.target.value
    //     });
    // };

    const handleChange = e => {
        setCondition({
            ...condition,
            value: e.target.value
        });
    }

    return (
        <div className="user-questioner">
            <h3>Let's Learn More About You</h3>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <h4>What would you like cannabis to help you deal with?</h4>
                <select className="condition-select"
                        value={condition.value}
                        onChange={handleChange}
                >
                    <option value="Stress">Stress</option>
                    <option value="Pain">Pain</option>
                    <option value="Nausea">Nausea</option>
                    <option value="Insomnia">Insomnia</option>
                    <option value="Depression">Depression</option>
                    <option value="Loss of Appetite">Loss of Appetite</option>
                    <option value="Muscle Spasms">Muscle Spasms</option>
                    <option value="Seizures">Seizures</option>
                    <option value="Fatigue">Fatigue</option>
                    <option value="Inflammation">Inflammation</option>
                    <option value="Spasticity">Spasticity</option>
                    <option value="Eye Pressure">Eye Pressure</option>
                    <option value="Cramps">Cramps</option>
                    <option value="Headaches">Headaches</option>
                    {/* onSelect={handleChange} */}
                    {/* type="email"
                    name="email"
                    placeholder="email "
                    value={creds.email}
                    onChange={handleChange}
                    required */}
                </select>

                {/* <input
                    className="login-fields"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={creds.password}
                    onChange={handleChange}
                    required
                /> */}

                <button className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}   

export default MandatoryForm;

// import React, { useState, useEffect } from 'react';
// import axiosWithAuth from '../utils/axiosWithAuth.js';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
// import './MandatoryForm.css';

// const MandatoryForm = ({errors, touched, values, status}) => {

    // const [questioner, setQuestioner] = useState ([]);

    // console.log('This is touched', touched);
    // useEffect(() => {
    //     if (status) {
    //         setQuestioner([...questioner, status]);
    //     }
    // },[status]);

//     return (
//         <div className="user-questioner">
//             <h1>Let's Learn More About You!</h1>
//             <Form>
//                 <Field component="select" className="condition-select" name="condition">
//                     <option>You would like cannabis to help you deal with?</option>
//                     <option value="Stress">Stress</option>
//                     <option value="Pain">Pain</option>
//                     <option value="Nausea">Nausea</option>
//                     <option value="Insomnia">Insomnia</option>
//                     <option value="Depression">Depression</option>
//                     <option value="Loss of Appetite">Loss of Appetite</option>
//                     <option value="Muscle Spasms">Muscle Spasms</option>
//                     <option value="Seizures">Seizures</option>
//                     <option value="Fatigue">Fatigue</option>
//                     <option value="Inflammation">Inflammation</option>
//                     <option value="Spasticity">Spasticity</option>
//                     <option value="Eye Pressure">Eye Pressure</option>
//                     <option value="Cramps">Cramps</option>
//                     <option value="Headaches">Headaches</option>
//                 </Field>

//                 <Field component="select" className="feel-select" name="feel">
//                     <option>You would like cannabis to help you feel?</option>
//                     <option value="Happy">Happy</option>
//                     <option value="Euphoric">Euphoric</option>
//                     <option value="Relaxed">Relaxed</option>
//                     <option value="Giggly">Giggly</option>
//                     <option value="Creative">Creative</option>
//                     <option value="Uplifted">Uplifted</option>
//                     <option value="Sleepy">Sleepy</option>
//                     <option value="Energetic">Energetic</option>
//                     <option value="Aroused">Aroused</option>
//                     <option value="Focused">Focused</option>
//                     <option value="Talkative">Talkative</option>
//                     <option value="Hungry">Hungry</option>
//                     <option value="Tingly">Tingly</option>
//                 </Field>
                    
//                 <Field component="select" className="used-select" name="used">
//                     <option>Have you used cannabis before?</option>
//                     <option value="Yes">Yes</option>
//                     <option value="No">No</option>
//                 </Field>

//                 <Field component="select" className="intake-select" name="intake">
//                     <option>What is your regular cannabis intake schedule?</option>
//                     <option value="Daily">Daily</option>
//                     <option value="Weekly">Weekly</option>
//                     <option value="Monthly">Monthly</option>
//                 </Field> 

//                 <Field component="select" className="time-select" name="time">
//                     <option>What time of day is your cannabis intake?</option>
//                     <option value="Morning">Morning</option>
//                     <option value="Evening">Evening</option>
//                     <option value="Night">Night</option>
//                 </Field>

//                 <button type="submit">Submit</button>

//             </Form>
//         </div>
//     );
// }
// const FormikMandatoryForm = withFormik({
//     mapPropsToValues({ doctor, strain }) {
//         return {
//          doctor: doctor || "",
//          strain: strain || ""
//         };
//     },
//     validationSchema: Yup.object().shape({
//         doctor: Yup.string().required(),
//         strain: Yup.string().required()
//     }),
//     handleSubmit(values, {setStatus}){
//         axiosWithAuth()
//             .patch(`https://med-cabinet-temp.herokuapp.com/api/users/`, values)
//             .then(response => {
//                 // localStorage.setStatus('token', response.data.payload)
//                 console.log(response)
//                 window.location='/dashboard'
//             })
//             .catch(error => console.log(error.response))
//     }

//  })(MandatoryForm)

//  export default FormikMandatoryForm;