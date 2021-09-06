import React from 'react'

const singlePost = (props) => {

    console.log(props);

    return (
        <div>
            <h3>{props.title}</h3>
            <h4>
                {props.author}
                <br />
                <small>{props.date}</small>
            </h4>
            <p>{props.description}</p>
            {
                props.user == props.author ? (
                    <>
                        <button
                            onClick={() => {
                                props.changeEdit(props.userId , props.key)
                            }}
                        >
                            edit
                        </button>
                        <button
                            onClick={() => props.deleteNotes(props.key , props.uid)}
                        >
                            delete
                        </button>
                    </>
                ) : (null)
            }
        </div>
    )
}

export default singlePost
