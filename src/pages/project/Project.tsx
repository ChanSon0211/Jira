import { useAppSelector } from 'app/hooks'
import React from 'react'

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import {  MemberType, ProjectType } from 'type/projectType';
import { Key } from 'antd/es/table/interface';






const Project = () => {

  const { projectList } = useAppSelector(state => state.project);

  console.log(projectList)

  const columns: ColumnsType<ProjectType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      filterMode: 'tree',
      width: '10%',
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      width: '30%'
    },
    {
      title: 'Category Name',
      dataIndex: 'categoryName',
      render:(ele, index) => {
        return (
          <div>
            <p className='text-rose-400'>{ele}</p>
          
          </div>
        )
      },
      width: '20%',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      render:(ele, index) => {
        return (
          <div>
            <p>{ele.name}</p>
          
          </div>
        )
      },
      width: '10%',
    },
    {
      title: 'Members',
      dataIndex: 'members',
      render: (ele, index)  => {
        return (
          ele.map((member: MemberType, i: number) => {
            return (
              <div>
                <img className='w-12 rounded-full' src={`${member.avatar}`} alt="..." />
                <div>
                  <p>
                    name
                  </p>
                  <p>id</p>
                </div>
              </div>
            )
          } )
        )
      },
      width: '20%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '20%',
    },

  ];

  const data: ProjectType[] = projectList

  const onChange: TableProps<ProjectType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div>
      <div>
        <h1>Project list</h1>
      </div>


      <Table columns={columns} dataSource={projectList} onChange={onChange} />
    </div>
  )
}

export default Project