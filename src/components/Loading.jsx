import '../styles/loading.css'

export function LoadingPage() {
    return (
        <section className="loadingPage">
            <i class='bx bx-refresh bx-spin'></i>
            <h1>Cargando...</h1>
        </section>
    )
}

export function LoadingInline() {
    return (
        <section className="loadingInline">
            <i class='bx bx-refresh bx-spin'></i>
        </section>
    )
}