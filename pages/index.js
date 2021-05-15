import React, { useEffect, useState, useContext } from 'react';

import Layout from '../components/layout/Layout';

import TaskState from '../context/tasks/taskState';

import ListadoTasks from '../components/tasks/ListadoTasks';

const Home = () => {
  return (
    <>
      <TaskState>
        <Layout>
          <div className="mt-4 ml-4 mr-4">
            <h4>Pendientes</h4>
            <ListadoTasks 
              completed={false}
            />
          </div>
        </Layout>
      </TaskState>
    </>
  )
}

export default Home;
