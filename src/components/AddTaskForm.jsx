// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const AddTaskForm = ({ onSubmit }) => {
//   const initialValues = { title: '' };

//   const validationSchema = Yup.object({
//     title: Yup.string().required('Task title is required'),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         onSubmit(values);
//         resetForm();
//       }}
//     >
//       <Form>
//         <div>
//           <label>Task Title</label>
//           <Field type="text" name="title" />
//           <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
//         </div>
//         <button type="submit">Add Task</button>
//       </Form>
//     </Formik>
//   );
// };

// export default AddTaskForm;


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTaskForm = ({ onSubmit }) => {
  const initialValues = { title: '' };

  const validationSchema = Yup.object({
    title: Yup.string().required('Task title is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <div style={{ flex: 1 }}>
          <Field
            type="text"
            name="title"
            placeholder="Enter task title"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          <ErrorMessage
            name="title"
            component="div"
            style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </Form>
    </Formik>
  );
};

export default AddTaskForm;