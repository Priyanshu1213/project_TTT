import React from 'react'
import './profile.css'
export default function Profile() {
  return (
    <div className='container'>
        <div className='background_photo'>
        
        </div>

        <div className='profile'>
            <div className='profile_image'>
                <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
            </div>

            <div className='profile_details'>
                <h1>Neha Bhagat Yadav</h1>
                <div className='follow'>
                    <div className='followers'>
                        <div className='count'>123</div>
                        <h2>Followers</h2>
                    </div>
                    <div className='followers'>
                        <div className='count'>123</div>
                        <h2>Followings</h2>
                    </div>
                </div>

            </div>
            
        </div>
        
        <div className='bios'>
            <h3>Co-founder & CEO at TTT</h3>
            <h4>link</h4>
            <div className='like'>
                <h5><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAzceR_3EeTW2Fvp1DMHMe5Yv0p79EPDIyQ&usqp=CAU'/>Like</h5>
                <h5> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoa9JXbkv8AOdpRYa5qG-nHIfgQ6YLiNZusQ&usqp=CAU'/>Comment</h5>
                <h5>View</h5>
                <h5>like</h5>
            </div>
        </div>

    </div>
  )
}
