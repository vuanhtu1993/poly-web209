import { Outlet } from 'react-router-dom'

const ClientLayout = function () {
    return (
        <>
            <header className="flex">
                <img className="w-[80px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
            </header>
            <div className="content pt-4">
                <Outlet />
            </div>
        </>
    )
}

export default ClientLayout