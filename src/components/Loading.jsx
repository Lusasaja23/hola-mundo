'use client'
import { useState, useEffect } from 'react';

import '../styles/loading.css'

export function LoadingPage() {
    return (
        <div className="firstContainer">
            <i className='bx bx-loader-circle bx-spin charchingBig'></i>
            <h1 className='loadingTitle'>Cargando...</h1>
        </div>
    );
}

export function LoadingInline() {
    return (
        <div className='loadingInline'>
            <span className='loadingTitle'>Cargando...</span>
            <i className='bx bx-loader-circle bx-spin charchingSmall'></i>
        </div>
    )
}