import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './MandatoryForm.css';

const MandatoryForm = ({errors, touched, values, status}) => {
    const [questioner, setQuestioner] = useState ([]);
    console.log('This is touched', touched);
    useEffect(() => {
        if (status) {
            setQuestioner([...questioner, status]);
        }
    },[status]);

    return (
        <div className="user-questioner">
            <h1>Let's Learn More About You!</h1>
            <Form>
            <Field component="select" className="condition-select" name="condition">
                <option>You would like cannabis to help you deal with?</option>
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
                </Field>

                <Field component="select" className="feel-select" name="feel">
                <option>You would like cannabis to help you feel?</option>
                <option value="Happy">Happy</option>
                <option value="Euphoric">Euphoric</option>
                <option value="Relaxed">Relaxed</option>
                <option value="Giggly">Giggly</option>
                <option value="Creative">Creative</option>
                <option value="Uplifted">Uplifted</option>
                <option value="Sleepy">Sleepy</option>
                <option value="Energetic">Energetic</option>
                <option value="Aroused">Aroused</option>
                <option value="Focused">Focused</option>
                <option value="Talkative">Talkative</option>
                <option value="Hungry">Hungry</option>
                <option value="Tingly">Tingly</option>
                </Field>
                
                <Field component="select" className="used-select" name="used">
                <option>Have you used cannabis before?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </Field>

                <Field component="select" className="intake-select" name="intake">
                <option>What is your regular cannabis intake schedule?</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                </Field> 

                <Field component="select" className="time-select" name="time">
                <option>What time of day is your cannabis intake?</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
                </Field>

                <button type="submit">Submit</button>

            </Form>

        </div>
    );

}

const FormikMandatoryForm = withFormik({
    mapPropsToValues({ doctor, strain }) {
        return {
         doctor: doctor || "",
         strain: strain || ""
        };
    },

    validationSchema: Yup.object().shape({
        doctor: Yup.string().required(),
        strain: Yup.string().required()
    }),

    handleSubmit(values, {setStatus}){
        axios
        .post('http://localhost:5000/api/register/', values)
        .then(response => {
            console.log(response)
            setStatus(response.data);
        })
        .catch(error => console.log(error.response))
    }

    
 })(MandatoryForm)

 export default FormikMandatoryForm;