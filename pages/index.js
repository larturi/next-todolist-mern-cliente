import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout/Layout';
import TaskState from '../context/tasks/taskState';
import ListadoTasks from '../components/tasks/ListadoTasks';
import AddTask from '../components/tasks/AddTask';

const Home = () => {
  return (
    <>
      <TaskState>
        <Layout>
          <div className="mt-4 ml-4 mr-4">

            <div css={css`
              width: 800px;
              margin: 0 auto;

              @media (max-width: 865px) {
                width: 100%;
              }
            `}>
                <AddTask />
                <h4>Pendientes</h4>

                <ListadoTasks 
                  completed={false} 
                  padre="index"
                />
            </div>

          </div>
        </Layout>
      </TaskState>
    </>
  )
}

export default Home;
