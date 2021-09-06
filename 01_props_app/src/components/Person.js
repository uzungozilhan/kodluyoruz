import React from 'react'

export default function Person(anyWordElse) {
    return (
        <div>
            <p>Ben Person Componentinden geliyorum.</p>
            <p>Adım { anyWordElse.name }, Soyadım {anyWordElse.surname}, Yaşım {anyWordElse.age}. </p>
        </div>
    )
}
