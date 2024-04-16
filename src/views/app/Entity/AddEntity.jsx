import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import CatchyCheckbox from 'src/components/CatchyCheckbox/CatchyCheckbox';
import HeaderDescriptive from 'src/components/HeaderDescriptive';
import CreatableSelect from 'react-select/creatable';
import { GoPlus } from "react-icons/go";

import * as Yup from 'yup';
import Offcanvas from 'src/components/Offcanvas';
import { useState } from 'react';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export default function AddEntity() {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <div className='w-full flex'>
                <div className='cursor-pointer bg-blue-200 rounded p-3' onClick={() => { setIsActive(true) }}>
                    open canvas
                </div>
            </div>
            <Offcanvas isActive={isActive} setIsActive={setIsActive} title="جستجوی پیشرفته">

            </Offcanvas>
            <Formik
                initialValues={{
                    entityName: "",
                    isActive: "",
                    isDeleted: "",
                    writePriority: "",
                    version: "",
                    sourceEntityId: "",
                    pkInSource: "",
                    sourceId: "",
                    comment: "",
                    isVerified: "",
                    code: "",
                    title: "",
                    tableName: "",
                    dbSync: "",
                }}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, setFieldValue }) => (

                    <Form>
                        <div className='flex flex-col bg-white dark:bg-black rounded-2xl p-10'>
                            <HeaderDescriptive title="ساخت موجودیت جدید" description="مقادیر پایین را برای ساخت موجودیت جدید وارد کنید" />
                            <div className='flex gap-10 mt-10'>
                                <div className='flex gap-5 flex-col w-full'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="entityName">
                                            نام موجودیت
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            placeholder='نام موجودیت را وارد کنید'
                                            name="entityName"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="isActive">
                                            فعال است؟
                                        </label>
                                        <div className='flex gap-5'>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isActive" value="yes" />
                                                <span>
                                                    بله
                                                </span>
                                            </label>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isActive" value="no" />
                                                <span>
                                                    خیر
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="isDeleted">
                                            حذف شده است؟
                                        </label>
                                        <div className='flex gap-5'>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isDeleted" value="yes" />
                                                <span>
                                                    بله
                                                </span>
                                            </label>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isDeleted" value="no" />
                                                <span>
                                                    خیر
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="writePriority">
                                            اولیت نوشتن
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="number"
                                            name="writePriority"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="version">
                                            ورژن
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="number"
                                            name="version"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="sourceEntityId">
                                            source entity
                                        </label>
                                        <CreatableSelect
                                            name="sourceEntityId"
                                            value={values.sourceEntityId}
                                            className='al-dashboard'
                                            isMulti
                                            isClearable
                                            options={options}
                                            onChange={(selectedOption) => { setFieldValue("sourceEntityId", selectedOption); }}
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="pkInSource">
                                            شناسه رکورد در مرجع
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            name="pkInSource"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="entity-name">
                                            source
                                        </label>
                                        <CreatableSelect
                                            name="sourceId"
                                            value={values.sourceId}
                                            className='al-dashboard'
                                            isMulti
                                            isClearable
                                            options={options}
                                            onChange={(selectedOption) => { setFieldValue("sourceId", selectedOption); }}
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="comment">
                                            شرح
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            name="comment"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="isVerified">
                                            آیا معتبر است؟
                                        </label>
                                        <div className='flex gap-5'>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isVerified" value="yes" />
                                                <span>
                                                    بله
                                                </span>
                                            </label>
                                            <label className='flex gap-1'>
                                                <Field type="radio" name="isVerified" value="no" />
                                                <span>
                                                    خیر
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="code">
                                            code
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            name="code"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="title">
                                            title
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            name="title"
                                        />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="tableName">
                                            نام مدل
                                        </label>
                                        <Field
                                            className='p-2 py-3 rounded-xl border border-solid border-gray-300'
                                            type="text"
                                            name="tableName"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <CatchyCheckbox
                                            name="dbSync"
                                            handleCheck={() => {
                                                setFieldValue("dbSync", !values.dbSync);
                                            }}
                                            isActive={values.dbSync}
                                            label="Db sync"
                                        />
                                    </div>
                                    {/* <div className='flex flex-col gap-2'>
                                        <label htmlFor="entity-name">
                                            سامانه
                                        </label>
                                        <CreatableSelect
                                            name="selectValue"
                                            value={values.selectValue}
                                            className='al-dashboard'
                                            isMulti
                                            isClearable
                                            options={options}
                                            onChange={(selectedOption) => { setFieldValue("selectValue", selectedOption); }}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="entity-name">
                                            موجودیت متناظر مخزن
                                        </label>
                                        <Select className='al-dashboard' isMulti options={options} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="entity-name">
                                            نام مدل
                                        </label>
                                        <input className='p-2 py-3 rounded-xl border border-solid border-gray-300' type="text" placeholder="مثال: Example ، MyExample" />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="entity-name">
                                            آیا همانند مخزن است؟
                                        </label>
                                        <div className='flex gap-5'>
                                            <div className='flex gap-1 justify-center items-center'>
                                                <input type="radio" id="yes" name="fav_language" value="yes" />
                                                <label htmlFor="yes">بله</label>
                                            </div>
                                            <div className='flex gap-1 justify-center items-center'>
                                                <input type="radio" id="no" name="fav_language" value="no" />
                                                <label htmlFor="no">خیر</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label>
                                            <Field type="radio" name="picked" value="One" />
                                            One
                                        </label>
                                        <label>
                                            <Field type="radio" name="picked" value="Two" />
                                            Two
                                        </label>
                                    </div> */}
                                </div>
                                <div className='flex flex-col w-full'>

                                </div>
                            </div>
                            <div className="w-full flex justify-center mt-10">
                                <div className='flex gap-3'>
                                    <span className='cursor-pointer select-none bg-gray-100 px-20 py-3 rounded-2xl'>
                                        انصراف
                                    </span>
                                    <button type="submit" className='flex gap-1 justify-center items-center text-white bg-blue-600 px-12 py-3 rounded-2xl'>
                                        <GoPlus />
                                        <span>
                                            ساخت موجودیت جدید
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
