import mongoose from 'mongoose';

// Define the Mongoose schema with Mongoose types
const formSchema = new mongoose.Schema({
  name: {
    type: String,  // Use Mongoose String type
    required: [true, 'Name is required'],  // 'required' not 'require'
  },
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
  },
  dateOfBirth: {
    type: Date,  // Use Mongoose Date type for dates
    required: [true, 'Date of birth is required'],
  },
});

// Create the model
const Form = mongoose.model('Form', formSchema);
export default Form;