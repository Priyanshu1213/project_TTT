import React from 'react'
import './post.css'
export default function Post() {


    const arr=[
        {title:"A Changing World Order",comment:"The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ",by:"musing by anujgosalia ",date:"August 2",time:". 2 min",read:"read",view:"102 View"},
        {title:"A Changing World Order",comment:"The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ",by:"musing by anujgosalia ",date:"August 2",time:". 2 min",read:"read",view:"102 View"},
        {title:"A Changing World Order",comment:"The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ",by:"musing by anujgosalia ",date:"August 2",time:". 2 min",read:"read",view:"102 View"}
    ]
  return (
    <>
    <div className='post'>
        <h1>134 Posts</h1>
        {arr.map((index) => {
            return(
                <>
        <div className='post_1' key={index.id}>
            <h3>{index.title}</h3>
            <h5><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAzceR_3EeTW2Fvp1DMHMe5Yv0p79EPDIyQ&usqp=CAU'/></h5>
        </div>
        <p1>{index.comment}</p1>

        <div className='post_2'>
            <p2>{index.by}</p2>
            &nbsp;
            &nbsp;
            <p>{index.date}</p>
            &nbsp;
            &nbsp;
            <p>{index.time}</p>
            &nbsp;
            <p>{index.read}</p>
            &nbsp;
            &nbsp;
            <p>{index.view}</p>
 
        </div>
        </>
            ); 
    })}       

    </div>
    </>
  )
}
