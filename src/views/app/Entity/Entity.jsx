import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import PageHeader from 'src/components/PageHeader'
import EntityTable from './EntityTable';

export default function Entity() {
    const navigate = useNavigate();

    return (
        <>
            <PageHeader title="لیست موجودیت‌ها" btnTitle="ساخت موجودیت جدید" handleClick={() => { navigate("/app/entity/add"); }} />
            <EntityTable />
        </>
    )
}
