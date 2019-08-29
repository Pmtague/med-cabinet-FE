import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import './ReviewForm.css';

const ReviewForm = ({errors, touched, values, status}) => {
    const [review, setReview] = useState ([]);
    console.log('This is touched', touched);
    useEffect(() => {
        if (status) {
            setReview([...review, status]);
        }
    },[status]);

    return (
        <div className="review-questioner">
            
            <Form>
            <h3>Tell us about your recent experience</h3>
            <div>
                <h1 className='review-questions'>1.  How well did this strain help you reach your goal?</h1>
            </div>
            <Field component="select" className="goal-select" name="goal">
                
                <option value="One">1</option>
                <option value="Two">2</option>
                <option value="Three">3</option>
                <option value="Four">4</option>
                <option value="Five">5</option>
                <option value="Six">6</option>
                <option value="Seven">7</option>
                <option value="Eight">8</option>
                <option value="Nine">9</option>
                <option value="Ten">10</option>
                </Field>
                <h1 className='review-questions'>2.  How did you like the flavor?</h1>
                <Field component="select" className="flavor-select" name="flavor">
                <option value="One">1</option>
                <option value="Two">2</option>
                <option value="Three">3</option>
                <option value="Four">4</option>
                <option value="Five">5</option>
                <option value="Six">6</option>
                <option value="Seven">7</option>
                <option value="Eight">8</option>
                <option value="Nine">9</option>
                <option value="Ten">10</option>
                </Field>
                <h1 className='review-questions'>3.  What was the consumption method you chose?</h1>
                <Field component="select" className="method-select" name="method">
                <option value="Edible">Edible</option>
                <option value="Smoke">Smoke</option>
                <option value="Vape">Vape</option>
                </Field> 

                <h1 className='review-questions'>4.  What time of day was it used?</h1>
                <Field component="select" className="time-select" name="time">
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
                </Field>

                <h1 className='review-questions'>5.  Where there any negative side effects?</h1>
                <Field component="select" className="effects-select" name="effects">
                <option value="dryMouth">Dry Mouth</option>
                <option value="dryEyes">Dry Eyes</option>
                <option value="anxious">Anxious</option>
                <option value="dizzy">Dizzy</option>
                <option value="paranoid">Paranoid</option>
                <option value="headache">Headache</option>
                </Field>

                <h1 className='review-notes'>Please provide addition 
                information about the strain that may have help us 
                provide you with better recommendations</h1>
                <Field className='notes' type="textarea" name="notes" placeholder="Additional Notes" />
                {touched.notes && errors.notes && <p className="error">{errors.notes}</p>}

                <button class= 'submit-button'type="submit">Submit</button>

            </Form>

        </div>
    );

}

const FormikReviewForm = withFormik({
    mapPropsToValues({ notes }) {
        return {
         notes: notes || ""
        };
    },

    validationSchema: Yup.object().shape({
        notes: Yup.string().required()
    }),

    handleSubmit(values, {setStatus}){
        axiosWithAuth
        .post('http://localhost:5000/api/register/', values)
        .then(response => {
            console.log(response)
            setStatus(response.data);
        })
        .catch(error => console.log(error.response))
    }

    
 })(ReviewForm)

 export default FormikReviewForm;