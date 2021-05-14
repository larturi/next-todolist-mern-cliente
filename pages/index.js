import React, { useEffect, useState, useContext } from 'react';

import Layout from '../components/layout/Layout';

import TaskState from '../context/tasks/taskState';

import ListadoTasks from '../components/tasks/ListadoTasks';

const Home = () => {
  return (
    <>
      <TaskState>
        <Layout>
          <h2 className="mt-4">Tareas Pendientes</h2>
          <ListadoTasks />
        </Layout>
      </TaskState>
    </>
  )
}

export default Home;
