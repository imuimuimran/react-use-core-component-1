export default function User({user}) {
    const {name, company, address} = user
    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <h4>Company Name: {company.name}</h4>
            <h4>City: {address.city}</h4>
        </div>
    )
}