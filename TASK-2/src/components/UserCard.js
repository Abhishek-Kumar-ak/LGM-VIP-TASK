const UserCard = ({ email, first_name, last_name, avatar }) => {
    return(
        <div className="container-card cards-4 cards-s-6">
            <div className="card">
                <div className='row'>
                    <div className='cards-3 cards-s-12'>
                        <img src={avatar} alt="Avatar" style={{width: "100%"}}style={{height: "100%"}}/>
                    </div>
                    <div className='cards-9 cards-s-12'>
                        <div className="container">
                            <span><b>{first_name+' '+last_name}</b></span>
                            <p className='email'>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;