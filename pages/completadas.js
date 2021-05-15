import React from 'react';

import Layout from '../components/layout/Layout';

import TaskState from '../context/tasks/taskState';

import ListadoTasks from '../components/tasks/ListadoTasks';

const Completadas = () => {
  return (
    <>
      <TaskState>
        <Layout>
          <div className="mt-4 ml-4 mr-4">
            <h4>Completadas</h4>
            <ListadoTasks 
              completed={true}
            />
          </div>
        </Layout>
      </TaskState>
    </>
  )
}

export default Completadas;
