import { encode } from 'base-64'

const ADDRESS_URL = 'https://api.lob.com/v1/addresses';
const USER = '';

// Redux Actions

const validateAddressAction = address => ({
    type: 'VALIDATE_ADDRESS',
    payload: address
});

// Fetch

const validateAddress = address => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + encode(USER + ":")
        },
        body: JSON.stringify(
            {
                "name": "N/A",
                "address_line1": address.street,
                "address_city": address.city,
                "address_state": address.state,
                "address_zip": address.zip,
                "address_country": "us"
            }
        )
    };
    fetch(ADDRESS_URL, config)
        .then(r => r.json())
        .then(data => {
            dispatch(validateAddressAction(
                {
                    street: data.address_line1,
                    city: data.address_city,
                    state: data.address_state,
                    zip: data.address_zip
                }
            ));
        });
};

export default { validateAddress };