import { useEffect, useState } from "react";

function Counter () {
    /**
     * useState mengembalikan sepasang value (array) : [0, function()]
     */
    const [angka, setAngka] = useState(0);

    function addAngka() {
        setAngka (angka + 1);
    }
    function updateDOM(){
        console.log("Lifecycle: Dimount");
    // Melakukan SideEffect pada DOM
        document.title =`Hasil : ${angka}`;
    }
    /**
     * useEffect dijalankan pada mount dan update
     */
    // useEffect
    useEffect(updateDOM, [angka])
    
    console.log("Lifecycle diRender");
    return (
        <div>
            <p>hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}
export default Counter;