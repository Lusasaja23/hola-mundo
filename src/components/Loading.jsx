'use client'
import '../styles/loading.css'

export function LoadingPage() {
    return (
        <div className="loadingPage">
            <i className='bx bx-loader-circle bx-spin charchingBig'></i>
            <h1 className='loadingTitle'>Cargando...</h1>
        </div>
    );
}

export function LoadingInline() {
    return (
        <div className='loadingPage'>
            <span className='loadingTitle'>Cargando...</span>
            <i className='bx bx-loader-circle bx-spin charchingSmall'></i>
        </div>
    )
}