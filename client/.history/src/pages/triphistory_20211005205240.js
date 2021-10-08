import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Button from 'react';

function TripHistory() {
    const navigation = useNavigation();
    return (
        <Router>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </Router>
    )
}

export default TripHistory