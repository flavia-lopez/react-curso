function App() {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Bienvenidos a mi primer app de React</p>
        </div>
    )
}

/*Estamo renderizando un componente*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)