import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

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
            <h1>Mandatory Questioner</h1>
            <Form>
            <Field component="select" className="condition-select" name="condition">
                <option>Please Select a Condition</option>
                <option value="HIV/AIDS">HIV/AIDS</option>
                <option value="Anxiety">Anxiety</option>
                <option value="Cancer">Cancer</option>
                <option value="Crohn’s disease">Crohn’s disease</option>
                <option value="Depression">Depression</option>
                <option value="Glaucoma">Glaucoma</option>
                <option value="Insomnia">Insomnia</option>
                <option value="Lupus">Lupus</option>
                <option value="Multiple sclerosis">Multiple sclerosis</option>
                <option value="Parkinson's disease">Parkinson’s disease</option>
                <option value="PTSD">Post-traumatic stress disorder (PTSD)</option>
                <option value="Rheumatoid arthritis">Rheumatoid arthritis</option>
                <option value="Seizures">Seizures</option>
                <option value="Severe Chronic Pain">Severe Chronic Pain</option>
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

                <option>If a doctor prescribed you cannabis, please fill out below.</option>
                <Field type="text" name="doctor" placeholder="Name of Doctor" />
                {/* <option>If a doctor prescribe your cannabis, please fill out below.</option> */}
                {touched.doctor && errors.doctor && <p className="error">{errors.doctor}</p>}

                <Field type="text" name="strain" placeholder="Cannabis Strain" />
                {touched.strain && errors.strain && <p className="error">{errors.strain}</p>}

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
        doctor: Yup.string().required("Need Doctor's Name!"),
        strain: Yup.string().required("Need name of strain prescribed!")
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