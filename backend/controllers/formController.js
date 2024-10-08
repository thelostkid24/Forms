import Form from "../model/formModel.js";
import zod from 'zod';
const formValidationSchema = zod.object({
    name: zod.string().nonempty('Name is required'),
    fatherName: zod.string().nonempty('Father name is required'),
    motherName: zod.string().nonempty('Mother name is required'),
    dateOfBirth: zod.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format',
    }),
  });
  
const getAllForm=async(req,res,next)=>{
    try{
        const form=await Form.find();
        res.status(200).json({
            totalForm:{
                form
            }
        })
    }catch(error){
        console.log('error');
        res.status(500).json({
            message:'server error'
        })
    }
};
const createForm = async (req, res,next) => {
    try {
    const validatedData = formValidationSchema.parse(req.body);
  

    const newForm = new Form(validatedData);
    const savedForm = await newForm.save();

      res.status(201).json(savedForm);
    } catch (error) {
      console.error('Error saving form:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
export {getAllForm, createForm}