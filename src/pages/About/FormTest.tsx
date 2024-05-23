import React, { useRef, useState } from 'react'
import {ProTable, BetaSchemaForm} from '@ant-design/pro-components'
import type {ProColumns, ProFormColumnsType, ProFormInstance} from '@ant-design/pro-components'

interface DataModel {
  first: string;
  second: string;
  key:number;
}


const FormTest = () => {
  const [open, setOpen] = useState(false)
  const formRef = useRef<ProFormInstance>()
  const columns: ProColumns[] = [
    {dataIndex: 'first', title: 'First'},
    {dataIndex: 'second', title: 'second'},
    {
      title: 'operator',
      dataIndex: 'operator',
      render(dom, entity) {
        return <button onClick={() => {update(entity)}}>update</button>
      }
    }
  ]

  const dataSource = [
    {key: 1, first: 'First', second: 'Second'},
    {key: 2, first: 'second', second: 'Third'},
    
  ]
  const update  = (record: DataModel) => {
    formRef.current?.setFieldsValue({...record})
    setOpen(true)
  }
  const formColumns: ProFormColumnsType[] = [
    {
      title: 'First',
      dataIndex: 'first',
    },
    {
      title: 'Second',
      dataIndex: 'second',
    },
    
  ]
  const create = () => {
    setOpen(true)
    formRef.current?.resetFields();
  }
  return (
    <div>

      <ProTable<DataModel>
        columns={columns}
        dataSource={dataSource}
        toolBarRender={() =>[<button onClick={create}>create</button>]}
      />

      <BetaSchemaForm
        formRef={formRef}
        title="Create"
        layout="horizontal"
        labelCol={{span: 6}}
        wrapperCol={{span: 18}}
        layoutType="ModalForm"
        open={open}
        columns={formColumns}
        onOpenChange={setOpen}
      />
    </div>
  )
}

export default FormTest