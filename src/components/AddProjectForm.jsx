// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

// const AddProjectForm = ({ isOpen, onClose, onSubmit }) => {
//   const initialValues = { name: '', startDate: '', projectLead: '' };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Project name is required'),
//     startDate: Yup.date().required('Start date is required'),
//     projectLead: Yup.string().required('Project lead is required'),
//   });

//   return (
//     <Dialog open={isOpen} onClose={onClose}>
//       <DialogTitle>Add New Project</DialogTitle>
//       <DialogContent>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={(values, { resetForm }) => {
//             onSubmit(values);
//             resetForm();
//             onClose();
//           }}
//         >
//           {({ handleSubmit }) => (
//             <Form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label>Project Name</label>
//                 <Field type="text" name="name" className="input" />
//                 <ErrorMessage name="name" component="div" className="text-red-500" />
//               </div>
//               <div>
//                 <label>Start Date</label>
//                 <Field type="date" name="startDate" className="input" />
//                 <ErrorMessage name="startDate" component="div" className="text-red-500" />
//               </div>
//               <div>
//                 <label>Project Lead</label>
//                 <Field type="text" name="projectLead" className="input" />
//                 <ErrorMessage name="projectLead" component="div" className="text-red-500" />
//               </div>
//               <DialogActions>
//                 <Button onClick={onClose} color="secondary">Cancel</Button>
//                 <Button type="submit" color="primary">Add Project</Button>
//               </DialogActions>
//             </Form>
//           )}
//         </Formik>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddProjectForm;


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import './AddProjectForm.css';

const AddProjectForm = ({ isOpen, onClose, onSubmit }) => {
  const initialValues = { name: '', startDate: '', projectLead: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Project name is required'),
    startDate: Yup.date().required('Start date is required'),
    projectLead: Yup.string().required('Project lead is required'),
  });

  return (
    <Dialog open={isOpen} onClose={onClose}       sx={{ '& .MuiDialog-paper': { width: '500px', padding: '20px', borderRadius: '10px' } }}>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent className="dialog-content">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
            onClose();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="form-container">
              <div>
                <label className="label">Project Name</label>
                <Field type="text" name="name" className="input-field" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div>
                <label className="label">Start Date</label>
                <Field type="date" name="startDate" className="input-field" />
                <ErrorMessage name="startDate" component="div" className="error-message" />
              </div>
              <div>
                <label className="label">Project Lead</label>
                <Field type="text" name="projectLead" className="input-field" />
                <ErrorMessage name="projectLead" component="div" className="error-message" />
              </div>
              <DialogActions className="dialog-actions">
                <Button onClick={onClose} className="cancel-button">Cancel</Button>
                <Button type="submit" className="submit-button">Add Project</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectForm;
